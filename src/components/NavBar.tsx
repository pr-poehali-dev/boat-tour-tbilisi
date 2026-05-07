import Icon from "@/components/ui/icon";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Lang, t } from "@/i18n";

export type SiteTab = "river" | "city" | "country";

interface NavBarProps {
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  scrollTo: (id: string) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  activeTab: SiteTab;
  setActiveTab: (tab: SiteTab) => void;
}

const tabLabels: Record<Lang, Record<SiteTab, string>> = {
  ru: { river: "Речные туры", city: "Экскурсия по городу", country: "Загородные туры" },
  en: { river: "River Tours", city: "City Tour", country: "Day Trips" },
  ka: { river: "მდინარის ტურები", city: "ქალაქის ტური", country: "ქალაქგარე ტური" },
  ar: { river: "جولات نهرية", city: "جولة المدينة", country: "جولات خارج المدينة" },
};

const tabIcons: Record<SiteTab, string> = {
  river: "Anchor",
  city: "Building2",
  country: "TreePine",
};

export default function NavBar({ activeSection, menuOpen, setMenuOpen, scrollTo, lang, setLang, activeTab, setActiveTab }: NavBarProps) {
  const tr = t[lang].nav;

  const navItems = [
    { id: "home", label: tr.home },
    { id: "tours", label: tr.tours },
    { id: "gallery", label: tr.gallery },
    { id: "booking", label: tr.booking },
    { id: "contacts", label: tr.contacts },
  ];

  const tabs: SiteTab[] = ["river", "city", "country"];

  const handleTabClick = (tab: SiteTab) => {
    setActiveTab(tab);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      {/* TAB STRIP */}
      <div className="border-b border-white/10" style={{ background: "var(--navy)" }}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-10">
          <div className="flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-body font-medium transition-all duration-200"
                style={{
                  background: activeTab === tab ? "rgba(212,160,49,0.2)" : "transparent",
                  color: activeTab === tab ? "var(--gold-light)" : "rgba(255,255,255,0.55)",
                  border: activeTab === tab ? "1px solid rgba(212,160,49,0.35)" : "1px solid transparent",
                }}
              >
                <Icon name={tabIcons[tab]} size={12} />
                <span className="hidden sm:inline">{tabLabels[lang][tab]}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher lang={lang} setLang={setLang} />
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <button onClick={() => { handleTabClick("river"); }} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--teal)" }}>
            <Icon name="Anchor" size={16} className="text-white" />
          </div>
          <span className="font-display text-xl font-bold" style={{ color: "var(--navy)" }}>
            КураТур
          </span>
        </button>

        {activeTab === "river" && (
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
        )}

        {activeTab !== "river" && (
          <div className="hidden md:flex items-center gap-1">
            <span className="font-body text-sm font-semibold px-3" style={{ color: "var(--navy)" }}>
              {tabLabels[lang][activeTab]}
            </span>
          </div>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollTo("booking")}
            className="hidden md:block btn-gold px-5 py-2 rounded-xl text-sm font-body"
          >
            {tr.book}
          </button>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} style={{ color: "var(--navy)" }} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1">
          <div className="flex gap-2 mb-2 pb-2 border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className="flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs font-body font-medium transition-all"
                style={{
                  background: activeTab === tab ? "var(--teal)" : "var(--sand)",
                  color: activeTab === tab ? "white" : "var(--navy)",
                }}
              >
                <Icon name={tabIcons[tab]} size={12} />
                <span>{tabLabels[lang][tab]}</span>
              </button>
            ))}
          </div>
          {activeTab === "river" && navItems.map((item) => (
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
  );
}
