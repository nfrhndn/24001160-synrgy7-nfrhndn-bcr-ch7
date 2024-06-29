import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Profile: React.FC = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    return <p>User Not Available</p>;
  }

  const { name } = userContext;

  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>
      </p>
    </div>
  );
};

export default Profile;
