import { Post } from '../../Types/Post'

const root = 'https://dummyjson.com/posts'

const getAllPosts = async (): Promise<Post[]> => {
    const response = await fetch(`${root}`)
    const data = await response.json()
    return data.posts
}

const getPostById = async (id: string): Promise<Post> => {
    const response = await fetch(`${root}/${id}`)
    const data = await response.json()
    return data
}

export {
    getAllPosts,
    getPostById,
}