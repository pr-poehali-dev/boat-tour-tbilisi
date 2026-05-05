import Icon from "@/components/ui/icon";
import { Lang, t } from "@/i18n";

const IMAGES = {
  boat: "https://cdn.poehali.dev/projects/051da4b6-d5da-4be2-a654-6faca8ae6469/bucket/9ccd4919-2a63-4ff5-b256-566eb4217655.jpeg",
  tbilisi: "https://cdn.poehali.dev/projects/051da4b6-d5da-4be2-a654-6faca8ae6469/files/c8451a92-435d-4d1d-aa55-dfc9238d98f4.jpg",
  tourists: "https://cdn.poehali.dev/projects/051da4b6-d5da-4be2-a654-6faca8ae6469/bucket/9ae8cc12-925b-4398-888c-5fbf1483e18c.jpeg",
};

export const toursData = [
  {
    id: 1,
    key: "group" as const,
    icon: "Users",
    color: "from-amber-500 to-orange-600",
    badgeKey: "hit" as const,
    duration: "30–35 мин · 6 км",
    tariffKeys: ["tariff1"] as const,
    tariffs: [{ price: "30 ₾" }],
  },
  {
    id: 2,
    key: "individual" as const,
    icon: "Anchor",
    color: "from-teal-500 to-cyan-600",
    badgeKey: "popular" as const,
    duration: "30–35 мин · 6 км",
    tariffKeys: ["tariff2", "tariff3", "tariff4"] as const,
    tariffs: [{ price: "200 ₾" }, { price: "250 ₾" }, { price: "300+ ₾" }],
  },
];

interface ToursAndGalleryProps {
  scrollTo: (id: string) => void;
  setForm: React.Dispatch<React.SetStateAction<{ name: string; phone: string; date: string; tour: string; guests: string }>>;
  lang: Lang;
}

export default function ToursAndGallery({ scrollTo, setForm, lang }: ToursAndGalleryProps) {
  const tr = t[lang];
  const isRtl = lang === "ar";

  const gallery = [
    { src: IMAGES.boat, label: tr.gallery.label1 },
    { src: IMAGES.tbilisi, label: tr.gallery.label2 },
    { src: IMAGES.tourists, label: tr.gallery.label3 },
  ];

  return (
    <>
      {/* TOURS */}
      <section id="tours" className="py-24 px-4" style={{ background: "var(--sand)" }} dir={isRtl ? "rtl" : "ltr"}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
              {tr.tours.subtitle}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3" style={{ color: "var(--navy)" }}>
              {tr.tours.title}
            </h2>
            <p className="font-body text-gray-500 mt-4 max-w-xl mx-auto">
              {tr.tours.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {toursData.map((tour) => {
              const info = tr.tours[tour.key];
              return (
                <div key={tour.id} className="bg-white rounded-3xl overflow-hidden card-hover shadow-sm">
                  <div className={`bg-gradient-to-br ${tour.color} p-8 relative`}>
                    <span className="absolute top-4 right-4 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full font-body">
                      {tr.tours[tour.badgeKey]}
                    </span>
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                      <Icon name={tour.icon} size={28} className="text-white" fallback="Ship" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">{info.title}</h3>
                    <div className="flex items-center gap-1 mt-2 text-white/80 text-sm font-body">
                      <Icon name="Clock" size={14} />
                      {tour.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">{info.desc}</p>
                    <div className="space-y-2 mb-5">
                      {tour.tariffs.map((tariff, i) => (
                        <div key={i} className="flex items-center justify-between px-3 py-2 rounded-xl" style={{ background: "var(--sand)" }}>
                          <span className="font-body text-sm text-gray-500">{tr.tours[tour.tariffKeys[i]]}</span>
                          <span className="font-display text-lg font-bold" style={{ color: "var(--teal)" }}>{tariff.price}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        setForm((f) => ({ ...f, tour: info.title }));
                        scrollTo("booking");
                      }}
                      className="btn-teal w-full py-2.5 rounded-xl text-sm font-body"
                    >
                      {tr.tours.btnBook}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 px-4" style={{ background: "var(--sand)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <a
            href="https://maps.google.com/?q=Europe+Square+Tbilisi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-3 group"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
              style={{ background: "var(--teal)" }}
            >
              <Icon name="MapPin" size={28} className="text-white" />
            </div>
            <div>
              <div className="font-display text-xl font-bold" style={{ color: "var(--navy)" }}>
                {tr.location.name}
              </div>
              <div className="font-body text-sm mt-1 flex items-center justify-center gap-1" style={{ color: "var(--teal)" }}>
                <Icon name="ExternalLink" size={13} />
                {tr.location.open}
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-4 bg-white" dir={isRtl ? "rtl" : "ltr"}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
              {tr.gallery.subtitle}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3" style={{ color: "var(--navy)" }}>
              {tr.gallery.title}
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
                <div className="font-display text-2xl font-semibold">{tr.gallery.videoTitle}</div>
                <div className="font-body text-blue-200 text-sm mt-1">{tr.gallery.videoDesc}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
