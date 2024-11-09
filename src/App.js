import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import PrincipalDashboard from './pages/PrincipalDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import { userReducer, getInitialState } from './reducer/userReducer';
import { useReducer } from 'react';


function App() {
  const [state, dispatch] = useReducer(userReducer, getInitialState());

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login state={state} dispatch={dispatch} />} />
        <Route path="/principal-dashboard" element={<PrincipalDashboard state={state} dispatch={dispatch} />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard state={state} dispatch={dispatch} />} />
        <Route path="/student-dashboard" element={<StudentDashboard state={state} dispatch={dispatch} />} />
      </Routes>
    </Router>
  );
}

export default App;
