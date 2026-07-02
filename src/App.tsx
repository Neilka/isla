import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import BookDetail from "@/pages/BookDetail";
import NotesPage from "@/pages/NotesPage";
import Toast from "@/components/Toast";

export default function App() {
  return (
    <Router>
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/book/:id/notes" element={<NotesPage />} />
      </Routes>
    </Router>
  );
}