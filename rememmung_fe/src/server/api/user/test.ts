import { PostAxiosInstance } from "@axios/user/axios.method";

export const testAPI = async () => {
  console.log("TEST API 호출");
  try {
    const res = await PostAxiosInstance(`/test`);

    console.log("TEST API 완료");
    return res.data;
  } catch (error) {
    console.log("TEST API 실패");
    console.log(error);
    throw error;
  }
};
