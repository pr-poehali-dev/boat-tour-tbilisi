import Icon from "@/components/ui/icon";
import { Lang, t } from "@/i18n";

const CITY_IMAGES = [
  {
    src: "https://cdn.poehali.dev/projects/051da4b6-d5da-4be2-a654-6faca8ae6469/bucket/c81396f0-2a8a-42cd-a124-f80da376ad29.jpeg",
    label: "Панорама Тбилиси",
  },
  {
    src: "https://cdn.poehali.dev/projects/051da4b6-d5da-4be2-a654-6faca8ae6469/bucket/909ce691-9e0a-4256-894b-ab5ffcd67456.jpeg",
    label: "Старый город",
  },
  {
    src: "https://cdn.poehali.dev/projects/051da4b6-d5da-4be2-a654-6faca8ae6469/bucket/c75cc378-f39e-4cd9-8542-4eb40472b1d7.jpeg",
    label: "Вид с канатной дороги",
  },
];

const cityTourData = [
  { icon: "MapPin", title: "Старый Тбилиси", desc: "Метехи, серные бани, мост Мира, крепость Нарикала", duration: "2–3 часа" },
  { icon: "Camera", title: "Смотровые площадки", desc: "Самые живописные точки с видом на весь город", duration: "1–2 часа" },
  { icon: "Coffee", title: "Местная кухня", desc: "Хинкали, хачапури и традиционные грузинские вина", duration: "Включено" },
];

interface CityTourPageProps {
  scrollTo: (id: string) => void;
  lang: Lang;
}

