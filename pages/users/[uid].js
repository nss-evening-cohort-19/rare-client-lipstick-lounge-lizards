import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getUserByUid } from '../../API/userData';
import ProfileCard from '../../components/users/ProfileCard';

export default function UserProfilePage() {
  const [user, setUser] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const getTheProfileInfo = () => {
    getUserByUid(id).then(setUser);
  };

  useEffect(() => {
    getTheProfileInfo();
  }, []);

  return (
    <div>
      <ProfileCard userObj={user} />
    </div>
  );
}
