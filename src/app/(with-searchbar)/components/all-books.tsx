import BookItem from "@/app/components/book-item";
import { fetchBooks } from "@/app/lib/fetch-books";
import { delay } from "@/app/utils/delay";

export default async function AllBooks() {
  await delay(1500);
  const allBooks = await fetchBooks();
  if (!allBooks.length) return <div>오류가 발생했습니다.</div>;
  return (
    <div>
      {allBooks.map((book) => {
        return <BookItem key={book.id} {...book} />;
      })}
    </div>
  );
}
