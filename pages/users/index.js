import { useEffect, useState } from 'react';
import { getAllUsers } from '../../api/userData';
import UserTable from '../../components/users/UserTable';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((userArr) => {
      setUsers(userArr);
    });
  });

  return (
    <>
      <h1>USERS</h1>
      <div className="d-flex flex-wrap">
        {users.map((user) => (
          <UserTable key={user.id} userObj={user} />
        ))}
      </div>
    </>
  );
}
