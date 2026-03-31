"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
    
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      credentials: "include", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      alert("Login exitoso");
      router.push("/");
    } else {
      alert(data.msg || "Error");
    }
  };


  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <input
        type="email"
        placeholder="Email"
        className="mb-2 p-2 text-black bg-amber-50 rounded"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="mb-4 p-2 text-black bg-amber-50 rounded"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-blue-500 px-4 py-2 rounded mt-4"
      >
        Iniciar sesión
      </button>

      <button
      onClick={() => window.location.href = "/register"}
      className="bg-blue-500 px-4 py-2 rounded mt-4"
      >
      Registrarse
      </button>


    </main>
  );
}