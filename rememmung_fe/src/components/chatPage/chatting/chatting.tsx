import React, { useEffect, useRef } from "react";
import styles from "./styles";

import PetProfileImage from "@assets/onBoardingPage/image.png";

// import { useRecoilValue } from "recoil";
// import { petName } from "recoil/recoil";

interface ChatComponentProps {
  nodes: {
    id: number;
    chatRoomId: number;
    userId: string | null;
    content: string;
    attachment: {
      id: number;
      type: string;
      url: string;
      createdAt: string;
    };
    createdAt: string;
  }[];
}

const ChatComponent: React.FC<ChatComponentProps> = ({ nodes }) => {
  // const petname = useRecoilValue(petName);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const renderMessageContent = (chat: any) => {
    const { type, url } = chat.attachment;

    switch (type) {
      case "text":
        return <div>{chat.content}</div>;
      case "image":
        return <img src={url} alt="Chat Image" />;
      case "video":
        return (
          <iframe
            src={url}
            title="Chat Video"
            width="100%"
            height="240"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        );
      default:
        return null;
    }
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [nodes]);

  return (
    <styles.Container ref={chatContainerRef}>
      {nodes.map((chat) => (
        <styles.ChattingContainer key={chat.id} $isMe={!!chat.userId}>
          {chat.userId === null && (
            <styles.PetProfile>
              <styles.PetImage src={PetProfileImage} />
              <styles.PetName>{chat.userId ? "" : "브리"}</styles.PetName>
            </styles.PetProfile>
          )}

          <styles.Message $isMe={!!chat.userId}>
            <styles.MessageBubble $isMe={!!chat.userId}>
              {renderMessageContent(chat)}
            </styles.MessageBubble>
            <styles.Timestamp>{chat.createdAt}</styles.Timestamp>
          </styles.Message>
        </styles.ChattingContainer>
      ))}
    </styles.Container>
  );
};

export default ChatComponent;
