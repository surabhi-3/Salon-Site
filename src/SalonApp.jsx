import React, { useState, useEffect, useMemo } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from './assets/logo.jpg'; // adjust path if needed

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
/* ======================= 
   Services Data (all categories)
   ======================= */
/* ======================= Services Data (all categories) ======================= */
 const servicesData = [{ category: "Hair Cuts", items: [{ name: "Kid's Hair Cut", price: "350" }, { name: "Haircut", price: "500" }, { name: "Creative Hair Cut", price: "750" }] }, 
 { category: "Regular Spa", items: [{ name: "Up to shoulder", price: "1000" }, { name: "Below shoulder", price: "1200" }, { name: "Middle length", price: "1500" }, { name: "Waist length", price: "1800" }] },
  { category: "Head Massage", items: [{ name: "Traditional", price: "550" }, { name: "Almond", price: "650" }, { name: "Olive", price: "750" }, { name: "Aromatic", price: "850" }] },
   { category: "Treatment Spa", items: [{ name: "Up to shoulder", price: "1200" }, { name: "Below shoulder", price: "1500" }, { name: "Middle length", price: "1800" }, { name: "Waist length", price: "2000" }] },
    { category: "Hair Wash", items: [{ name: "Conditioning & Dry (Includes conditioning and dry to cheer up your hair)", price: "200" }] }, 
    { category: "Styling Essentials", items: [{ name: "Flat Iron - Up to shoulder", price: "300" }, { name: "Flat Iron - Below shoulder", price: "400" }, { name: "Flat Iron - Middle length", price: "500" }, { name: "Blow Dry - Up to shoulder", price: "250" }, { name: "Blow Dry - Below shoulder", price: "300" }, { name: "Iron Flips - Up to shoulder", price: "300" }, { name: "Iron Flips - Below shoulder", price: "400" }, { name: "Iron Flips - Middle length", price: "500" }, { name: "Iron Flips - Waist length", price: "800" }] },
     { category: "Tongs / Tonging", items: [{ name: "Up to shoulder", price: "350" }, { name: "Below shoulder", price: "450" }, { name: "Middle length", price: "550" }, { name: "Waist length", price: "850" }] },
      { category: "Maintaining Texture", items: [{ name: "Hair Straightening - Up to shoulder", price: "4000" }, { name: "Hair Straightening - Below shoulder", price: "4500" }, { name: "Hair Straightening - Mid length", price: "5500" }, { name: "Hair Straightening - Waist length", price: "6500" }, { name: "Hair Smoothening - Up to shoulder", price: "3500" }, { name: "Hair Smoothening - Below shoulder", price: "4000" }, { name: "Hair Smoothening - Mid length", price: "5000" }, { name: "Hair Smoothening - Waist length", price: "6000" }] }, 
      { category: "Keratin / Botox", items: [{ name: "Up to shoulder", price: "4500" }, { name: "Below shoulder", price: "5500" }, { name: "Mid length", price: "6500" }, { name: "Waist length", price: "7500" }] },
       { category: "Fringe / Perm", items: [{ name: "Fringe Straightening", price: "1500" }, { name: "Perm Straightening", price: "3500" }] },
        { category: "Hair Removal - Threading", items: [{ name: "Upper lip", price: "30" }, { name: "Eyebrow", price: "50" }, { name: "Forehead", price: "30" }, { name: "Chin", price: "30" }, { name: "Full Face", price: "150" }] }, 
        { category: "Hair Removal - Waxing", items: [{ name: "Upper lip (Regular/Premium)", price: "100 / 120" }, { name: "Forehead (R/P)", price: "100 / 120" }, { name: "Chin (R/P)", price: "100 / 120" }, { name: "Under Arms (R/P)", price: "250 / 350" }, { name: "Half Arms (R/P)", price: "300 / 350" }, { name: "Full Arms (R/P)", price: "600 / 700" }, { name: "Half Leg (R/P)", price: "500 / 600" }, { name: "Full Leg (R/P)", price: "1000 / 1200" }, { name: "Full Face (R/P)", price: "350 / 450" }, { name: "Half front/back (R/P)", price: "350 / 450" }, { name: "Full front/back (R/P)", price: "500 / 700" }, { name: "Stomach (R/P)", price: "350 / 450" }, { name: "Side locks (R/P)", price: "150 / 250" }, { name: "Neck wax (R/P)", price: "150 / 250" }, { name: "Nose (R/P)", price: "80 / 150" }, { name: "Brazilian (R/P)", price: "1000 / 1250" }, { name: "Full body (R/P)", price: "3000 / 3500" }] }, { category: "Bleach / D-Tan", items: [{ name: "Under Arms D-Tan", price: "150" }, { name: "Face D-Tan", price: "500" }, { name: "Feet D-Tan", price: "350" }] }, { category: "Skin - Cleanups & Facials", items: [{ name: "O3+ Whitening & Brightening Clean up", price: "1850" }, { name: "Seaweed (oily & hydration)", price: "4000" }, { name: "Age lock", price: "4500" }, { name: "Diamond facial", price: "5000" }] }, { category: "Facials (Lotus Professional)", items: [{ name: "Retenin vitamin", price: "2500" }, { name: "Insta fair facial", price: "3000" }, { name: "Acne facial", price: "3000" }, { name: "Ultima gold", price: "3500" }, { name: "Bridal facial", price: "4000" }, { name: "Pura vital facial", price: "2500" }, { name: "Preservita facial", price: "2500" }, { name: "Hydra vital facial", price: "3000" }, { name: "Facial pro-matte", price: "2500" }, { name: "Facial pro-hydra", price: "2500" }] }, { category: "Premium Facials", items: [{ name: "Ginger walnut", price: "3500" }, { name: "Papaya marshmallow", price: "3500" }, { name: "Jamaican sorrel", price: "4000" }, { name: "Treatment blanch", price: "4000" }, { name: "Treatment upendice", price: "4000" }, { name: "Treatment-sensi Ace", price: "4000" }] }, { category: "Instant Makeover", items: [{ name: "Face cleaning", price: "250+" }, { name: "Black Mask", price: "500+" }, { name: "Clean up", price: "1500" }] }, { category: "Colouring", items: [{ name: "Global Coloring - Up to shoulder", price: "2000" }, { name: "Global Coloring - Below shoulder", price: "3000" }, { name: "Global Coloring - Mid length", price: "4000" }, { name: "Global Coloring - Waist length", price: "5000" }, { name: "Root Touch-up", price: "1250" }, { name: "Highlights (per streak)", price: "350" }] }, { category: "Global Highlights", items: [{ name: "Up to shoulder", price: "3000" }, { name: "Below shoulder", price: "4000" }, { name: "Mid length", price: "5000" }, { name: "Waist length", price: "6000" }] }, { category: "Wedding / Bridal", items: [{ name: "Pre-bridal - Silver", price: "4999" }, { name: "Pre-bridal - Gold", price: "9999" }, { name: "Pre-bridal - Diamond", price: "14999" }, { name: "Bridal - Kryolan", price: "8999" }, { name: "Bridal - MAC", price: "14999" }, { name: "Bridal - Airbrush", price: "16999" }] }, { category: "Event Makeovers", items: [{ name: "Engagement - Kryolan", price: "5999" }, { name: "Engagement - MAC", price: "7999" }, { name: "Engagement - Airbrush", price: "10999" }, { name: "Reception - Kryolan", price: "7999" }, { name: "Reception - MAC", price: "12999" }, { name: "Reception - Airbrush", price: "14999" }] }, { category: "Anniversary / Party", items: [{ name: "Kryolan (Anniversary)", price: "4999" }, { name: "MAC (Anniversary)", price: "6999" }, { name: "Airbrush (Anniversary)", price: "8999" }, { name: "Kryolan (Party)", price: "2999" }, { name: "MAC (Party)", price: "3999" }, { name: "Airbrush (Party)", price: "4999" }] }, { category: "Other", items: [{ name: "Saree Draping", price: "500" }] }];
