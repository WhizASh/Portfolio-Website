"use client"
import { useRef } from "react";
import Draggable from "react-draggable";
import SlidingPane from 'react-sliding-pane';
import ImageBox from "./ImageBox";
import useIsMobile from "@/hooks/useMobile";

export default function AchievmentModel({open,onclose}:{open:boolean,onclose:()=>void}) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  return (
    <>
    {isMobile && window.innerWidth < 768 && <div>
        <SlidingPane
        className="!z-[1001] bg-white"
        overlayClassName="!z-[1000] !fixed !inset-0"
        isOpen={open}
        from="bottom"
        width="100%"
        title="About"
        onRequestClose={onclose}
        hideHeader={true}
      >
        <div
              ref={nodeRef}
              className="w-full h-full bg-gray-300 rounded-xl border-4 border-gray-600 overflow-y-auto"
              >
            <div className="">
              <div className="flex rounded-t-md bg-gray-600 p-2">
                <div className=" flex justify-center">
                  <div className="text-xl text-shadow-2xs">
                    <h1>Achivements</h1>
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <div onClick={onclose} className="cursor-pointer hover:scale-120" > [ X ]</div>
                </div>
              </div>
            </div>
              <div className=" p-4 grid grid-cols-2  md:grid-cols-3">
                <ImageBox img_url="img/techtonic.jpeg" desc="Won 1st Price in Freky Cpp in College"/>             
                <ImageBox img_url="img/hackthon.jpeg" desc="Won 1st Price at college level hackathon"/>                
                <ImageBox img_url="img/shield.jpeg" desc="Won 2nd Price in Coding Competition during Diploma"/>                
                <ImageBox img_url="img/diploma.jpeg" desc="Class topper during diploma"/>                
                <ImageBox img_url="img/actingteacher.jpeg" desc="Won 2nd price as Acting Teacher in 10th"/>
              </div>
            
            </div>
      </SlidingPane>
    </div>}

    {open && !isMobile && window.innerWidth>768 && <div className="fixed z-50">
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
              <div className=" p-4 grid grid-cols-3">
                <ImageBox img_url="img/techtonic.jpeg" desc="Won 1st Price in Freky Cpp in College"/>             
                <ImageBox img_url="img/hackthon.jpeg" desc="Won 1st Price at college level hackathon"/>                
                <ImageBox img_url="img/shield.jpeg" desc="Won 2nd Price in Coding Competition during Diploma"/>                
                <ImageBox img_url="img/diploma.jpeg" desc="Class topper during diploma"/>                
                <ImageBox img_url="img/actingteacher.jpeg" desc="Won 2nd price as Acting Teacher in 10th"/>                
              </div>
            
            </div>
          </Draggable>
        </div>}
    </>
  );
}
