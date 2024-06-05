import React, { useRef, useEffect } from "react";

import styles from "./styles";

import PetProfileImage from "@assets/chatPage/PetProfileImage.svg";

// 채팅 메시지의 타입 정의
interface ChatMessage {
  id: number;
  isMe: boolean;
  message: string;
  timestamp: string;
}

const ChatComponent: React.FC = () => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // 함수 컴포넌트 내부에서 마운트나 업데이트 시 스크롤을 제일 하단으로 이동
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, []);

  // 더미 채팅 데이터
  const chatMessages: ChatMessage[] = [
    { id: 1, isMe: true, message: "안녕", timestamp: "10:00" },
    { id: 2, isMe: false, message: "클레오파트라", timestamp: "10:01" },
    { id: 3, isMe: true, message: "세상에서 제일 가는", timestamp: "10:02" },
    { id: 4, isMe: false, message: "포테이토칩", timestamp: "10:03" },
    { id: 5, isMe: true, message: "안녕", timestamp: "10:04" },
    { id: 6, isMe: false, message: "클레오파트라", timestamp: "10:05" },
    { id: 7, isMe: true, message: "세상에서 제일 가는", timestamp: "10:06" },
    { id: 8, isMe: false, message: "포테이토칩", timestamp: "10:07" },
    { id: 9, isMe: true, message: "안녕", timestamp: "10:08" },
    { id: 10, isMe: false, message: "클레오파트라", timestamp: "10:09" },
    { id: 11, isMe: true, message: "세상에서 제일 가는", timestamp: "10:10" },
    { id: 12, isMe: false, message: "포테이토칩", timestamp: "10:11" },
    { id: 13, isMe: true, message: "안녕", timestamp: "10:12" },
    { id: 14, isMe: false, message: "클레오파트라", timestamp: "10:13" },
    { id: 15, isMe: true, message: "세상에서 제일 가는", timestamp: "10:14" },
    { id: 16, isMe: false, message: "포테이토칩", timestamp: "10:15" },
    { id: 17, isMe: true, message: "탕", timestamp: "10:16" },
    { id: 18, isMe: false, message: "수", timestamp: "10:17" },
    { id: 19, isMe: true, message: "육", timestamp: "10:18" },
    { id: 20, isMe: false, message: "탕", timestamp: "10:19" },
    { id: 21, isMe: true, message: "탕", timestamp: "10:20" },
  ];

  return (
    <styles.Container ref={chatContainerRef}>
      {chatMessages.map((msg) => (
        <styles.ChattingContainer key={msg.id} $isMe={msg.isMe}>
          {/* 애완동물 프로필사진 및 이름 */}
          {!msg.isMe && (
            <styles.PetProfile>
              <styles.PetImage src={PetProfileImage} />
              <styles.PetName>{msg.isMe ? "" : `브리`}</styles.PetName>
            </styles.PetProfile>
          )}

          {/* 채팅 메시지 및 시간 */}
          <styles.Message $isMe={msg.isMe}>
            <styles.MessageBubble $isMe={msg.isMe}>
              <div>{msg.message}</div>
            </styles.MessageBubble>
            <styles.Timestamp>{msg.timestamp}</styles.Timestamp>
          </styles.Message>
        </styles.ChattingContainer>
      ))}
    </styles.Container>
  );
};

export default ChatComponent;
