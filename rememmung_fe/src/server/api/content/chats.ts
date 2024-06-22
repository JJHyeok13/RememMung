import {
  GetAxiosInstance,
  PostAxiosInstance,
} from "@axios/content/axios.method";
import { GetChattingConfig } from "@server/config/chats";
import { SendChatRequset } from "@server/requestType/chats";
import {
  GetChattingResponse,
  SendChatResponse,
} from "@server/responseType/chats";

// 채팅 내용 전송 /users/me/chat
export const sendChat = async (
  data: SendChatRequset
): Promise<SendChatResponse> => {
  try {
    const res = await PostAxiosInstance<SendChatResponse>(
      `/users/me/chat`,
      data
    );

    return res.data.result;
  } catch (error) {
    console.log("채팅 전송 에러", error);
    throw error;
  }
};

// 채팅 내용 조회 /users/me/chats
export const getChatting = async (
  config: GetChattingConfig
): Promise<GetChattingResponse> => {
  try {
    const res = await GetAxiosInstance<GetChattingResponse>(
      `/users/me/chats`,
      config
    );

    return res.data.result;
  } catch (error) {
    console.log("채팅 내용 조회 에러", error);
    throw error;
  }
};
