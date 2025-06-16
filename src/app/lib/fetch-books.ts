import { BookData } from "../types/bookType";

export const fetchBooks = async (): Promise<BookData[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/book`);
    if (!response.ok)
      throw new Error("데이터 통신 과정에서 오류가 발생했습니다.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
