// 다이나믹 페이지를 거부하는 코드 => 다이나믹 페이지일 경우 404 페이지로 보내버림
// export const dynamicParams = false;

import BookDetail from "./components/book-detail";
import ReviewEditor from "./components/review-editor";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const bookId = (await params).id;
  return (
    <>
      <BookDetail bookId={bookId} />
      <ReviewEditor bookId={bookId} />
    </>
  );
}
