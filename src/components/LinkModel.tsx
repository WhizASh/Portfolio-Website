"use client"
import { useRef } from "react";
import Draggable from "react-draggable";
import IconLinks from "./IconLinks";

export default function LinkModel({open,onclose}:{open:boolean,onclose:()=>void}) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <>
    {open && <div className="fixed z-50">
          <Draggable nodeRef={nodeRef}>
            <div
              ref={nodeRef}
              className="fixed left-200 top-20 bg-lime-300 rounded-xl w-xl cursor-move border-4 border-lime-600"
              >
              <div className="flex rounded-t-md bg-lime-600 p-2">
                <div className=" flex justify-center">
                  <div className="text-xl text-shadow-2xs">
                    Links
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <div onClick={onclose} className="cursor-pointer hover:scale-120" > [ X ]</div>
                </div>
              </div>
              
              <div className="h-96">
                <div className="flex flex-wrap p-4">
                  <IconLinks img_url="/linkedin.svg" link="" title="Linkedin" />
                  <IconLinks img_url="/instagram.svg" link="" title="Instagram" />
                  <IconLinks img_url="/github.svg" link="" title="Github" />
                  <IconLinks img_url="/twitter.svg" link="" title="Twitter" />
                  <IconLinks img_url="/steam.svg" link="https://steamcommunity.com/profiles/76561199483692385/" title="Steam" />
                  <IconLinks img_url="/leetcode.svg" link="" title="Leetcode" />
                </div>
              </div>
            </div>
          </Draggable>
        </div>}
    </>
  );
}
