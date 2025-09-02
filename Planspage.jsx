import { Link } from "react-router-dom";

export default function PlansPage() {
  return (
    <div className="page">
      <h2>Choose Your Plan</h2>

      <div className="plans-container">
        {/* Free Plan */}
        <div className="plan-card">
          <h3>Free Plan</h3>
          <p>Basic access to DEV@Deakin features.</p>
        </div>

        {/* Premium Plan */}
        <div className="plan-card">
          <h3>Premium Plan</h3>
          <p>Unlock themes, analytics, and extra features.</p>
          <Link to="/checkout">
            <button>Subscribe</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
