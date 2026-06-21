"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const content = {
  el: {
    hero_tag: "Η Ιστορία μας",
    hero_h1: "Τρεις Γενιές,\nΜια Οικογένεια",
    hero_sub: "Στους Υιούς Ζαριφάκη, είμαστε κάτι παραπάνω από μια απλή στάση στον δρόμο — είμαστε μέρος του ταξιδιού σας.",
    section1_h: "Η Ιστορία μας",
    section1_p: [
      "Με υπερηφάνεια εξυπηρετούμε την κοινότητά μας για τρεις γενιές, χτίζοντας μια κληρονομιά ποιότητας, φιλοξενίας και καινοτομίας. Από τα πρώτα χρόνια λειτουργίας μας μέχρι σήμερα, η αγάπη για τον κόσμο και η αφοσίωση στην εξυπηρέτηση παραμένουν ο πυρήνας κάθε μας πράξης.",
      "Βρισκόμαστε στο 15ο χιλιόμετρο της εθνικής οδού Ηρακλείου–Μοιρών, σε ένα από τα πιο κεντρικά σημεία της Κρήτης. Κάθε μέρα, χιλιάδες ταξιδιώτες και ντόπιοι επιλέγουν να σταματήσουν εδώ — και εμείς τους υποδεχόμαστε πάντα με ένα χαμόγελο.",
    ],
    section2_h: "Δέσμευσή μας για το Περιβάλλον",
    section2_p: "Από τα σύγχρονα ηλιακά πάνελ μας μέχρι την παροχή φυσικού αερίου CNG και υγραερίου Coral Gas, δεσμευόμαστε να παρέχουμε εξυπηρέτηση που σέβεται το περιβάλλον. Πιστεύουμε ότι ένας σύγχρονος σταθμός καυσίμων μπορεί να είναι μέρος μιας πιο πράσινης Κρήτης.",
    section3_h: "Γιατί να μας Επιλέξετε",
    values: [
      { icon: "🤝", title: "Οικογενειακή Φιλοξενία", desc: "Κάθε πελάτης αντιμετωπίζεται σαν μέλος της οικογένειάς μας." },
      { icon: "⭐", title: "Ποιότητα AVIN", desc: "Καύσιμα πιστοποιημένης ποιότητας από τη συνεργασία μας με την AVIN." },
      { icon: "☀️", title: "Σεβασμός στο Περιβάλλον", desc: "Ηλιακά πάνελ, CNG και LPG για μια πιο καθαρή κίνηση." },
      { icon: "🚚", title: "Διανομή Καυσίμων", desc: "Φέρνουμε τα καύσιμα εκεί που τα χρειάζεστε, στην ώρα τους." },
      { icon: "📍", title: "Κεντρική Τοποθεσία", desc: "15ο χλμ. Ηρακλείου–Μοιρών, στην καρδιά της Κρήτης." },
      { icon: "🕕", title: "Καθημερινή Εξυπηρέτηση", desc: "Ανοιχτά 7 μέρες την εβδομάδα, 06:00–20:30." },
    ],
  },
  en: {
    hero_tag: "Our Story",
    hero_h1: "Three Generations,\nOne Family",
    hero_sub: "At Zarifaki Sons, we're more than just a stop along the way — we're part of your journey.",
    section1_h: "Our Story",
    section1_p: [
      "Proudly serving our community for three generations, we've built a legacy of quality, hospitality, and innovation. From our early days to today, love for people and dedication to service remain at the core of everything we do.",
      "Located at the 15th km of the Heraklion–Moires national road, one of the most central points in Crete. Every day, thousands of travellers and locals choose to stop here — and we always welcome them with a smile.",
    ],
    section2_h: "Our Commitment to the Environment",
    section2_p: "From our state-of-the-art solar panels to offering CNG natural gas and Coral Gas LPG, we are committed to providing service that respects the environment. We believe a modern fuel station can be part of a greener Crete.",
    section3_h: "Why Choose Us",
    values: [
      { icon: "🤝", title: "Family Hospitality", desc: "Every customer is treated like a member of our family." },
      { icon: "⭐", title: "AVIN Quality", desc: "Certified quality fuels through our partnership with AVIN." },
      { icon: "☀️", title: "Environmental Respect", desc: "Solar panels, CNG, and LPG for cleaner driving." },
      { icon: "🚚", title: "Fuel Delivery", desc: "We bring fuel to wherever you need it, on time." },
      { icon: "📍", title: "Central Location", desc: "15th km Heraklion–Moires, at the heart of Crete." },
      { icon: "🕕", title: "Daily Service", desc: "Open 7 days a week, 6:00 AM – 8:30 PM." },
    ],
  },
};

const photos = [
  "/images/IMG_20241114_140948924_HDR-scaled.jpg",
  "/images/IMG_20241114_135502504-scaled.jpg",
  "/images/IMG_20241114_140352327_HDR-scaled.jpg",
  "/images/IMG_20241114_135625193-scaled.jpg",
];

export default function AboutPageClient() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <main style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "50vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image src="/images/IMG_20241114_140459109-scaled.jpg" alt="Zarifaki Sons" fill priority style={{ objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(14,26,43,0.92) 0%, rgba(14,26,43,0.6) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, padding: "5rem 1.5rem" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.4)", borderRadius: "999px", padding: "0.35rem 1rem", marginBottom: "1.25rem" }}>
              <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.72rem", color: "var(--gold)", letterSpacing: "0.12em" }}>{c.hero_tag}</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "white", lineHeight: 1.05, marginBottom: "1.25rem" }}>
              {c.hero_h1.split("\n").map((l, i) => <span key={i} style={{ display: "block", color: i === 1 ? "var(--gold)" : "white" }}>{l}</span>)}
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", maxWidth: "500px", lineHeight: 1.7 }}>{c.hero_sub}</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: "var(--night)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ padding: "0 1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "white", marginBottom: "1.5rem" }}>
              {c.section1_h}
            </h2>
            {c.section1_p.map((p, i) => (
              <p key={i} style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "1rem" }}>{p}</p>
            ))}
          </motion.div>
          {/* Photo grid */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}
          >
            {photos.map((src, i) => (
              <div key={i} style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "1", position: "relative" }}>
                <Image src={src} alt="Zarifaki Sons" fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Environment */}
      <section style={{ background: "var(--night-mid)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ padding: "0 1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
            <Image src="/images/IMG_20241114_135910383_HDR-scaled.jpg" alt="Solar panels" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,26,43,0.4), transparent)" }} />
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", top: "1.5rem", right: "1.5rem", fontSize: "3rem" }}
            >☀️</motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h2 style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "white", marginBottom: "1.5rem" }}>
              {c.section2_h}
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>{c.section2_p}</p>
          </motion.div>
        </div>
      </section>

      {/* Values grid */}
      <section style={{ background: "var(--cream)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ padding: "0 1.5rem" }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "var(--night)", textAlign: "center", marginBottom: "3rem" }}
          >
            {c.section3_h}
          </motion.h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {c.values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                style={{ background: "white", borderRadius: "20px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", borderTop: "3px solid var(--red)" }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "1rem", color: "var(--night)", marginBottom: "0.5rem" }}>{v.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--ink-soft)", lineHeight: 1.65 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
