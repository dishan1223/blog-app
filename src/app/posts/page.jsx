import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {getPosts} from "@/lib/posts"

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

                <div>
                   {posts.map((post) => (
                        <div>
                            <Link href={`/posts/${post.title}`}>
                                <h2>{post.title}</h2>
                            </Link>
                            <p>Updated on {post.date}</p>
                            <p>{post.description}</p>
                        </div>                       
                   ))} 
                </div>
			</div>
		</MaxWidthWrapper>
	)
}
