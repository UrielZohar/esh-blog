import { useParams } from "react-router-dom"
import { PostComponent } from "../Post/Post";
import { usePost } from './hooks/PostManager.hooks'

const PostManager: React.FC = () => {
  const { postId } = useParams();

  const post = usePost(postId!)!;
  return (
    <div>
      {post && <PostComponent post={post} />}
    </div>
  )
}

export { PostManager }