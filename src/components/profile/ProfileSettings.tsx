/* eslint-disable react/jsx-no-undef */
import { sendRequestClient } from '@/src/utils/lib/sendrequestclient';
import { Button, Form, Input, Select } from 'antd';
import { FormEvent, useState } from 'react';

export default function ProfileSettings({ userId }: any) {
    console.log('userId in profile settings', userId);

    async function onSubmit(values: any) {
        console.log('Form values:', values);

        let imageUrl = '';

        // 1. Upload file trước
        if (file) {
            const uploadForm = new FormData();
            uploadForm.append('file', file);

            const uploadRes = await fetch('/api/upload', {
                method: 'POST',
                body: uploadForm,
            });

            const uploadData = await uploadRes.json();
            imageUrl = uploadData.url;
        }

        // 2. Gửi lên backend
        const res = await sendRequestClient<IBackendRes<any>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}`,
            method: 'PUT',
            body: {
                ...values, // giá trị antd form
                image: imageUrl,
            },
        });

        console.log('Backend response:', res);

        // Tiếp tục gửi dữ liệu đăng ký
        // const res = await sendRequestClient<IBackendRes<any>>({
        //     url: "http://127.0.0.1:8080/auth/register",
        //     method: "POST",
        //     body: {
        //         username: form.get("username") as string,
        //         avatar: imageUrl, // gửi URL ảnh
        //     },
        // });

        // const res = await sendRequestClient<IBackendRes<any>>({
        //     // url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
        //     url: 'http://127.0.0.1:8080/auth/register',
        //     method: 'POST',
        //     body: formObj,
        // });

        // console.log(res);
        // Handle response if necessary
        // if (res?.data) {
        //     router.push(`/verify/${res?.data?.id}`);
        // } else {
        //     setError('Lỗi đăng ký');
        // }
        // ...
    }

    const [preview, setPreview] = useState(null);
    const [file, setFile] = useState<File | null>(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };

    return (
        <div className="space-y-8">
            <Form onFinish={onSubmit} layout="vertical" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* ----------------- Profile Details ----------------- */}
                    <div
                        className="rounded-s-2xl p-6 shadow-lg"
                        style={{ backgroundColor: '#151f30' }}
                    >
                        <h4 className="text-xl font-semibold mb-6 text-white">
                            Profile Details
                        </h4>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Username */}
                                <Form.Item
                                    label={
                                        <span className="block text-sm font-medium text-gray-300 mb-2">
                                            User Name
                                        </span>
                                    }
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please enter your username',
                                        },
                                    ]}
                                >
                                    <Input
                                        size="large"
                                        placeholder="User123"
                                        className="w-full px-4 py-3 rounded-xl bg-[#0f172a] text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </Form.Item>

                                {/* Email (readonly) */}
                                {/* Email (readonly) */}
                                <Form.Item
                                    label={
                                        <span className="block text-sm font-medium text-gray-300 mb-2">
                                            Email
                                        </span>
                                    }
                                    name="email"
                                >
                                    <Input
                                        readOnly
                                        type="email"
                                        placeholder="email@email.com"
                                        className="w-full px-4 py-3 rounded-xl bg-[#0f172a] text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </Form.Item>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Status */}
                                <Form.Item
                                    label={
                                        <span className="block text-sm font-medium text-gray-300 mb-2">
                                            Status
                                        </span>
                                    }
                                    name="status"
                                >
                                    <Input
                                        placeholder="Active"
                                        className="w-full px-4 py-3 rounded-xl bg-[#0f172a] text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </Form.Item>

                                {/* Last Name */}
                                <Form.Item
                                    label={
                                        <span className="block text-sm font-medium text-gray-300 mb-2">
                                            Last Name
                                        </span>
                                    }
                                    name="lastname"
                                >
                                    <Input
                                        placeholder="Doe"
                                        className="w-full px-4 py-3 rounded-xl bg-[#0f172a] text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </Form.Item>
                            </div>

                            {/* Save Button */}
                            <div className="flex justify-start">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="w-40 bg-[#2a73ff] hover:bg-[#1f5ae0] font-semibold tracking-wide uppercase py-3 rounded-xl transition-colors"
                                >
                                    SAVE
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* ----------------- Password & Upload ----------------- */}
                    <div
                        className="rounded-2xl p-6 shadow-lg"
                        style={{ backgroundColor: '#151f30' }}
                    >
                        <h4 className="text-xl font-semibold mb-6 text-white">
                            Change Password & Upload
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left Column: Password + Genre */}
                            <div className="space-y-4">
                                {/* Old Password */}
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        htmlFor="oldpass"
                                    >
                                        New Password
                                    </label>
                                    <input
                                        id="newpass"
                                        type="password"
                                        className="w-full px-4 py-3 rounded-xl bg-[#0f172a] text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                {/* Genre (Multiple Select) */}
                                <Form.Item
                                    label={
                                        <span className="font-semibold text-sm text-gray-300">
                                            Genre
                                        </span>
                                    }
                                    name="genre"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please select at least one genre',
                                        },
                                    ]}
                                >
                                    <Select
                                        mode="multiple"
                                        placeholder="Select genres"
                                        size="large"
                                        className="rounded-xl"
                                    >
                                        <Select.Option value="Action">
                                            Action
                                        </Select.Option>
                                        <Select.Option value="Drama">
                                            Drama
                                        </Select.Option>
                                        <Select.Option value="Comedy">
                                            Comedy
                                        </Select.Option>
                                        <Select.Option value="Horror">
                                            Horror
                                        </Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>

                            {/* Right Column: Upload + Preview */}
                            <div className="space-y-4">
                                {/* File Upload */}
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                        htmlFor="fileUpload"
                                    >
                                        Upload File
                                    </label>
                                    <input
                                        type="file"
                                        id="fileUpload"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="w-full px-4 py-3 rounded-xl bg-[#0f172a] text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                {/* Preview */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Preview
                                    </label>
                                    <div className="w-full h-64 bg-gray-800 rounded-xl flex justify-center items-center overflow-hidden">
                                        {preview ? (
                                            <img
                                                src={preview}
                                                alt="Preview"
                                                className="w-full h-full object-cover rounded-xl"
                                            />
                                        ) : (
                                            <span className="text-gray-400">
                                                No image selected
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
}
