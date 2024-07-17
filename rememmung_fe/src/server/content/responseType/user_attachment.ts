// 유저 첨부파일 조회 Response Body
export interface GetUserFileResponse {
  totalCount: number;
  totalPage: number;
  nodes: {
    id: number;
    petId: number;
    attachment: {
      id: number;
      type: string;
      url: string;
      createdAt: string;
    };
  }[];
}
