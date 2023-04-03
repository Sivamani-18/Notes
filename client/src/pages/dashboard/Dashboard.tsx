import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  const location = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      location('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout} type='button'>
        Log out
      </button>
    </div>
  );
};
