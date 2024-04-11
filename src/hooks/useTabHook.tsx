"use client";

import { useState } from "react";

const useTabHook = (): [number, (index: number) => void] => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const setTab = (index: number):void => setActiveTab(index);

  return [activeTab, setTab];
};

export default useTabHook;
