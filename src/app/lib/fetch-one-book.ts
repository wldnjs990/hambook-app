import { BookData } from "../types/bookType";

export const fetchOneBook = async (
  id: string
): Promise<BookData | null | 404> => {
  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/book/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        return response.status;
      }
      throw new Error("데이터 통신중 오류가 발생했습니다.");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
