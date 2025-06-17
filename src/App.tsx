// src/App.tsx
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Documents from "./pages/Documents";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="text-2xl p-16">
          <nav className="flex gap-4 px-4 text-gray-800 border-b-2 border-gray-200 pb-4">
            <NavLink to="/" className={({ isActive }) => `${isActive ? "font-bold text-blue-500" : "hover:underline hover:text-blue-500"}`}>
              Главная
            </NavLink>
            <NavLink to="/news" className={({ isActive }) => `${isActive ? "font-bold text-blue-500" : "hover:underline hover:text-blue-500"}`}>
              Новости
            </NavLink>
            <NavLink to="/documents" className={({ isActive }) => `${isActive ? "font-bold text-blue-500" : "hover:underline hover:text-blue-500"}`}>
              Документы
            </NavLink>
            <NavLink to="/contacts" className={({ isActive }) => `${isActive ? "font-bold text-blue-500" : "hover:underline hover:text-blue-500"}`}>
              Контакты
            </NavLink>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <footer className="bg-gray-100 text-sm text-gray-600 p-4">
          <div className="container mx-auto">
            <div className="flex flex-row md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <h3 className="font-semibold mb-1">СНТ «Луч»</h3>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-1">Адрес</h3>
                <p>620043, Свердловская область,<br />город Екатеринбург,<br />Чусовской тракт, д.5км</p>
              </div>
              <div className="text-center md:text-right">
                <h3 className="font-semibold mb-1">Контакты</h3>
                <p>+7 (343) 225-12-80</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
