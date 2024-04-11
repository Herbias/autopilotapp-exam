import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-full h-96">
      <div className="w-auto h-full m-auto flex items-center flex-col justify-center">
        <Link href="/activity-one" className="border px-8 py-4 bg-blue-500">
          Challenge #1
        </Link>
        <Link href="/activity-two" className="border px-8 py-4 bg-blue-500">
          Challenge #2
        </Link>
      </div>
    </div>
  );
}
