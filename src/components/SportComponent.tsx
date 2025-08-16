import { useTranslation } from "react-i18next";
import { useState } from "react";
import "../i18n";

export function SportComponent() {
  const { t } = useTranslation();
  const sports = ["gym", "tennis", "climbing", "winterSports", "volley"];
  const [selectedSport, _] = useState<string | "all">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="sports"
      className="mt-20 mb-10 px-4 sm:px-6 text-center flex flex-col items-center"
    >
      <h1 className="py-10 text-3xl sm:text-4xl font-bold text-cyan-400 mb-6">
        Sports
      </h1>

      {/* Slider mobile */}
      <div className="flex md:hidden overflow-x-auto gap-4 pb-4 w-full snap-x snap-mandatory -mx-4 px-4">
        {sports
          .filter((sport) => selectedSport === "all" || selectedSport === sport)
          .map((sport, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer min-w-[70%] max-w-xs flex-shrink-0 snap-start"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {/* Image */}
              <img
                src={t(`sports.${sport}.img`)}
                alt={t(`sports.${sport}.name`)}
                className={`w-full h-48 object-cover transition-opacity duration-500
                ${openIndex === index ? "opacity-0" : "group-hover:opacity-0"}`}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-gray-700 bg-opacity-90 transition-opacity duration-500 px-4
                ${openIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              >
                <p className="text-gray-300 text-sm text-center">
                  {t(`sports.${sport}.description`)}
                </p>
              </div>

              {/* Bandeau titre toujours visible */}
              <div className="absolute bottom-0 w-full bg-gray-700 bg-opacity-40 text-white text-center py-2 text-base font-semibold">
                {t(`sports.${sport}.name`)}
              </div>
            </div>
          ))}
      </div>

      {/* Grille desktop/tablette */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {sports
          .filter((sport) => selectedSport === "all" || selectedSport === sport)
          .map((sport, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {/* Image */}
              <img
                src={t(`sports.${sport}.img`)}
                alt={t(`sports.${sport}.name`)}
                className={`w-full aspect-[4/3] object-cover transition-opacity duration-500
                ${openIndex === index ? "opacity-0" : "group-hover:opacity-0"}`}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-gray-700 bg-opacity-90 transition-opacity duration-500 px-4
                ${openIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              >
                <p className="text-gray-300 text-sm text-center">
                  {t(`sports.${sport}.description`)}
                </p>
              </div>

              {/* Bandeau titre toujours visible */}
              <div className="absolute bottom-0 w-full bg-gray-700 bg-opacity-40 text-white text-center py-2 text-lg font-semibold">
                {t(`sports.${sport}.name`)}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
