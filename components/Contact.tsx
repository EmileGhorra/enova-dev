export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container max-w-3xl mx-auto">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="section-subtitle">Let’s build something extraordinary together.</p>
        <form className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input type="text" name="name" placeholder="Name" aria-label="Name" required />
            <input type="email" name="email" placeholder="Email" aria-label="Email" required />
          </div>
          <textarea name="message" placeholder="Message" aria-label="Message" required />
          <button type="submit" className="btn-primary w-full md:w-auto">Submit</button>
        </form>
      </div>
    </section>
  );
}
