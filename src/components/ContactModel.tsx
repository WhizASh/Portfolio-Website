"use client"
import { useRef, useState } from "react";
import Draggable from "react-draggable";
import PageIcons from "./PageIcons";
import LinkModel from "./LinkModel";
import LabelledButton from "./LabelledButton";

export default function ContactModel({open,onclose}:{open:boolean,onclose:()=>void}) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [linkModel,setLinkModel] = useState(false);

  return (
    <>
    {open && <div className="fixed z-50">
          <Draggable nodeRef={nodeRef}>
            <div
              ref={nodeRef}
              className="fixed left-20 top-20 bg-orange-300 rounded-xl w-xl cursor-move border-4 border-orange-600"
              >
              <div className="flex rounded-t-md bg-orange-600 p-2">
                <div className=" flex justify-center">
                  <div className="text-xl text-shadow-2xs">
                    Contact
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <div onClick={onclose} className="cursor-pointer hover:scale-120" > [ X ]</div>
                </div>
              </div>
              <div>
                <div className="flex items-center flex-col p-4 text-xl">
                  <div>
                    You can Contact me on any of the social media platform
                  </div>
                  <div>
                    <PageIcons img_url="links.svg" title="Links" onclick={()=>setLinkModel(true)}/>
                  </div>
                </div>
                <div className="flex items-center flex-col p-4 text-xl">
                  <div>
                    Or You can Directly contact me via Email 
                  </div>
                  <div className="text-sm pb-2">
                    mail me to <a className="text-blue-800 underline" href="mailto:yashamahajan8830@gmail.com">yashmahajan8830@gmail.com</a>
                  </div>
                  <div>
                    <a href="mailto:yashmahajan8830@gmail.com"><LabelledButton title="Send me Email!" /></a>
                  </div>
                </div>
              </div>
              </div>
          </Draggable>
          <LinkModel open={linkModel} onclose={()=>setLinkModel(false)} />
        </div>}
    </>
  );
}
