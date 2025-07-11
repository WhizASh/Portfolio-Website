"use client"
import { useRef } from "react";
import Draggable from "react-draggable";
import SlidingPane from 'react-sliding-pane';
import ImageBox from "./ImageBox";
import useIsMobile from "@/hooks/useMobile";

export default function GalaryModel({open,onclose}:{open:boolean,onclose:()=>void}) {
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
              className="w-full h-full bg-gray-300 rounded-xl border-4 border-gray-600"
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
              <div className=" p-4 grid grid-cols-2 md:grid-cols-3">
                <ImageBox img_url="img/guitar.jpeg" desc="The Guitar"/>
                <ImageBox img_url="img/laptop.jpeg" desc="The Laptop - Legion Slim 5 RTX 4060 Ryzhen 7 7840hs"/>
                <ImageBox img_url="img/phone2.jpeg" desc="The Phone - Nothing Phone(2a) Speical Edition"/>                
                <ImageBox img_url="img/controller.jpeg" desc="The Controller - Cosmic Byte Ares"/>                
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
                <ImageBox img_url="img/guitar.jpeg" desc="The Guitar"/>
                <ImageBox img_url="img/laptop.jpeg" desc="The Laptop - Legion Slim 5 RTX 4060 Ryzhen 7 7840hs"/>
                <ImageBox img_url="img/phone2.jpeg" desc="The Phone - Nothing Phone(2a) Speical Edition"/>                
                <ImageBox img_url="img/controller.jpeg" desc="The Controller - Cosmic Byte Ares"/>                
              </div>
            
            </div>
          </Draggable>
        </div>}
    </>
  );
}
