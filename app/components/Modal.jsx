import React from 'react'

const Modal = ({project}) => {
  return (
    <div className="fixed z-50 flex items-center justify-center bg-opacity-50">
      <div className="rounded-lg shadow-md px-8 py-6 max-w-3xl w-full from-[#0d1224] bg-gradient-to-r to-[#0a0d37]">
        <h2 className="text-base font-semibold mb-4">Project Details</h2>
        <div className="flex items-center justify-between mb-2 lg:mb-4">
          <span className="text-white">Name:</span>
          <span className="text-amber-500">{project.title}</span>
        </div>
        <div className="flex items-center justify-between mb-2 lg:mb-4">
          <span className="text-white">Tools:</span>
          <span className="text-amber-500">
            {project.techStack.map((tag, i) => (
              <span key={i} className={`${i === project.techStack.length-1 ? '' : 'mr-2'}`}>
                {tag.trim()}{`${i === project.techStack.length-1 ? '' : ','}`}
              </span>
            ))}
          </span>
        </div>
        <div className="mb-2 lg:mb-4">
          <span className="text-white">Description:</span>
          <p className="text-amber-500 mt-1">{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal