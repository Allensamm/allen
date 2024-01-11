import { Link } from "react-router-dom";
export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div className="calltoaction">
        <h1>Let's build a brand.</h1>
        <button>
          <Link className="link" to={"https://allensamuel569@gmail.com"}>
            say Hello
          </Link>
        </button>
      </div>
    </section>
  );
}
