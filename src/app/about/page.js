import Investors from "@/components/about/Investors";
import Leadership from "@/components/about/Leadership";
import Intro from "@/components/about/Intro";
import CraftingRobotics from "@/components/about/CraftingRobotics";
import ApplyingRobotics from "@/components/about/ApplyingRobotics";
import Wings from "@/components/about/Wings";
import Journey from "@/components/about/Journey";
import Founders from "@/components/about/Founders";

export default function About() {
  return (
    <div>
      <Intro />
      <CraftingRobotics />
      <ApplyingRobotics />
      <Journey />
      <Wings />
      <Founders />
      <Leadership />
      <Investors />
    </div>
  );
}