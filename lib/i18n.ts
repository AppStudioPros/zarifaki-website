export type Lang = "el" | "en";

export const translations = {
  // Header
  nav_home:    { el: "Αρχική",      en: "Home" },
  nav_services:{ el: "Υπηρεσίες",   en: "Services" },
  nav_about:   { el: "Σχετικά",     en: "About" },
  nav_contact: { el: "Επικοινωνία", en: "Contact" },

  // Hero
  hero_tag:    { el: "Τρεις γενιές – μια οικογένεια", en: "Three generations – one family" },
  hero_h1:     { el: "Κάθε στάση\nΣαν σπίτι!", en: "Every Stop\nFeels Like Home!" },
  hero_sub:    { el: "Καλωσήρθατε στους Υιούς Ζαριφάκη, όπου η στάση σας ξεκινά από εδώ!", en: "Welcome to Zarifaki Sons, where fueling up is just the start!" },
  hero_cta1:   { el: "Οι Υπηρεσίες μας", en: "Our Services" },
  hero_cta2:   { el: "Βρείτε μας", en: "Find Us" },

  // Services marquee
  marquee_items: {
    el: ["Βενζίνη AVIN", "Φυσικό Αέριο CNG", "Υγραέριο Coral Gas", "Διανομή Καυσίμων", "Πλυντήριο Αυτοκινήτου", "Snack Bar", "Φρέσκος Καφές", "Αξεσουάρ Αυτοκινήτου"],
    en: ["AVIN Fuel", "Natural Gas CNG", "Coral Gas LPG", "Fuel Delivery", "Car Wash", "Snack Bar", "Fresh Coffee", "Auto Accessories"],
  },

  // Fuel delivery section
  delivery_tag:  { el: "Διανομή Καυσίμων", en: "Fuel Delivery" },
  delivery_h2:   { el: "Διανομή Καυσίμων\nΣτην Πόρτα Σας", en: "Fuel Delivery\nTo Your Door" },
  delivery_p:    { el: "Δεν χρειάζεται να έρθετε εσείς σε εμάς. Φέρνουμε τα καύσιμα στο σπίτι σας, στην επιχείρησή σας ή στο εργοτάξιο — όταν τα χρειάζεστε.", en: "We bring fuel to you — home, business, or worksite. Call us and we'll sort it out." },
  delivery_cta:  { el: "Καλέστε μας τώρα", en: "Call Us Now" },

  // Natural gas section
  gas_tag:  { el: "Οικολογική Επιλογή", en: "Eco Choice" },
  gas_h2:   { el: "Φυσικό Αέριο &\nΥγραέριο", en: "Natural Gas &\nAutogas" },
  gas_p:    { el: "Φυσικό αέριο CNG και υγραέριο Coral Gas. Φθηνότερα από βενζίνη, λιγότερες εκπομπές — καλή επιλογή για καθημερινά χιλιόμετρα.", en: "CNG natural gas and Coral Gas LPG. Cheaper than petrol, fewer emissions — a solid choice for daily driving." },

  // Services
  services_h2: { el: "Τι Προσφέρουμε", en: "What We Offer" },
  svc_fuel:    { el: "Βενζίνη & Πετρέλαιο", en: "Fuel & Diesel" },
  svc_fuel_d:  { el: "Αμόλυβδη 95, Diesel & πετρέλαιο θέρμανσης AVIN υψηλής ποιότητας.", en: "Unleaded 95, Diesel & heating oil — AVIN quality guaranteed." },
  svc_cng:     { el: "Φυσικό Αέριο CNG", en: "Natural Gas CNG" },
  svc_cng_d:   { el: "Το πιο οικονομικό καύσιμο για εναλλακτική κίνηση. Coral Gas & FISIKON.", en: "The most economical alternative fuel. Coral Gas & FISIKON." },
  svc_lpg:     { el: "Υγραέριο Auto Gas", en: "LPG Auto Gas" },
  svc_lpg_d:   { el: "Coral Gas υγραέριο για όχηματα — χαμηλό κόστος, χαμηλές εκπομπές.", en: "Coral Gas LPG for vehicles — low cost, low emissions." },
  svc_wash:    { el: "Πλυντήριο Αυτοκινήτου", en: "Car Wash" },
  svc_wash_d:  { el: "Χειροκίνητο πλύσιμο — σωστά, όχι βιαστικά.", en: "Hand wash — done right, not rushed." },
  svc_snack:   { el: "Snack Bar & Καφές", en: "Snack Bar & Coffee" },
  svc_snack_d: { el: "Φρέσκος καφές και κάτι να φας. Χαλαρώστε λίγο.", en: "Fresh coffee and a bite. Take a break." },
  svc_acc:     { el: "Αξεσουάρ & Λιπαντικά", en: "Accessories & Lubricants" },
  svc_acc_d:   { el: "Λιπαντικά, αξεσουάρ και αέρας ελαστικών.", en: "Lubricants, accessories, and tyre air." },

  // About
  about_tag: { el: "Η Ιστορία μας", en: "Our Story" },
  about_h2:  { el: "Τρεις Γενιές\nΟικογενειακής Φροντίδας", en: "Three Generations\nof Family Care" },
  about_p1:  { el: "Το πρατήριο Υιοί Ζαριφάκη λειτουργεί για τρεις γενιές στο ίδιο σημείο της εθνικής Ηρακλείου–Μοιρών. Οικογενειακή επιχείρηση από την αρχή — ο ίδιος κόσμος, η ίδια νοοτροπία.", en: "Zarifaki Sons has been running at the same spot on the Heraklion-Moires road for three generations. A family business from day one — same people, same mindset." },
  about_p2:  { el: "Τα τελευταία χρόνια προσθέσαμε ηλιακά πάνελ, φυσικό αέριο CNG και υγραέριο Coral Gas. Δεν ακολουθούμε τις εξελίξεις — απλώς κάνουμε ό,τι έχει νόημα.", en: "In recent years we added solar panels, CNG natural gas, and Coral Gas LPG. We don't follow trends — we just do what makes sense." },
  about_stat1_n: { el: "3", en: "3" },
  about_stat1_l: { el: "Γενιές", en: "Generations" },
  about_stat2_n: { el: "7/7", en: "7/7" },
  about_stat2_l: { el: "Ανοιχτά", en: "Open" },
  about_stat3_n: { el: "6:00", en: "6:00" },
  about_stat3_l: { el: "Πρωί–20:30", en: "AM – 8:30 PM" },

  // Partners
  partners_h2: { el: "Οι Συνεργάτες μας", en: "Our Partners" },

  // Find us
  findus_h2:    { el: "Βρείτε μας", en: "Find Us" },
  findus_addr:  { el: "15ο χλμ. Ηρακλείου – Μοιρών, Κρήτη", en: "15th km Heraklion – Moires, Crete" },
  findus_hours: { el: "Δευτ–Κυρ: 06:00 – 20:30", en: "Mon–Sun: 6:00 AM – 8:30 PM" },
  findus_dir:   { el: "Οδηγίες Google Maps", en: "Get Directions" },

  // Footer
  footer_copy: { el: "Υιοί Ζαριφάκη – Όλα τα δικαιώματα διατηρούνται.", en: "Zarifaki Sons – All rights reserved." },

  // FAQ
  faq_h2: { el: "Συχνές Ερωτήσεις", en: "Frequently Asked Questions" },
  faq: {
    el: [
      { q: "Κάνετε διανομή καυσίμων;", a: "Ναι! Παρέχουμε διανομή καυσίμων σε σπίτια, επιχειρήσεις και εργοτάξια σε όλη την περιοχή Ηρακλείου–Μοιρών." },
      { q: "Διαθέτετε φυσικό αέριο CNG;", a: "Ναι, διαθέτουμε φυσικό αέριο CNG — μια από τις λίγες τοποθεσίες στην Κρήτη." },
      { q: "Ποιες ώρες είστε ανοιχτοί;", a: "Είμαστε ανοιχτοί καθημερινά, 7 μέρες την εβδομάδα, από 06:00 έως 20:30." },
      { q: "Πού βρίσκεστε;", a: "Στο 15ο χιλιόμετρο της εθνικής οδού Ηρακλείου–Μοιρών, Κρήτη." },
    ],
    en: [
      { q: "Do you offer fuel delivery?", a: "Yes! We deliver fuel to homes, businesses, and worksites throughout the Heraklion–Moires area." },
      { q: "Do you have natural gas (CNG)?", a: "Yes, we offer CNG natural gas — one of the few locations in Crete." },
      { q: "What are your opening hours?", a: "We are open every day, 7 days a week, from 6:00 AM to 8:30 PM." },
      { q: "Where are you located?", a: "At the 15th km of the Heraklion–Moires national road, Crete." },
    ],
  },
} as const;

export function t(key: keyof typeof translations, lang: Lang): string {
  const entry = translations[key];
  if (!entry || typeof entry !== "object") return key;
  if ("el" in entry && typeof entry.el === "string") {
    return (entry as { el: string; en: string })[lang];
  }
  return key;
}
