import { Status } from "../../lib/redux/type";

export interface Post {
  categories: string;
  title: string;
  content: string;
  uploadedAt: string;
}

export interface PostState {
  data: Post[];
  status: Status;
}
