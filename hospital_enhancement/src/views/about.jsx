import Header from "./header";
import "../styles/about.css";
export default function About() {
  console.log("its in about page");
  return (
    <div>
      <Header />
      <div className="about-main">this is about page</div>
    </div>
  );
}
