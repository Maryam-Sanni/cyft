import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const ResetPassword = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const email = params.get("email");
  const token = params.get("token");

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!email || !token) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center text-lg text-gray-500">Invalid reset link</p>
      </div>
    );
  }

  const handleReset = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          token,
          newPassword: password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert("Password reset successful. Please login.");
      navigate("/staff");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 to-orange-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">
          Reset Password
        </h2>

        <p className="text-sm text-gray-500 mb-6 text-center">
          Enter your new password below to reset your account password.
        </p>

        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2">New Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            disabled={loading}
            type="submit"
            className="w-full py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition duration-300"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Remembered your password?{" "}
          <span
            onClick={() => navigate("/staff")}
            className="text-orange-600 font-medium cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
