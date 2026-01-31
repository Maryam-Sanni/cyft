"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { ChevronDown } from "lucide-react";

type Resource = {
  id: number;
  title: string;
  pdfUrl: string;
};

const resources: Resource[] = [
  { id: 1, title: "Event Management Brochure", pdfUrl: "/pdfs/Brochure-Facility.pdf" },
  { id: 2, title: "Facility Management Brochure", pdfUrl: "/pdfs/Brochure-Facility.pdf" },
  { id: 3, title: "Training & Human Capacity Development Brochure", pdfUrl: "/pdfs/Brochure-Facility.pdf" },
];

export default function ResourcesPage() {
  return (
    <div>
      <Header />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl lg:text-[48px] font-semibold text-center mb-12 mt-20">
          Resources
        </h2>

        <div className="space-y-6">
          {resources.map((resource) => (
            <CollapsiblePDF key={resource.id} resource={resource} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CollapsiblePDF({ resource }: { resource: Resource }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-xl shadow-lg overflow-hidden bg-white">
      {/* Header */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-100 focus:outline-none"
      >
        <h3 className="text-lg font-semibold text-left">{resource.title}</h3>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown className="w-4 h-4"/>
        </span>
      </button>

      {/* Collapsible content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4">
          {/* Mobile: iframe */}
          <div className="block lg:hidden w-full h-[400px]">
            <iframe
              src={resource.pdfUrl}
              className="w-full h-full"
              title={resource.title}
            />
          </div>

          {/* Desktop: react-pdf-viewer */}
          <div className="hidden lg:block w-full h-[600px]">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.min.js">
              <Viewer fileUrl={resource.pdfUrl} />
            </Worker>
          </div>
        </div>
      </div>
    </div>
  );
}
