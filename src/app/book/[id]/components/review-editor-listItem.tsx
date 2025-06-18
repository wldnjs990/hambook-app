import ReviewItemDeleteButton from "@/app/components/review-item-delete-button";

export default function ReviewEditorListItem({
  id,
  bookId,
  content,
  author,
  createdAt,
}: ReviewResponse) {
  const date = new Date(createdAt).toLocaleString();
  return (
    <div>
      <div className="flex flex-col gap-1 pb-3">
        <div className="text-sm">작성자 : {author}</div>
        <div className="w-full rounded-2xl bg-gray-100 p-2 text-md">
          {content}
        </div>
        <div className="text-sm flex gap-2 text-gray-500">
          <p>{date}</p>
          <ReviewItemDeleteButton reviewId={id} bookId={bookId} />
        </div>
      </div>
      <hr />
    </div>
  );
}
