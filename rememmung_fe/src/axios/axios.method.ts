import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosInstance from "@axios/axios.Instance";

export const PostAxiosInstance = async <T>(
  url: string,
  data?: any
  // config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await axiosInstance.post(url, data);
  return response;
};

export const GetAxiosInstance = async <T>(
  url: string
  // config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const res = await axiosInstance.get(url);
  return res;
};

export const PatchAxiosInstance = async <T>(
  url: string,
  data?: any
  // config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const res = await axiosInstance.patch(url, data);
  return res;
};

export const DeleteAxiosInstance = async <T>(
  url: string
  // config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const res = await axiosInstance.delete(url);
  return res;
};
