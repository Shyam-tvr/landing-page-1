// import Awards from "@/components/home/Awards";
import Clients from "@/components/home/Clients";
import Founders from "@/components/home/Founders";
import Intro from "@/components/home/Intro";
import Investors from "@/components/home/Investors";
import Leadership from "@/components/home/Leadership";
import Mission from "@/components/home/Mission";
import Principles from "@/components/home/Principles";
import Testmonials from "@/components/home/Testmonials";
import Verticals from "@/components/home/Verticals";
import Foundation from "@/components/home/Foundation";


export default function Home() {
  return (
    <div className="z-10">
      <Intro />
      <Mission />
      <Verticals />
      <Foundation />
      {/* <Awards /> */}
      <Principles />
      <Founders />
      {/* <Leadership />
      <Investors /> */}
      <Testmonials />
      <Clients />
    </div>
  );
}
