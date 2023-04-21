import  { Suspense } from "react";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
import { MainPage,DoctorsList,Medicines,Profile,Predictor, Login, Signup } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/doctors" element={<DoctorsList />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/predictor" element={<Predictor />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
