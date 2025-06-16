import BookItem from "@/app/components/book-item";
import BookListSkeleton from "@/app/components/skeleton/book-list-skeleton";
import { fetchSearchBooks } from "@/app/lib/fetch-search-books";
import { delay } from "@/app/utils/delay";
import { Suspense } from "react";

// export const dynamic = "force-dynamic";
// 특정 페이지 유형을 강제로 설정하는 dynamic 세그먼트 옵션
// 1. auto - 아무것도 강제하지 않는 옵션, 기본형
// 2. force-dynamic - dynamic 페이지를 강제하는 옵션
// 3. force-static - static 페이지를 강제하는 옵션
// 4. error - static 페이지를 강제하지만 이로 인해 오류가 발생할 것으로 예상되면 빌드과정에서 오류를 발생하는 옵션

async function SearchResult({ q }: { q: string }) {
  await delay(1500);
  const searchBooks = await fetchSearchBooks(q);
  return (
    <>
      {searchBooks.map((book) => {
        return <BookItem key={book.id} {...book} />;
      })}
    </>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const q = (await searchParams).q;
  return (
    <Suspense fallback={<BookListSkeleton count={3} />}>
      <SearchResult q={q || ""} />
    </Suspense>
  );
}
