import Link from "next/link"
import Image from "next/image"
 import logo from "../../../public/Pink and Black Modern Initials Logo Design (1).png"

export default function Footer(){
    return(
        <div className="w-[100%] h-[200px] bg-black max-sm:h-[250px] ">
            <hr />
            <br />
            <br />

<ul className="flex justify-evenly  gap-[50px] max-sm:gap-[20px] max-sm:flex max-sm:justify-around">
   <Image src={logo} alt="" className="w-[80px] h-[80px]"></Image>
  <Link href={"/"}>  <li className="text-white text-[25px] max-sm:text-[15px] allura-regular">Home</li></Link>
    <Link href={"/contact"}><li className="text-white text-[25px] max-sm:text-[15px] allura-regular">Contact me</li></Link>
    <Link href={"/about"}><li className="text-white text-[25px] max-sm:text-[15px] allura-regular">About me</li></Link>
    <li className="">
<Link href={"https://github.com/Kinzaqirat"}>        <button className="bg-green-400 w-[80px] h-[50px] rounded-2xl mr-3 text-[20px] max-sm:w-[40px] max-sm:h-[20px] max-sm:text-[10px] allura-regular">Github</button>
</Link>
 <Link href={"https://www.linkedin.com/in/kinza-saeed-99aa6826b/"}>   <button className="bg-green-400 w-[80px] h-[50px] rounded-2xl text-[20px] max-sm:w-[40px] max-sm:h-[20px] max-sm:text-[10px] allura-regular">Linkedin</button></Link>

    <br />
    <br />
    <p className="w-[260px] h-[30px] text-[20px] rounded-2xl bg-green-400 max-sm:text-[8px] max-sm:w-[30px] max-sm:h-[20px] max-sm:inline allura-regular">Email:saeedsheik577@gmail.com</p>
 
    </li>
</ul>
        </div>
    )
}