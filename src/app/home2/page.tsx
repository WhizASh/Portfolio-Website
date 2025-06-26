"use client"

import { useState } from "react";
import Model from "@/components/Model";
import Model1 from "@/components/Model1";
import PageIcons from "@/components/PageIcons";
import Waves from "@/components/Waves";

export default function App() {

  const [model,setModel] = useState(false);
  const [model1,setModel1] = useState(false);

    //Add icons 
    //add the models details
    //Make it height reponsive 

    //later
    //made it mobile friendly
    //add more details in the dashboard

  return (
    <>
    <div>
      <div className=" bg-black  flex justify-center w-screen h-screen items-center flex-col">
        <div className="text-center text-white text-4xl p-10 mb-8">
                <h1>Hi , I am Yash</h1>
        </div>
        <div className="flex flex-col justify-around border-4 text-white rounded-xl w-3xl h-3/5 mb-12">
          <div className="">
            <div className="flex mt-56 justify-center">
              <PageIcons title="Links" img_url={"/icon_links.jpg"} onclick={()=>setModel(true)}/>
              <PageIcons title="About" img_url={"/icon_links.jpg"} onclick={()=>setModel(true)}/>
              <PageIcons title="Projects" img_url={"/icon_links.jpg"} onclick={()=>setModel(true)}/>
              <PageIcons title="FAQ" img_url={"/icon_links.jpg"} onclick={()=>setModel1(true)}/>
            </div>
          </div>
          <div className="mt-auto flex justify-left items-center border-t-4 h-14">
            <div className="flex ml-8">
                <div className="pl-2">🔴</div>
                <div className="pl-2">◼️</div>
            </div>
            <div className="flex justify-center w-full">
                <div className="mr-20 text-md font-extralight">
                    Legion
                </div>
            </div>  
          </div>
        </div>
          <div className="text-center">
                <div className=""></div>
          </div>
      </div>
      <Model open={model} onclose={()=>setModel(false)}/>
      <Model1 open={model1} onclose={()=>setModel1(false)}/>
      </div>
      <div className=" w-full h-32 bottom-0 fixed">
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