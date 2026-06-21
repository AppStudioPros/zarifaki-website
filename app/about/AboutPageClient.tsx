"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const content = {
  el: {
    hero_tag: "Η Ιστορία μας",
    hero_h1: "Τρεις Γενιές,\nΜια Οικογένεια",
    hero_sub: "Από παππού σε πατέρα, από πατέρα σε παιδί — στο ίδιο σημείο, με τον ίδιο τρόπο.",
    section1_h: "Η Ιστορία μας",
    section1_p: [
      "Το πρατήριο Υιοί Ζαριφάκη λειτουργεί για τρεις γενιές στο ίδιο σημείο της εθνικής Ηρακλείου–Μοιρών. Οικογενειακή επιχείρηση από την αρχή — ο ίδιος κόσμος, η ίδια νοοτροπία.",
      "Βρισκόμαστε στο 15ο χιλιόμετρο, κεντρικό σημείο για τον νομό Ηρακλείου. Καθημερινά σταματάνε εδώ εκατοντάδες οδηγοί — ντόπιοι και ταξιδιώτες.",
    ],
    section2_h: "Περιβάλλον & Νέα Καύσιμα",
    section2_p: "Τα τελευταία χρόνια προσθέσαμε ηλιακά πάνελ, φυσικό αέριο CNG και υγραέριο Coral Gas. Δεν ακολουθούμε τάσεις — απλώς κάνουμε ό,τι έχει νόημα για την περιοχή μας.",
    section3_h: "Γιατί να μας Επιλέξετε",
    values: [
      { icon: "01", title: "Οικογενειακό Πρατήριο", desc: "Τρεις γενιές στο ίδιο σημείο. Ξέρουμε τους πελάτες μας με το όνομα." },
      { icon: "02", title: "Καύσιμα AVIN", desc: "Πιστοποιημένη ποιότητα. Bureau Veritas certification." },
      { icon: "03", title: "Ηλιακά & CNG", desc: "Ηλιακά πάνελ, CNG και LPG — καθαρότερες επιλογές κίνησης." },
      { icon: "04", title: "Διανομή Καυσίμων", desc: "Φέρνουμε καύσιμα εκεί που χρειάζεστε. Τηλεφωνήστε μας." },
      { icon: "05", title: "15ο χλμ. Ηρακλείου–Μοιρών", desc: "Εθνική οδός, εύκολη πρόσβαση, άφθονος χώρος στάθμευσης." },
      { icon: "06", title: "Ανοιχτά Καθημερινά", desc: "Δευτέρα έως Κυριακή, 06:00–20:30." },
    ],
  },
  en: {
    hero_tag: "Our Story",
    hero_h1: "Three Generations,\nOne Family",
    hero_sub: "From grandfather to father, father to son — same spot, same approach.",
    section1_h: "Our Story",
    section1_p: [
      "Zarifaki Sons has been running at the same spot on the Heraklion-Moires road for three generations. A family business from day one — same people, same mindset.",
      "We're at the 15th km, a central point for the Heraklion region. Hundreds of drivers stop here every day — locals and travellers alike.",
    ],
    section2_h: "Environment & New Fuels",
    section2_p: "In recent years we added solar panels, CNG natural gas, and Coral Gas LPG. We don't follow trends — we just do what makes sense for our area.",
    section3_h: "Why Choose Us",
    values: [
      { icon: "01", title: "Family Station", desc: "Three generations in the same spot. We know our customers by name." },
      { icon: "02", title: "AVIN Fuel", desc: "Certified quality. Bureau Veritas certification." },
      { icon: "03", title: "Solar & CNG", desc: "Solar panels, CNG and LPG — cleaner options for daily driving." },
      { icon: "04", title: "Fuel Delivery", desc: "We bring fuel where you need it. Give us a call." },
      { icon: "05", title: "15th km Heraklion-Moires", desc: "Main road, easy access, plenty of parking." },
      { icon: "06", title: "Open Every Day", desc: "Monday to Sunday, 06:00–20:30." },
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
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "1.5rem", color: "var(--red)", marginBottom: "1rem", letterSpacing: "-0.02em" }}>{v.icon}</div>
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
