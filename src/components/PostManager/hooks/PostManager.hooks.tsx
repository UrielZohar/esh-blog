import { useEffect, useState } from 'react'
import { getPostById } from '../../../API/PostsManagerAPI/PostsManagerAPI'
import { Post } from '../../../Types/Post'

const usePost = (id: string) => {
  const [posts, setPost] = useState<Post | undefined>();
  useEffect(() => {
    getPostById(id)
      .then((res) => setPost(res))
  }, []);
  return posts
}

export { usePost }