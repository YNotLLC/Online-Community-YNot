import { useEffect, useState } from "react";
import { Post, PostState } from "../feature/post/postType";

const useCategoryFilter = (posts: PostState) => {
  const [news, setNews] = useState<Post[]>([]);
  const [memberOnlyContent, setMemberOnlyContent] = useState<Post[]>([]);
  useEffect(() => {
    if (posts.data) {
      let newsData = posts.data.filter((post) => {
        return post.category == "news";
      });
      setNews(newsData);

      let memberOnlyContentData = posts.data.filter((post) => {
        return post.category == "member-only-contents";
      });
      setMemberOnlyContent(memberOnlyContentData);
    }
  }, [posts]);

  return { news, memberOnlyContent };
};

export default useCategoryFilter;
