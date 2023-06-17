import { Link } from "react-router-dom";



export default function Error() {
    return <div className="error-message">
    <h1>Oops!</h1>
    <p>It seems like you've stumbled upon a non-existing page.</p>
    <p>Don't worry, let's get you back on track:</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
}