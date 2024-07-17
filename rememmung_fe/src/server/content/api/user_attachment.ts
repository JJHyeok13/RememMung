import { GetAxiosInstance } from "@axios/content/axios.method";
import { GetUserFileResponse } from "../responseType/user_attachment";

// 유저 첨부파일 리스트 조회 /users/me/user-attachments
export const getPetFile = async (
  page: number,
  pageSize: number
): Promise<GetUserFileResponse> => {
  try {
    console.log("펫 첨부파일 조회 API 호출");
    const res = await GetAxiosInstance<GetUserFileResponse>(
      `/users/me/user-attachments?page=${page}&pageSize=${pageSize}`
    );

    return res.data;
  } catch (error) {
    console.log("유저 첨부파일 조회 에러", error);
    throw error;
  }
};
