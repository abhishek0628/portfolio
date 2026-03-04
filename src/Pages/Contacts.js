import "../Style/Contacts.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h1>Contact Me</h1>

      <div className="contact-container">
        <div className="contact-card">
          <h3>Email</h3>
          <p>abhijnv124@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <a
            href="https://github.com/abhishek0628"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/abhishek
          </a>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/abhishek-kumar-176467257"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/abhishek
          </a>
        </div>
        <div className="contact-card">
          <h3>LeetCode</h3>
          <a
            href="https://leetcode.com/u/abhinitc9044/"
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