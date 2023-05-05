import { Layout } from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'Pages/HomePage';
import { AddUserPage } from 'Pages/AddUserPage';

export const App = () => {
  return (
    <Routes basename="/redux-test">
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="add" element={<AddUserPage />} />
      </Route>
    </Routes>
  );
};
