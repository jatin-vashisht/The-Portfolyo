import Image from "next/image";
import Link from "next/link";

function TestimonialCard({ testimonial }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={testimonial.image.url}
          height={1080}
          width={1920}
          alt="Testimonial Image"
          className="h-full w-full group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <Link
          target="_blank"
          href="#"
          className="flex justify-between items-center"
        >
          <span className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
            {testimonial.name}
          </span>
          <span className="text-[#16f2b3]">({testimonial.position})</span>
        </Link>
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
          {testimonial.review}
        </p>
      </div>
      <div className="flex justify-end mb-4 mr-4">
        <Link target="_blank" href="#">
          <button className="bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TestimonialCard;
