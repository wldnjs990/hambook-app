import { fetchOneBook } from "@/app/lib/fetch-one-book";
import { notFound } from "next/navigation";

export default async function BookDetail({ bookId }: { bookId: string }) {
  const book = await fetchOneBook(bookId);

  if (book === 404) notFound();
  if (!book) return <div>오류가 발생했습니다.</div>;
  const { coverImgUrl, title, subTitle, author, publisher, description } = book;
  return (
    <div className="flex flex-col gap-2.5">
      <div
        style={{
          background: `url(${coverImgUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative flex items-center justify-center p-5 before:absolute before:h-full before:w-full before:bg-black before:opacity-70"
      >
        <img src={coverImgUrl} alt={`${title} 이미지`} className="z-10" />
      </div>
      <h3 className="text-[18px]">{title}</h3>
      <div className="text-gray-500">{subTitle}</div>
      <div className="text-gray-500">{`${author} | ${publisher}`}</div>
      <div className="whitespace-pre-line rounded-md bg-[rgb(245,245,245)] p-4 leading-[1.3]">
        {description}
      </div>
    </div>
  );
}
