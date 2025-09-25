// import Awards from "@/components/home/Awards";
import Script from "next/script";
import Clients from "@/components/home/Clients";
import Intro from "@/components/home/Intro";
import Mission from "@/components/home/Mission";
import Principles from "@/components/home/Principles";
import Testmonials from "@/components/home/Testmonials";
import Verticals from "@/components/home/Verticals";
import Foundation from "@/components/home/Foundation";
import Awards from "@/components/home/Awards";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Genrobotic Innovations Pvt Ltd",
    url: "https://genrobotics.com",
    logo: "https://genrobotics.com/path/to/logo.png",
    description:
      "Genrobotics pioneers advanced robotic solutions engineered for the most hazardous environments where human life is at stake.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Robotics and AI Research Centre, 4th floor, CDAC-Knowledge Resource Centre Building, Technopark Campus",
      addressLocality: "Kazhakkoottam, Thiruvananthapuram",
      addressRegion: "Kerala",
      postalCode: "695581",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9961616166",
        contactType: "customer service",
        email: "info@genrobotics.com",
        availableLanguage: "English",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/genrobotics",
      "https://twitter.com/genrobotics",
      "https://www.facebook.com/genrobotics",
    ],
  };
  return (
    <>
      <main>
        <div className="z-10">
          <Intro />
          <Mission />
          <Verticals />
          <Foundation />
          <Awards />
          <Principles />
          <Testmonials />
          <Clients />
        </div>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </main>
    </>
  );
}
