import {
  Search,
  PenTool,
  Users,
  BarChart3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OurApproach() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
          Our Approach
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border border-orange-400 flex items-center justify-center mb-4">
              <Search className="text-[#DE6328]" size={24} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Assessment & Understanding
            </h3>
            <p className="text-gray-600 text-sm max-w-xs">
              We begin by understanding your organization, your people, and your
              challenges—identifying skill gaps, leadership needs, and growth
              priorities.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border border-orange-400 flex items-center justify-center mb-4">
              <PenTool className="text-[#DE6328]" size={24} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Program Design
            </h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Based on our findings, we design practical and relevant development
              programs tailored to your goals, culture, and workforce structure.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border border-orange-400 flex items-center justify-center mb-4">
              <Users className="text-[#DE6328]" size={24} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Delivery & Engagement
            </h3>
            <p className="text-gray-600 text-sm max-w-xs">
              We deliver engaging, hands-on sessions that encourage participation,
              build confidence, and translate learning into everyday performance.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border border-orange-400 flex items-center justify-center mb-4">
              <BarChart3 className="text-[#DE6328]" size={24} />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Evaluation & Improvement
            </h3>
            <p className="text-gray-600 text-sm max-w-xs">
              We assess outcomes, gather feedback, and refine strategies to ensure
              measurable impact and continuous improvement.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-14">
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#DE6328] hover:bg-orange-500 text-white px-8 py-3 rounded-full font-medium transition"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
}
