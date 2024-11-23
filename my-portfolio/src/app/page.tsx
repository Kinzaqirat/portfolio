import image from "../../public/image.png"
import Image from "next/image";
import html from "../../public/HTML5_logo_and_wordmark.svg.png"
import css from "../../public/css.png"
import ts from "../../public/Typescript_logo_2020.svg.png"
import node from "../../public/images (2).jpeg"
import days from "../../public/1607618116783.jpeg"
import next from "../../public/nextlogo.png"
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black max-sm:w-[100vw] rotate-scale-up" >
      <br />
      <br />
      <br />

<div className=" flex justify-center ">

<Image className="w-[300px] rounded-full pt-[20px] max-sm:w-[200px] " src={image} alt=""></Image>
</div>
<br />
<br />
<br />
<div className="flex justify-center">
  <p className="text-white text-center max-sm:text-[20px] allura-regular text-[30px] ">Hi, Everyone.
  <br />
  
   My name is Kinza Saeed. I'm student at GIAIC </p>
   <br />
 
</div>
<br />
<br />
<div className=" flex justify-center">
<Link href={"https://github.com/Kinzaqirat"}><button className="bg-green-400 rounded-2xl w-[150px] h-[50px] max-sm:w-[100px] max-sm:h-[30px] allura-regular hover:bg-green-200">Github</button></Link>
</div>
<br />
<br />

<div>
  <h1 className="text-green-400 flex justify-center text-[40px] max-sm:text-[20px] allura-regular"> My Services
  </h1>
</div>
<br />
<br />

<div className="flex justify-center gap-[40px] max-sm:gap-[20px] max-sm:grid-cols-1">
<Image className="w-[130px] h-[130px] bg-white rounded-2xl hover:p-[10px] max-sm:w-[60px]" src={html} alt=""></Image>
<Image className="w-[130px] h-[130px] bg-white rounded-2xl hover:p-[10px] max-sm:w-[60px]" src={css} alt=""></Image>
<Image className="w-[130px] h-[130px] bg-white rounded-2xl hover:p-[10px] max-sm:w-[60px]" src={ts} alt=""></Image>
<Image className="w-[130px] h-[130px] bg-white rounded-2xl hover:p-[10px] max-sm:w-[60px]" src={next} alt=""></Image>
</div>

<br />
<br />
<br />
<br />





<h1 className="text-green-400 flex justify-center text-[50px] max-sm:text-[20px] allura-regular"> Projects
</h1>
<br />
<br />
<h1 className="allura-regular text-green-400 text-center text-[40px] max-sm:text-[20px]">Node Projects</h1>
<br />
<div className="flex justify-center">
  <Image src={node} alt="" className="w-[300px] h-[200px] rounded-xl max-sm:w-[100px] max-sm:h-[150px]"></Image>
</div>

<br />
<br />

<h1 className="allura-regular text-green-400 text-center text-[40px] max-sm:text-[20px]">100 Days</h1>
<br />
<div className="flex justify-center">
  <Image src={days} alt="" className="w-[300px] h-[200px] rounded-xl max-sm:w-[100px] max-sm:h-[150px]"></Image>
</div>

<br />
<br />
<Link href={"https://github.com/Kinzaqirat"}><div className="flex justify-center">
  <button className="bg-green-400 allura-regular text-[20px] w-[100px] h-[50px] rounded-xl hover:bg-green-200  max-sm:w-[100px] max-sm:h-[30px]">Get Code</button>
</div></Link>
<br />
<br />
<br />




    </div>
  );
}
