import { PostAxiosInstance, GetAxiosInstance } from "@axios/user/axios.method";
import { SavePetInfoRequest } from "@server/user/requestType/user";
import {
  GetPetInfoResponse,
  SavePetInfoResponse,
} from "@server/user/responseType/user";

// 온보딩 펫 정보 저장하기 /petInfo/save
export const savePetInfo = async (
  data: SavePetInfoRequest
): Promise<SavePetInfoResponse> => {
  try {
    const res = await PostAxiosInstance<SavePetInfoResponse>(
      `/petInfo/save`,
      data
    );

    return res.data;
  } catch (error) {
    console.log("온보딩 펫 정보 저장하기 에러", error);
    throw error;
  }
};

// 온보딩 펫 정보 조회하기 /petInfo/get
export const getPetInfo = async (): Promise<GetPetInfoResponse> => {
  try {
    const res = await GetAxiosInstance<GetPetInfoResponse>(`/petInfo/get`);

    return res.data;
  } catch (error) {
    console.log("온보딩 펫 정보 조회하기 에러", error);
    throw error;
  }
};
