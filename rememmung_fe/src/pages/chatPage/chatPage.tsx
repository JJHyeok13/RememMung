import React, { ChangeEvent, useEffect, useRef, useState } from "react";

import ChatComponent from "@components/chatPage/chatting/chatting";
import ChattingInput from "@components/chatPage/chattingInput/chattingInput";

// import {
//   //getChatting,
//   sendChat,
// } from "@server/content/api/chats";
import { useRecoilState } from "recoil";
import { chatDataState } from "recoil/recoil";

import Video from "@assets/chatPage/video.mp4";

// import { ChattingDataProps } from "type/chattingPage/chattingPage";

interface ConfigProps {
  params: {
    page?: number;
    pageSize?: number;
  };
}

const ChatPage: React.FC = () => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // @ts-ignore
  const [chattingData, setChattingData] = useRecoilState(chatDataState);

  // @ts-ignore
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 9999;

  // @ts-ignore
  const [config, setConfig] = useState<ConfigProps>({
    params: {
      page: currentPage,
      pageSize: pageSize,
    },
  });

  // const fetchData = useCallback(() => {
  //   getChatting(config).then((res) => setChattingData(res));
  // }, [config]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  // 채팅 입력용 state 변수
  const [content, setContent] = useState<string>("");

  const handleContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const sendContent = () => {
    const data = {
      id: chattingData.length + 1,
      chatRoomId: 1,
      userId: "me",
      content: content,
      attachment: {
        id: 1,
        type: "text",
        url: "",
        createdAt: "13:32",
      },
      createdAt: "13:32",
    };

    const first = {
      id: chattingData.length + 1,
      chatRoomId: 1,
      userId: null,
      content: "나 산책다녀와써 누나",
      attachment: {
        id: 1,
        type: "text",
        url: "",
        createdAt: "13:32",
      },
      createdAt: "13:32",
    };

    const second = {
      id: chattingData.length + 1,
      chatRoomId: 1,
      userId: null,
      content: "오랜만에 뛰었더니 힘들어서 쉬는주웅!",
      attachment: {
        id: 1,
        type: "text",
        url: "",
        createdAt: "13:32",
      },
      createdAt: "13:32",
    };

    const third = {
      id: chattingData.length + 1,
      chatRoomId: 1,
      userId: null,
      content: "",
      attachment: {
        id: 1,
        type: "video",
        url: Video,
        createdAt: "13:32",
      },
      createdAt: "13:32",
    };

    if (data.content === "브리야 뭐해?") {
      setChattingData((prev) => [...prev, data, first, second, third]);
    } else {
      setChattingData((prev) => [...prev, data]);
    }
    setContent("");
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chattingData]);

  return (
    <div className="flex flex-col justify-end w-5/6 p-5 mx-auto h-2/3 pt-7 rounded-xl bg-chatPage">
      {chattingData && chattingData.length > 0 ? (
        <ChatComponent nodes={chattingData} />
      ) : null}

      <ChattingInput
        content={content}
        handleContent={handleContent}
        sendContent={sendContent}
      />
    </div>
  );
};

export default ChatPage;
