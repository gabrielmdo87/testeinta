import { MoreHorizontal } from "lucide-react";
import avatarPost from "@/assets/avatar-post.jpg";
import postImage from "@/assets/post-image.jpg";

const Post = () => {
  return (
    <article className="mt-2">
      {/* Post Header */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <img
            src={avatarPost}
            alt="User avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-foreground">bel*****</span>
        </div>
        <button className="text-foreground">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post Image */}
      <div className="relative w-full">
        <img
          src={postImage}
          alt="Post content"
          className="w-full object-cover"
        />
      </div>
    </article>
  );
};

export default Post;
