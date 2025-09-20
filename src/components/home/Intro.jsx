import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  return (
    <section className="relative w-full">

      <Image
        src="/home/cover-mobile.png"
        alt="Intro background"
        width={1920}
        height={1080}
        className="w-full h-screen object-cover z-10 md:hidden"
        priority
      />
      <Image
        src="/home/cover-md.jpg"
        alt="Intro background"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover z-10 hidden md:block lg:hidden"
        priority
      />
      <Image
        src="/home/cover-lg.png"
        alt="Intro background"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover z-10 hidden lg:block"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center px-4 text-center mx-auto space-y-4 mt-24 md:mt-36 lg:mt-40 xl:mt-56 2xl:mt-64 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl lg:space-y-8">
        <h1 className="font-anton text-white ">
          An Extension of{" "}
          <span className="text-[#FCD901]">Human Potential</span>
        </h1>

        <h4 className="text-white text-sm md:text-base lg:text-lg 2xl:text-xl md:leading-relaxed text-justify">
          We are forging the future where robotics and AI become an extension of
          human potential. With relentless research in humanoid robotics,
          assistive technology, and automation, we are not just building new
          machines — we are engineering a new era where technology empowers,
          protects, and transforms lives.
        </h4>

        <Link
          href="#verticals"
          className="inline-block px-6 py-2 text-black font-medium bg-[#FCD901] rounded-lg hover:bg-yellow-400 transition-colors text-sm md:text-base lg:text-lg"
        >
          Explore Our Verticals
        </Link>
      </div>
    </section>
  );
};

export default Intro;
