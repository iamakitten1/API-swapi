import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-yellow-300 text-2xl font-bold">My App</h1>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
          </li>
          <li>
            <Link
              to="/list"
              className="text-white hover:text-yellow-300 transition-colors"
            >
              List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
