"use client"
import { useRef } from "react";
import Draggable from "react-draggable";
import IconLinks from "./IconLinks";
import ImageBox from "./ImageBox";

export default function GalaryModel({open,onclose}:{open:boolean,onclose:()=>void}) {
  const nodeRef = useRef<HTMLDivElement>(null);


  return (
    <>
    {open && <div className="fixed z-50">
          <Draggable nodeRef={nodeRef}>
            <div
              ref={nodeRef}
              className="fixed right-50 top-30 bg-gray-300 rounded-xl w-xl cursor-move border-4 border-gray-600"
              >
              <div className="flex rounded-t-md bg-gray-600 p-2">
                <div className=" flex justify-center">
                  <div className="text-xl text-shadow-2xs">
                    <h1>Galary</h1>
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <div onClick={onclose} className="cursor-pointer hover:scale-120" > [ X ]</div>
                </div>
              </div>
              <div className=" p-4 grid grid-cols-2">
                <ImageBox img_url="https://picsum.photos/200/300" desc="The Guitar I Own"/>
                <ImageBox img_url="https://picsum.photos/200/300" desc="The Guitar I Own"/>
                <ImageBox img_url="https://picsum.photos/200/300" desc="The Guitar I Own"/>
                <ImageBox img_url="https://picsum.photos/400/200" desc="The Guitar I Own"/>
                <ImageBox img_url="https://picsum.photos/400/200" desc="The Guitar I Own"/>
                <ImageBox img_url="https://picsum.photos/400/200" desc="The Guitar I Own"/>
              </div>
            
            </div>
          </Draggable>
        </div>}
    </>
  );
}
