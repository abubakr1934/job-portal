import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()
    navigate('/profile')
  }

  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Your Account</h1>
      <form className="space-y-6" onSubmit={handleSignup}>
        <div>
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email Address</label>
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
            minLength="8"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Confirm Password</label>
          <input 
            type="password" 
            required
            minLength="8"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Create Account
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account? {' '}
        <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
      </p>
      <div className="mt-6 text-center text-sm text-gray-600">
        By signing up, you agree to our {' '}
        <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and {' '}
        <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
      </div>
    </div>
  )
}