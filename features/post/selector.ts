import { RootState } from "../../storage/store";

export const getPosts = (state: RootState) => state.post.posts;
