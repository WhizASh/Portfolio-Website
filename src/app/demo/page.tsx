"use client"

import PageIcons from "@/components/PageIcons";
import React, { useState } from "react";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Demo from "@/components/demo";

export default function App() {
  const [aboutModel, setAboutModel] = useState(false);
  return (
    <div>
      <button onClick={() => setAboutModel(true)}>
        Click me to open right pane!
      </button>

        <div className="z-10">
            <PageIcons title="About" img_url={"/about.svg"} onclick={()=>setAboutModel(true)} isMobile={true}/>
        </div>


    <div className="block md:hidden">
        <Demo open={aboutModel} onclose={()=>setAboutModel(false)}/>
            MObile view
    </div>
    <div className="hidden md:block">
        <Demo open={aboutModel} onclose={()=>setAboutModel(false)}/>
        NOrmal view
    </div>
    </div>
  );
}
