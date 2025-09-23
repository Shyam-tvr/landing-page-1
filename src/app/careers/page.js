import CandidatePortal from "@/components/careers/CandidatePortal";
import Gallery from "@/components/careers/Gallery";
import Intro from "@/components/careers/Intro";
import JobSearch from "@/components/careers/JobSearch";
import Strength from "@/components/careers/Strength";

export default function Home() {
  return (
    <>
        <Intro />
        <Strength />
        <JobSearch />
        <CandidatePortal />
        <Gallery />
    </>
  );
}