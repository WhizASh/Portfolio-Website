"use client"

import { useState } from "react";
import LinkModel from "@/components/LinkModel";
import PcModel from "@/components/PcModel";
import ProjectModel from "@/components/ProjectModel";
import ContactModel from "@/components/ContactModel";
import PageIcons from "@/components/PageIcons";
import Waves from "@/components/Waves";
import AboutModel from "@/components/AboutModel";
import Particles from "@/components/background";

export default function App() {


  const [aboutModel,setAboutModel] = useState(false);
  const [linkModel,setLinkModel] = useState(false);
  const [pcModel,setPcModel] = useState(false);
  const [projectModel,setProjectModel] = useState(false);
  const [contactModel,setContactModel] = useState(false);

    //Add icons 
    //~add the models details~
    //~Make it height reponsive~ 

    //Make Model deails
    //Add more deails in dashboard in white space 

    //later
    //made it mobile friendly
    //add more details in the dashboard

  return (
    <>
    <div className="hidden md:block">
      
      <div className=" bg-white  flex justify-center w-screen h-screen items-center flex-col ">
        <div className="text-center text-amber-500 p-10 mb-8">
                <h1 className="font-bold text-4xl">Hi! ,I am Yash</h1>
                <h3 className="text-xl">This is my Desktop!</h3>
        </div>
        <div className="flex flex-col justify-around border-4 text-black rounded-xl w-3xl h-3/5 mb-12 z-1 bg-gray-50">
          <div className="h-full">
            <div className="flex h-full justify-center items-end flex-wrap">
              <PageIcons title="About" img_url={"/about.svg"} onclick={()=>setAboutModel(true)}/>
              <PageIcons title="Links" img_url={"/links.svg"} onclick={()=>setLinkModel(true)}/>
              <PageIcons title="Projects" img_url={"/folder.svg"} onclick={()=>setProjectModel(true)}/>
              <PageIcons title="Contact" img_url={"/contact.svg"} onclick={()=>setContactModel(true)}/>
              <PageIcons title="My PC" img_url={"/pc.svg"} onclick={()=>setPcModel(true)}/>
            </div>
          </div>  
          <div className="mt-auto flex justify-left items-center border-t-4 h-10 bg-gray-600 rounded-b-md">
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
      <div className="z-10">
      <LinkModel open={linkModel} onclose={()=>setLinkModel(false)}/>
      <ProjectModel open={projectModel} onclose={()=>setProjectModel(false)}/>
      <PcModel open={pcModel} onclose={()=>setPcModel(false)}/>
      <AboutModel open={aboutModel} onclose={()=>setAboutModel(false)}/>
      <ContactModel open={contactModel} onclose={()=>setContactModel(false)}/>
      </div>
    </div>
    <div className="block md:hidden">
      <div className=" bg-white  flex justify-center w-screen h-screen items-center flex-col ">
        <div className="text-center text-amber-500 p-10">
                <h1 className="font-bold text-4xl">Hi! ,I am Yash</h1>
                <h3 className="text-xl">Pune Based Full Stack Developer | Tech Enthusiast | Guitarist</h3>
        </div>
        <div className="flex flex-col justify-around text-black rounded-xl w-4/5 h-3/5 mb-24 z-1 ">
          <div className="h-full p-4">
            <div className="flex h-full justify-center items-end flex-wrap">
              <PageIcons title="About" img_url={"/about.svg"} onclick={()=>setAboutModel(true)} isMobile={true}/>
              <PageIcons title="Links" img_url={"/links.svg"} onclick={()=>setLinkModel(true)} isMobile={true}/>
              <PageIcons title="Projects" img_url={"/folder.svg"} onclick={()=>setProjectModel(true)} isMobile={true}/>
              <PageIcons title="Contact" img_url={"/contact.svg"} onclick={()=>setContactModel(true)} isMobile={true}/>
              <PageIcons title="My PC" img_url={"/pc.svg"} onclick={()=>setPcModel(true)} isMobile={true}/>
            </div>
          </div>  
        </div>
      </div>
      <div className="z-10">
      <LinkModel open={linkModel} onclose={()=>setLinkModel(false)} />
      <ProjectModel open={projectModel} onclose={()=>setProjectModel(false)}/>
      <PcModel open={pcModel} onclose={()=>setPcModel(false)}/>
      <AboutModel open={aboutModel} onclose={()=>setAboutModel(false)}/>
      <ContactModel open={contactModel} onclose={()=>setContactModel(false)}/>
      </div>
    </div>
      <div className="absolute inset-0 z-0">
          <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={true}
          />
        </div>
      <div className="w-full h-42 bottom-0 fixed z-0">
        <Waves />
      </div>
      
    </>
  );
}