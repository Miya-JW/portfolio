const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Resume</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-xl font-semibold text-gray-800">Professional Experience</h2>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <div className="space-y-8">
                {/* Add your experience items here */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Your Position</h3>
                  <p className="mt-1 text-sm text-gray-600">Company Name • 2020 - Present</p>
                  <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                    <li>Key achievement or responsibility</li>
                    <li>Another key achievement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 