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
    return <p className="text-center mt-20">Invalid reset link</p>;
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
      navigate("/login");

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleReset}
      className="max-w-md mx-auto mt-20 space-y-4"
    >
      <h2 className="text-2xl font-bold">Reset Password</h2>

      <input
        type="password"
        placeholder="New password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full h-12 px-4 border rounded-xl"
        required
      />

      {error && <p className="text-red-500">{error}</p>}

      <button
        disabled={loading}
        className="w-full h-12 bg-[#DE6328] text-white rounded-xl"
      >
        {loading ? "Resetting..." : "Reset Password"}
      </button>
    </form>
  );
};

export default ResetPassword;
