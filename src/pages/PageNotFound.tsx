import "./PageNotFound.css";
import MagnifyingGlass from "../assets/404.png";

export default function PageNotFound() {
  return (
    <section className="pageNotFound-section">
      <h1>Oops! Page Not Found</h1>
      <p>Sorry, the page you are looking for is not available.</p>
      <img src={MagnifyingGlass} alt="magnifying glass with question mark" />
    </section>
  );
}
