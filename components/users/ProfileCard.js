import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function ProfileCard({ userObj }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={userObj.profile_image_url} />
        <Card.Body>
          <Card.Text>{userObj.first_name}{userObj.last_name}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>${userObj.username}</Card.Title>
          <Card.Title>${userObj.email}</Card.Title>
          <Card.Title>${userObj.created_on}</Card.Title>
          <Card.Title>${userObj.active}</Card.Title>
          <Card.Link href="#">Number of posts:</Card.Link>
        </Card.Body>
      </Card>
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
  }),
};

ProfileCard.defaultProps = {
  userObj: {},
};

export default ProfileCard;
