import Icon from "@/components/ui/icon";

const TBILISI_IMG = "https://cdn.poehali.dev/projects/051da4b6-d5da-4be2-a654-6faca8ae6469/files/c8451a92-435d-4d1d-aa55-dfc9238d98f4.jpg";

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: `linear-gradient(160deg, var(--navy) 0%, #0a4a5c 50%, var(--teal-dark) 100%)` }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url(${TBILISI_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}
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
  );
}
