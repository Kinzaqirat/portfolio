import Link from "next/link"
import Image from "next/image"
import logo from "../../../public/Pink and Black Modern Initials Logo Design (1).png"

export default function Header(){
    return(
        <div className="bg-black h-[100px] max-sm:w-[100vw] ">
<ul className="flex justify-evenly pt-4 ">
<Image src={logo} alt="" className=" w-[80px] h-[70px] "></Image>
   <Link href={"/"}> <li className="text-white text-[25px] max-sm:text-[15px] allura-regular">Home</li></Link>
  <Link href={"/contact"}>  <li className="text-white text-[25px]  max-sm:text-[15px] allura-regular">Contact me</li></Link>
  <Link href={"/about"}>  <li className="text-white text-[25px]  max-sm:text-[15px] allura-regular">About me</li></Link>
</ul>
<hr />
        </div>
    )
}