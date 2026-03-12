import { FileText, ShieldCheck, Printer } from "lucide-react";

export default function ComplianceDocumentation() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 bg-gray-50 rounded-2xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-[44px] font-semibold mb-4">
          Compliance & Documentation
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Keep your facility audit-ready at all times. CYFT automatically captures inspection data, maintenance history, and photographic evidence to simplify compliance.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <FileText className="text-[#DE6328] mt-1" size={24} />
          <p className="text-gray-700">
            <strong>Regulatory Compliance:</strong> Meet local and national standards with systematic inspection records and evidence-based documentation.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <ShieldCheck className="text-[#DE6328] mt-1" size={24} />
          <p className="text-gray-700">
            <strong>Insurance Readiness:</strong> Generate timestamped maintenance and inspection reports for insurance claims, audits, and certifications.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <Printer className="text-[#DE6328] mt-1" size={24} />
          <p className="text-gray-700">
            <strong>Exportable Reports:</strong> Download PDF reports of your facility’s health, repair history, and maintenance trends for board reviews or audits.
          </p>
        </div>
      </div>
    </section>
  );
}