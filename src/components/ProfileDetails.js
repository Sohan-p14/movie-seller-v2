import React from 'react';
import { Link } from 'react-router-dom';

const ProfileDetails = ({ profile, onUpdate }) => {
  return (
    <div>
      <h1>Profile Details</h1>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Username:</strong> {profile.username}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <Link to="/update-info">Update Info</Link>
    </div>
  );
};

export default ProfileDetails;
