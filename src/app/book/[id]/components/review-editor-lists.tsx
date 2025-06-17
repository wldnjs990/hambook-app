import fetchReviewComment from "@/app/lib/fetch-review-comments";
import ReviewEditorListItem from "./review-editor-listItem";

export default async function ReviewEditorLists({
  bookId,
}: {
  bookId: string;
}) {
  const reviews = await fetchReviewComment(bookId);

  return (
    <div className="flex flex-col gap-3 mt-5">
      {reviews.length &&
        reviews.map((review) => {
          return <ReviewEditorListItem key={review.id} {...review} />;
        })}
    </div>
  );
}
