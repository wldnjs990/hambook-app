import BookItem from "@/app/components/book-item";
import { fetchRandomBooks } from "@/app/lib/fetch-random-books";
import { delay } from "@/app/utils/delay";
import React from "react";

export default async function RecoBooks() {
  await delay(3000);

  const RecoBooks = await fetchRandomBooks();
  if (!RecoBooks.length) return <div>오류가 발생했습니다.</div>;
  return (
    <div>
      {RecoBooks.map((book) => {
        return <BookItem key={book.id} {...book} />;
      })}
    </div>
  );
}
