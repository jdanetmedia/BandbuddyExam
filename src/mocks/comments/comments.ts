import { Comment } from '../../models/comments/comment.interface';
import { USER_LIST } from '../profiles/profiles';

const userList = USER_LIST;
const commentList: Comment[] = [];

userList.forEach((user) => {
  commentList.push({user: user, date: new Date(), lastMessage: 'Hello'})
});

export const COMMENT_LIST = commentList;
