import { fetchBooks } from "../lib/fetch-books";

export default async function Footer() {
  const allBooks = await fetchBooks();
  return <footer className="text-gray-500">푸터 {allBooks.length}</footer>;
}
