import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          FlixTV
        </Link>
        <div className="space-x-4">
          <Link 
            href="/" 
            className="hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/profile" 
            className="hover:text-blue-400 transition-colors"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
