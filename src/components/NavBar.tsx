import Icon from "@/components/ui/icon";

const navItems = [
  { id: "home", label: "Главная" },
  { id: "tours", label: "Экскурсии" },
  { id: "gallery", label: "Галерея" },
  { id: "booking", label: "Бронирование" },
  { id: "contacts", label: "Контакты" },
];

interface NavBarProps {
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  scrollTo: (id: string) => void;
}

export default function NavBar({ activeSection, menuOpen, setMenuOpen, scrollTo }: NavBarProps) {
  return (
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
  );
}