/* ======================= 
   Navbar Component
   ======================= */
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="container d-flex justify-content-between align-items-center py-3">
                <Link to="/" className="logo">
                    <img
                        src={logo}
                        alt="Your Salon Logo"
                        style={{ height: "80px", width: "350px", objectFit: "contain" }}
                    />
                </Link>
                <nav className="nav-links d-none d-md-block">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                </nav>

                <button
                    className="hamburger d-md-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            {menuOpen && (
                <nav className="mobile-nav d-md-none">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
                </nav>
            )}
        </header>
    );
}

/* ======================= 
   Image Slider Component
   ======================= */
function ImageSlider() {
    const images = [img1, img2, img3];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="image-slider">
            <img src={images[current]} alt={`Slide ${current + 1}`} className="slider-img" />
            <div className="slider-controls">
                <button onClick={() => setCurrent((current - 1 + images.length) % images.length)}>‹</button>
                <button onClick={() => setCurrent((current + 1) % images.length)}>›</button>
            </div>
            <div className="slider-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

/* ======================= 
   Home Component
   ======================= */
function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-banner">
                <div className="overlay">
                    <div className="hero-content">
                       

                        {/* Hero Text and Button */}
                        <div className="text-content">
                            <h1>BEAUTY MEETS COMFORT</h1>
                            <p>Premium unisex salon services with a touch of elegance and luxury.</p>
                            <Link to="/services">
                                <button className="btn-hero">Services</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Image Slider inside Hero Content */}
                <ImageSlider />
            </section>

            {/* About Section */}
            <section className="about-section">
                <h2 className="about-heading">About Us</h2>
                <p className="about-description">
                    Step into LNG Unisex Salon & Studio where style meets comfort.<br />
                    From grooming to beauty care, we’ve got you covered in a clean, inclusive, and luxury setting. Come in stressed, walk out your best
                </p>

                {/* Divider line */}
                <div className="about-divider" />

                <div className="about-columns">
                    {/* Contact Info */}
                    <div className="about-column">
                        <h4>Contact</h4>
                        <p>📞 +91 8797073377</p>
                        <p>📞 +91 6276313220</p>
                    </div>

                    {/* Address Info */}
                    <div className="about-column">
                        <h4>Address</h4>
                        <p>Mahila College Road Above Bata Showroom </p>
                        <p>Madhubani, Bihar</p>
                        <p>847211</p>
                    </div>

                    {/* Social Media */}
                    <div className="about-column">
                        <h4>Social Media</h4>
                        <p>📸 Instagram: <a href="https://www.instagram.com/lngsalon/?hl=en" target="_blank" rel="noreferrer">@LnGsalon</a></p>
                    </div>
                </div>

                <hr className="bg-light" />
                <div className="text-center small">
                    © {new Date().getFullYear()} L &amp; G | Made with ❤️
                </div>
            </section>
        </>
    );
}


