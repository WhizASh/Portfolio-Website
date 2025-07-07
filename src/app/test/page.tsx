"use client"

import { useState } from "react";
import Model from "@/components/Model";
import Model1 from "@/components/AboutModel";
import PageIcons from "@/components/PageIcons";
import Waves from "@/components/Waves";

export default function App() {

  const [model,setModel] = useState(false);
  const [model1,setModel1] = useState(false);

  return (
    <>
    <div>
      <div className=" bg-black  flex justify-center w-screen h-screen items-center">
        <div className="border-4 text-white rounded-xl w-3xl h-3/5 mb-12">
          {/* <div className=" flex justify-around items-center border-b-4 h-14">
              <div className="text-md">home</div>
          </div> */}
          <div className="">
            <div className="text-center text-4xl p-10 mb-20">
                <h1>Hi , I am Yash</h1>
            </div>
            <div className="flex justify-center">
              <PageIcons title="Links" img_url={"/icon_links.jpg"} onclick={()=>setModel(true)}/>
              <PageIcons title="About" img_url={"/icon_links.jpg"} onclick={()=>setModel(true)}/>
              <PageIcons title="About" img_url={"/icon_links.jpg"} onclick={()=>setModel(true)}/>
              <PageIcons title="About" img_url={"/icon_links.jpg"} onclick={()=>setModel(true)}/>
              
            </div>
          </div>
          <div className="mt-20 flex justify-around items-center border-t-4 h-14">
            <div className="text-md">home</div>
          </div>
          <div className="text-center">
            //monitor stand here
          </div>
        </div>
      </div>
      <Model open={model} onclose={()=>setModel(false)}/>
      </div>
      <div className=" w-full h-52 bottom-0 fixed">
        <Waves />
      </div>
    </>
  );
}



{/* <button className="cursor-pointer" onClick={()=>setModel(true)}>Open Model</button>
      <br />
      <button className="cursor-pointer" onClick={()=>setModel1(true)}>Open Model1</button>
      <Model1 open={model1} onclose={()=>setModel1(false)}/>
      <Model open={model} onclose={()=>setModel(false)}/>
      <br /> */}