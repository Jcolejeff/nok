export const FooterLinksData = [
   {
      id: "about.md",
      slug: "about",
      body: "",
      collection: "footerLinks",
      data: {
         category: "Company",
         links: [
            {
               title: "About Us",
               url: "/about-us",
            },
         ],
      },
      render: null,
   },

   {
      id: "socials.md",
      slug: "solutions",
      body: "",
      collection: "footerLinks",
      data: {
         category: "Services",
         links: [
            {
               title: "3D Animation",
               url: "#",
               soon: false,
            },
            {
               title: "Product Visualization",
               url: "#",
               soon: true,
            },
            {
               title: "VFX",
               url: "#",
               soon: true,
            },
         ],
      },
      render: null,
   },
   {
      id: "support.md",
      slug: "support",
      body: "",
      collection: "footerLinks",
      data: {
         category: "support",
         links: [
            {
               title: "Contact us",
               url: "/contact-us",
            },

            // {
            //    title: "FAQs",
            //    url: "#faq",
            // },
            {
               title: "support@nokstudio.com",
               url: "mailto:support@nokstudios.com",
            },
         ],
      },
      render: null,
   },
];
