import {
  GetAxiosInstance,
  PostAxiosInstance,
  PatchAxiosInstance,
  DeleteAxiosInstance,
} from "@axios/content/axios.method";
import { GetLetterListConfig } from "@server/config/letter";
import {
  UpdateLetterRequest,
  WriteLetterRequest,
} from "@server/requestType/letter";
import {
  WriteLetterResponse,
  GetLetterListResponse,
  UpdateLetterResponse,
  DeleteLetterResponse,
} from "@server/responseType/letter";

// 편지 생성하기 /users/me/letters
export const writeLetter = async (
  data: WriteLetterRequest
): Promise<WriteLetterResponse> => {
  try {
    const res = await PostAxiosInstance<WriteLetterResponse>(
      `http://localhost:8080/users/me/letters`,
      data
    );

    return res.data.result;
  } catch (error) {
    console.log("편지 생성하기 에러", error);
    throw error;
  }
};

// 편지 목록 조회하기 /users/me/letters
export const getLetterList = async (
  config: GetLetterListConfig
): Promise<GetLetterListResponse> => {
  try {
    const res = await GetAxiosInstance<GetLetterListResponse>(
      `http://localhost:8080/users/me/letters`,
      config
    );

    return res.data.result;
  } catch (error) {
    console.log("편지 목록 조회하기 에러", error);
    throw error;
  }
};

// 편지 상태 수정하기 /users/me/letters/{letterId}
export const updateLetter = async (
  letterId: number,
  data: UpdateLetterRequest
): Promise<UpdateLetterResponse> => {
  try {
    const res = await PatchAxiosInstance<UpdateLetterResponse>(
      `http://localhost:8080/users/me/letters/${letterId}`,
      data
    );

    return res.data.result;
  } catch (error) {
    console.log("편지상태 수정하기", error);
    throw error;
  }
};

// 편지 삭제하기 /users/me/letters/{letterId}
export const deleteLetter = async (
  letterId: number
): Promise<DeleteLetterResponse> => {
  try {
    const res = await DeleteAxiosInstance<DeleteLetterResponse>(
      `http://localhost:8080/users/me/letters/${letterId}`
    );

    return res.data.result;
  } catch (error) {
    console.log("편지 삭제하기 에러", error);
    throw error;
  }
};
