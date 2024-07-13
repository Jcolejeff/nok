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
               title: "About The Studio",
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
               url: "/3d-animation",
               soon: false,
            },
            {
               title: "Product Visualization",
               url: "/product-visualization",
               soon: true,
            },
            {
               title: "VFX",
               url: "/vfx",
               soon: true,
            },
            {
               title: "Game Development",
               url: "/game-development",
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

            {
               title: "contact@nokanimationstudios.com",
               url: "mailto:contact@nokanimationstudios.com",
            },
         ],
      },
      render: null,
   },
];
