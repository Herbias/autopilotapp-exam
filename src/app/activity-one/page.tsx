import AddButton from "@/components/AddButton";
import BookItem from "@/components/BookItem";
import { columns } from "@/constants";
import { createClient } from "@/supabase/server";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

const ActivityOne = async () => {
  const supabase = createClient();

  const { data } = await supabase.from("Books").select();

  return (
    <div className="container m-auto min-h-96 space-y-2 p-8">
      <Link
        href="/"
        className="flex items-center justify-between max-w-14 hover:border-b hover:border-black"
      >
        <MdArrowBack /> Back
      </Link>
      <AddButton />
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    {columns.map((column, key) => (
                      <th key={key} scope="col" className="px-6 py-4">
                        {column}
                      </th>
                    ))}
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((props, key) => (
                    <BookItem key={key} {...props} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityOne;
