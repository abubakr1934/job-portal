export default function ProfileSection() {
    const sections = [
      { title: 'Personal Details', fields: ['Name', 'Email', 'Mobile', 'Location'] },
      { title: 'Work Status', fields: ['Availability', 'Preferred Locations'] },
      { title: 'Skills', fields: ['Technical Skills', 'Soft Skills'] },
      { title: 'Experience', fields: ['Previous Positions', 'Achievements'] },
      { title: 'Education', fields: ['Degrees', 'Certifications'] },
    ]
  
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex items-center mb-8">
            <img 
              src="https://randomuser.me/api/portraits/men/75.jpg" 
              alt="Profile" 
              className="w-24 h-24 rounded-full mr-6"
            />
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <span className="text-blue-600">Open to work</span>
            </div>
          </div>
  
          {sections.map((section) => (
            <div key={section.title} className="mb-6 border-b pb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <button className="text-blue-600 hover:text-blue-700">
                  Add {section.title}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {section.fields.map((field) => (
                  <div key={field} className="p-3 bg-gray-50 rounded-md">
                    <label className="text-gray-600">{field}</label>
                    <input 
                      type="text" 
                      className="w-full mt-1 px-2 py-1 border rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }