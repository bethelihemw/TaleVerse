import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import ChapterPage from "./pages/ChapterPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import CreateChapterPage from "./pages/CreateChapterPage";


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/story/:id" element={<StoryPage />} />
      <Route path="/chapter/:id" element={<ChapterPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />}/>
      <Route
  path="/create-chapter"
  element={<CreateChapterPage />}
/>
    </Routes>
  );
}

export default App;

// wondimnehbethelihem_db_user
// Vdg9tFyMqa1w83xH
// mongodb+srv://wondimnehbethelihem_db_user:Vdg9tFyMqa1w83xH@cluster0.wjtarnw.mongodb.net/
//mongodb+srv://wondimnehbethelihem_db_user:<db_password>@cluster0.wjtarnw.mongodb.net/?appName=Cluster0