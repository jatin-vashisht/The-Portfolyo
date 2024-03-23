'use client'

import AboutSection from "./components/homepage/about";
import Testimonials from "./components/homepage/testimonials";
import ContactSection from "./components/homepage/contact";
import Services from "./components/homepage/services";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import { getData } from "@/utils/userData";

export default async function Home() {
  const {user} = await getData();
  
  return (
    <>
      <HeroSection about={user.about} skills={user.skills} />
      <AboutSection about={user.about} />
      <Experience timeline={user.timeline} />
      <Skills skills={user.skills} />
      <Projects projects={user.projects} />
      <Services services={user.services} />
      <Testimonials testimonials={user.testimonials} />
      <ContactSection about={user.about} email={user.email} />
    </>
  )
};