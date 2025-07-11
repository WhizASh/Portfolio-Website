"use client"
import { useRef } from "react";
import Draggable from "react-draggable";

export default function Model({open,onclose}:{open:boolean,onclose:()=>void}) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <>
    {open && <div className="z-50 fixed ">
      <Draggable nodeRef={nodeRef}>
        <div
          ref={nodeRef}
          className={`fixed left-20 top-20 bg-amber-300 p-4 rounded-xl w-80 cursor-move border-4 border-amber-600`}
          >
          <div  className="flex justify-end mb-4">
            <div onClick={onclose} className="cursor-pointer hover:scale-120">[ X ]</div>
          </div>
          <div className="flex flex-col gap-2">
            <input placeholder="Title" />
            <input placeholder="Link" />
          </div>
          <div className="py-2 flex justify-center">
            <button>Submit</button>
          </div>
        </div>
      </Draggable>
    </div>}
    </>
  );
}
