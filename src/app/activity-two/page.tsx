import Tab from "@/components/Tab";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

const ActivityTwo = async () => (
  <div className="container m-auto min-h-96 space-y-2 p-8">
    <Link
      href="/"
      className="flex items-center justify-between max-w-14 hover:border-b hover:border-black"
    >
      <MdArrowBack /> Back
    </Link>
    <h2 className="text-2xl">Challenge #2</h2>
    <Tab />
  </div>
);

export default ActivityTwo;
