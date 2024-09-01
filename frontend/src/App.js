
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import User from './Components/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

export const config = {
  endpoint: 'https://user-project-k4qd.onrender.com/users',
};

function App() {
  return (
    <SnackbarProvider>
      <Router>
        <Routes>
          <Route path="/users" element={<User />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
