import { sendRequestClient } from '@/src/utils/lib/sendrequestclient';
import { FormEvent } from 'react';

export default function ProfileSettings() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // const formData = new FormData(event.currentTarget);
        // console.log(formData);

        const formData = new FormData(event.currentTarget);

        // Lấy ảnh ra để upload trước
        const file = formData.get('file') as File;

        if (!file) {
            console.log('No file selected');
            return;
        }

        // Upload ảnh trước
        const uploadForm = new FormData();
        uploadForm.append('file', file);

        const uploadRes = await fetch('/api/upload', {
            method: 'POST',
            body: uploadForm,
        });

        const uploadData = await uploadRes.json();

        console.log('Ảnh đã upload:', uploadData);

        // => uploadData.url: URL ảnh trên Supabase
        const imageUrl = uploadData.url;

        const formObj: Record<string, string> = {};

        // Chuyển FormData thành đối tượng JSON
        formData.forEach((value, key) => {
            formObj[key] = value as string;
        });
        console.log(formObj);

        // Tiếp tục gửi dữ liệu đăng ký
        // const res = await sendRequestClient<IBackendRes<any>>({
        //     url: "http://127.0.0.1:8080/auth/register",
        //     method: "POST",
        //     body: {
        //         username: form.get("username") as string,
        //         avatar: imageUrl, // gửi URL ảnh
        //     },
        // });

        const res = await sendRequestClient<IBackendRes<any>>({
            // url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
            url: 'http://127.0.0.1:8080/auth/register',
            method: 'POST',
            body: formObj,
        });

        console.log(res);
        // Handle response if necessary
        // if (res?.data) {
        //     router.push(`/verify/${res?.data?.id}`);
        // } else {
        //     setError('Lỗi đăng ký');
        // }
        // ...
    }
    return (
        <div className="space-y-8">
            <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Profile Details Form */}
                    <div
                        className="rounded-s-2xl p-6 shadow-lg"
                        style={{ backgroundColor: '#151f30' }}
                    >
                        <h4 className="text-xl font-semibold mb-6 text-white">
                            Profile details
                        </h4>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="file"
                                        name="file"
                                        accept="image/*"
                                        required
                                    />
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        htmlFor="username"
                                    >
                                        User Name
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-transparent"
                                        style={{ backgroundColor: '#0f172a' }}
                                        placeholder="User123"
                                        name="username"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        readOnly
                                        id="email"
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-transparent"
                                        style={{ backgroundColor: '#0f172a' }}
                                        placeholder="email@email.com"
                                        name="email"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        htmlFor="firstname"
                                    >
                                        Status
                                    </label>
                                    <input
                                        id="firstname"
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-transparent"
                                        style={{ backgroundColor: '#0f172a' }}
                                        placeholder="John"
                                        name="status"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        htmlFor="lastname"
                                    >
                                        Last name
                                    </label>
                                    <input
                                        id="lastname"
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-transparent"
                                        style={{ backgroundColor: '#0f172a' }}
                                        placeholder="Doe"
                                        name="lastname"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-start">
                                <button
                                    type="submit"
                                    className="inline-flex w-40 md:w-25 bg-[#2a73ff] hover:bg-[#1f5ae0] text-white font-semibold tracking-wide uppercase py-3 pl-4 rounded-xl transition-colors"
                                    style={{
                                        backgroundColor: '#2a73ff',
                                        borderRadius: 15,
                                    }}
                                >
                                    SAVE
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Password Form */}
                    <div
                        className="rounded-ee-2xl p-6 shadow-lg"
                        style={{ backgroundColor: '#151f30' }}
                    >
                        <h4 className="text-xl font-semibold mb-6 text-white">
                            Change password
                        </h4>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        htmlFor="oldpass"
                                    >
                                        Old password
                                    </label>
                                    <input
                                        id="oldpass"
                                        type="password"
                                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-transparent"
                                        style={{ backgroundColor: '#0f172a' }}
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        htmlFor="newpass"
                                    >
                                        New password
                                    </label>
                                    <input
                                        id="newpass"
                                        type="password"
                                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-transparent"
                                        style={{ backgroundColor: '#0f172a' }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        htmlFor="confirmpass"
                                    >
                                        Confirm new password
                                    </label>
                                    {/* <input
                                        id="confirmpass"
                                        type="password"
                                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-transparent"
                                        style={{ backgroundColor: '#0f172a' }}
                                    /> */}
                                    <input
                                        type="file"
                                        name="file"
                                        accept="image/*"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        htmlFor="select"
                                    >
                                        Select
                                    </label>
                                    <select
                                        id="select"
                                        className="w-full px-4 py-3 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-transparent"
                                        style={{ backgroundColor: '#0f172a' }}
                                    >
                                        <option value="0">Option</option>
                                        <option value="1">Option 2</option>
                                        <option value="2">Option 3</option>
                                        <option value="3">Option 4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
