import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import StudentList from "./components/Students/StudentList";
import StudentDetails from "./components/Students/StudentDetails";
import AddStudent from "./components/Students/AddStudent";
import EditStudent from "./components/Students/EditStudent";
import TeacherList from "./components/Teachers/TeacherList";
import TeacherDetails from "./components/Teachers/TeacherDetails";
import AddTeacher from "./components/Teachers/AddTeacher";
import EditTeacher from "./components/Teachers/EditTeacher";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>

            <Route path="students">
              <Route index element={<StudentList />}></Route>
              <Route path=":id" element={<StudentDetails />}></Route>
              <Route path="add" element={<AddStudent />}></Route>
              <Route path="edit/:id" element={<EditStudent />}></Route>
            </Route>
            <Route path="teachers">
              <Route index element={<TeacherList />}></Route>
              <Route path=":id" element={<TeacherDetails />}></Route>
              <Route path="add" element={<AddTeacher />}></Route>
              <Route path="edit/:id" element={<EditTeacher />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
