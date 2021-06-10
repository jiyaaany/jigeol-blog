export interface Post {
  id: number,
  title: string,
  content: string,
  user: User,
  comments: Comment[]
}

export interface User {
  id: number,
  user_id: string,
  email: string,
  name: string,
  nick_name: string,
}

export interface Comment {
  id: number,
  comment: string,
  user: User,
  reg_date: Date,
}
