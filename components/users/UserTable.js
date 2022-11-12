import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

function UserTable({ userObj }) {
  return (
    <Table>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>Active</th>
      </thead>
      <tbody>
        <tr>
          <td>{userObj.first_name}</td>
          <td>{userObj.last_name}</td>
          <td>{userObj.username}</td>
          <td>{userObj.active}</td>
        </tr>
      </tbody>
    </Table>
  );
}

UserTable.propTypes = {
  userObj: PropTypes.shape({
    username: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    active: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};

export default UserTable;
