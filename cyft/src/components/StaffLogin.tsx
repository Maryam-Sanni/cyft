import { FiMail, FiLock, FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"staff" | "admin">("staff");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    setTimeout(() => {
      setLoading(false);
  
      // 🔴 MOCK AUTH LOGIC (replace with real API later)
      const isValid = true;
  
      if (!isValid) {
        setError("Invalid credentials. Please try again.");
        return;
      }
  
      // ✅ Role-based navigation
      if (role === "staff") {
        navigate("/staff-dashboard");
      } else {
        navigate("/admin-dashboard");
      }
    }, 1500);
  };  

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F0EBE9] to-white flex items-center justify-center px-4">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Left - Form */}
        <div className="p-8 sm:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">

            {/* Role Switch */}
            {!forgotPassword && (
              <div className="flex mb-6 bg-gray-100 rounded-xl p-1">
                {["staff", "admin"].map((r) => (
                  <button
                    key={r}
                    onClick={() => setRole(r as any)}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
                      role === r
                        ? "bg-white shadow text-[#DE6328]"
                        : "text-gray-500"
                    }`}
                  >
                    {r === "staff" ? "Staff Login" : "Admin Login"}
                  </button>
                ))}
              </div>
            )}

            {/* Heading */}
            <h1 className="text-3xl font-bold mb-2">
              {forgotPassword ? "Forgot Password" : "Welcome Back"}
            </h1>
            <p className="text-gray-600 mb-8">
              {forgotPassword
                ? "Enter your email to receive reset instructions."
                : `Login as ${role}`}
            </p>

            {/* Animated Form */}
            <AnimatePresence mode="wait">
              <motion.form
                key={forgotPassword ? "forgot" : "login"}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Email */}
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DE6328]"
                    required
                  />
                </div>

                {/* Password */}
                {!forgotPassword && (
                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full h-12 pl-12 pr-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DE6328]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                )}

                {/* Error */}
                {error && (
                  <p className="text-sm text-red-500 font-medium">{error}</p>
                )}

                {/* Forgot Password */}
                {!forgotPassword && (
                  <div className="text-right">
                    <button
                      type="button"
                      onClick={() => setForgotPassword(true)}
                      className="text-sm text-[#DE6328] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-xl bg-[#DE6328] text-white font-semibold hover:bg-orange-500 transition flex items-center justify-center"
                >
                  {loading
                    ? "Please wait..."
                    : forgotPassword
                    ? "Send Reset Link"
                    : "Login"}
                </button>

                {/* Back */}
                {forgotPassword && (
                  <button
                    type="button"
                    onClick={() => setForgotPassword(false)}
                    className="w-full text-sm text-gray-600 hover:text-[#DE6328]"
                  >
                    Back to login
                  </button>
                )}
              </motion.form>
            </AnimatePresence>
          </div>
        </div>

        {/* Right - Brand Card */}
        <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-[#F6973F] to-[#FFE6C7] relative">
          <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-sm text-center z-10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#DE6328]/10 flex items-center justify-center text-[#DE6328] text-2xl">
              <FiUser />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              CYFT Workforce Portal
            </h3>
            <p className="text-gray-600 text-sm">
              Manage events, facilities and training operations with ease.
            </p>
          </div>

          <div className="absolute top-8 left-8 w-24 h-24 bg-[#DE6328]/20 rounded-full" />
          <div className="absolute bottom-8 right-8 w-32 h-32 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Login;
