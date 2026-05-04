import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMAGES = {
  boat: "https://cdn.poehali.dev/projects/051da4b6-d5da-4be2-a654-6faca8ae6469/bucket/9ccd4919-2a63-4ff5-b256-566eb4217655.jpeg",
  tbilisi: "https://cdn.poehali.dev/projects/051da4b6-d5da-4be2-a654-6faca8ae6469/files/c8451a92-435d-4d1d-aa55-dfc9238d98f4.jpg",
  tourists: "https://cdn.poehali.dev/projects/051da4b6-d5da-4be2-a654-6faca8ae6469/bucket/9ae8cc12-925b-4398-888c-5fbf1483e18c.jpeg",
};

const tours = [
  {
    id: 1,
    title: "Групповой тур",
    desc: "Присоединяйтесь к другим туристам — весело, доступно и интересно.",
    duration: "30–35 мин · 6 км",
    badge: "Хит",
    icon: "Users",
    color: "from-amber-500 to-orange-600",
    tariffs: [
      { label: "1 человек", price: "30 ₾" },
    ],
  },
  {
    id: 2,
    title: "Индивидуальный",
    desc: "Вся лодка только для вас и вашей компании — без чужих, в своём темпе.",
    duration: "30–35 мин · 6 км",
    badge: "Популярное",
    icon: "Anchor",
    color: "from-teal-500 to-cyan-600",
    tariffs: [
      { label: "до 4 человек", price: "200 ₾" },
      { label: "5–6 человек", price: "250 ₾" },
      { label: "от 7 человек", price: "300+ ₾" },
    ],
  },
];

