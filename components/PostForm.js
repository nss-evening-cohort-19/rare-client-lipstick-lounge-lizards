import { React, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { createPost, getAllPosts } from '../API/postData';

const initialState = {
  user_id: null,
  category_id: null,
  image_url: '',
  title: '',
  content: '',
  publication_date: new Date().toLocaleDateString(),
  approved: 'approved',
};

function PostForm({ updateObject }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    getAllPosts();
  }, []);

  useEffect(() => {
    if (updateObject) {
      setFormInput(updateObject);
    }
  }, [updateObject]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(formInput).then(() => router.push('/posts/allposts'));
  };

  return (
    <Form>
      <Form.Group className="mb-3" name="formImageUrl">
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" name="image_url" value={formInput.image_url} onChange={handleChange} placeholder="Post Image Url" />
      </Form.Group>
      <Form.Group className="mb-3" name="formPostTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={formInput.title} onChange={handleChange} placeholder="Enter Post Title" />
      </Form.Group>
      <Form.Group className="mb-3" name="formContent">
        <Form.Label>Post Content</Form.Label>
        <Form.Control as="textarea" name="content" rows={5} onChange={handleChange} value={formInput.content} placeholder="Post Content" />
      </Form.Group>
      <Button variant="primary" type="submit" className="submitButton" onClick={handleSubmit}>
        {updateObject.id ? 'Update' : 'Submit'}
      </Button>
    </Form>
  );
}

PostForm.propTypes = {
  updateObject: PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.string,
    category_id: PropTypes.number,
    image_url: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    publication_date: PropTypes.string,
    approved: PropTypes.string,
  }),
};

PostForm.defaultProps = {
  updateObject: initialState,
};

export default PostForm;
