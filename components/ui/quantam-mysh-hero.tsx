'use client';

import React from 'react';
import { PricingWithChart } from './pricing-with-chart';
import { GlowCard } from './spotlight-card';
import { Contact2 } from './contact-2';
import Link from 'next/link';
import { Button } from './button';



const HeroSection = () => {
  return (
    <div className="bg-transparent text-white w-full min-h-screen space-y-28 relative max-w-screen overflow-x-hidden font-sans py-32">

      {/* Main Content */}
      <header className="relative flex flex-col items-center text-center px-10 z-20" itemScope itemType="https://schema.org/Organization">
        <div className="flex items-center bg-purple-900/20 border border-purple-600/50 rounded-full pl-2 pr-4 py-1 text-purple-400 text-xs mb-8 tracking-wider font-light" aria-label="Company badge">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full mr-2 text-xs font-light">2025</span>
          <span itemProp="name">BuildQuick</span>
        </div>
        <h1 className="text-7xl font-bold leading-tight font-light" itemProp="slogan">
          Build Fast.
        </h1>
        <h1 className="text-7xl font-bold leading-tight mb-6 font-light">
          Automate Smarter.
        </h1>
        <p className="text-sm max-w-lg mb-2 font-light" itemProp="description">We fuse AI automation and modern web engineering to help businesses move faster, work smarter, and scale effortlessly.</p>
        <p className="text-sm max-w-lg mb-8 font-light">Stay ahead with AI-powered technology for the future.</p>
        <nav className="flex space-x-4 mb-16 relative z-30" aria-label="Main navigation">
          <Button 
            asChild
            className="bg-white text-black px-5 py-2 cursor-pointer hover:bg-purple-200 rounded-md text-sm relative z-30 pointer-events-auto"
          >
            <Link href='#contact' onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }} aria-label="Get a BuildQuick Demo - Contact form">
              Get a BuildQuick Demo
            </Link>
          </Button>
        </nav>
      </header>
      {/* Pricing Section */}
      <section className="relative z-10" id='pricing' aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="sr-only">Pricing Information</h2>
        <PricingWithChart />
      </section>

      <section className="relative z-10" itemScope itemType="https://schema.org/Service">
        <h2 className="text-4xl text-center font-extrabold tracking-tight lg:text-5xl" itemProp="name">
          Automation That Works While You Sleep
        </h2>
        <p className="mt-4 max-w-2xl text-center text-lg mx-auto font-light" itemProp="description">
          From intelligent workflows to lightning-fast websites, our mission is to help your business operate at peak efficiency.
          We combine AI-driven systems with next-gen web development, so you can focus on what matters while your digital infrastructure does the heavy lifting.
        </p>
      </section>

      <section className="w-full min-h-screen flex items-center" id='about' aria-labelledby="services-heading" itemScope itemType="https://schema.org/ItemList">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <h2 id="services-heading" className="sr-only">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <article className="w-full md:min-h-[18rem]" itemScope itemType="https://schema.org/Service" itemProp="itemListElement">
              <GlowCard className="w-full md:min-h-[18rem]">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base sm:text-lg font-semibold" itemProp="name">Let your business run on autopilot</h3>
                  <p className="text-sm sm:text-base/6 text-white/80" itemProp="description">
                    We build custom AI systems that handle repetitive tasks, streamline your workflow, and connect all your tools — from CRM and email to data collection and analytics. Whether you need auto-generated reports, customer chatbots, or content scheduling, we design automations that actually think for your business.
                    <br /><span className="text-white/60">Includes: API integrations, Zapier/Make workflows, custom AI agents, CRM sync, analytics bots.</span>
                  </p>
                </div>
              </GlowCard>
            </article>

            <article className="w-full md:min-h-[18rem]" itemScope itemType="https://schema.org/Service" itemProp="itemListElement">
              <GlowCard className="w-full md:min-h-[18rem]">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base sm:text-lg font-semibold" itemProp="name">Fast, scalable, and built to impress.</h3>
                  <p className="text-sm sm:text-base/6 text-white/80" itemProp="description">
                    Your website should do more than look good — it should perform flawlessly and grow with your business. We use Next.js, Tailwind, and modern design systems to create responsive, SEO-optimized websites that load fast and convert visitors into clients.
                    <br /><span className="text-white/60">Includes: Custom site builds, CMS integration, API endpoints, SEO optimization, and performance tuning.</span>
                  </p>
                </div>
              </GlowCard>
            </article>

            <article className="w-full md:min-h-[18rem]" itemScope itemType="https://schema.org/Service" itemProp="itemListElement">
              <GlowCard className="w-full md:min-h-[18rem]">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base sm:text-lg font-semibold" itemProp="name">Your entire business, visualized.</h3>
                  <p className="text-sm sm:text-base/6 text-white/80" itemProp="description">
                    We transform your data into real-time dashboards that give you instant insight. From sales and traffic analytics to team performance tracking, our dashboards centralize your most important metrics — so you can make smarter decisions, faster.
                    <br /><span className="text-white/60">Includes: Custom dashboards, analytics integrations, Supabase/Prisma data handling, and alert systems.</span>
                  </p>
                </div>
              </GlowCard>
            </article>
          </div>
        </div>
      </section>

      <section className='-mt-52 relative z-[60] isolate' id='contact' aria-labelledby="contact-heading" itemScope itemType="https://schema.org/ContactPage">
        <h2 id="contact-heading" className="sr-only">Contact Us</h2>
        <div className='relative z-[60]'>
          <Contact2 
            title='We know you have things to say. Here&apos;s your chance to say them.'
            description='Have a project in mind or want to automate your business? Tell us what you&apos;re working on, we&apos;ll get back within 24 hours.'
            phone='+1 (555) 123-4567'
            email="hello@buildquick.io"
            web={{label:"buildquick.io", url: "https://www.buildquick.io"}}
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;