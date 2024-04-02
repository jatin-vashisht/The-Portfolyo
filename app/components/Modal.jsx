import React from 'react'

const Modal = ({project, onClose}) => {
  return (
    <div className="fixed z-50 flex items-center justify-center bg-opacity-50">
      <div className="rounded-lg shadow-md px-8 py-6 max-w-3xl w-full from-[#0d1224] bg-gradient-to-r to-[#0a0d37]">
        <h2 className="text-xl font-bold mb-4">Project Details</h2>
        <div className="flex items-center justify-between mb-4">
          <span className="text-white">Name:</span>
          <span className="text-amber-500">{project.title}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-white">Tools:</span>
          <span className="text-amber-500">
            {project.techStack.map((tag, i) => (
              <span key={i} className="mr-2">
                {tag.trim()}{`${i === project.techStack.length-1 ? '' : ','}`}
              </span>
            ))}
          </span>
        </div>
        <div className="mb-4">
          <span className="text-white">Description:</span>
          <p className="text-amber-500 mt-1">{project.description}</p>
        </div>
        {/* <button
          type="button"
          className="inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md focus:outline-none"
          onClick={onClose}
        >
          Close
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> */}
      </div>
    </div>
  )
}

export default Modal