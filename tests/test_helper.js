const Blog = require('../models/blog')
const initialBlogs = [
    {
        title: 'First Blog',
        author: 'Robot_1',
        url: 'www.nonexistentsite.com/1',
        likes: 1
    },
    {
        title: 'Second Blog',
        author: 'Robot_1',
        url: 'www.nonexistentsite.com/2',
        likes: 0
    },
    {
        title: 'Third Blog',
        author: 'Robot_1',
        url: 'www.nonexistentsite.com/3',
        likes: 0
    }
]

const blogsInDb = () => {
    const blogs = Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

module.exports = {
    initialBlogs,
    blogsInDb
}