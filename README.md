Multi-Language App

Steps I took for implementing Multi-Language App:

1. First I created next.js project
2. Then I added Typescript to the project
3. I installed and used next-intl library for internationalization

How to add new languages
1.Create a Translation File:
Add a new JSON file in the messages folder, de.json for German.
Include all the keys from the existing translation files with their respective translations.
{
"common": {
"welcome": "Willkommen auf unserer Website!",
"description": "Wir wünschen Ihnen einen wunderbaren Tag voller Inspiration und Kreativität!"
}
}
2.Update the Language Switcher:
Add the new language to the languages array in the LocalePage component:
{ code: "de", name: "German", flag: "https://flagcdn.com/w320/de.png" }

Challenges and Solutions

1. Learning Next.js
   Challenge: As a beginner with Next.js, understanding its core concepts like routing, server-side rendering (SSR), and static site generation (SSG) was initially overwhelming.
   Solution:
   Followed the official Next.js documentation to understand the basics.
   Practiced creating dynamic routes with getStaticPaths and getServerSideProps to grasp how data fetching works in Next.js.
   Explored useRouter for client-side navigation and locale management.

2. Personal Reflection
   Challenge: Initially, implementing multi-language support seemed complex, and it required a good understanding of both Next.js and next-intl.
   Solution: I carefully broke down the task into smaller steps, read the documentation, and experimented with the code until I achieved the desired functionality.
   Reflection: I am very happy that I successfully solved the task on my own. I really enjoyed working on it, and the process helped me gain a better understanding of multi-language support and how to use Next.js. This task was both rewarding and educational, and I am excited to apply these concepts in future projects! 🎉

Here are some useful links that helped me with the implementation:

1.https://nextjs.org/learn-pages-router/basics/create-nextjs-app/setup 2. https://dev.to/bobbyhalljr/how-to-add-typescript-to-a-nextjs-project-enf 3. https://nextjs.org/docs/pages/building-your-application/routing/internationalization 4. https://nextui.org/docs/components/dropdown

Steps to run the application:

1. cd multi-language-app
2. npm run dev
