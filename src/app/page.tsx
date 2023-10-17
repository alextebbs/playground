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
          <Scene behind={true} />
        </div>

        <div className="fixed inset-0 z-30 pointer-events-none">
          <Scene />
        </div>
      </Suspense>

      <div className="flex min-h-screen flex-col items-center px-4 pt-[calc(50vh-19px)] pb-[45vh] relative z-20">
        <div className="text-center w-[280px] relative">
          <div className="absolute -top-8 w-full text-xs uppercase tracking-[0.15em] text-white">
            Status{" "}
            <span className="text-[#0f0]">
              200 <span className="animate-[blink_infinite_2s]">[OK]</span>
            </span>
          </div>
          <h1 className="tracking-[0.25em] uppercase mb-4">
            <span className="inline-block py-1.5 px-6 border bg-black border-[#0f0] text-[#0f0]">
              Playground
            </span>
          </h1>
          <div className="text-xs max-w-xs mb-20">
            <p className="mb-2">
              This is a home for some projects I&apos;ve built with React and
              NextJS.
            </p>
            <p>
              More about me{" "}
              <Link
                className="underline hover:text-[#fa0]"
                href="https://alextebbs.com"
              >
                here
              </Link>
              .
            </p>
          </div>

          <div className="text-left pl-6 after:content-[''] after:w-[1px] after:absolute after:top-7 after:bottom-9 after:left-1.5 after:bg-white relative ">
            <div className="text-xs mb-8 relative -left-6 flex">
              <AiOutlineFolderOpen className="text-lg mr-2 relative top-[-1px]" />{" "}
              <span className="uppercase tracking-[0.15em]">List</span>
              <span className="text-white/60 pl-2">
                /Users/
                <Link className="hover:text-[#fa0]" href="http://alextebbs.com">
                  alextebbs
                </Link>
                /Projects/
              </span>
            </div>
            <ul>
              {projects.map((project) => (
                <li
                  className="border border-white text-xs mb-12 bg-black after:content-[''] after:h-[1px] after:w-[1.125rem] after:absolute after:top-4 after:right-full after:bg-white relative"
                  key={project.name}
                >
                  <div className="uppercase tracking-[0.15em] py-2 px-4">
                    {project.name}
                  </div>
                  <div className="py-4 px-4 border-t border-white">
                    {project.description}

                    <div className="text-xs mt-2 flex uppercase tracking-[0.15em]">
                      {project.tags.map((tag) => (
                        <div className="pr-2.5 text-neutral-500" key={tag}>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-white flex">
                    <Link
                      href={project.github}
                      className="py-2 w-1/2 uppercase tracking-[0.15em] flex items-center justify-center hover:text-[#fa0] border-r border-white relative after:hidden hover:after:block after:content-[''] after:absolute after:inset-[-1px] after:border after:border-[#fa0]"
                    >
                      git
                      <AiOutlineGithub className="ml-2 relative top-[0px] text-base" />
                    </Link>
                    <Link
                      href={project.link}
                      className="py-2 w-1/2 uppercase tracking-[0.15em] flex items-center justify-center hover:text-[#fa0] border-r border-white relative after:hidden hover:after:block after:content-[''] after:absolute after:inset-[-1px] after:border after:border-[#fa0]"
                    >
                      www
                      <AiOutlineLink className="ml-2 relative top-[0px] text-base" />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-xs mt-8 relative -left-6 flex">
              <AiOutlineFolder className="text-lg mr-2 relative top-[-1px]" />{" "}
              <span className="uppercase tracking-[0.15em]">End</span>
              <span className="text-white/60 pl-2">
                /Users/
                <Link className="hover:text-[#fa0]" href="http://alextebbs.com">
                  alextebbs
                </Link>
                /Projects/
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
