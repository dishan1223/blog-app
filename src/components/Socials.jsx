import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import siteConfig from "@/lib/siteConfig";

export default function Socials(){
	return(
		<div className="py-4">
    		<ul className="flex gap-4">
    			<li><a href={siteConfig.github}><LuGithub size={30}/></a></li>
    			<li><a href={siteConfig.x}><FaXTwitter size={30}/></a></li>
    		</ul>
    	</div>
	)
}
