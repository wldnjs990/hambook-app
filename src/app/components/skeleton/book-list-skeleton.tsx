import BookItemSkeleton from "./book-item-skeleton";

export default function BookListSkeleton({ count }: { count: number }) {
  return (
    <>
      {new Array(count).fill("").map((_, idx) => {
        return <BookItemSkeleton key={idx} />;
      })}
    </>
  );
}
