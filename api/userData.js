import axios from 'axios';

const dbUrl = 'http://localhost:8088/users';

const getAllUsers = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}`)
    .then((userObj) => resolve(userObj.data))
    .catch(reject);
});

const getUserByUid = (id) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/${id}`)
    .then((userObj) => resolve(userObj.data))
    .catch(reject);
});

export { getUserByUid, getAllUsers };
