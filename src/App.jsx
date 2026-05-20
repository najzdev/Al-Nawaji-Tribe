import { useState, useEffect } from "react";
import "./index.css";
import "./App.css";

const content = {
  en: {
    dir: "ltr",
    nav: { home: "Home", about: "About", news: "News", gallery: "Gallery", contact: "Contact", langBtn: "العربية" },
    hero: {
      tribe: "The Al-Nawaji Idrissi Tribe",
      subtitle: "Connected across generations and countries",
      label: "Descendants of Al-Sharif Al-Idrissi Sidi Naji",
      location: "Mhamid El Ghizlane, Morocco",
      btn1: "About Us",
      btn2: "Tribe Tree",
    },
    about: {
      label: "Our Heritage",
      title: "Who We Are",
      body: "The Al-Nawaji tribe traces its noble lineage directly to the Prophet Muhammad ﷺ through the Idrissi chain, descending from Sidi Naji — a revered scholar and spiritual figure who settled in the Draa Valley of southern Morocco. Rooted in the ancient oasis town of Mhamid El Ghizlane, our tribe has preserved its values of unity, family, and respect across centuries.",
      values: ["Idrissi Lineage", "Mhamid El Ghizlane, Morocco", "Unity & Family", "Respect & Heritage"],
      presenceLabel: "Tribe Presence Across",
      countries: ["Morocco", "Algeria", "Tunisia", "Libya", "Egypt", "Mali", "Mauritania", "Saudi Arabia", "Yemen"],
    },
    news: {
      label: "Announcements",
      title: "Latest News",
      tag: "Official Statement",
      date: "2024",
      excerpt: "The Al-Nawaji Idrissi Tribe in Libya issues a statement of gratitude and congratulations on the occasion of the honored visit by the General Coordinator of the Tribe, Moulay Mohamed Abou Chaib Al-Lahyani Al-Naji Al-Idrissi, to relatives from the Al-Bandaqji Al-Nawaji family in Mecca.",
      original: "تتقدم قبيلة الشرفاء النواجي بليبيا ببيان شكر وتهنئة، بمناسبة الزيارة الكريمة التي قام بها المنسق العام للقبيلة، مولاي محمد أبوشعيب لبيهي الناجي الإدريسي، إلى أبناء العمومة من آل بندقجي النواجي بمكة المكرمة.",
    },
    countries: {
      label: "Our Reach",
      title: "Tribe Presence",
      list: ["🇲🇦 Morocco", "🇩🇿 Algeria", "🇹🇳 Tunisia", "🇱🇾 Libya", "🇪🇬 Egypt", "🇲🇱 Mali", "🇲🇷 Mauritania", "🇸🇦 Saudi Arabia", "🇾🇪 Yemen"],
    },
    tree: {
      label: "Family Tree",
      title: "Tribe Genealogy",
      body: "The full lineage chart connects all branches of the Al-Nawaji family from Sidi Naji to present day.",
      note: "The downloadable tree is under preparation. Please check back soon.",
      btn: "Download Tribe Tree PNG",
    },
    gallery: {
      label: "Memories",
      title: "Gallery",
    },
    contact: {
      label: "Reach Out",
      title: "Contact",
      body: "For inquiries about lineage, tribe gatherings, or documentation, reach out through the form below.",
      name: "Full Name",
      email: "Email Address",
      msg: "Message",
      send: "Send Message",
    },
    footer: {
      quote: "صلة الرحم تجمعنا",
      quoteEn: "Kinship Unites Us",
      location: "Mhamid El Ghizlane, Morocco",
      madeBy: "Made with ♥ by",
    },
  },
  ar: {
    dir: "rtl",
    nav: { home: "الرئيسية", about: "من نحن", news: "أخبار", gallery: "معرض", contact: "تواصل", langBtn: "English" },
    hero: {
      tribe: "قبيلة الشرفاء النواجي",
      subtitle: "متصلون عبر الأجيال والبلدان",
      label: "أحفاد الشريف الإدريسي سيدي ناجي",
      location: "محاميد الغزلان، المغرب",
      btn1: "من نحن",
      btn2: "شجرة القبيلة",
    },
    about: {
      label: "تراثنا",
      title: "من نحن",
      body: "تعود قبيلة الشرفاء النواجي في نسبها الشريف إلى النبي محمد ﷺ من خلال السلسلة الإدريسية، منحدرةً من سيدي ناجي — العالم الجليل والشخصية الروحية الذي استوطن وادي درعة جنوب المغرب. متجذّرةً في بلدة محاميد الغزلان العريقة، حافظت قبيلتنا على قيم الوحدة والأسرة والاحترام عبر القرون.",
      values: ["النسب الإدريسي", "محاميد الغزلان، المغرب", "الوحدة والأسرة", "الاحترام والتراث"],
      presenceLabel: "انتشار القبيلة في",
      countries: ["المغرب", "الجزائر", "تونس", "ليبيا", "مصر", "مالي", "موريتانيا", "السعودية", "اليمن"],
    },
    news: {
      label: "إعلانات",
      title: "آخر الأخبار",
      tag: "بيان رسمي",
      date: "٢٠٢٤",
      excerpt: "The Al-Nawaji Idrissi Tribe in Libya issues a statement of gratitude and congratulations on the occasion of the honored visit by the General Coordinator of the Tribe, Moulay Mohamed Abou Chaib Al-Lahyani Al-Naji Al-Idrissi, to relatives of Al-Bandaqji Al-Nawaji family in Mecca.",
      original: "تتقدم قبيلة الشرفاء النواجي بليبيا ببيان شكر وتهنئة، بمناسبة الزيارة الكريمة التي قام بها المنسق العام للقبيلة، مولاي محمد أبوشعيب لبيهي الناجي الإدريسي، إلى أبناء العمومة من آل بندقجي النواجي بمكة المكرمة.",
    },
    countries: {
      label: "انتشارنا",
      title: "وجود القبيلة",
      list: ["🇲🇦 المغرب", "🇩🇿 الجزائر", "🇹🇳 تونس", "🇱🇾 ليبيا", "🇪🇬 مصر", "🇲🇱 مالي", "🇲🇷 موريتانيا", "🇸🇦 السعودية", "🇾🇪 اليمن"],
    },
    tree: {
      label: "شجرة العائلة",
      title: "نسب القبيلة",
      body: "تربط شجرة النسب الكاملة جميع فروع أسرة النواجي من سيدي ناجي حتى يومنا هذا.",
      note: "شجرة النسب القابلة للتحميل قيد الإعداد. يرجى المتابعة.",
      btn: "تحميل شجرة القبيلة PNG",
    },
    gallery: {
      label: "ذكريات",
      title: "معرض الصور",
    },
    contact: {
      label: "تواصل معنا",
      title: "اتصل بنا",
      body: "للاستفسار عن النسب أو اجتماعات القبيلة أو التوثيق، تواصل معنا عبر النموذج أدناه.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      msg: "الرسالة",
      send: "إرسال الرسالة",
    },
    footer: {
      quote: "صلة الرحم تجمعنا",
      quoteEn: "Kinship Unites Us",
      location: "محاميد الغزلان، المغرب",
      madeBy: "صُنع بـ ♥ بواسطة",
    },
  },
};

