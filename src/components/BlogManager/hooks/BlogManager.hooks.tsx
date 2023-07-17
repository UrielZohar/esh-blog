import { useEffect, useState } from 'react'
import { getAllPosts } from '../../../API/PostsManagerAPI/PostsManagerAPI'
import { Post } from '../../../Types/Post'


const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getAllPosts()
      .then((res: Post[]) => setPosts(res))
  }, []);
  return posts
}

export { usePosts }