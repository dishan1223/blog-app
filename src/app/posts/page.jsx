import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {getPosts} from "@/lib/posts"
import Line from "@/components/Line";

export default function Blogs(){
    const posts = getPosts();

	return (
		<MaxWidthWrapper>
			<div>
				<p className="dark:text-[#AEB2BB] text-[#525152] ">
				<Link href="/"><span className="dark:hover:text-white hover:text-slate-950">Home</span>
				</Link> » Posts
				</p>
			
                <h1 className="font-bold text-3xl py-2">Posts</h1>
                <p className="italic">All the articles that I have written.</p>
                <Line />
                <div className='mt-4'>
                   {posts.map((post) => (
                        <div className="flex flex-col gap-3 border-2 border-[#E2E8F0] dark:border-slate-600 rounded-md p-2">
                            <div>
                                <Link href={`/posts/${post.title}`}>
                                    <h2 className="text-xl md:text-2xl">{post.title}</h2>
                                </Link>
                            </div>
                            <div className="flex flex-row md:flex-row gap-2">
                                {post.tags.map((tag) => (
                                    <div className="px-3 py-1 text-xs font-bold md:font-normal md:text-sm bg-slate-200 rounded-3xl dark:bg-slate-700">{tag}</div>
                                ))}
                            </div>
                            <div>
                                <p className='text-gray-600 italic mb-3 dark:text-[#AEB2BB]'>Updated: {post.date}</p>
                                <p>{post.description}</p>
                            </div>
                        </div>                       
                   ))} 
                </div>
			</div>
		</MaxWidthWrapper>
	)
}
