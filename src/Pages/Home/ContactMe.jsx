import { Link } from "react-router-dom";
export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div className="calltoaction">
        <h1 className="text-white font-extrabold">Let's build a brand.</h1>
        <button>
          <Link className="link px-10 py-3 rounded-full" to={"https://allensamuel569@gmail.com"}>
            Let's Collaborate
          </Link>
        </button>
      </div>
    </section>
  );
}
