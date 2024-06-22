import { PostAxiosInstance } from "@axios/content/axios.method";
import { UploadFileRequest } from "@server/requestType/attachment";
import {
  UpdateUploadFileResponse,
  UploadFileResponse,
} from "@server/responseType/attachment";

// 첨부파일 업로드 /attachment/prepare-upload
export const uploadFile = async (
  data: UploadFileRequest
): Promise<UploadFileResponse> => {
  try {
    const res = await PostAxiosInstance<UploadFileResponse>(
      `/attachment/prepare-upload`,
      data
    );

    return res.data.result;
  } catch (error) {
    console.log("첨부파일 업로드 에러", error);
    throw error;
  }
};

// 첨부파일 업로드 상태 수정 /attachment/complete-upload/{attachmentId}
export const updateUploadFile = async (
  attachmentId: number
): Promise<UpdateUploadFileResponse> => {
  try {
    const res = await PostAxiosInstance<UpdateUploadFileResponse>(
      `/attachment/complete-upload/${attachmentId}`
    );

    return res.data.result;
  } catch (error) {
    console.log("첨부파일 업로드 상태 수정 에러", error);
    throw error;
  }
};
