const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('./test_helper')

beforeEach(() => {
    Blog.deleteMany({})
    Blog.insertMany(helper.initialBlogs)
})
test('blog posts are returned in JSON format', () => {

})

test('the correct amount of blog posts are returned', () => {

})

afterAll(() => {
    mongoose.connection.close()
})