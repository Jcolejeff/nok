import { z, defineCollection, reference } from "astro:content";

// major

const servicesSchema = z.object({
   name: z.string().optional(),
   heroTitle: z.string().optional(),
   heroImage: z.string().optional(),
   phrase: z.string().optional(),
   description: z.string().optional(),
   howSectionTitle: z.string().optional(),
   howSectionDescription: z.string().optional(),
   howSectionTutorialTitle: z.string().optional(),
   heroTitleKeyWord: z.string().optional(),
   heroBgText: z.string().optional(),
   needsImg: z.string().optional(),
   sections: z
      .array(
         z.object({
            image: z.string().optional(),
            heading: z.string().optional(),
            paragraph: z.string().optional(),
         }),
      )
      .optional(),
   howSectionTutorialList: z
      .array(
         z.object({
            text: z.string().optional(),
            heading: z.string().optional(),
            imageOne: z.string().optional(),
            imageTwo: z.string().optional(),
            keyWord: z.string().optional(),
         }),
      )
      .optional(),
   howToSectionCards: z.array(
      z
         .object({
            image: z.string().optional(),
            heading: z.string().optional(),
            paragraph: z.string().optional(),
         })
         .optional(),
   ),

   image: z.string().optional(),
   conclusion: z.string().optional(),
   link: z.string().optional(),
   productName: z.string().optional(),
});

const servicesCollection = defineCollection({
   type: "content",
   schema: servicesSchema,
});

export const collections = {
   services: servicesCollection,
};
