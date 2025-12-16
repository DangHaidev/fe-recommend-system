import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import {
    InactiveAccountError,
    InvalidEmailPasswordError,
} from './utils/errors';
import { sendRequest } from './utils/api';
import { IUser } from './types/next-auth';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                const res = await sendRequest<IBackendRes<ILogin>>({
                    method: 'POST',
                    url: 'http://localhost:8080/auth/login',
                    body: {
                        ...credentials,
                    },
                });
                //401 sai mail/pass
                // 406 tài khoản chưa active
                if (res.statusCode === 201) {
                    console.log('>>> check user res 123: ', res);
                    return {
                        id: res.data?.user?.id,
                        email: res.data?.user?.email,
                        name: res.data?.user?.name,
                        access_token: res.data?.access_token,
                        image: res.data?.user?.image,
                    };
                    // return res.data;
                } else if (+res.statusCode === 401) {
                    throw new InvalidEmailPasswordError();
                } else if (+res.statusCode === 406) {
                    throw new InactiveAccountError();
                } else {
                    throw new Error('internal server error!!!');
                }
            },
        }),
    ],
    pages: {
        signIn: '/signin',
    },
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                // User is available during sign-in
                token.user = user as IUser;
            }
            return token;
        },
        session({ session, token }) {
            (session.user as IUser) = token.user;
            return session;
        },
        // authorized: async ({ auth }) => {
        //     // Logged in users are authenticated, otherwise redirect to login page
        //     return !!auth;
        // },
    },
});
