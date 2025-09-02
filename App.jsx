import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PlansPage from "./Planspage";
import CheckoutPage from "./CheckoutPage";
import PostPage from "./PostPage";
import './App.css';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/post">Post</Link>
      </nav>

      {/* Routes */}
      <div className="container">
        <Routes>
          <Route path="/" element={<h1>Welcome to DEV@Deakin</h1>} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/post" element={<PostPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
