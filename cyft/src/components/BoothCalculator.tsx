import { useState } from "react";

type BoothOption = {
  id: string;
  label: string;
  price: number;
};

type AddOn = {
  id: string;
  name: string;
  price: number;
  category: "Furniture" | "Electronics" | "Plants & Decor";
};

const BOOTHS: BoothOption[] = [
  { id: "2x2", label: "2x2 Booth", price: 40000 },
  { id: "3x3", label: "3x3 Booth", price: 65000 },
  { id: "custom", label: "Custom Booth", price: 120000 },
];

const ADD_ONS: AddOn[] = [
  // Furniture
  { id: "table", name: "Height Adjustable Top Table", price: 12000, category: "Furniture" },
  { id: "chairs", name: "Plastic Chrome Leg Chairs", price: 8000, category: "Furniture" },
  { id: "counter", name: "Reception Counter", price: 18000, category: "Furniture" },
  { id: "sofa", name: "Office Leather Sofa", price: 22000, category: "Furniture" },

  // Electronics
  { id: "tv", name: "LED TV Screen", price: 35000, category: "Electronics" },
  { id: "lights", name: "Spot Lights", price: 15000, category: "Electronics" },

  // Plants & Decor
  { id: "plants", name: "Artificial Plants Set", price: 10000, category: "Plants & Decor" },
  { id: "carpet", name: "Custom Carpet Flooring", price: 14000, category: "Plants & Decor" },
];

const CATEGORIES: AddOn["category"][] = [
  "Furniture",
  "Electronics",
  "Plants & Decor",
];

export default function BoothCalculator() {
  const [selectedBooth, setSelectedBooth] = useState<BoothOption | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<AddOn["category"]>("Furniture");

  const toggleAddOn = (addon: AddOn) => {
    setSelectedAddOns((prev) =>
      prev.some((a) => a.id === addon.id)
        ? prev.filter((a) => a.id !== addon.id)
        : [...prev, addon]
    );
  };

  const filteredAddOns = ADD_ONS.filter(
    (addon) =>
      addon.category === activeCategory &&
      addon.name.toLowerCase().includes(search.toLowerCase())
  );

  const boothTotal = selectedBooth?.price ?? 0;
  const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const grandTotal = boothTotal + addOnsTotal;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-[#FFE4C6] rounded-3xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left panel */}
        <div className="space-y-6">
          {/* Booth select */}
          <div>
            <h4 className="font-semibold mb-2 text-left">Booth</h4>
            <select
              className="w-full rounded-xl border-none px-4 py-3 bg-[#FFCC9D]"
              value={selectedBooth?.id ?? ""}
              onChange={(e) => {
                const booth = BOOTHS.find((b) => b.id === e.target.value) || null;
                setSelectedBooth(booth);
              }}
            >
              <option value="">Select booth size</option>
              {BOOTHS.map((booth) => (
                <option key={booth.id} value={booth.id}>
                  {booth.label} — {booth.price.toLocaleString()}
                </option>
              ))}
            </select>
          </div>

          {/* Add-ons */}
          <div className="bg-[#FFCC9D] p-5 rounded-xl">
            <h4 className="font-semibold mb-2 text-left">Add-Ons</h4>

            {/* Search */}
            <input
              type="text"
              placeholder="Search add-ons"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full mb-3 rounded-xl border-none px-4 py-2 bg-[#FFE4C6] mb-2"
            />

            {/* Categories */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    activeCategory === cat
                      ? "bg-[#DE6328] text-white border-[#DE6328]"
                      : ""
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Add-on pills */}
            <div className="bg-[#FFE4C6] p-5 rounded-xl text-medium space-y-3 text-left">
  {/* Category Label */}
  <span className="font-medium text-left">{activeCategory}</span>

  {/* Add-ons */}
  <div className="flex flex-wrap gap-2 mt-3">
    {filteredAddOns.map((addon) => {
      const active = selectedAddOns.some((a) => a.id === addon.id);
      return (
        <button
          key={addon.id}
          onClick={() => toggleAddOn(addon)}
          className={`px-3 py-1.5 rounded-full text-sm border transition ${
            active
              ? "bg-[#DE6328] text-white border-[#DE6328]"
              : "hover:bg-orange-100"
          }`}
        >
          {addon.name}
        </button>
      );
    })}
  </div>
</div>

          </div>
        </div>

        {/* Right summary */}
        <div className="bg-[#F6B76F] rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <p className="text-4xl font-bold text-[#DE6328] mb-6 lg:mt-[100px] mt-2">
              {grandTotal.toLocaleString()}
            </p>
<div className="border-b border-[#F6973F] mb-5" />
            <div className="space-y-2 text-sm font-semibold">
              <div className="flex justify-between">
                <span>Booth</span>
                <span>{boothTotal.toLocaleString()}</span>
              </div>
              <div className="border-b border-[#F6973F] mb-5" />
              <div className="flex justify-between">
                <span>Add-Ons</span>
                <span>{addOnsTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <button className="mt-6 bg-[#DE6328] border border-white text-white rounded-full py-3 text-sm font-medium hover:bg-orange-500">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
