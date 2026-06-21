"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const content = {
  el: {
    tag: "Τι Προσφέρουμε",
    h1: "Υπηρεσίες",
    sub: "Όλα όσα χρειάζεστε — σε ένα μέρος, στο 15ο χλμ. Ηρακλείου–Μοιρών.",
    cta_delivery: "Καλέστε για Διανομή",
    cta_directions: "Οδηγίες",
    services: [
      {
        icon: "⛽",
        title: "Βενζίνη & Πετρέλαιο",
        tag: "AVIN Certified",
        img: "/images/IMG_20241114_135345589_HDR-scaled.jpg",
        desc: "Αμόλυβδη 95, Diesel και πετρέλαιο θέρμανσης AVIN. Καύσιμα πιστοποιημένης ποιότητας για κάθε τύπο κινητήρα.",
        details: ["Αμόλυβδη 95", "Diesel", "Πετρέλαιο θέρμανσης", "Πιστοποίηση Bureau Veritas"],
      },
      {
        icon: "🌿",
        title: "Φυσικό Αέριο CNG",
        tag: "Οικολογική Επιλογή",
        img: "/images/IMG_20241114_135502504-scaled.jpg",
        desc: "Φυσικό αέριο CNG — το πιο οικονομικό και καθαρό εναλλακτικό καύσιμο. Ιδανικό για αυτοκίνητα, φορτηγά και ταξί.",
        details: ["CNG Φυσικό Αέριο", "Χαμηλές εκπομπές", "Χαμηλό κόστος", "FISIKON"],
      },
      {
        icon: "💨",
        title: "Υγραέριο Auto Gas",
        tag: "Coral Gas",
        img: "/images/IMG_20241114_135452680_HDR-scaled.jpg",
        desc: "Coral Gas υγραέριο για οχήματα. Μειωμένες εκπομπές CO₂, χαμηλότερο κόστος χιλιομέτρου.",
        details: ["Coral Gas LPG", "Μειωμένες εκπομπές CO₂", "Χαμηλό κόστος ανά χλμ.", "Διαθέσιμο για όλα τα οχήματα"],
      },
      {
        icon: "🚚",
        title: "Διανομή Καυσίμων",
        tag: "Premium Υπηρεσία",
        img: "/images/IMG_20241114_140352327_HDR-scaled.jpg",
        desc: "Φέρνουμε τα καύσιμα εκεί που τα χρειάζεστε. Σπίτι, επιχείρηση, εργοτάξιο — στο τηλέφωνο σας. Εξυπηρέτηση σε όλη την περιοχή Ηρακλείου–Μοιρών.",
        details: ["Διανομή σε σπίτια", "Διανομή σε επιχειρήσεις", "Διανομή σε εργοτάξια", "Περιοχή Ηρακλείου–Μοιρών"],
        cta: true,
      },
      {
        icon: "🚿",
        title: "Πλυντήριο Αυτοκινήτου",
        tag: "Χειροκίνητο",
        img: "/images/IMG_20241114_140155783_HDR-scaled.jpg",
        desc: "Χειροκίνητο πλύσιμο με προσωπική φροντίδα. Το αυτοκίνητό σας αντιμετωπίζεται με την προσοχή που του αξίζει.",
        details: ["Χειροκίνητο πλύσιμο", "Εσωτερικό καθαρισμός", "Γυάλισμα", "Προσωπική φροντίδα"],
      },
      {
        icon: "☕",
        title: "Snack Bar & Καφές",
        tag: "Φρέσκος Καφές",
        img: "/images/IMG_20241114_140948924_HDR-scaled.jpg",
        desc: "Φρέσκος καφές και σνακ για να συνεχίσετε το ταξίδι σας δυνατά. Ξεκουραστείτε στον ξύλινο μας αλτάνα.",
        details: ["Φρέσκος καφές", "Σνακ & γλυκά", "Αλτάνα εξωτερικού χώρου", "Wi-Fi"],
      },
      {
        icon: "🔧",
        title: "Αξεσουάρ & Λιπαντικά",
        tag: "Αξεσουάρ",
        img: "/images/IMG_20241114_141015518_HDR-scaled.jpg",
        desc: "Αξεσουάρ αυτοκινήτου, λιπαντικά και ό,τι άλλο χρειάζεστε για ασφαλή και άνετη οδήγηση.",
        details: ["Λιπαντικά", "Αξεσουάρ αυτοκινήτου", "Αέρας & νερό", "Ανταλλακτικά"],
      },
      {
        icon: "💧",
        title: "Αέρας & Νερό",
        tag: "Δωρεάν",
        img: "/images/IMG_20241114_135734204-scaled.jpg",
        desc: "Δωρεάν σταθμός αέρα και νερού για τις ανάγκες του οχήματός σας.",
        details: ["Σταθμός αέρα ελαστικών", "Νερό οχήματος", "Δωρεάν χρήση", "24ωρη διαθεσιμότητα"],
      },
    ],
  },
  en: {
    tag: "What We Offer",
    h1: "Services",
    sub: "Everything you need — in one place, at 15th km Heraklion–Moires.",
    cta_delivery: "Call for Delivery",
    cta_directions: "Get Directions",
    services: [
      {
        icon: "⛽",
        title: "Fuel & Diesel",
        tag: "AVIN Certified",
        img: "/images/IMG_20241114_135345589_HDR-scaled.jpg",
        desc: "Unleaded 95, Diesel, and heating oil — AVIN certified quality for every engine type.",
        details: ["Unleaded 95", "Diesel", "Heating Oil", "Bureau Veritas Certified"],
      },
      {
        icon: "🌿",
        title: "Natural Gas CNG",
        tag: "Eco Choice",
        img: "/images/IMG_20241114_135502504-scaled.jpg",
        desc: "CNG natural gas — the most economical and clean alternative fuel. Ideal for cars, trucks and taxis.",
        details: ["CNG Natural Gas", "Low emissions", "Low cost", "FISIKON"],
      },
      {
        icon: "💨",
        title: "LPG Auto Gas",
        tag: "Coral Gas",
        img: "/images/IMG_20241114_135452680_HDR-scaled.jpg",
        desc: "Coral Gas LPG for vehicles. Reduced CO₂ emissions, lower cost per kilometre.",
        details: ["Coral Gas LPG", "Reduced CO₂", "Low cost per km", "Available for all vehicles"],
      },
      {
        icon: "🚚",
        title: "Fuel Delivery",
        tag: "Premium Service",
        img: "/images/IMG_20241114_140352327_HDR-scaled.jpg",
        desc: "We bring fuel to wherever you need it. Home, business, or worksite — just call us. Serving the Heraklion–Moires area.",
        details: ["Home delivery", "Business delivery", "Worksite delivery", "Heraklion–Moires area"],
        cta: true,
      },
      {
        icon: "🚿",
        title: "Car Wash",
        tag: "Hand Wash",
        img: "/images/IMG_20241114_140155783_HDR-scaled.jpg",
        desc: "Hand wash service with personal care. Your vehicle gets the attention it deserves.",
        details: ["Hand wash", "Interior cleaning", "Polish", "Personal care"],
      },
      {
        icon: "☕",
        title: "Snack Bar & Coffee",
        tag: "Fresh Coffee",
        img: "/images/IMG_20241114_140948924_HDR-scaled.jpg",
        desc: "Fresh coffee and snacks to fuel your journey. Relax on our outdoor wooden pergola.",
        details: ["Fresh coffee", "Snacks & sweets", "Outdoor pergola", "Wi-Fi"],
      },
      {
        icon: "🔧",
        title: "Accessories & Lubricants",
        tag: "Accessories",
        img: "/images/IMG_20241114_141015518_HDR-scaled.jpg",
        desc: "Car accessories, lubricants, and everything else for safe and comfortable driving.",
        details: ["Lubricants", "Car accessories", "Air & water", "Parts"],
      },
      {
        icon: "💧",
        title: "Air & Water",
        tag: "Free",
        img: "/images/IMG_20241114_135734204-scaled.jpg",
        desc: "Free air and water station for your vehicle's needs.",
        details: ["Tyre air station", "Vehicle water", "Free to use", "Always available"],
      },
    ],
  },
};

