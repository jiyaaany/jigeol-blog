export interface Post {
    id: number,
    title: string,
    content: string,
    reg_date: Date,
    user: User,
    comments: Comment[]
}

export interface User {
    user_idx: number,
    user_id: string,
    email: string,
    name: string,
    nick_name: string,
}

export interface Comment {
    comment_idx: number,
    content: string,
    user: User,
    reg_date: string,
}
