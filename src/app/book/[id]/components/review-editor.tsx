import ReviewEditorForm from "./review-editor-form";
import ReviewEditorLists from "./review-editor-lists";

export default async function ReviewEditor({ bookId }: { bookId: string }) {
  return (
    <div className="mt-10">
      <ReviewEditorForm bookId={bookId} />
      <ReviewEditorLists bookId={bookId} />
    </div>
  );
}
