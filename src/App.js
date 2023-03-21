import  { Suspense } from "react";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
import { MainPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
