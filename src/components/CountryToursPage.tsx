import Icon from "@/components/ui/icon";
import { Lang } from "@/i18n";

const MTSKHETA_1 = "https://cdn.poehali.dev/projects/051da4b6-d5da-4be2-a654-6faca8ae6469/bucket/fabc3d6c-f21b-4e71-88e9-bb60c84b3328.jpeg";
const ANANURI_1 = "https://cdn.poehali.dev/projects/051da4b6-d5da-4be2-a654-6faca8ae6469/bucket/93400a42-2b06-451e-b8f4-28cf0dae60da.jpeg";

const galleryPhotos = [
  { src: MTSKHETA_1, place: "mtskheta" },
  { src: MTSKHETA_1, place: "mtskheta" },
  { src: ANANURI_1, place: "ananuri" },
  { src: ANANURI_1, place: "ananuri" },
];

const countryTours = [
  {
    icon: "Mountain",
    color: "from-emerald-500 to-green-600",
    duration: "Целый день",
    price: "от 150 ₾",
    places: ["Казбеги", "Монастырь Гергети", "Военно-Грузинская дорога"],
  },
  {
    icon: "Wine",
    color: "from-purple-500 to-violet-600",
    duration: "6–8 часов",
    price: "от 100 ₾",
    places: ["Сигнахи", "Бодбе", "Кахетия"],
  },
  {
    icon: "Landmark",
    color: "from-amber-500 to-orange-600",
    duration: "8–10 часов",
    price: "от 120 ₾",
    places: ["Мцхета", "Джвари", "Светицховели"],
  },
];

interface CountryToursPageProps {
  scrollTo: (id: string) => void;
  lang: Lang;
}

type TourLabel = { title: string; desc: string };
type PageLabels = {
  hero1: string; hero2: string; heroDesc: string; btnBook: string;
  subtitle: string; title: string; desc: string; photoTitle: string;
  priceFrom: string; duration: string; route: string;
  tours: TourLabel[];
  imgLabels: string[];
};

