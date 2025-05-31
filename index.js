
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Delhi to Mussoorie Taxi | 5-Day Tour Packages | DwivediTravels</title>
        <meta name="description" content="Book Delhi to Mussoorie taxi with DwivediTravels. Explore Haridwar, Rishikesh, Dehradun, and Mussoorie in our 5-day tour package." />
        <meta name="keywords" content="Delhi to Mussoorie cab, taxi booking, Mussoorie tour package, Haridwar Rishikesh taxi, 5-day Uttarakhand tour" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Delhi to Mussoorie Tour | DwivediTravels" />
        <meta property="og:description" content="Book your car or traveller now for a memorable 5-day Uttarakhand tour." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dwiveditravels.vercel.app" />
        <meta property="og:image" content="/banner.jpg" />
        <link rel="canonical" href="https://dwiveditravels.vercel.app" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "DwivediTravels",
            "url": "https://dwiveditravels.vercel.app",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Delhi",
              "addressCountry": "India"
            },
            "sameAs": [
              "https://www.facebook.com/yourpage",
              "https://www.instagram.com/yourhandle"
            ]
        }) }} />
      </Head>

      <main style={{ padding: 20 }}>
        <h1 style={{ fontSize: 28, fontWeight: 'bold' }}>Delhi to Mussoorie Taxi & 5-Day Tour Packages</h1>
        <p>Book your ride from Delhi to Mussoorie covering Haridwar, Rishikesh, Dehradun, and more!</p>

        <h2>Booking Form</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
            <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required style={{ marginBottom: 10 }} />
            <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required style={{ marginBottom: 10 }} />
            <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required style={{ marginBottom: 10 }} />
            <button type="submit" style={{ backgroundColor: '#0070f3', color: 'white', padding: 10 }}>Submit</button>
          </form>
        ) : (
          <p>Thank you! We’ll contact you shortly.</p>
        )}
      </main>

      {/* WhatsApp Chat */}
      <a
        href="https://wa.me/918279489817"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "#25D366",
          borderRadius: "50%",
          width: 60,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          color: "white",
          fontSize: 30
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </>
  );
}
