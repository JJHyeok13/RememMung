import { GetAxiosInstance } from "@axios/content/axios.method";

export const test = async () => {
  console.log("Content 테스트");
  try {
    const res = await GetAxiosInstance(`/`);

    console.log(res);
    return res.data;
  } catch (error) {
    console.log("실패");
    throw error;
  }
};
