import Icon from "@/components/ui/icon";
import { tours } from "@/components/ToursAndGallery";

interface BookingAndContactsProps {
  form: { name: string; phone: string; date: string; tour: string; guests: string };
  setForm: React.Dispatch<React.SetStateAction<{ name: string; phone: string; date: string; tour: string; guests: string }>>;
  sent: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function BookingAndContacts({ form, setForm, sent, handleSubmit }: BookingAndContactsProps) {
  return (
    <>
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
                    <option key={t.id} value={t.title}>{t.title}</option>
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
    </>
  );
}