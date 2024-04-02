import Image from "next/image";
import { useState } from "react";
import Modal from "../../Modal";

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  return (
    <>
      <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full" onMouseOver={handleOpenModal}>
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>
        <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
          <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
          </div>
          <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
            {project.title}
          </p>
        </div>
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 flex flex-col items-center justify-center">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <Image
              alt="Project Image"
              src={project.image.url}
              width={400}
              height={500}
              className="mx-auto mb-4 rounded-lg"
            />
          </code>
          {open && <Modal project={project} onClose={handleCloseModal} />}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
