import React, { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import { Dashboard } from '../pages/dashboard/Dashboard';

interface ApprouteProps {}

export const Approute: React.FC<ApprouteProps> = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={user ? <Navigate to='/dashboard' /> : <Login />}
        />
        <Route
          path='/signup'
          element={user ? <Navigate to='/dashboard' /> : <Signup />}
        />
        <Route
          path='/dashboard'
          element={user ? <Dashboard /> : <Navigate to='/' />}
        />
      </Routes>
    </BrowserRouter>
  );
};
