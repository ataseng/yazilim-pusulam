import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/Home"
import About from "./components/About/About";
import Header from "./components/Header/Header";
import CoursePage from "./pages/CoursePage/CoursePage";
import Rnn from "./pages/Rnn/Rnn";
import Profile from "./pages/Profile/Profile";
import EditProfileMenti from "./pages/EditProfileMenti/EditProfileMenti"
import EditProfileMentor from "./pages/EditProfileMentor/EditProfileMentor"
import Login from "./pages/Login/Login";
import Mentor from "./pages/Mentor/Mentor";
import MentorPage from "./pages/MentorPage/MentorPage"


function App() {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/CoursePage/CoursePage" element={<CoursePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rnn/Rnn" element={<Rnn />} />
        <Route path="/Profile/Profile" element={<Profile/>} />
        <Route path="/EditProfileMenti/EditProfileMenti" element={<EditProfileMenti/>}/>
        <Route path="/EditProfileMentor/EditProfileMentor" element={<EditProfileMentor/>}/>
        <Route path="/Login/Login" element={<Login/>}/>
        <Route path="/Mentor/Mentor" element={<Mentor/>}/>
        <Route path="/MentorPage/MentorPage" element={<MentorPage/>}/>
      </Routes>
    </MainLayout>
  );
}

export default App;
