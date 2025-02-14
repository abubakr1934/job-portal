import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">ProStaff</Link>
        <div className="space-x-4">
          <Link to="/login" className="px-4 py-2 text-gray-600 hover:text-blue-600">
            Log In
          </Link>
          <Link 
            to="/signup" 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  )
}