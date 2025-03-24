export interface IUser {
  username: string
  thumbnail: {
    id: string
    fileName: string
    filePath: string
    fileType: string
    created_At: string
    updated_At: string
  }
  avatar: {
    id: string
    fileName: string
    filePath: string
    fileType: string
    created_At: string
    updated_At: string
  }
  phoneNumber: string
  biography: string
  major: string
  created_at: string
}
