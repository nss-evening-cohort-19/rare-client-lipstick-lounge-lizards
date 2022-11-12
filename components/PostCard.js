import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

export default function PostCard({ postObj }) {
  return (
    <Card style={{ width: '25rem', margin: '5%' }}>
      <Card.Body>
        <div> {postObj.title}</div>
        <Card.Img variant="top" src={postObj.image_url} alt={postObj.title} style={{ height: '400px' }} />
        <Link href={`/Posts/${postObj.id}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/Posts/edit/${postObj.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

PostCard.propTypes = {
  postObj: PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number,
    category_id: PropTypes.number,
    category: PropTypes.number,
    title: PropTypes.string,
    publication_date: PropTypes.string,
    image_url: PropTypes.string,
    content: PropTypes.string,
    approved: PropTypes.number,
  }).isRequired,
};
