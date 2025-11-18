import Copyright from "@/components/footers/Copyright";
import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import AboutContent from "@/components/common/AboutContent";
import Services from "@/components/common/Services";
import Facts from "@/components/common/Facts";
import Services4 from "@/components/common/Services4";
import Contact from "@/components/common/Contact";
import Hero from "@/components/homes/home-2/Hero";
import Portofolio from "@/components/common/Portfolio";
import Testimonials from "@/components/common/Testimonials";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import MobileMenuOnepage from "@/components/headers/MobileMenuOnepage";

export const metadata = {
  title:
    "OMGraphics - Grafický Design & Branding | Ondřej Macoun",
  description:
    "Portfolio grafického designéra Ondřeje Macouna. Specializuji se na branding, webdesign a tvorbu vizuálních identit pro české i zahraniční klienty.",
};
export default function Home() {
  return (
    <>
      <Header1 />
      <MobileMenuOnepage />
      <Hero />
      <AboutContent />
      <Services />
      <Facts />
      <Services4 />
      <Portofolio />
      <Testimonials />
      <Contact />
      <Footer3 />
      <Copyright /> <CommonComponents />
    </>
  );
}
