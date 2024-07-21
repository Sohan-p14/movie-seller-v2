import React, { useState, useEffect } from 'react';
import ProfileDetails from '../components/ProfileDetails';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Simulate fetching profile data
    setProfile({
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@example.com',
    });
  }, []);

  const handleUpdate = (updatedProfile) => {
    // Logic to update profile info
    setProfile(updatedProfile);
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <ProfileDetails profile={profile} onUpdate={handleUpdate} />
    </div>
  );
};

export default Profile;
