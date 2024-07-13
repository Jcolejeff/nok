import React from "react";
import ContactUsForm from "./HowCanWeHelp";
import { url } from "lib/utils";
interface ContactSalesProps {
   email?: string;
   phone?: string;
}

const ContactSales: React.FC<ContactSalesProps> = ({ email, phone }) => {
   const sections = [
      {
         heading: "Email",
         paragraph: "Our amiable team is here to help you.",
         info: "hello@assistance.io",
         img: "/images/contact/sms.svg",
      },
      {
         heading: "Live Chat",
         paragraph: "Our amiable team is here to help you.",
         info: "Start new chat",
         img: "/images/contact/sms.svg",
      },
      {
         heading: "Location",
         paragraph: "Come say Hi at our headquarter.",
         info: "Landmark Leisure Beach, Oniru Estate",
         img: "/images/contact/sms.svg",
      },
      {
         heading: "Phone",
         paragraph: "Mon-Fri from 10am to 6pm.",
         info: "+234 809 891 9012",
         img: "/images/contact/sms.svg",
      },
   ];
   return (
      <section className="container relative w-full max-w-[1700px] px-container-base text-white lg:px-container-lg xl:px-container-xl">
         <div className="mb-[2rem] flex flex-col items-center gap-4 ">
            <h2 className=" text-center text-3xl  font-black md:text-[3rem]  ">
               Chat with our amiable team
            </h2>
         </div>
         <div className="mt-16 grid gap-16 md:grid-cols-[1fr_2fr]">
            <section className=" space-y-3">
               <p className="  text-base   md:text-lg  md:leading-10">
                  You can contact us by filling and submitting the form or email us directly at
               </p>
               <a
                  className="mx-auto flex max-w-xl text-center text-[1rem] leading-[2.4rem] tracking-[0.0225rem] underline md:text-xl"
                  href="mailto:contact@nokanimationstudios.com"
               >
                  contact@nokanimationstudios.com
               </a>
            </section>
            <ContactUsForm />
         </div>
      </section>
   );
};

export default ContactSales;
