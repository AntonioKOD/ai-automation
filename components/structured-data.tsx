import Script from 'next/script';

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BuildQuick",
    "url": "https://www.buildquick.io",
    "logo": "https://www.buildquick.io/buildquicklogo.png",
    "description": "We fuse AI automation and modern web engineering to help businesses move faster, work smarter, and scale effortlessly. From intelligent workflows to lightning-fast websites, we combine AI-driven systems with next-gen web development.",
    "foundingDate": "2025",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "Customer Service",
      "email": "hello@buildquick.io",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/buildquick"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BuildQuick",
    "url": "https://www.buildquick.io",
    "description": "Build Fast. Automate Smarter. AI automation and modern web engineering for businesses.",
    "publisher": {
      "@type": "Organization",
      "name": "BuildQuick"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.buildquick.io/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Automation & Web Development Services",
    "provider": {
      "@type": "Organization",
      "name": "BuildQuick"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "BuildQuick Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Automation Systems",
            "description": "Custom AI systems that handle repetitive tasks, streamline workflows, and connect tools including CRM, email, data collection, and analytics. Includes API integrations, Zapier/Make workflows, custom AI agents, CRM sync, and analytics bots."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Fast, scalable websites built with Next.js, Tailwind, and modern design systems. Includes custom site builds, CMS integration, API endpoints, SEO optimization, and performance tuning."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Analytics Dashboards",
            "description": "Real-time dashboards that transform data into instant insights. Includes custom dashboards, analytics integrations, Supabase/Prisma data handling, and alert systems."
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.buildquick.io"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does BuildQuick offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BuildQuick offers three main services: AI Automation Systems (custom AI agents, workflow automation, CRM integration), Web Development (Next.js websites, CMS integration, SEO optimization), and Analytics Dashboards (real-time data visualization, business intelligence)."
        }
      },
      {
        "@type": "Question",
        "name": "How does BuildQuick help businesses automate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BuildQuick builds custom AI systems that handle repetitive tasks, streamline workflows, and connect all your tools including CRM, email, data collection, and analytics. We create automations that think for your business, from auto-generated reports to customer chatbots and content scheduling."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does BuildQuick use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BuildQuick uses modern technologies including Next.js, Tailwind CSS, React, API integrations, Zapier/Make.com workflows, Supabase/Prisma for data handling, and custom AI agents. We focus on performance, scalability, and SEO optimization."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact BuildQuick?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact BuildQuick by email at hello@buildquick.io, by phone at +1 (555) 123-4567, or by filling out the contact form on our website. We typically respond within 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Does BuildQuick offer custom development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, BuildQuick specializes in custom development. We build custom websites, AI automation systems, analytics dashboards, API integrations, and workflow automations tailored to your specific business needs."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}

