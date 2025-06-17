const postReviewBook = async (
  review: Review
): Promise<ReviewResponse | undefined> => {
  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/review`, {
      method: "POST",
      body: JSON.stringify(review),
    });
    if (!response.ok)
      throw new Error(
        `리뷰를 작성하는 도중 오류가 발생했습니다. ${response.statusText}`
      );
    return response.json();
  } catch (error) {
    console.error(error);
    return;
  }
};

export default postReviewBook;
