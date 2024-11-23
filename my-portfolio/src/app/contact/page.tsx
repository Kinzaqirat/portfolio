import phone from "../../../public/phone-612061_1280.jpg"
import Image from "next/image" 

export default function Contact (){
    return(
        <div className="bg-black h-[500px] w-[100%] rotate-scale-up max-sm:w-[375px]">
<div className="flex justify-center">


<div className=" bg-green-300 w-[600px] h-[350px] mt-[50px] rounded-2xl max-sm:w-[300px] " >
<h1 className="text-[35px] text-center allura-regular">Contact me</h1>

<div className="grid-cols-1 pl-[150px] max-sm:pl-[50px]  ">
<input className="mt-[60px] w-[200px] ml-[10px] rounded-2xl text-center allura-regular" type="text" name="name" id="name" placeholder="Name" />
<br />
<br />
<input className=" w-[200px] ml-[10px] rounded-2xl text-center allura-regular" type="text" name="name" id="name" placeholder="E-mail" />
<br />
<br />
<textarea className=" w-[200px] ml-[10px] rounded-2xl text-center allura-regular" rows={3} name="name" id="name" placeholder="Message" />


</div>

<br />


</div>

</div>


<br />
<div className="flex justify-center ">
<button className="bg-green-300 w-[200px] h-[40px] rounded-2xl allura-regular text-[20px]">Submit</button>
</div>
        </div>
    )
}