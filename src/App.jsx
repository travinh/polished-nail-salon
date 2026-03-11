import { useMemo, useRef, useState } from "react";

const BOOKING_LINK =
  "https://nailsolutionplus.firebaseapp.com/?storeKey=-OG0RRmPtQSX5tBZxjf__NEW";
const PHONE_DISPLAY = "303-452-1652";
const PHONE_LINK = "3034521652";
const ADDRESS = "14372 Lincoln St, Thornton, CO 80023";
const INSTAGRAM = "https://www.instagram.com/polished_nailsalon/";
const TIKTOK = "https://www.tiktok.com/@polishednailthornton";
const GOOGLE_REVIEW_LINK =
  "https://www.google.com/search?q=Polished+Nail+Salon+Thornton+CO";

const services = [
  {
    name: "Pedicure",
    price: "$36+",
    desc: "Relaxing soak, exfoliation, massage, and premium finishing touch.",
  },
  {
    name: "Gel Manicure",
    price: "$42+",
    desc: "Long-lasting shine with a clean, polished finish for everyday elegance.",
  },
  {
    name: "Acrylic Full Set",
    price: "$47+",
    desc: "Trending magnetic cateye and chrome effects for eye-catching looks.",
  },
  {
    name: "Builder Gel",
    price: "$65+",
    desc: "Detailed texture, accents, and statement artistry for standout sets.",
  },
  {
    name: "Gel X",
    price: "$60+",
    desc: "Durable, lightweight wear with a smooth polished appearance.",
  },
  {
    name: "Dipping",
    price: "$50+",
    desc: "Customized shaping and finish designed around your style.",
  },
];

const team = [
  {
    name: "Vinh Tran",
    role: "Manager",
    specialty: "Manage the team!",
  },
  {
    name: "Kate",
    role: "Senior Nail Artist",
    specialty: "Cateye, Chrome, Luxury sets",
  },
  {
    name: "Sammy",
    role: "Senior Technician",
    specialty: "Experience, Builder Gel, Gel X, Acrylic, Soft Glam Designs",
  },
  {
    name: "Kane",
    role: "Nail Artist",
    specialty: "Acrylic, Talent, Young and Wild",
  },
  {
    name: "Annie",
    role: "Senior Nail Technician",
    specialty: "Nails and Pedicure Experienced",
  },
  {
    name: "Mi",
    role: "Nail Artist",
    specialty: "Buider Gel, Tap Gel, Gel X and Design",
  },
  {
    name: "Nina",
    role: "Senior Nail Technician",
    specialty: "Gel Manicure and Pedicure",
  },
  {
    name: "Karen",
    role: "Senior Nail Technician",
    specialty: "Acrylic & Pedicure",
  },
  {
    name: "Ada",
    role: "Senior Nail Technician",
    specialty: "Acrylic, Tap, Builder Gel & Pedicure",
  },
];

const instagramFeed = [
  {
    id: "ig1",
    title: "Chrome Nail Design",
    image: "gallery/chrome-nail.JPG",

    href: INSTAGRAM,
  },
  {
    id: "ig2",
    title: "Luxury Nude Set",
    image: "gallery/chrome-nail.JPG",
    href: INSTAGRAM,
  },
  {
    id: "ig3",
    title: "Cateye Nails",
    image: "gallery/chrome-nail.JPG",
    href: INSTAGRAM,
  },
  {
    id: "ig4",
    title: "Pedicure Spa",
    image: "gallery/chrome-nail.JPG",
    href: INSTAGRAM,
  },
];

const reviews = [
  {
    name: "Sophia",
    text: "Beautiful nails, friendly service, and such a clean salon. I booked my next appointment before leaving.",
  },
  {
    name: "Emily",
    text: "The cateye design turned out amazing and lasted so well. One of my favorite nail appointments in Thornton.",
  },
  {
    name: "Jessica",
    text: "Loved the pedicure experience. Relaxing, professional, and very detail-oriented team.",
  },
];

const promotions = [
  "10% off your first visit",
  "Ask about our rebooking perk before you check out",
  "Follow us on Instagram and TikTok for fresh nail inspiration",
];

const sampleGallery = [
  {
    id: "g1",
    title: "Chrome Green",
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g2",
    title: "Luxury Nude",
    src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g3",
    title: "Spa Pedicure",
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g4",
    title: "Cateye Set",
    src: "/gallery/chrome-nail.JPG",
  },
  {
    id: "g5",
    title: "Glossy Finish",
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g6",
    title: "Pink Details",
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
  },
];

