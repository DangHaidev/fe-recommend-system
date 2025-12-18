'use client';

import { getSession } from 'next-auth/react';
import queryString from 'query-string';

export const sendRequestClient = async <T>(props: IRequest) => {
    let {
        url,
        method,
        body,
        queryParams = {},
        useCredentials = false,
        headers = {},
        accessToken,
        nextOption = {},
    } = props;

    // 🔥 Được phép gọi vì file này là client component
    if (!accessToken) {
        const session = await getSession();
        accessToken = session?.user?.access_token || undefined;
    }

    if (queryParams) {
        url = `${url}?${queryString.stringify(queryParams)}`;
    }

    const res = await fetch(url, {
        method,
        headers: {
            'content-type': 'application/json',
            ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
            ...headers,
        },
        body: body ? JSON.stringify(body) : null,
        ...(useCredentials ? { credentials: 'include' } : {}),
        ...nextOption,
    });

    return res.json() as T;
};
