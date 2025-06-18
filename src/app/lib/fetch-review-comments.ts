const fetchReviewComment = async (
  bookId: string
): Promise<ReviewResponse[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/review/book/${bookId}`,
      { next: { tags: [`review-${bookId}`] } }
    );
    if (!response.ok)
      throw new Error("리뷰를 받아오는 도중 오류가 발생했습니다.");
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchReviewComment;
