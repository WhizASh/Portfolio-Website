"use client"
import { useRef } from "react";
import Draggable from "react-draggable";
import SlidingPane from 'react-sliding-pane'
import '../styles/main.css'

export default function Demo({open,onclose}:{open:boolean,onclose:()=>void}) {
  const nodeRef = useRef<HTMLDivElement>(null);
  
  return (
    <>
    {window.innerWidth < 768 && <div>
        <SlidingPane
        className=""
        overlayClassName="some-custom-overlay-class"
        isOpen={open}
        from="bottom"
        width="100%"
        title="About"
        onRequestClose={onclose}
        hideHeader={true}
      >
        <div
          ref={nodeRef}
          className=" bg-blue-300 rounded-xl w-full h-full border-4 border-blue-600"
          >
          <div className="flex rounded-t-md bg-blue-600 p-2">
            <div className=" flex justify-center">
              <div className="text-xl text-shadow-2xs">
                About
              </div>
            </div>
            <div className="flex w-full justify-end">
              <div onClick={onclose} className="cursor-pointer hover:scale-120" > [ X ]</div>
            </div>
          </div>
          <div className="grid grid-cols-3 p-4"> 
              <div className="col-span-1">
                {/* Img */}
              </div>
              <div className="col-span-2">
                <div>
                  <div className="text-3xl font-semibold">
                    Yash Mahajan
                  </div>
                  <div className="">
                    Pune Based Developer | Tech enthusiast | Guitarist 
                  </div>
                </div>
              </div>
           </div>
            <div className="p-4">
              <h1 className="text-shadow-2xs font-semibold">Hello there! I am Yash Mahajan , I know...</h1>
              <ul className="list-disc ml-6 mb-4">
                <li>MERN Stack</li>
                <li>Linux</li>
                <li>STL CPP (DSA)</li>
                <li>Python</li>
                <li>GIT / Github</li>
                <li>60+WPM Typing speed </li>
              </ul>
              <h1 className="text-shadow-2xs font-semibold">Other Intrests ....</h1>
              <ul className="list-disc ml-6 mb-4">
                <li>Gaming</li>
                <li>Guitar</li>
                <li>Computer Hardware</li>
                <li>Driving / Riding</li>
                <li>Old Technolodgy</li>
              </ul>

              <h1 className="text-shadow-2xs font-semibold">Language Proficiency ....</h1>
              I Can speak pretty Good English , Hindi , Marathi 
            </div>
        
        </div>
      </SlidingPane>
    </div>}

    {open && window.innerWidth>768 && <div className="fixed z-50">
      <Draggable nodeRef={nodeRef}>
        <div
          ref={nodeRef}
          className="fixed left-20 top-20 bg-blue-300 rounded-xl w-xl cursor-move border-4 border-blue-600"
          >
          <div className="flex rounded-t-md bg-blue-600 p-2">
            <div className=" flex justify-center">
              <div className="text-xl text-shadow-2xs">
                About
              </div>
            </div>
            <div className="flex w-full justify-end">
              <div onClick={onclose} className="cursor-pointer hover:scale-120" > [ X ]</div>
            </div>
          </div>
          <div className="grid grid-cols-3 p-4"> 
              <div className="col-span-1">
                {/* Img */}
              </div>
              <div className="col-span-2">
                <div>
                  <div className="text-3xl font-semibold">
                    Yash Mahajan
                  </div>
                  <div className="">
                    Pune Based Developer | Tech enthusiast | Guitarist 
                  </div>
                </div>
              </div>
           </div>
            <div className="p-4">
              <h1 className="text-shadow-2xs font-semibold">Hello there! I am Yash Mahajan , I know...</h1>
              <ul className="list-disc ml-6 mb-4">
                <li>MERN Stack</li>
                <li>Linux</li>
                <li>STL CPP (DSA)</li>
                <li>Python</li>
                <li>GIT / Github</li>
                <li>60+WPM Typing speed </li>
              </ul>
              <h1 className="text-shadow-2xs font-semibold">Other Intrests ....</h1>
              <ul className="list-disc ml-6 mb-4">
                <li>Gaming</li>
                <li>Guitar</li>
                <li>Computer Hardware</li>
                <li>Driving / Riding</li>
                <li>Old Technolodgy</li>
              </ul>

              <h1 className="text-shadow-2xs font-semibold">Language Proficiency ....</h1>
              I Can speak pretty Good English , Hindi , Marathi 
            </div>
        
        </div>
      </Draggable>
    </div>}
    </>
  );
}
