// import queryString from 'query-string';

// export const sendRequestServer = async <T>(props: IRequest) => {
//     let {
//         url,
//         method,
//         body,
//         queryParams = {},
//         headers = {},
//         accessToken,
//         nextOption = {},
//     } = props;

//     if (!accessToken) {
//         const session = await getServerSession();
//         accessToken = session?.user?.access_token || undefined;
//     }

//     if (queryParams) {
//         url = `${url}?${queryString.stringify(queryParams)}`;
//     }

//     const res = await fetch(url, {
//         method,
//         headers: {
//             'content-type': 'application/json',
//             ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
//             ...headers,
//         },
//         body: body ? JSON.stringify(body) : null,
//         ...nextOption,
//     });

//     return res.json() as T;
// };
