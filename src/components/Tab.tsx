"use client";

import { items } from "@/constants";
import useTabHook from "@/hooks/useTabHook";
import clsx from "clsx";

const Tab = () => {
  const [activeTab, setTab] = useTabHook();

  return (
    <div className="w-full h-96 flex items-center">
      <div className="w-auto h-auto m-auto">
        <div className="border-b-[16px] border-yellow-500">
          {items.map((item, index) => (
            <div
              key={index}
              className={clsx("tab", activeTab === index && "active")}
              onClick={() => {
                setTab(index);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tab;
