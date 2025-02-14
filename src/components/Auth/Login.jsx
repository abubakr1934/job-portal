import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    navigate('/profile')
  }

  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome Back</h1>
      <form className="space-y-6" onSubmit={handleLogin}>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input 
            type="email" 
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <input 
            type="password" 
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Log In
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account? {' '}
        <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
      </p>
    </div>
  )
}