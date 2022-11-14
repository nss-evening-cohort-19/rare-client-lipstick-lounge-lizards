import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

function ProfileCard({ userObj }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={userObj.profile_image_url} />
        <Card.Body>
          <Card.Text>{userObj.first_name} {userObj.last_name}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Username: {userObj.username}</Card.Title>
          <Card.Title>Email: {userObj.email}</Card.Title>
          <Card.Title>Account Created On: {userObj.created_on}</Card.Title>
          <Card.Title>{userObj.active === 'Yes' ? 'Active Account' : 'Deactive Account'}</Card.Title>
          <Link href={`/posts/${userObj.id}`} passHref>Author of # posts</Link>
        </Card.Body>
      </Card>
      <div>
        <Button variant="outline-dark">Subscribe</Button>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  userObj: PropTypes.shape({
    id: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    bio: PropTypes.string,
    username: PropTypes.string,
    profile_image_url: PropTypes.string,
    created_on: PropTypes.string,
    active: PropTypes.bool,
  }).isRequired,
};

export default ProfileCard;
