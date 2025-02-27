import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Home() {
  return (
    <MaxWidthWrapper>
    	<TextAnimate animation="blurInUp" by="character" className="text-bold text-2xl">
    		Hello, world! This is an animated text
    	</TextAnimate>
   	</MaxWidthWrapper>
  );
}
