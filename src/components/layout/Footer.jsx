import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black px-10 py-5 text-white min-h-80 flex items-center">
      <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left md:items-start flex-wrap gap-8 container mx-auto">
        <div className="flex-1 min-w-48">
          <div className="w-80 h-full overflow-hidden">
            <Image src="/layout/gen-logo.svg" alt="Genrobotics Logo" width={0} height={0} className="w-full h-full"/>
          </div>
          <div className="mt-5 flex gap-4">
            <a href="https://x.com/GenRobotic" target="_blank" className="relative inline-flex w-10 h-10 p-3 bg-[#2b2b2b] text-white rounded-full justify-center items-center">
              <Image src='/icons/socialmedia/x.svg' alt="" height={25} width={25}/>
            </a>
            <a href="https://www.facebook.com/genrobotic" target="_blank" className="relative inline-flex w-10 h-10 p-4 bg-[#2b2b2b] text-white rounded-full justify-center items-center">
              <Image src='/icons/socialmedia/facebook.svg' alt="" height={25} width={15}/>
            </a>
            <a href="https://www.instagram.com/genroboticinnovations/" target="_blank" className="relative inline-flex w-10 h-10 p-3 bg-[#2b2b2b] text-white rounded-full justify-center items-center">
              <Image src='/icons/socialmedia/instagram.svg' alt="" height={25} width={25}/>
            </a>
            <a href="https://www.linkedin.com/company/13393278/admin/dashboard/" target="_blank" className="relative inline-flex w-10 h-10 p-3 bg-[#2b2b2b] text-white rounded-full justify-center items-center">
              <Image src='/icons/socialmedia/linkedin.svg' alt="" height={25} width={25}/>
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-around gap-8 flex-wrap pt-8">
          <ul className="list-none p-0">
            <li className="mt-3"> 
              <Link href="/about" className="text-white decoration-0">About us</Link>
            </li>
            <li className="mt-3">
              <Link href="/#solutions" className="text-white decoration-0">Solutions</Link>
            </li>
            <li className="mt-3">
              <Link href="/#services" className="text-white decoration-0">CSR</Link>
            </li>
          </ul>
          <ul>
            <li className="mt-3">
              <Link href="/privacy-policy" className="text-white decoration-0">News</Link>
            </li>
            <li className="mt-3">
              <Link href="/vendor-registration" className="text-white decoration-0">Be a vendor</Link>
            </li>
            <li className="mt-3">
              <Link href="/CSR" className="text-white decoration-0">Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
