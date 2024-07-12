import { z, defineCollection, reference } from "astro:content";
import { sub } from "date-fns";

// major

const servicesSchema = z.object({
   title: z.string().optional(),
   subtitle: z.string().optional(),
   heroImage: z.string().optional(),
   description: z.string().optional(),
   imageSections: z
      .array(
         z.object({
            image: z.string().optional(),
            heading: z.string().optional(),
         }),
      )
      .optional(),

   listItems: z.array(
      z
         .object({
            paragraph: z.string().optional(),
         })
         .optional(),
   ),

   link: z.string().optional(),
});

const servicesCollection = defineCollection({
   type: "content",
   schema: servicesSchema,
});

export const collections = {
   services: servicesCollection,
};