/* ======================= 
   Services Component
   ======================= */
function Services() {
    const [query, setQuery] = useState("");
    const filtered = useMemo(() => {
        if (!query.trim()) return servicesData;
        const q = query.toLowerCase();
        return servicesData
            .map((cat) => ({
                ...cat,
                items: cat.items.filter((it) =>
                    (it.name + " " + it.price).toLowerCase().includes(q)
                )
            }))
            .filter((cat) => cat.items.length > 0);
    }, [query]);

    return (
        <main className="container py-5 services-dark-theme">
            <h1>Services</h1>
            <p>Browse our full list of services. Use search to quickly find a treatment or price.</p>

            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services (e.g. 'blow dry', '500', 'bridal')"
                className="form-control mb-4"
            />

            <div className="services-grid">
                {filtered.map((cat) => (
                    <div key={cat.category} className="card">
                        <h3>{cat.category}</h3>
                        {cat.items.map((it) => (
                            <div key={it.name} className="service-item">
                                <span>{it.name}</span>
                                <span className="price">{it.price}</span>
                            </div>
                        ))}
                    </div>
                ))}

                {filtered.length === 0 && (
                    <div className="text-center">No services match your search.</div>
                )}
            </div>
        </main>
    );
}

/* ======================= 
   Main App
   ======================= */
export default function SalonApp() {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <div className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
