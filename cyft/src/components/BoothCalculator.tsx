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
  { id: "2x2", label: "2m x 2m White Panel Shell Scheme Exhibition Booth", price: 25000 },
  { id: "2x3", label: "2m x 3m White Panel Shell Scheme Exhibition Booth", price: 30000 },
  { id: "3x3", label: "3m x 3m White Panel Shell Scheme Exhibition Booth", price: 35000 },
  { id: "3x4", label: "3m x 4m White Panel Shell Scheme Exhibition Booth", price: 40000 },
];

const ADD_ONS: AddOn[] = [
  // Furniture
  { id: "table1", name: "Height Adjustable Top Table", price: 45000, category: "Furniture" },
  { id: "chairs1", name: "Height Adjustable Bar Stool", price: 37000, category: "Furniture" },
  { id: "chairs2", name: "Chrome Leg Chair", price: 40000, category: "Furniture" },
  { id: "chairs3", name: "Fabric Chair", price: 65000, category: "Furniture" },
  { id: "chairs4", name: "Swirvel Chair", price: 45000, category: "Furniture" },
  { id: "chairs5", name: "Zigzag Foldable chair", price: 45000, category: "Furniture" },
  { id: "counter1", name: "Barrier Post", price: 65000, category: "Furniture" },
  { id: "sofa1", name: "Black Leather Sofa", price: 500000, category: "Furniture" },
  { id: "sofa2", name: "Mini Brown Leather Sofa", price: 500000, category: "Furniture" },
  { id: "sofa3", name: "Mini Off-White Leather Sofa", price: 450000, category: "Furniture" },
  { id: "sofa4", name: "Mini White Leather Sofa", price: 350000, category: "Furniture" },
  { id: "counter2", name: "Lockable Reception Counter", price: 65000, category: "Furniture" },
  { id: "counter3", name: "Open Reception Counter", price: 65000, category: "Furniture" },

  // Electronics
  { id: "fridge", name: "90 Liter Refridgerator", price: 75000, category: "Electronics" },
  { id: "dispenser", name: "Water Dispenser", price: 65000, category: "Electronics" },
  { id: "tv1", name: "43 Inches LED TV", price: 70000, category: "Electronics" },
  { id: "tv2", name: "55 Inches LED TV", price: 90000, category: "Electronics" },
  { id: "tv3", name: "58 Inches LED TV", price: 10000, category: "Electronics" },
  { id: "tv4", name: "82 Inches UHD TV", price: 900000, category: "Electronics" },
  { id: "tv5", name: "TV Stand", price: 20000, category: "Electronics" },

  // Plants & Decor
  { id: "plants1", name: "Artificial Bamboo Plant (Big Vase)", price: 30000, category: "Plants & Decor" },
  { id: "plants2", name: "Artificial Bamboo Plant (Medium Vase)", price: 30000, category: "Plants & Decor" },
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
