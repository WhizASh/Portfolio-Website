"use client"
import { useRef } from "react";
import Draggable from "react-draggable";
import Tile from "./Tile";
import Card from "./Card";

export default function ProjectModel({open,onclose}:{open:boolean,onclose:()=>void}) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <>
    {open && <div className="fixed z-50">
          <Draggable nodeRef={nodeRef}>
            <div
              ref={nodeRef}
              className="fixed left-100 top-20 bg-amber-300 rounded-xl w-2xl cursor-move border-4 border-amber-600"
              >
              <div className="flex rounded-t-md bg-amber-600 p-2">
                <div className=" flex justify-center">
                  <div className="text-xl text-shadow-2xs">
                    Projects
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <div onClick={onclose} className="cursor-pointer hover:scale-120" > [ X ]</div>
                </div>
              </div>
              <div>
                <div className="overflow-y-auto">
                    <div className="p-2 font-semibold text-shadow-2xs">technologies </div>
                      <div className="flex flex-wrap ">
                        <Tile title="Python"/>
                        <Tile title="C++"/>
                        <Tile title="Javascript"/>
                        <Tile title="Typescript"/>
                        <Tile title="C"/>
                        <Tile title="MongoDB"/>
                        <Tile title="Java"/>
                        <Tile title="React"/>
                        <Tile title="Next.js"/>
                        <Tile title="Docker"/>
                        <Tile title="Bash"/>
                        <Tile title="HTML / CSS"/>
                      </div>
                  <div>
                  <div>
                      <div className="p-2 font-semibold text-shadow-2xs">Developement</div>
                      <div className="h-96 ">
                        <Card img_url="/img/java_keyboard.png" title="Java Swing Virtual Keyboard" description="The Java Virtual Keyboard with Swing is a graphical user interface application that simulates a virtual keyboard. This project is built using Java Swing to provide a simple and interactive way to input characters" link="https://github.com/WhizASh/Swing_Virtual_Keyboard"/>
                        <Card img_url="img/quiz.png" title="Quiz App" description="A Quiz Game made in Django Python. One of my Projects i worked on during my internship." link="https://github.com/WhizASh/Quiz-Website-in-django"/>
                        <Card img_url="img/snake.png" title="Snake Game" description="A Good Old Snake Game . One of my first projects in typescript. It was simple but got a lot to learn . The game has difficulty settings easy , medium , hard." link="https://github.com/WhizASh/The-Snake-Game"/>
                        <Card img_url="img/gameoflife.png" title="Convay's Game of life" description="A simple simulation based on 2 simple rules . It is based on Conway's game of life." link="https://github.com/WhizASh/Game-of-life"/>
                        <Card img_url="/img/booknest.png" title="Booknest - Online Marketplace for used books" description="A website made in Django Python. Made as a project during my time in diploma. Basically a 2nd hand book selling website.  " link="https://github.com/WhizASh/BookNest"/>
                        <Card img_url="/img/secondBrain.png" title="Second Brain" description="One of my first Project made in full MERN stack . It is like essential space , where one can store all his important digital documents , links , notes etc..." link="https://github.com/WhizASh/second_brain_demo"/>
                      </div>
                  </div>

                  </div>
                </div>
              </div>
                
            </div>
          </Draggable>
        </div>}
    
    </>
  );
}
