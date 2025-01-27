// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { notFound } from "next/navigation";
// import rehypeDocument from "rehype-document";
// import rehypeFormat from "rehype-format";
// import rehypeStringify from "rehype-stringify";
// import remarkParse from "remark-parse";
// import remarkRehype from "remark-rehype";
// import { unified } from "unified";
// import rehypePrettyCode from "rehype-pretty-code";
// import { transformerCopyButton } from "@rehype-pretty/transformers";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import rehypeSlug from "rehype-slug";
// import Navbar from '../components/Header'
// import Contact from '../components/Contact'
// import Copyright from '../components/Copyright'

// export default async function Page({ params }) {
//   // Directly access params.slug
//   const slug = params.slug;

//   // Construct the file path
//   const filepath = path.join(process.cwd(), "content", `${slug}.md`);

//   // Check if the file exists
//   if (!fs.existsSync(filepath)) {
//     notFound();
//     return;
//   }

//   // Read and process the markdown file
//   const fileContent = fs.readFileSync(filepath, "utf-8");
//   const { content, data } = matter(fileContent);

//   const processor = unified()
//     .use(remarkParse)
//     .use(remarkRehype)
//     .use(rehypeDocument, { title: data.title || "Blog Post" })
//     .use(rehypeFormat)
//     .use(rehypeStringify)
//     .use(rehypeSlug)
//     .use(rehypeAutolinkHeadings)
//     .use(rehypePrettyCode, {
//       theme: "github-dark",
//       transformers: [
//         transformerCopyButton({
//           visibility: "always",
//           feedbackDuration: 3000,
//         }),
//       ],
//     });

//   const htmlContent = (await processor.process(content)).toString();

//   return (
//     <>
//       <Navbar />
//       <div className="py-4 lg:py-8 px-4 lg:px-12">
//         {/* Display the image at the start of the blog */}
//         {data.image && (
//           <div className="mb-8">
//             <img
//               src={data.image}
//               alt={data.title}
//               className="w-full h-96 rounded-lg shadow-lg"
//             />
//           </div>
//         )}
//         <h1 className="text-4xl font-bold mb-4 mt-12">{data.title}</h1>
//         <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
//           &quot;{data.description}&quot;
//         </p>
//         <div className="flex gap-2">
//           <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
//           <p className="text-sm text-gray-500 mb-4">{data.date}</p>
//         </div>
//         {/* Render the processed HTML content here */}
//         <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//       </div>
//       <Contact />
//       <Copyright />
//     </>
//   );
// }
