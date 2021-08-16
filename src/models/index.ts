import { types as t } from "mobx-state-tree";
import { User } from "./User";
import { Post } from "./Post";
import { Comment } from "./Comment";

export { User, Post, Comment };

export default t.model({
  users: t.map(User),
  posts: t.map(Post),
  comments: t.map(Comment)
});
