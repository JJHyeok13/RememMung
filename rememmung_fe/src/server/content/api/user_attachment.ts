import {
  GetAxiosInstance,
  PostAxiosInstance,
} from "@axios/content/axios.method";
import { GetUserFileResponse } from "../responseType/user_attachment";
import {
  SaveFileRequest,
  UpdateFileRequest,
} from "../requestType/user_attachment";

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

// 유저 관련 사진 저장 /users/me/user-attachments
export const saveUserFile = async (data: SaveFileRequest) => {
  try {
    console.log("유저 관련 사진 저장 API 호출");
    const res = await PostAxiosInstance(`/users/me/user-attachments`, data);

    return res.data;
  } catch (error) {
    console.log("유저 관련 사진 저장 에러", error);
    throw error;
  }
};

// 유저 관련 사진 수정 /users/me/user-attachments/{userAttachmentId}
export const updateUserFile = async (
  userAttachmentId: number,
  data: UpdateFileRequest
) => {
  try {
    console.log("유저 관련 사진 수정 API 호출");
    const res = await PostAxiosInstance(
      `/users/me/user-attachments/${userAttachmentId}`,
      data
    );

    return res.data;
  } catch (error) {
    console.log("유저 관련 사진 수정 에러", error);
    throw error;
  }
};
