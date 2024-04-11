import { Book } from "@/types";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

const UpsertBook = async (data: Book) => {
  const supabase = createClient();

  const book = await supabase.from("Books").upsert(data).select();

  return book;
};

const DeleteBook = async (data: Book) => {
  const supabase = createClient();

  const book = await supabase.from("Books").delete().eq("id", data.id);

  return book;
};

export { DeleteBook, UpsertBook };