export default function CountryToursPage({ scrollTo, lang }: CountryToursPageProps) {
  const isRtl = lang === "ar";

  const labels: Record<Lang, PageLabels> = {
    ru: {
      hero1: "Загородные",
      hero2: "туры из Тбилиси",
      heroDesc: "Горы, монастыри, виноградники — однодневные поездки к самым красивым местам Грузии",
      btnBook: "Забронировать тур",
      subtitle: "Однодневные поездки",
      title: "За пределами города",
      desc: "Отправьтесь за город с комфортом — трансфер, гид и незабываемые впечатления",
      photoTitle: "Направления",
      priceFrom: "Цена",
      duration: "Длительность",
      route: "Маршрут",
      tours: [
        { title: "Казбеги и горы", desc: "Величественный Кавказ, монастырь Гергети у подножия горы Казбек и захватывающие горные пейзажи" },
        { title: "Кахетия и вино", desc: "Сердце грузинского виноделия — старинные монастыри, дегустации вина и живописная природа" },
        { title: "Мцхета — древняя столица", desc: "Первая столица Грузии с объектами ЮНЕСКО: монастырь Джвари и собор Светицховели" },
      ],
      imgLabels: ["Казбеги", "Кахетия", "Мцхета"],
    },
    en: {
      hero1: "Day Trips",
      hero2: "from Tbilisi",
      heroDesc: "Mountains, monasteries, vineyards — day trips to Georgia's most beautiful places",
      btnBook: "Book a Tour",
      subtitle: "Day Trips",
      title: "Beyond the City",
      desc: "Travel out of the city in comfort — transfer, guide and unforgettable experiences",
      photoTitle: "Destinations",
      priceFrom: "Price",
      duration: "Duration",
      route: "Route",
      tours: [
        { title: "Kazbegi & Mountains", desc: "Majestic Caucasus, Gergeti monastery at the foot of Mount Kazbek and stunning mountain scenery" },
        { title: "Kakheti & Wine", desc: "The heart of Georgian winemaking — ancient monasteries, wine tastings and scenic nature" },
        { title: "Mtskheta — Ancient Capital", desc: "Georgia's first capital with UNESCO sites: Jvari Monastery and Svetitskhoveli Cathedral" },
      ],
      imgLabels: ["Kazbegi", "Kakheti", "Mtskheta"],
    },
    ka: {
      hero1: "ქალაქგარე",
      hero2: "ტურები თბილისიდან",
      heroDesc: "მთები, მონასტრები, ვენახები — ერთდღიანი გასვლები საქართველოს ულამაზეს ადგილებში",
      btnBook: "ტურის დაჯავშნა",
      subtitle: "ერთდღიანი გასვლები",
      title: "ქალაქის მიღმა",
      desc: "გაემგზავრეთ ქალაქის გარეთ კომფორტულად — ტრანსფერი, გიდი და დაუვიწყარი შთაბეჭდილებები",
      photoTitle: "მიმართულებები",
      priceFrom: "ფასი",
      duration: "ხანგრძლივობა",
      route: "მარშრუტი",
      tours: [
        { title: "ყაზბეგი და მთები", desc: "დიდებული კავკასიონი, გერგეთის მონასტერი ყაზბეგის მთის ძირში" },
        { title: "კახეთი და ღვინო", desc: "ქართული მეღვინეობის გული — უძველესი მონასტრები, ღვინის დეგუსტაციები" },
        { title: "მცხეთა — ძველი დედაქალაქი", desc: "საქართველოს პირველი დედაქალაქი იუნესკოს ძეგლებით" },
      ],
      imgLabels: ["ყაზბეგი", "კახეთი", "მცხეთა"],
    },
    ar: {
      hero1: "جولات خارج",
      hero2: "مدينة تبليسي",
      heroDesc: "الجبال، الأديرة، الكروم — رحلات يومية إلى أجمل أماكن جورجيا",
      btnBook: "احجز جولة",
      subtitle: "رحلات يومية",
      title: "خارج المدينة",
      desc: "سافر خارج المدينة بكل راحة — نقل، مرشد وتجارب لا تُنسى",
      photoTitle: "الوجهات",
      priceFrom: "السعر",
      duration: "المدة",
      route: "المسار",
      tours: [
        { title: "كازبيجي والجبال", desc: "جبال القوقاز الشامخة ودير جيرجيتي عند سفح جبل كازبيك" },
        { title: "كاخيتي والنبيذ", desc: "قلب صناعة النبيذ الجورجي — أديرة عريقة وتذوق النبيذ والطبيعة الخلابة" },
        { title: "متسخيتا — العاصمة القديمة", desc: "العاصمة الأولى لجورجيا بمواقع اليونسكو: دير جفاري وكاتدرائية سفيتيتسخوفيلي" },
      ],
      imgLabels: ["كازبيجي", "كاخيتي", "متسخيتا"],
    },
  };

  const lb = labels[lang];

  const heroImg = MTSKHETA_1;

  const galleryLabels: Record<Lang, { mtskheta: string[]; ananuri: string[] }> = {
    ru: { mtskheta: ["Мцхета — древняя столица", "Монастырь Джвари"], ananuri: ["Крепость Ананури", "Ананури у водохранилища"] },
    en: { mtskheta: ["Mtskheta — Ancient Capital", "Jvari Monastery"], ananuri: ["Ananuri Fortress", "Ananuri at the Reservoir"] },
    ka: { mtskheta: ["მცხეთა — ძველი დედაქალაქი", "ჯვრის მონასტერი"], ananuri: ["ანანურის ციხე", "ანანური წყალსაცავთან"] },
    ar: { mtskheta: ["متسخيتا — العاصمة القديمة", "دير جفاري"], ananuri: ["قلعة أنانوري", "أنانوري عند الخزان"] },
  };

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0f2b0f 0%, #1a4a1a 50%, #2d5a2d 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,43,15,0.75) 0%, rgba(26,74,26,0.88) 100%)" }} />

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
            <Icon name="TreePine" size={14} />
            {lb.subtitle}
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            {lb.hero1}<br />
            <span className="shimmer-text italic">{lb.hero2}</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            {lb.heroDesc}
          </p>
          <button onClick={() => scrollTo("booking")} className="btn-gold px-8 py-4 rounded-2xl text-base font-body">
            {lb.btnBook}
          </button>

          <div className="flex justify-center gap-10 mt-16">
            {[["3", lb.tours[0].title.split(" ")[0]], ["4.9★", lb.tours[1].title.split(" ")[0]], ["100+", lb.tours[2].title.split(" ")[0]]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl font-bold" style={{ color: "var(--gold-light)" }}>{num}</div>
                <div className="font-body text-xs text-green-200 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOUR CARDS */}
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

          <div className="grid md:grid-cols-3 gap-8">
            {countryTours.map((tour, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden card-hover shadow-sm">
                <div className={`bg-gradient-to-br ${tour.color} p-8 relative`}>
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={tour.icon} size={28} className="text-white" fallback="MapPin" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{lb.tours[i].title}</h3>
                  <div className="flex items-center gap-1 mt-2 text-white/80 text-sm font-body">
                    <Icon name="Clock" size={14} />
                    {tour.duration}
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">{lb.tours[i].desc}</p>
                  <div className="space-y-1.5 mb-5">
                    {tour.places.map((place, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm font-body text-gray-500">
                        <Icon name="MapPin" size={13} style={{ color: "var(--teal)" }} />
                        {place}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4 px-3 py-2 rounded-xl" style={{ background: "var(--sand)" }}>
                    <span className="font-body text-sm text-gray-500">{lb.priceFrom}</span>
                    <span className="font-display text-lg font-bold" style={{ color: "var(--teal)" }}>{tour.price}</span>
                  </div>
                  <button
                    onClick={() => scrollTo("booking")}
                    className="btn-teal w-full py-2.5 rounded-xl text-sm font-body"
                  >
                    {lb.btnBook}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* GALLERY */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <span className="font-body text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--teal)" }}>
                {lb.photoTitle}
              </span>
              <h3 className="font-display text-3xl font-bold mt-2" style={{ color: "var(--navy)" }}>
                Мцхета &amp; Ананури
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryPhotos.map((photo, i) => {
                const gl = galleryLabels[lang];
                const label = photo.place === "mtskheta" ? gl.mtskheta[i % 2] : gl.ananuri[i % 2];
                return (
                  <div key={i} className="relative rounded-2xl overflow-hidden aspect-[3/4] card-hover group cursor-pointer shadow-md">
                    <img
                      src={photo.src}
                      alt={label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white font-body text-sm font-semibold leading-tight">{label}</div>
                  </div>
                );
              })}
            </div>
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