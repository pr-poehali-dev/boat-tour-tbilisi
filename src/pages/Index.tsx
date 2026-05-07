import { useState } from "react";
import { Lang } from "@/i18n";
import NavBar, { SiteTab } from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ToursAndGallery from "@/components/ToursAndGallery";
import BookingAndContacts from "@/components/BookingAndContacts";
import CityTourPage from "@/components/CityTourPage";
import CountryToursPage from "@/components/CountryToursPage";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [form, setForm] = useState({ name: "", phone: "", date: "", tour: "", guests: "" });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("ru");
  const [activeTab, setActiveTab] = useState<SiteTab>("river");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("https://functions.poehali.dev/803a9bf8-2f08-4c6b-8337-10e1bfd4a804", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (err) { console.error(err); }
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <NavBar
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
        lang={lang}
        setLang={setLang}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="pt-[96px]">
        {activeTab === "river" && (
          <>
            <HeroSection scrollTo={scrollTo} lang={lang} />
            <ToursAndGallery scrollTo={scrollTo} setForm={setForm} lang={lang} />
            <BookingAndContacts
              form={form}
              setForm={setForm}
              sent={sent}
              handleSubmit={handleSubmit}
              lang={lang}
            />
          </>
        )}

        {activeTab === "city" && (
          <>
            <CityTourPage scrollTo={scrollTo} lang={lang} />
            <BookingAndContacts
              form={form}
              setForm={setForm}
              sent={sent}
              handleSubmit={handleSubmit}
              lang={lang}
            />
          </>
        )}

        {activeTab === "country" && (
          <>
            <CountryToursPage scrollTo={scrollTo} lang={lang} />
            <BookingAndContacts
              form={form}
              setForm={setForm}
              sent={sent}
              handleSubmit={handleSubmit}
              lang={lang}
            />
          </>
        )}
      </div>
    </div>
  );
}
