import React from 'react';
const teamMembers = [
    {
        name: 'Max',
        position: 'CEO',
        image: 'https://placekitten.com/200/200', // Thay thế bằng hình ảnh của bạn
    },
    {
        name: 'Armando',
        position: 'COO',
        image: 'https://placekitten.com/200/200', // Thay thế bằng hình ảnh của bạn
    },
    {
        name: 'Carlo',
        position: 'CTO',
        image: 'https://placekitten.com/200/200', // Thay thế bằng hình ảnh của bạn
    },
    {
        name: 'Jesus',
        position: 'Lead Designer',
        image: 'https://placekitten.com/200/200', // Thay thế bằng hình ảnh của bạn
    },
    {
        name: 'Valerio',
        position: 'Software Engineer',
        image: 'https://placekitten.com/200/200', // Thay thế bằng hình ảnh của bạn
    },
];

const AboutUs = () => {
    return (
        <>
            <div className="bg-[#131720] min-h-screen flex items-center justify-center py-10">
                <div className="bg-[#131720] text-white rounded-lg shadow-lg w-full max-w-3xl p-8">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                        About Us
                    </h1>
                    <p className="text-lg  text-center mb-8">
                        AdEspresso makes Facebook Advertising easy and
                        profitable for small and medium businesses. Whether you
                        want to sell more products, grow your fan base, or
                        increase engagement with your community, AdEspresso will
                        help you create and optimize an advertising campaign
                        that truly works!
                    </p>
                    <div className="text-center mb-8">
                        <h2 className="text-xl font-semibold text-[#007bff]">
                            The Team
                        </h2>
                    </div>
                    <div className="flex justify-between space-x-4">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center w-1/5"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full object-cover mb-2"
                                />
                                <h3 className="text-sm font-semibold text-gray-800">
                                    {member.name}
                                </h3>
                                <p className="text-xs text-gray-500">
                                    {member.position}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