export default function ServicesPageClient() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <main style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "40vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image src="/images/IMG_20241114_135623543-scaled.jpg" alt="Services" fill priority style={{ objectFit: "cover", objectPosition: "center 50%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(14,26,43,0.9) 0%, rgba(14,26,43,0.6) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, padding: "5rem 1.5rem" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(196,30,37,0.15)", border: "1px solid rgba(196,30,37,0.4)", borderRadius: "999px", padding: "0.35rem 1rem", marginBottom: "1.25rem" }}>
              <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.72rem", color: "var(--red)", letterSpacing: "0.12em" }}>{c.tag}</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "white", lineHeight: 1.05, marginBottom: "1rem" }}>{c.h1}</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", maxWidth: "500px", lineHeight: 1.7 }}>{c.sub}</p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section style={{ background: "var(--night)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ padding: "0 1.5rem", display: "flex", flexDirection: "column", gap: "5rem" }}>
          {c.services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr", gap: "4rem", alignItems: "center", direction: i % 2 === 0 ? "ltr" : "rtl" }}
            >
              {/* Photo */}
              <div style={{ borderRadius: "24px", overflow: "hidden", aspectRatio: "4/3", position: "relative", direction: "ltr" }}>
                <Image src={svc.img} alt={svc.title} fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,26,43,0.5) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem", background: "var(--red)", borderRadius: "12px", padding: "0.5rem 0.875rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "1.2rem" }}>{svc.icon}</span>
                  <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.65rem", color: "white", letterSpacing: "0.1em", textTransform: "uppercase" }}>{svc.tag}</span>
                </div>
              </div>

              {/* Text */}
              <div style={{ direction: "ltr" }}>
                <h2 style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "white", marginBottom: "1rem" }}>{svc.title}</h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{svc.desc}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
                  {svc.details.map((d, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                      {d}
                    </li>
                  ))}
                </ul>
                {"cta" in svc && svc.cta && (
                  <a href="tel:+302810792192" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--red)", color: "white", fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.9rem", padding: "0.875rem 1.75rem", borderRadius: "999px", textDecoration: "none", boxShadow: "0 4px 20px rgba(196,30,37,0.35)" }}>
                    📞 {c.cta_delivery}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "var(--red)", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", color: "white", marginBottom: "1rem" }}>
            {lang === "el" ? "Επισκεφτείτε μας σήμερα" : "Visit Us Today"}
          </h2>
          <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)", marginBottom: "2rem", fontSize: "1rem" }}>
            {lang === "el" ? "15ο χλμ. Ηρακλείου–Μοιρών · Δευτ–Κυρ 06:00–20:30" : "15th km Heraklion–Moires · Mon–Sun 06:00–20:30"}
          </p>
          <a href="https://maps.app.goo.gl/d8v2Dpsu7TzfhzdP8" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "white", color: "var(--red)", fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "0.9rem", padding: "0.875rem 2rem", borderRadius: "999px", textDecoration: "none" }}>
            🗺️ {c.cta_directions}
          </a>
        </div>
      </section>
    </main>
  );
}
