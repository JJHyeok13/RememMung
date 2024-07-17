// 유저 관련 사진 저장 Request Body
export interface SaveFileRequest {
  attachmentId: number;
  isDefault: boolean;
}

// 유저 관련 사진 수정 Request Body
export interface UpdateFileRequest {
  attachmentId: number;
  isDefault: boolean;
}