const hours = [
  ["Monday", "9:30 AM – 7:00 PM"],
  ["Tuesday", "9:30 AM – 7:00 PM"],
  ["Wednesday", "9:30 AM – 7:00 PM"],
  ["Thursday", "9:30 AM – 7:00 PM"],
  ["Friday", "9:30 AM – 7:00 PM"],
  ["Saturday", "9:30 AM – 6:00 PM"],
  ["Sunday", "10:30 AM – 5:00 PM"],
];

const styles = `
  * { box-sizing: border-box; }
  html, body, #root {
  margin: 0;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}
  html { scroll-behavior: smooth; }
  :root {
  --bg: #1b1f28;
  --card: rgba(255,255,255,0.08);
  --border: rgba(255,255,255,0.12);
  --accent: #c8ff52;
  --text: #f5f7fb;
  --subtext: #c6ccd6;
}
  body {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #0d0d11;
  color: #f4f5f7;
}

.site {
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background:
    radial-gradient(circle at top left, rgba(203, 255, 88, 0.22), transparent 28%),
    radial-gradient(circle at top right, rgba(255, 255, 255, 0.1), transparent 22%),
    radial-gradient(circle at center, rgba(120, 180, 255, 0.08), transparent 30%),
    linear-gradient(180deg, #14161c 0%, #1b1f28 45%, #232734 100%);
}

.container {
  width: calc(100% - 32px);
  max-width: 1200px;
  margin: 0 auto;
}
  a { text-decoration: none; color: inherit; }
  img { display: block; max-width: 100%; }
  
  .promo-bar {
    background: rgba(202, 255, 88, 0.12);
    border-bottom: 1px solid rgba(202, 255, 88, 0.18);
    color: #dfff9f;
    text-align: center;
    padding: 12px 18px;
    font-size: 14px;
    letter-spacing: 0.01em;
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 20px 0;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 14px;
    min-width: 0;
  }
  .brand-logo {
    width: 64px;
    height: 64px;
    object-fit: contain;
    background: rgba(255,255,255,0.06);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 6px;
  }
  .brand-title {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.1;
  }
  .brand-title span { color: var(--accent); }
  .nav-links {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    color: #d0d3db;
    font-size: 14px;
  }
  .hero {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 28px;
    align-items: stretch;
    padding: 22px 0 48px;
  }
  .hero-card,
  .glass,
  .service-card,
  .team-card,
  .review-card,
  .promo-card,
  .hours-card,
  .gallery-card,
  .contact-card {
    background: var(--card);
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 14px 50px rgba(0,0,0,0.22);
    backdrop-filter: blur(12px);
  }
 .hero-card {
  border-radius: 34px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 20px 60px rgba(0,0,0,0.28);
  backdrop-filter: blur(12px);
}
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    padding: 10px 14px;
    border-radius: 999px;
    background: rgba(202,255,88,0.14);
    color: #dfff9f;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 18px;
  }
  h1 {
    margin: 0;
    font-size: clamp(40px, 5vw, 68px);
    line-height: 0.96;
    letter-spacing: -0.04em;
  }
  h1 span { color: #cbff58; }
  .hero-text {
    margin: 18px 0 0;
    color: #c9ced8;
    font-size: 17px;
    line-height: 1.8;
    max-width: 620px;
  }
  .button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 24px;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    padding: 0 20px;
    border-radius: 16px;
    font-weight: 700;
    border: 1px solid rgba(255,255,255,0.12);
    background: rgba(255,255,255,0.06);
    color: #fff;
    transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease;
  }
  .btn:hover { transform: translateY(-1px); background: rgba(255,255,255,0.10); }
  .btn-primary {
    background: #cbff58;
    color: #101010;
    border-color: #cbff58;
  }
  .btn-primary:hover { background: #d8ff82; }
  .feature-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    margin-top: 28px;
  }
  .feature {
    padding: 16px 14px;
    border-radius: 18px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.07);
    color: #d6dae1;
    font-size: 14px;
    line-height: 1.5;
  }
 .hero-visual {
  border-radius: 34px;
  overflow: hidden;
  min-height: 620px;
  position: relative;
  background: linear-gradient(135deg, #2a2f3a, #181b22);
  border: 1px solid rgba(255,255,255,0.10);
  box-shadow: 0 20px 60px rgba(0,0,0,0.28);
}
  .hero-visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .floating-badge {
    position: absolute;
    right: 18px;
    bottom: 18px;
    padding: 14px 16px;
    border-radius: 20px;
    background: rgba(15,15,18,0.72);
    border: 1px solid rgba(255,255,255,0.12);
    backdrop-filter: blur(10px);
    color: #fff;
    font-size: 14px;
    line-height: 1.5;
  }
  .section {
  padding: 28px 0 12px;
  overflow-x: hidden;
}
  .section-head {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 18px;
    margin-bottom: 18px;
  }
  h2 {
    margin: 0;
    font-size: clamp(28px, 4vw, 42px);
    line-height: 1.05;
    letter-spacing: -0.03em;
  }
  .section-sub {
    margin: 8px 0 0;
    color: #b7bcc7;
    line-height: 1.7;
    max-width: 700px;
  }
  .service-grid,
  .review-grid,
  .promo-grid,
  .gallery-grid,
  .contact-grid {
    display: grid;
    gap: 18px;
  }
  .service-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .review-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .promo-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .gallery-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .contact-grid { grid-template-columns: 1.1fr 0.9fr; }
  .team-wrap {
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.team-grid {
  display: flex;
  gap: 18px;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  max-width: 100%;
  padding: 6px 4px 14px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.team-grid::-webkit-scrollbar {
  height: 8px;
}

.team-grid::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.22);
  border-radius: 999px;
}

.team-card {
  border-radius: 28px;
  padding: 22px;
  min-width: 260px;
  max-width: 260px;
  flex: 0 0 260px;
  scroll-snap-align: start;
  background: linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.05));
  border: 1px solid var(--border);
}

.team-actions {
  display: flex;
  gap: 10px;
}

.team-arrow {
  width: 46px;
  height: 46px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.06);
  color: var(--text);
  font-size: 22px;
  cursor: pointer;
}

.team-arrow:hover {
  background: rgba(255,255,255,0.12);
}

.team-photo {
  height: 190px;
  border-radius: 20px;
  margin-bottom: 16px;
  background: linear-gradient(145deg, #262a33, #12151b);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8d95a2;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.team-role {
  color: var(--accent);
  font-weight: 700;
  margin: 6px 0 8px;
}

.team-specialty {
  color: var(--subtext);
  line-height: 1.6;
}

  .service-card p,
  .team-card p,
  .review-card p,
  .promo-card p,
  .hours-card p,
  .contact-card p,
  .gallery-caption {
    margin: 0;
    color: #c6ccd6;
    line-height: 1.7;
  }
  .review-stars {
    color: #cbff58;
    margin-bottom: 10px;
    letter-spacing: 2px;
    font-size: 18px;
  }
  .promo-card {
    background: linear-gradient(145deg, rgba(203,255,88,0.16), rgba(255,255,255,0.05));
  }
  .gallery-toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }
  .upload-input { display: none; }
  .upload-label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 18px;
    border-radius: 15px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    cursor: pointer;
    font-weight: 700;
  }
  .upload-note {
    color: #aeb4bf;
    font-size: 14px;
  }
  .gallery-card {
    padding: 0;
    overflow: hidden;
  }
  .gallery-card img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
  .gallery-meta {
    padding: 14px 16px 16px;
  }
  .hours-table {
    display: grid;
    gap: 10px;
    margin-top: 8px;
  }
  .hours-row {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    color: #d6d9e0;
  }
  .map-wrap {
    overflow: hidden;
    border-radius: 28px;
    min-height: 420px;
    padding: 0;
  }
  .map-wrap iframe {
    width: 100%;
    height: 100%;
    min-height: 420px;
    border: 0;
  }
  .footer {
    padding: 40px 0 60px;
    color: #9ea5b2;
    font-size: 14px;
  }
  .footer-line {
    border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: 22px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
  }
    .instagram-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.instagram-card {
  overflow: hidden;
  border-radius: 24px;
  background: var(--card);
  border: 1px solid var(--border);
  box-shadow: 0 14px 50px rgba(0,0,0,0.22);
}

.instagram-card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.instagram-meta {
  padding: 14px 16px 18px;
}

.instagram-meta p {
  margin: 6px 0 0;
  color: var(--subtext);
  line-height: 1.6;
}
  @media (max-width: 1080px) {
    .hero,
    .contact-grid { grid-template-columns: 1fr; }
    .service-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .review-grid,
    .promo-grid,
    .gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .feature-list { grid-template-columns: 1fr; }
    .instagram-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (max-width: 720px) {
    .nav { flex-direction: column; align-items: flex-start; }
    .nav-links { gap: 10px 14px; }
    .hero-card { padding: 24px; }
    .hero-visual { min-height: 340px; }
    .service-grid,
    .review-grid,
    .promo-grid,
    .gallery-grid { grid-template-columns: 1fr; }
    .container { width: min(100% - 20px, 1200px); }
    .instagram-grid { grid-template-columns: 1fr; }
  }
`;

