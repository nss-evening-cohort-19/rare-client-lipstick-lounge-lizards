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
    .then((response) => {
      const body = { pk: response.data.name };
      axios.patch(`${dbUrl}/posts/${response.data.name}.json`, body).then(() => {
        getAllPosts(postObject.uid).then(resolve);
      });
    })
    .catch(reject);
});

export {
  getAllPosts, getPostByUserId, getPostsByAuthorId, getSinglePost, createPost,
};
