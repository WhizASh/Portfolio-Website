"use client"
import { useRef } from "react";
import Draggable from "react-draggable";
import IconLinks from "./IconLinks";
import useIsMobile from "@/hooks/useMobile";
import SlidingPane from 'react-sliding-pane';

export default function LinkModel({open,onclose}:{open:boolean,onclose:()=>void}) {
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
              className=" bg-lime-100 rounded-xl w-full h-full border-4 border-lime-500"
              >
              <div className="flex rounded-t-md bg-lime-500 p-2">
                <div className=" flex justify-center">
                  <div className="text-xl text-shadow-2xs">
                    Links
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <div onClick={onclose} className="cursor-pointer hover:scale-120" > [ X ]</div>
                </div>
              </div>
              
              <div className="">
                <div className="grid grid-cols-3 p-2">
                  <IconLinks img_url="/linkedin.svg" link="https://www.linkedin.com/in/yash-mahajan-135757326/" title="Linkedin" />
                  <IconLinks img_url="/instagram.svg" link="https://www.instagram.com/y_ash170?igsh=MWF6M29yMjk2NHVzNw==" title="Instagram" />
                  <IconLinks img_url="/github.svg" link="https://github.com/WhizASh" title="Github" />
                  <IconLinks img_url="/twitter.svg" link="https://x.com/Whiz_Ash?t=Oq59GT8gCZ0FBbOZgtV5RA&s=09" title="Twitter" />
                  <IconLinks img_url="/steam.svg" link="https://steamcommunity.com/profiles/76561199483692385/" title="Steam" />
                  <IconLinks img_url="/leetcode.svg" link="https://leetcode.com/u/yashmahajan8830/" title="Leetcode" />
                </div>
              </div>
            </div>
          </SlidingPane>
        </div>}

    {open && !isMobile && window.innerWidth > 768 && <div className="fixed z-50">
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
                  <IconLinks img_url="/linkedin.svg" link="https://www.linkedin.com/in/yash-mahajan-135757326/" title="Linkedin" />
                  <IconLinks img_url="/instagram.svg" link="https://www.instagram.com/y_ash170?igsh=MWF6M29yMjk2NHVzNw==" title="Instagram" />
                  <IconLinks img_url="/github.svg" link="https://github.com/WhizASh" title="Github" />
                  <IconLinks img_url="/twitter.svg" link="https://x.com/Whiz_Ash?t=Oq59GT8gCZ0FBbOZgtV5RA&s=09" title="Twitter" />
                  <IconLinks img_url="/steam.svg" link="https://steamcommunity.com/profiles/76561199483692385/" title="Steam" />
                  <IconLinks img_url="/leetcode.svg" link="https://leetcode.com/u/yashmahajan8830/" title="Leetcode" />
                </div>
              </div>
            </div>
          </Draggable>
        </div>}
    </>
  );
}
