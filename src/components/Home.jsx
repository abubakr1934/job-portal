import  React from "react"
import { ArrowRight, Bell, FileText, Search } from "lucide-react"

const App = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-24">

      <section className="text-center">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
          Transforming Job Search Experience
        </h1>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Explore an extensive database of jobs</h2>
            <p className="text-xl text-gray-600">From top companies worldwide</p>
            <button className="group bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
              alt="Job search"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>


      <section className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Personalized Job Alerts", icon: Bell, color: "bg-blue-100 text-blue-600" },
          { title: "Seamless Application Process", icon: FileText, color: "bg-green-100 text-green-600" },
          { title: "Resume Building Tools", icon: Search, color: "bg-purple-100 text-purple-600" },
        ].map((feature) => (
          <div
            key={feature.title}
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
              <feature.icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600">
              Enhance your job search with our cutting-edge tools designed to streamline your career journey.
            </p>
          </div>
        ))}
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Download Our App</h2>
        <p className="text-xl mb-8">Available on both iOS and Android platforms</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            App Store
          </button>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Play Store
          </button>
        </div>
      </section>
    </main>
  )
}

export default App

