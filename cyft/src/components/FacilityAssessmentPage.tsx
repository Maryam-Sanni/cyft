import { ClipboardCheck, Camera, Layers } from "lucide-react";

export default function FacilityBaselineAssessment() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-[44px] font-semibold mb-4">
          Facility Baseline Assessment
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Establish a clear starting point for your facility’s health. Our baseline assessment
          provides actionable insights and visual documentation for better maintenance planning.
        </p>
      </div>

      <div className="space-y-10">
        {/* Step 1 */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#DE6328]/10">
            <ClipboardCheck className="text-[#DE6328]" size={28} />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Comprehensive Inspections</h3>
            <p className="text-gray-600">
              We evaluate every critical facility category, including power, HVAC, plumbing, fire safety, and general maintenance.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#DE6328]/10">
            <Camera className="text-[#DE6328]" size={28} />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Photographic Documentation</h3>
            <p className="text-gray-600">
              All findings are documented with timestamped photos, providing a clear visual record of current conditions.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#DE6328]/10">
            <Layers className="text-[#DE6328]" size={28} />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Data-Driven Scoring</h3>
            <p className="text-gray-600">
              We calculate initial health scores for each category, identify priority issues, and create a baseline for continuous monitoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}