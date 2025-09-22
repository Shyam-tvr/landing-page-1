import Investors from "@/components/about/Investors";
import Leadership from "@/components/about/Leadership";
import Intro from "@/components/about/Intro";
import CraftingRobotics from "@/components/about/CraftingRobotics";
import ApplyingRobotics from "@/components/about/ApplyingRobotics";
import Wings from "@/components/about/Wings";

export default function Home() {
  return (
    <div>
      <Intro />
      <CraftingRobotics />
      <ApplyingRobotics />
      <Wings />
      <Leadership />
      <Investors />
    </div>
  );
}