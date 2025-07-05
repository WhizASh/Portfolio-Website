"use client"
import { useRef, useState } from "react";
import Draggable from "react-draggable";
import PageIcons from "./PageIcons";
import GalaryModel from "./GalaryModel";

export default function PcModel({open,onclose}:{open:boolean,onclose:()=>void}) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [galaryModel,setGalaryModel] = useState(false);


  return (
    <>
    {open && <div className="fixed z-50">
          <Draggable nodeRef={nodeRef}>
            <div
              ref={nodeRef}
              className="fixed right-20 top-20 bg-gray-300 rounded-xl w-xl cursor-move border-4 border-gray-600"
              >
              <div className="flex rounded-t-md bg-gray-600 p-2">
                <div className=" flex justify-center">
                  <div className="text-xl text-shadow-2xs">
                    <h1>My PC</h1>
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <div onClick={onclose} className="cursor-pointer hover:scale-120" > [ X ]</div>
                </div>
              </div>
              <div className="">
                <div className="flex  p-4">
                  <PageIcons img_url="galary.svg" title="Galary"  onclick={()=>setGalaryModel(true)}/>
                  <PageIcons img_url="trophy.svg" title="Achievments" />
                  
                  
                </div>
              </div>
            
            </div>
          </Draggable>
          <GalaryModel open={galaryModel} onclose={()=>setGalaryModel(false)} />
        </div>}
    </>
  );
}
