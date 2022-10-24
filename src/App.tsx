import React, { useEffect } from 'react';
import cityApi from 'api/cityApi';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPage';
import { AdminLayout } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';

function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminLayout></AdminLayout>
          </PrivateRoute>
        }
      ></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

export default App;
