import Image from "next/image";
import Link from "next/link";

const Intro = () => {
return (
    <section className="relative w-full min-h-screen">
      <Image
        src="/home/intro-bg.png"
        alt="Intro background"
        width={1920}
        height={1080}
        className="w-full h-screen md:h-auto z-10 object-cover"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center px-4 text-center max-w-xl mx-auto space-y-4 mt-24 md:mt-36 lg:mt-40 xl:mt-56 lg:max-w-3xl lg:space-y-8">
        <h1 className="font-anton text-white text-2xl md:text-3xl lg:text-3xl">
          An Extension of{" "}
          <span className="text-[#FCD901]">Human Potential</span>
        </h1>
        <p className="text-white text-sm lg:text-base md:leading-relaxed text-justify">
          We are forging the future where robotics and AI become an extension of
          human potential. With relentless research in humanoid robotics,
          assistive technology, and automation, we are not just building new
          machines — we are engineering a new era where technology empowers,
          protects, and transforms lives.
        </p>
        <Link
          href="#verticals"
          className="inline-block px-6 py-2 text-black font-medium bg-[#FCD901] rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Explore Our Verticals
        </Link>
      </div>
    </section>
  );
};

export default Intro;
