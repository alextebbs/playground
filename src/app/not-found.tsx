import { AgentString } from "./components/AgentString";
import { Scene } from "./components/Scene";
import { Suspense } from "react";
import { WindowSize } from "./components/WindowSize";

export default function Error() {
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
