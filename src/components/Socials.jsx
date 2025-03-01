import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

export default function Socials(){
	return(
		<div className="py-4">
    		<ul className="flex gap-4">
    			<li><a href='https://github.com/dishan1223'><LuGithub size={30}/></a></li>
    			<li><a href='https://x.com/ishtiaqdishan'><FaXTwitter size={30}/></a></li>
    		</ul>
    	</div>
	)
}