const gallery = [
  { src: IMAGES.boat, label: "Наш флот" },
  { src: IMAGES.tbilisi, label: "Тбилиси с воды" },
  { src: IMAGES.tourists, label: "Наши гости" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [form, setForm] = useState({ name: "", phone: "", date: "", tour: "", guests: "" });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const navItems = [
    { id: "home", label: "Главная" },
    { id: "tours", label: "Экскурсии" },
    { id: "gallery", label: "Галерея" },
    { id: "booking", label: "Бронирование" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--teal)" }}>
              <Icon name="Anchor" size={16} className="text-white" />
            </div>
            <span className="font-display text-xl font-bold" style={{ color: "var(--navy)" }}>
              КураТур
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-body"
                style={{
                  color: activeSection === item.id ? "var(--teal)" : "var(--navy)",
                  background: activeSection === item.id ? "rgba(13,125,138,0.08)" : "transparent",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("booking")}
            className="hidden md:block btn-gold px-5 py-2 rounded-xl text-sm font-body"
          >
            Забронировать
          </button>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} style={{ color: "var(--navy)" }} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left px-4 py-3 rounded-lg text-sm font-medium font-body"
                style={{ color: "var(--navy)" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(160deg, var(--navy) 0%, #0a4a5c 50%, var(--teal-dark) 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${IMAGES.tbilisi})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(15,43,61,0.7) 0%, rgba(8,92,103,0.85) 100%)" }}
        />

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-32 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-[200%] h-full animate-wave opacity-20">
            <path d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z" fill="white"/>
          </svg>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-[200%] h-full opacity-10" style={{ animation: "wave 8s linear infinite reverse" }}>
            <path d="M0,80 C200,20 400,100 600,60 C800,20 1000,100 1200,80 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>

        <div className="absolute right-10 top-1/3 text-5xl animate-float hidden lg:block select-none">⛵</div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body mb-6 animate-fade-up"
            style={{ background: "rgba(212,160,49,0.15)", color: "var(--gold-light)", border: "1px solid rgba(212,160,49,0.3)" }}
          >
            <Icon name="MapPin" size={14} />
            Тбилиси, река Кура
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up-delay-1">
            Открой Тбилиси<br />
            <span className="shimmer-text italic">с воды</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 animate-fade-up-delay-2 leading-relaxed">
            Речные экскурсии по Куре — катера, закаты и незабываемые виды<br className="hidden md:block" /> на исторический Тбилиси
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
            <button onClick={() => scrollTo("booking")} className="btn-gold px-8 py-4 rounded-2xl text-base font-body">
              Забронировать экскурсию
            </button>
            <button
              onClick={() => scrollTo("tours")}
              className="px-8 py-4 rounded-2xl text-base font-body font-semibold text-white transition-all duration-200"
              style={{ border: "1.5px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.08)" }}
            >
              Наши маршруты
            </button>
          </div>

          <div className="flex justify-center gap-10 mt-16 animate-fade-in">
            {[["500+", "Довольных гостей"], ["3", "Маршрута"], ["5★", "Оценка сервиса"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl font-bold" style={{ color: "var(--gold-light)" }}>{num}</div>
                <div className="font-body text-xs text-blue-200 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOURS */}
      <section id="tours" className="py-24 px-4" style={{ background: "var(--sand)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
              Наши маршруты
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3" style={{ color: "var(--navy)" }}>
              Экскурсии по Куре
            </h2>
            <p className="font-body text-gray-500 mt-4 max-w-xl mx-auto">
              Каждый маршрут — особая история Тбилиси, рассказанная с воды
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-3xl overflow-hidden card-hover shadow-sm">
                <div className={`bg-gradient-to-br ${tour.color} p-8 relative`}>
                  <span className="absolute top-4 right-4 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full font-body">
                    {tour.badge}
                  </span>
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={tour.icon} size={28} className="text-white" fallback="Ship" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{tour.title}</h3>
                  <div className="flex items-center gap-1 mt-2 text-white/80 text-sm font-body">
                    <Icon name="Clock" size={14} />
                    {tour.duration}
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">{tour.desc}</p>
                  <div className="space-y-2 mb-5">
                    {tour.tariffs.map((t) => (
                      <div key={t.label} className="flex items-center justify-between px-3 py-2 rounded-xl" style={{ background: "var(--sand)" }}>
                        <span className="font-body text-sm text-gray-500">{t.label}</span>
                        <span className="font-display text-lg font-bold" style={{ color: "var(--teal)" }}>{t.price}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setForm((f) => ({ ...f, tour: tour.title }));
                      scrollTo("booking");
                    }}
                    className="btn-teal w-full py-2.5 rounded-xl text-sm font-body"
                  >
                    Забронировать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
              Галерея
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3" style={{ color: "var(--navy)" }}>
              Катера и достопримечательности
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((item, i) => (
              <div key={i} className="relative rounded-3xl overflow-hidden aspect-[4/3] card-hover group cursor-pointer shadow-md">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-display text-xl font-semibold">{item.label}</div>
              </div>
            ))}
          </div>

          <div
            className="mt-6 rounded-3xl overflow-hidden relative cursor-pointer group shadow-md"
            style={{ background: "linear-gradient(135deg, var(--navy), var(--teal-dark))" }}
          >
            <div className="flex items-center justify-center h-56 gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: "var(--gold)" }}
              >
                <Icon name="Play" size={24} className="text-white ml-1" />
              </div>
              <div className="text-white">
                <div className="font-display text-2xl font-semibold">Видео-тур по Куре</div>
                <div className="font-body text-blue-200 text-sm mt-1">Посмотрите, как проходят наши экскурсии</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 px-4" style={{ background: "var(--sand)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-body text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
              Онлайн-бронирование
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3" style={{ color: "var(--navy)" }}>
              Забронировать место
            </h2>
            <p className="font-body text-gray-500 mt-4">Оставьте заявку — мы свяжемся в течение 15 минут</p>
          </div>

          {sent ? (
            <div
              className="rounded-3xl p-12 text-center"
              style={{ background: "linear-gradient(135deg, var(--teal), var(--teal-light))" }}
            >
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-display text-3xl font-bold text-white mb-2">Заявка принята!</h3>
              <p className="font-body text-teal-100">Мы свяжемся с вами в ближайшее время для подтверждения бронирования.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-sm font-medium text-gray-600 block mb-2">Ваше имя *</label>
                  <input
                    required
                    type="text"
                    placeholder="Иван Петров"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border font-body text-sm outline-none transition-all focus:ring-2 focus:ring-teal-400"
                    style={{ borderColor: "var(--border)" }}
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-gray-600 block mb-2">Телефон *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+995 555 000 000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border font-body text-sm outline-none transition-all focus:ring-2 focus:ring-teal-400"
                    style={{ borderColor: "var(--border)" }}
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-sm font-medium text-gray-600 block mb-2">Экскурсия</label>
                <select
                  value={form.tour}
                  onChange={(e) => setForm({ ...form, tour: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border font-body text-sm outline-none transition-all bg-white"
                  style={{ borderColor: "var(--border)" }}
                >
                  <option value="">Выберите маршрут</option>
                  {tours.map((t) => (
                    <option key={t.id} value={t.title}>{t.title} — {t.price}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-sm font-medium text-gray-600 block mb-2">Дата</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border font-body text-sm outline-none transition-all focus:ring-2 focus:ring-teal-400"
                    style={{ borderColor: "var(--border)" }}
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-gray-600 block mb-2">Кол-во гостей</label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    placeholder="2"
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border font-body text-sm outline-none transition-all focus:ring-2 focus:ring-teal-400"
                    style={{ borderColor: "var(--border)" }}
                  />
                </div>
              </div>

              <button type="submit" className="btn-gold w-full py-4 rounded-2xl text-base font-body">
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section
        id="contacts"
        className="py-24 px-4"
        style={{ background: `linear-gradient(160deg, var(--navy) 0%, var(--teal-dark) 100%)` }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--gold-light)" }}>
              Контакты
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-white">
              Свяжитесь с нами
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "Phone", title: "Телефон", value: "+995 555 90 64 61", sub: "Пн-Вс, 9:00–21:00" },
              { icon: "Instagram", title: "Instagram", value: "@boat_trip_tbilisi7", sub: "Фото и видео прогулок" },
              { icon: "Mail", title: "Email", value: "rivertriptbilisi@mail.ru", sub: "Ответим в течение часа" },
            ].map((c) => (
              <div key={c.title} className="glass rounded-3xl p-8 text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(212,160,49,0.2)" }}
                >
                  <Icon name={c.icon} size={24} style={{ color: "var(--gold-light)" }} />
                </div>
                <div className="font-body text-sm text-blue-300 mb-1">{c.title}</div>
                <div className="font-display text-xl font-semibold text-white">{c.value}</div>
                <div className="font-body text-sm text-blue-300 mt-1">{c.sub}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-body text-blue-300 text-sm mb-5">Мы в социальных сетях</p>
            <div className="flex justify-center gap-4">
              {[
                { icon: "Instagram", label: "Instagram", href: "https://instagram.com/boat_trip_tbilisi7" },
                { icon: "Phone", label: "WhatsApp", href: "https://wa.me/995555906461" },
                { icon: "Mail", label: "Email", href: "mailto:rivertriptbilisi@mail.ru" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass px-6 py-3 rounded-2xl text-white text-sm font-body flex items-center gap-2 transition-all duration-200 hover:bg-white/20"
                >
                  <Icon name={s.icon} size={16} fallback="ExternalLink" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-6 px-4 text-center font-body text-sm"
        style={{ background: "var(--navy)", color: "rgba(255,255,255,0.4)" }}
      >
        © 2024 КураТур — Речные экскурсии по Куре, Тбилиси
      </footer>
    </div>
  );
}