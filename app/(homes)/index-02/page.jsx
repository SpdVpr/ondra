import Skills from "@/components/common/Skills";
import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import About from "@/components/common/About";
import Blogs from "@/components/common/Blogs2";
import Contact from "@/components/common/Contact";
import Experience from "@/components/homes/home-2/Experience";
import Experiences2 from "@/components/common/Experiences2";
import Hero from "@/components/homes/home-2/Hero";
import Portofolio from "@/components/common/Portfolio";
import Skills2 from "@/components/common/Skills3";
import Testimonials from "@/components/common/Testimonials";
import TextAnim from "@/components/common/TextAnim";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title:
    "OMGraphics - Grafický Design & Branding | Ondřej Macoun",
  description:
    "Portfolio grafického designéra Ondřeje Macouna. Specializuji se na branding, webdesign a tvorbu vizuálních identit.",
};
export default function page() {
  return (
    <>
      <Header1 />
      <Hero />
      <TextAnim />
      <About />
      <Experience />
      <Skills />
      <Portofolio />
      <Experiences2 />
      <Testimonials />
      <Skills2 />
      <Contact />
      <Blogs />
      <Footer2 />
      <Copyright /> <CommonComponents />
    </>
  );
}
