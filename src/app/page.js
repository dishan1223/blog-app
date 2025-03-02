import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Socials from "@/components/Socials"
import Line from "@/components/Line"

export default function Home() {
  return (
    <MaxWidthWrapper>
    	<div className="mt-10">
    		<h1 className="font-bold text-4xl mb-10">BlackBox</h1>
    		<p className="mb-4 dark:text-white font-normal">
    			<strong>Blackbox </strong>
    			is a web development course designed to teach essential skills, including <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Git</strong>, <strong>React</strong>, and <strong>Next.js</strong> with <strong>Tailwind CSS</strong>. The course provides a structured learning experience, and regular class notes will be available for students to follow along easily.
    		</p>

    		<p className="mt-10">Social Links:</p>
    		<Socials/>
    		<Line/>


        <div className="mt-5 flex justify-center items-center text-xl">
          <h1>Page is under construction</h1>
        </div>
        <p className="mt-5 text-center">Contributions are welcome! Feel free to visit my GitHub profile to connect and collaborate.</p>
    	

      </div>
   	</MaxWidthWrapper>
  );
}

