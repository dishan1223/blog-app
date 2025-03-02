import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function Blogs(){
	return (
		<MaxWidthWrapper>
			<div>
				<p className="dark:text-[#AEB2BB] text-[#525152] "><Link href="/"><span className="dark:hover:text-white hover:text-slate-950">Home</span></Link> | Blogs</p>
				
			</div>
		</MaxWidthWrapper>
	)
}