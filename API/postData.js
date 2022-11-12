import axios from 'axios';

const dbUrl = 'http://localhost:8088/posts';

const getAllPosts = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getPostByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/${userId}`)
    .then((postObject) => resolve(postObject.data))
    .catch(reject);
});

const getPostsByAuthorId = (authorId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}?author_id=${authorId}`)
    .then((response) => resolve((response.data)))
    .catch(reject);
});

const getSinglePost = (postId) => fetch(`http://localhost:8088/posts/${postId}`)
  .then((response) => response.json());

const createPost = (postObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}`, postObject)
    .then((createObject) => resolve(createObject.data))
    .catch(reject);
});

export {
  getAllPosts,
  getPostByUserId,
  getSinglePost,
  getPostsByAuthorId,
  createPost,
};
