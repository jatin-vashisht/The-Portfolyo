import Image from "next/image";
import GlowCard from "../../helper/glow-card";

function Services({ services }) {
  return (
    <div
      id="services"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Services
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-2 gap-6">
          {services.slice(0,4).map((service, index) => (
            <GlowCard key={service._id} identifier={`service-${service._id}`}>
              <div className="p-3 relative text-white h-[18rem]">
                <Image
                  src="/blur-23.svg"
                  alt="Hero"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 opacity-80"
                />
                <div className="flex justify-center">
                  <p className="text-sm sm:text-sm text-[#16f2b3]">
                    {service.name} {`(${service.charge})`}
                  </p>
                </div>
                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } items-center gap-x-8 px-3 py-5`}
                >
                  <Image
                    src={service.image.url}
                    width={200}
                    height={200}
                    className="rounded-md hover:scale-105"
                    alt="Service Image"
                  />
                  <p className="text-sm sm:text-base mt-4 text-center">
                    {service.desc}
                  </p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