export default function CityTourPage({ scrollTo, lang }: CityTourPageProps) {
  const isRtl = lang === "ar";

  const labels: Record<Lang, { hero1: string; hero2: string; heroDesc: string; btnBook: string; subtitle: string; title: string; desc: string; includes: string; photoTitle: string; features: { title: string; desc: string }[]; imgLabels: string[] }> = {
    ru: {
      hero1: "Экскурсия по",
      hero2: "Тбилиси",
      heroDesc: "Погрузитесь в атмосферу древнего города — старинные кварталы, купольные бани, крепости и потрясающие виды",
      btnBook: "Забронировать экскурсию",
      subtitle: "Пешие и автомобильные туры",
      title: "По улицам Тбилиси",
      desc: "Откройте для себя многовековую историю города с опытным гидом",
      includes: "Что входит в тур",
      photoTitle: "Фотографии маршрута",
      features: cityTourData.map(d => ({ title: d.title, desc: d.desc })),
      imgLabels: ["Панорама Тбилиси", "Старый город", "Вид с канатной дороги"],
    },
    en: {
      hero1: "City Tour of",
      hero2: "Tbilisi",
      heroDesc: "Immerse yourself in the ancient city's atmosphere — old quarters, domed baths, fortresses and stunning views",
      btnBook: "Book a Tour",
      subtitle: "Walking & Driving Tours",
      title: "Through Tbilisi Streets",
      desc: "Discover the city's centuries-old history with an experienced guide",
      includes: "What's Included",
      photoTitle: "Tour Photos",
      features: [
        { title: "Old Tbilisi", desc: "Metekhi, sulfur baths, Bridge of Peace, Narikala Fortress" },
        { title: "Viewpoints", desc: "The most scenic spots overlooking the whole city" },
        { title: "Local Cuisine", desc: "Khinkali, khachapuri and traditional Georgian wines" },
      ],
      imgLabels: ["Tbilisi Panorama", "Old Town", "Cable Car View"],
    },
    ka: {
      hero1: "ქალაქის ტური",
      hero2: "თბილისი",
      heroDesc: "ჩაეფლეთ უძველესი ქალაქის ატმოსფეროში — ძველი კვარტლები, გუმბათიანი აბანოები, ციხეები",
      btnBook: "ტურის დაჯავშნა",
      subtitle: "საფეხმავლო და საავტომობილო ტურები",
      title: "თბილისის ქუჩებზე",
      desc: "აღმოაჩინეთ ქალაქის მრავალსაუკუნოვანი ისტორია გამოცდილი გიდთან ერთად",
      includes: "რა შედის ტურში",
      photoTitle: "მარშრუტის ფოტოები",
      features: [
        { title: "ძველი თბილისი", desc: "მეტეხი, გოგირდის აბანოები, მშვიდობის ხიდი, ნარიყალა" },
        { title: "სათვალთვალო მოედნები", desc: "ყველაზე ფერადოვანი ადგილები მთელი ქალაქის ხედვით" },
        { title: "ადგილობრივი სამზარეულო", desc: "ხინკალი, ხაჭაპური და ქართული ღვინოები" },
      ],
      imgLabels: ["თბილისის პანორამა", "ძველი ქალაქი", "საბაგირო ხედი"],
    },
    ar: {
      hero1: "جولة في مدينة",
      hero2: "تبليسي",
      heroDesc: "انغمس في أجواء المدينة القديمة — الأحياء العتيقة، الحمامات المقببة، القلاع والمناظر الخلابة",
      btnBook: "احجز جولة",
      subtitle: "جولات سيراً وبالسيارة",
      title: "في شوارع تبليسي",
      desc: "اكتشف تاريخ المدينة العريق مع مرشد سياحي متمرس",
      includes: "ما يشمله الجولة",
      photoTitle: "صور المسار",
      features: [
        { title: "تبليسي القديمة", desc: "ميتيخي، الحمامات الكبريتية، جسر السلام، قلعة ناريكالا" },
        { title: "نقاط المشاهدة", desc: "أجمل المواقع المطلة على المدينة بأكملها" },
        { title: "المطبخ المحلي", desc: "خينكالي، خاتشابوري والنبيذ الجورجي التقليدي" },
      ],
      imgLabels: ["بانوراما تبليسي", "المدينة القديمة", "منظر من التلفريك"],
    },
  };

  const lb = labels[lang];

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(160deg, #2d1b0e 0%, #5c3a1a 50%, #8b5a2b 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `url(${CITY_IMAGES[2].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(45,27,14,0.75) 0%, rgba(92,58,26,0.88) 100%)" }} />

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-20 pointer-events-none">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full opacity-20">
            <path d="M0,40 C300,80 600,0 900,40 C1050,60 1150,20 1200,40 L1200,80 L0,80 Z" fill="white"/>
          </svg>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body mb-6"
            style={{ background: "rgba(212,160,49,0.15)", color: "var(--gold-light)", border: "1px solid rgba(212,160,49,0.3)" }}
          >
            <Icon name="Building2" size={14} />
            {lb.subtitle}
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            {lb.hero1}<br />
            <span className="shimmer-text italic">{lb.hero2}</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-orange-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            {lb.heroDesc}
          </p>
          <button onClick={() => scrollTo("booking")} className="btn-gold px-8 py-4 rounded-2xl text-base font-body">
            {lb.btnBook}
          </button>

          <div className="flex justify-center gap-10 mt-16">
            {[["50+", lb.features[0].title.split(" ")[0]], ["4.9★", lb.features[2].title.split(" ")[0]], ["10+", lb.features[1].title.split(" ")[0]]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl font-bold" style={{ color: "var(--gold-light)" }}>{num}</div>
                <div className="font-body text-xs text-orange-200 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-4" style={{ background: "var(--sand)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
              {lb.subtitle}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3" style={{ color: "var(--navy)" }}>
              {lb.title}
            </h2>
            <p className="font-body text-gray-500 mt-4 max-w-xl mx-auto">{lb.desc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cityTourData.map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm card-hover">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "linear-gradient(135deg, #d4a031, #e8b84b)" }}
                >
                  <Icon name={item.icon} size={26} className="text-white" fallback="Star" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2" style={{ color: "var(--navy)" }}>{lb.features[i].title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{lb.features[i].desc}</p>
                <div
                  className="mt-4 inline-flex items-center gap-1 text-xs font-body font-semibold px-3 py-1 rounded-full"
                  style={{ background: "rgba(13,125,138,0.08)", color: "var(--teal)" }}
                >
                  <Icon name="Clock" size={12} />
                  {item.duration}
                </div>
              </div>
            ))}
          </div>

          {/* GALLERY */}
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl font-bold" style={{ color: "var(--navy)" }}>{lb.photoTitle}</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CITY_IMAGES.map((img, i) => (
              <div key={i} className="relative rounded-3xl overflow-hidden aspect-[3/4] card-hover group cursor-pointer shadow-md">
                <img src={img.src} alt={lb.imgLabels[i]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-display text-lg font-semibold">{lb.imgLabels[i]}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button onClick={() => scrollTo("booking")} className="btn-gold px-10 py-4 rounded-2xl text-base font-body">
              {lb.btnBook}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}