
import { Blog } from '../Blog/Blog'
import { Post } from '../../Types/Post'
import { usePosts } from './hooks/BlogManager.hooks'
const BlogManager: React.FC = () => {
  const posts: Post[] = usePosts();
  return (
    <Blog posts={posts} />  
  )
}

export { BlogManager }