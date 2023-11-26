import Link from "next/link";
import { AgentString } from "./components/AgentString";
import {
  AiOutlineFolder,
  AiOutlineFolderOpen,
  AiOutlineGithub,
  AiOutlineLink,
} from "react-icons/ai";
import { Scene } from "./components/Scene";
import { Suspense } from "react";
import { WindowSize } from "./components/WindowSize";

export default function Home() {
  const projects = [
    {
      name: "Mythroller",
      description: "An app to generate D&D characters with AI.",
      tags: ["Next.JS", "OpenAI", "Dalle-E"],
      link: "http://mythroller.com",
      github: "http://github.com/alextebbs/lore",
    },
    {
      name: "Enigma",
      description: "An enigma machine emulator with a 3D visualization.",
      tags: ["React", "Three.JS"],
      link: "http://enigma.alextebbs.com",
      github: "http://github.com/alextebbs/enigma",
    },
    {
      name: "UI",
      description: "An in-progress UI library of accessible UI artifacts.",
      tags: ["React", "Tailwind", "Storybook"],
      link: "http://ui.alextebbs.com",
      github: "http://github.com/alextebbs/ui",
    },
    {
      name: "Chat",
      description: "A simple websocket-based chat room.",
      tags: ["Redux", "Flask", "Socket.io"],
      link: "http://chat.alextebbs.com",
      github: "http://github.com/alextebbs/chat",
    },
    {
      name: "Messages",
      description:
        "A bulletin-board app styled to look like an iOS text thread.",
      tags: ["React", "Firebase"],
      link: "http://messages.alextebbs.com",
      github: "http://github.com/alextebbs/soundboard-react",
    },
    {
      name: "Ritual",
      description: "A simple todo app for tracking daily habits.",
      tags: ["React"],
      link: "http://ritual.alextebbs.com",
      github: "http://github.com/alextebbs/ritual",
    },
  ];

  return (
    <main>
      <div className="header fixed inset-0 z-0">
        <div className="hidden sm:block absolute z-10 text-neutral-600 top-0 left-0 p-4 uppercase tracking-[0.15em] text-[12px] group">
          <span className="text-neutral-800 group-hover:text-[#fa0]">
            Warning
          </span>{" "}
          This Request Has Been Logged
        </div>
        <div className="hidden sm:block absolute z-10 text-neutral-600 bottom-0 left-0 p-4 max-w-[600px] w-full uppercase tracking-[0.15em] text-[12px] whitespace-pre overflow-hidden text-ellipsis">
          <span className="text-neutral-800">Agent</span> <AgentString />
        </div>
        <div className="absolute z-10 text-neutral-600 top-0 right-0 p-4 uppercase tracking-[0.15em] text-[12px]">
          <span className="text-neutral-800">XY</span> <WindowSize />
        </div>
      </div>

      <Suspense fallback={null}>
        <div className="fixed inset-0 z-10 pointer-events-none">
          <Scene behind={true} isErrorPage={true} />
        </div>

        <div className="fixed inset-0 z-30 pointer-events-none">
          <Scene isErrorPage={true} />
        </div>
      </Suspense>

      <div className="flex min-h-screen flex-col items-center px-4 pt-[calc(50vh-19px)] pb-[45vh] relative z-20">
        <div className="text-center w-[280px] relative">
          <div className="absolute -top-8 w-full text-xs uppercase tracking-[0.15em] text-white">
            Status{" "}
            <span className="text-[#f00]">
              404{" "}
              <span className="animate-[blink_infinite_2s]">[Not Found]</span>
            </span>
          </div>
          <h1 className="tracking-[0.25em] uppercase mb-4">
            <span className="inline-block py-1.5 px-6 border bg-black border-[#f00] text-[#f00]">
              Error
            </span>
          </h1>
        </div>
      </div>
    </main>
  );
}