export default function App() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = content[lang];
  const featuredTribeImage = "/images/10.jpg";
  const galleryImages = [
    { src: "/images/1.jpg", alt: "Tribe gathering 1" },
    { src: "/images/2.jpg", alt: "Tribe gathering 2" },
    { src: "/images/3.jpg", alt: "Tribe gathering 3" },
    { src: "/images/4.jpg", alt: "Tribe gathering 4" },
    { src: "/images/5.jpg", alt: "Tribe gathering 5" },
    { src: "/images/6.jpg", alt: "Tribe gathering 6" },
    { src: "/images/7.png", alt: "Tribe gathering 7" },
    { src: "/images/8.png", alt: "Tribe gathering 8" },
    { src: "/images/9.png", alt: "Tribe gathering 9" },
  ];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className={`app lang-${lang}`} dir={t.dir}>
      {/* NAVBAR */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <button className="logo" onClick={() => scrollTo("hero")} aria-label="Home">
            <span className="logo-ar">النواجي</span>
            <span className="logo-dot" />
          </button>
          <div className={`nav-links${menuOpen ? " open" : ""}`}>
            {["hero","about","news","countries","tree","gallery","contact"].map((id, i) => {
              const labels = [t.nav.home, t.nav.about, t.nav.news, t.countries.title, t.tree.label, t.nav.gallery, t.nav.contact];
              return (
                <button key={id} className="nav-link" onClick={() => scrollTo(id)}>{labels[i]}</button>
              );
            })}
            <a
              className="social-link social-link-nav"
              href="https://web.facebook.com/ouladsidinaji2015"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <button className="lang-btn" onClick={() => { setLang(l => l === "en" ? "ar" : "en"); setMenuOpen(false); }}>
              {t.nav.langBtn}
            </button>
          </div>
          <button className="burger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span className={menuOpen ? "x" : ""} />
            <span className={menuOpen ? "x" : ""} />
            <span className={menuOpen ? "x" : ""} />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero-section">
        <div className="hero-bg-pattern" />
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="hero-label">{t.hero.label}</p>
            <h1 className="hero-title">{t.hero.tribe}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <p className="hero-location">
              <span className="pin">📍</span> {t.hero.location}
            </p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => scrollTo("about")}>{t.hero.btn1}</button>
              <button className="btn-outline" onClick={() => scrollTo("tree")}>{t.hero.btn2}</button>
            </div>
          </div>
          <a
            className="hero-facebook"
            href="https://web.facebook.com/ouladsidinaji2015"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
            <span>Facebook</span>
          </a>
        </div>
        <div className="hero-scroll-hint">
          <span />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="container">
          <p className="section-label">{t.about.label}</p>
          <h2 className="section-title">{t.about.title}</h2>
          <div className="divider" />
          <div className="about-grid">
            <div className="about-text">
              <p className="about-body">{t.about.body}</p>
              <div className="value-cards">
                {t.about.values.map((v, i) => (
                  <div key={i} className="value-card">
                    <span className="value-icon">{["✦","⌖","◈","◇"][i]}</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-presence">
              <p className="presence-label">{t.about.presenceLabel}</p>
              <div className="presence-countries">
                {t.about.countries.map((c, i) => (
                  <span key={i} className="presence-tag">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="news-section">
        <div className="container">
          <p className="section-label">{t.news.label}</p>
          <h2 className="section-title">{t.news.title}</h2>
          <div className="divider" />
          <div className="news-card">
            <div className="news-card-header">
              <span className="news-tag">{t.news.tag}</span>
              <span className="news-date">{t.news.date}</span>
            </div>
            <blockquote className="news-original ar" dir="rtl">
              {t.news.original}
            </blockquote>
            <div className="news-divider" />
            <p className="news-translation en" dir="ltr">{t.news.excerpt}</p>
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section id="countries" className="countries-section">
        <div className="container">
          <p className="section-label">{t.countries.label}</p>
          <h2 className="section-title">{t.countries.title}</h2>
          <div className="divider" />
          <div className="countries-grid">
            {t.countries.list.map((c, i) => (
              <div key={i} className="country-card">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* TRIBE TREE */}
      <section id="tree" className="tree-section">
        <div className="container">
          <p className="section-label">{t.tree.label}</p>
          <h2 className="section-title">{t.tree.title}</h2>
          <div className="divider" />
          <div className="tree-box">
            <p className="tree-body">{t.tree.body}</p>
            <p className="tree-note">{t.tree.note}</p>
            <a className="btn-primary tree-btn tree-download" href={featuredTribeImage} download="10.jpg">
              ⬇ {t.tree.btn}
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <p className="section-label">{t.gallery.label}</p>
          <h2 className="section-title">{t.gallery.title}</h2>
          <div className="divider" />
          <div className="gallery-grid">
            {galleryImages.map((image, i) => (
              <div key={image.src} className="gallery-item">
                <img className="gallery-image" src={image.src} alt={image.alt} />
                <div className="gallery-caption">
                  <span>{lang === "ar" ? "صورة" : "Photo"} {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="container">
          <p className="section-label">{t.contact.label}</p>
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="divider" />
          <div className="contact-layout">
            <p className="contact-body">{t.contact.body}</p>
            <div className="contact-form">
              <div className="form-row">
                <input className="form-input" type="text" placeholder={t.contact.name} />
                <input className="form-input" type="email" placeholder={t.contact.email} />
              </div>
              <textarea className="form-input form-textarea" placeholder={t.contact.msg} rows={5} />
              <button className="btn-primary">{t.contact.send}</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-logo ar">النواجي</div>
         
          <p className="footer-quote ar">"{t.footer.quote}"</p>
          <p className="footer-quote-en en">— {t.footer.quoteEn} —</p>
          <p className="footer-location">📍 {t.footer.location}</p>
          <div className="footer-divider" />
          <p className="footer-credit">
            {t.footer.madeBy} <a href="https://najz.dev" target="_blank" rel="noopener noreferrer" className="footer-link">najz.dev</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.6c0-.9.2-1.5 1.6-1.5h1.8V4.3c-.8-.1-1.8-.2-2.9-.2-2.9 0-4.9 1.8-4.9 5v1.5H6v3.2h2.5V22h5z" fill="currentColor" />
    </svg>
  );
}
