import React, { useState } from 'react';

const UpdateInfo = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reenterNewPassword, setReenterNewPassword] = useState('');

  const handleUpdate = () => {
    // Logic to update user info
  };

  return (
    <div>
      <h1>Update Info</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Old Password:</label>
          <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
        </div>
        <div>
          <label>New Password:</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div>
        <div>
          <label>Re-enter New Password:</label>
          <input type="password" value={reenterNewPassword} onChange={(e) => setReenterNewPassword(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateInfo;
