import "./Contacts.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h1>Contact Me</h1>

      <div className="contact-container">
        <div className="contact-card">
          <h3>Email</h3>
          <p>abhishek@example.com</p>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <a
            href="https://github.com/abhishek"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/abhishek
          </a>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <a
            href="https://linkedin.com/in/abhishek"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/abhishek
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;