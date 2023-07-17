import { Post } from "../../Types/Post"
// Implemented by DummyJSON
import * as PostsImplementationAPI from "../PostsDummyJsonAPI/PostsDummyJsonAPI"

const getAllPosts = async (): Promise<Post[]> => {
  try {
    const response: Post[] = await PostsImplementationAPI.getAllPosts()
    return response
  } catch {
    alert('Server Error: Could not get posts')
    return []
  }  
}

const getPostById = async (id: string): Promise<Post | undefined> => {
  try {
    const response = await PostsImplementationAPI.getPostById(id)
    return response
  } catch {
    alert('Server Error: Could not get post')
  }
}

export {
  getAllPosts,
  getPostById,
}