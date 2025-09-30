export default function ProfileSettings() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Details Form */}
        <div className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: '#151f30' }}>
          <h4 className="text-xl font-semibold mb-6 text-white">Profile details</h4>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="username">
                  Login
                </label>
                <input
                  id="username"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-transparent"
                  style={{ backgroundColor: '#0f172a' }}
                  placeholder="User123"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-transparent"
                  style={{ backgroundColor: '#0f172a' }}
                  placeholder="email@email.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="firstname">
                  First name
                </label>
                <input
                  id="firstname"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-transparent"
                  style={{ backgroundColor: '#0f172a' }}
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="lastname">
                  Last name
                </label>
                <input
                  id="lastname"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-transparent"
                  style={{ backgroundColor: '#0f172a' }}
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="flex justify-start">
              <button
                type="button"
                className="inline-flex w-40 md:w-25 bg-[#2a73ff] hover:bg-[#1f5ae0] text-white font-semibold tracking-wide uppercase py-3 pl-4 rounded-xl transition-colors"
                style={{ backgroundColor: '#2a73ff', borderRadius: 15 }}
              >
                SAVE
              </button>
            </div>
          </form>
        </div>

        {/* Password Form */}
        <div className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: '#151f30' }}>
          <h4 className="text-xl font-semibold mb-6 text-white">Change password</h4>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="oldpass">
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
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="newpass">
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
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="confirmpass">
                  Confirm new password
                </label>
                <input
                  id="confirmpass"
                  type="password"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-transparent"
                  style={{ backgroundColor: '#0f172a' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="select">
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
            <div className="flex justify-start">
              <button
                type="button"
                className="inline-flex w-20 md:w-30 bg-[#2a73ff] hover:bg-[#1f5ae0] text-white font-semibold tracking-wide uppercase py-3 pl-4  rounded-xl transition-colors"
                style={{ backgroundColor: '#2a73ff', borderRadius: 15}}
              >
                CHANGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
