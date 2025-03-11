import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkFrontmatter from "remark-frontmatter"
import remarkParseFrontmatter from "remark-parse-frontmatter"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import rehypeHighlight from "rehype-highlight"
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

// https://ondrejsevcik.com/blog/building-perfect-markdown-processor-for-my-blog

// components
import MaxWidthWrapper from '@/components/MaxWidthWrapper';


export default async function Page({ params }) {
    const { slug } = await params;

    const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, {
        allowDangerousHtml: true,
    })
    .use(rehypeStringify)

    const filePath = path.join(process.cwd(), 'src/content', `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const htmlContent = (await processor.process(content)).toString();

    return (
        <MaxWidthWrapper>
            <h1>{slug}</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </MaxWidthWrapper>
    );
}