function GalleryCard({ item }) {
  return (
    <article className="gallery-card glass">
      <img
        src={item.src}
        alt={`${item.title} nail design at Polished Nail Salon in Thornton Colorado`}
      />
      <div className="gallery-meta">
        <strong>{item.title}</strong>
        <p className="gallery-caption">
          Fresh work and inspiration for your next appointment.
        </p>
      </div>
    </article>
  );
}

export default function App() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const teamRef = useRef(null);

  const scrollTeam = (direction) => {
    if (!teamRef.current) return;
    const amount = 300;
    teamRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const galleryItems = useMemo(() => {
    return [...uploadedImages, ...sampleGallery];
  }, [uploadedImages]);

  return (
    <>
      <style>{styles}</style>
      <div className="site">
        <div className="promo-bar">
          New guests 10% on the first visit • Book online or call{" "}
          {PHONE_DISPLAY}
        </div>

        <div className="container">
          <nav className="nav">
            <div className="brand">
              <img
                src="/logo.png"
                alt="Polished Nail Salon logo"
                className="brand-logo"
              />
              <div className="brand-title">
                Polished <span>Nail Salon</span>
              </div>
            </div>
            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#team">Team</a>
              <a href="#gallery">Gallery</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <section className="hero">
            <div className="hero-card glass">
              <div className="eyebrow">
                Thornton, Colorado • Luxury nail care
              </div>
              <h1>
                Nails that feel <span>elevated</span>
              </h1>

              <p className="hero-text">
                Polished Nail Salon is a nail salon in Thornton, Colorado
                specializing in cateye nails, chrome nails, gel manicures, spa
                pedicures, and luxury nail art.
              </p>

              <div className="button-row">
                <a
                  className="btn btn-primary"
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Now
                </a>

                <a className="btn" href={`tel:${PHONE_LINK}`}>
                  Call {PHONE_DISPLAY}
                </a>

                <a
                  className="btn"
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>

                <a
                  className="btn"
                  href={TIKTOK}
                  target="_blank"
                  rel="noreferrer"
                >
                  TikTok
                </a>
              </div>
              <div className="feature-list">
                <div className="feature">
                  Trend-forward looks: cateye, chrome, texture, and detailed
                  finishes.
                </div>
                <div className="feature">
                  Easy booking flow with direct booking link and quick contact
                  options.
                </div>
                <div className="feature">
                  Designed to build trust fast with services, gallery, reviews,
                  and promotions.
                </div>
              </div>
            </div>

            <div className="hero-visual glass">
              {" "}
              <img
                src="/hero.jpg"
                alt="Chrome cateye nail design at Polished Nail Salon in Thornton Colorado"
              />{" "}
              <div className="floating-badge">
                {" "}
                <strong>Polished Nail Salon</strong> <br /> Bookings available
                online now{" "}
              </div>{" "}
            </div>
          </section>

          <section className="section" id="services">
            <div className="section-head">
              <div>
                <h2>Services & Pricing</h2>
                <p className="section-sub">
                  This section should mirror the way strong salon sites present
                  their menu: clean cards, clear starting prices, and simple
                  service descriptions.
                </p>
              </div>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.name}>
                  <h3>{service.name}</h3>
                  <div className="service-price">{service.price}</div>
                  <p>{service.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="team">
            <div className="section-head">
              <div>
                <h2>Meet the Team</h2>
                <p className="section-sub">
                  Meet our talented technicians. Scroll to see the full team.
                </p>
              </div>

              <div className="team-actions">
                <button
                  type="button"
                  className="team-arrow"
                  onClick={() => scrollTeam("left")}
                  aria-label="Scroll team left"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="team-arrow"
                  onClick={() => scrollTeam("right")}
                  aria-label="Scroll team right"
                >
                  →
                </button>
              </div>
            </div>

            <div className="team-wrap">
              <div className="team-grid" ref={teamRef}>
                {team.map((member) => (
                  <article className="team-card" key={member.name}>
                    <div className="team-photo">Add staff photo</div>
                    <h3>{member.name}</h3>
                    <div className="team-role">{member.role}</div>
                    <p className="team-specialty">{member.specialty}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="gallery">
            <div className="section-head">
              <div>
                <h2>Gallery</h2>
                <p className="section-sub">
                  The reference style uses strong visuals. This gallery is
                  styled to feel premium and lets you preview uploaded images
                  instantly.
                </p>
              </div>
            </div>
            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          </section>
          <section className="section" id="instagram">
            <div className="section-head">
              <div>
                <h2>Latest from Instagram</h2>
                <p className="section-sub">
                  Follow Polished Nail Salon for fresh cateye, chrome, texture,
                  and luxury nail inspiration.
                </p>
              </div>
              <a
                className="btn"
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
              >
                Open Instagram
              </a>
            </div>

            <div className="instagram-grid">
              {instagramFeed.map((post) => (
                <a
                  key={post.id}
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="instagram-card"
                >
                  <img
                    src={post.image}
                    alt={`${post.title} from Polished Nail Salon Instagram`}
                  />
                  <div className="instagram-meta">
                    <strong>{post.title}</strong>
                    <p>Tap to see more from @polished_nailsalon</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="section" id="reviews">
            <div className="section-head">
              <div>
                <h2>Client Reviews</h2>
                <p className="section-sub">
                  Short, trust-building reviews help first-time visitors feel
                  comfortable booking.
                </p>
              </div>
            </div>
            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-stars">★★★★★</div>
                  <p>“{review.text}”</p>
                  <p style={{ marginTop: 14 }}>
                    <strong>— {review.name}</strong>
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="section-head">
              <div>
                <h2>Current Promotions</h2>
                <p className="section-sub">
                  This gives you the promotional feel that many high-converting
                  salon sites use near the middle or lower homepage.
                </p>
              </div>
            </div>
            <div className="promo-grid">
              {promotions.map((promo) => (
                <article className="promo-card" key={promo}>
                  <h3>Special Offer</h3>
                  <p>{promo}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="contact">
            <div className="section-head">
              <div>
                <h2>Visit & Contact</h2>
                <p className="section-sub">
                  A polished nail salon site should make directions, hours,
                  reviews, and booking easy to find in one place.
                </p>
              </div>
            </div>
            <div className="contact-grid">
              <div className="map-wrap glass">
                <iframe
                  title="Polished Nail Salon map"
                  src="https://www.google.com/maps?q=14372%20Lincoln%20St%2C%20Thornton%2C%20CO%2080023&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div style={{ display: "grid", gap: 18 }}>
                <article className="hours-card">
                  <h3>Hours</h3>
                  <div className="hours-table">
                    {hours.map(([day, time]) => (
                      <div className="hours-row" key={day}>
                        <span>{day}</span>
                        <strong>{time}</strong>
                      </div>
                    ))}
                  </div>
                </article>
                <article className="contact-card">
                  <h3>Contact</h3>
                  <p>{ADDRESS}</p>
                  <p style={{ marginTop: 10 }}>{PHONE_DISPLAY}</p>
                  <div className="button-row" style={{ marginTop: 18 }}>
                    <a
                      className="btn btn-primary"
                      href={BOOKING_LINK}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Book Appointment
                    </a>
                    <a
                      className="btn"
                      href={GOOGLE_REVIEW_LINK}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Leave a Review
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="contact-card">
              <h2>Nail Salon in Thornton, Colorado</h2>
              <p>
                Polished Nail Salon proudly serves Thornton, North Denver,
                Westminster, Broomfield, Brighton, and nearby communities. We
                specialize in cateye nails, chrome nails, gel manicures, spa
                pedicures, and luxury nail art with easy online booking.
              </p>
            </div>
          </section>

          <footer className="footer">
            <div className="footer-line">
              <div>© {new Date().getFullYear()} Polished Nail Salon</div>
              <div>{ADDRESS}</div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
