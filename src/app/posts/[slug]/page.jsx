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

import {
    SignedIn,
    SignedOut,
    SignInButton,
} from "@clerk/nextjs";
}

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
    .use(rehypeHighlight)
    .use(rehypeRaw)
    .use(remarkFrontmatter)
    .use(remarkParseFrontmatter);
    

    const filePath = path.join(process.cwd(), 'src/content', `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const htmlContent = (await processor.process(content)).toString();

    return (
        <MaxWidthWrapper>
            <SignedIn>
            <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </SignedIn>
            <SignedOut>
                <div className='w-full flex items-center justify-center'>
                    <div className='flex flex-col gap-6 items-center'>
                        <div>
                        <h1>You must be signed in to access this page</h1>
                        </div>
                        <div className='px-6 py-2 border-2 border-[#E2E8F0] dark:border-slate-600 rounded-md'>
                        <SignInButton/>
                        </div>
                    </div>
                </div>
            </SignedOut>

        </MaxWidthWrapper>
    );
}
