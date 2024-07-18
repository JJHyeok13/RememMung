import React, { ChangeEvent, useCallback, useEffect, useState } from "react";

import ChatComponent from "@components/chatPage/chatting/chatting";
import ChattingInput from "@components/chatPage/chattingInput/chattingInput";

import { getChatting, sendChat } from "@server/content/api/chats";

import { ChattingDataProps } from "type/chattingPage/chattingPage";

interface ConfigProps {
  params: {
    page?: number;
    pageSize?: number;
  };
}

const ChatPage: React.FC = () => {
  const [chattingData, setChattingData] = useState<ChattingDataProps>();

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

  const fetchData = useCallback(() => {
    getChatting(config).then((res) => setChattingData(res));
  }, [config]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // 채팅 입력용 state 변수
  const [content, setContent] = useState<string>("");

  const handleContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const sendContent = () => {
    const data = {
      content: content,
    };
    sendChat(data).then(() => {
      setContent("");
      fetchData();
    });
  };

  return (
    <div className="flex flex-col justify-end w-5/6 p-5 mx-auto h-2/3 pt-7 rounded-xl bg-chatPage">
      {chattingData && chattingData.nodes.length > 0 ? (
        <ChatComponent chattingData={chattingData} />
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
