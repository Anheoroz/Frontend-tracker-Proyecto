"use client";

import { useState } from "react";

export default function Register() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleRegister = async () => {
    try {
    const res = await fetch("https://tu-backend.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        alert("Error al registrarse");
        return;
    }

    alert("Usuario creado");
    window.location.href = "/login";

    } catch (error) {
    console.error(error);
    }
};

return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    <h1 className="text-2xl mb-4">Registro</h1>

    <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 rounded bg-gray-800"
    />

    <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 p-2 rounded bg-gray-800"
    />

    <button
        onClick={handleRegister}
        className="bg-green-500 px-4 py-2 rounded"
    >
        Registrarse
    </button>
    </main>
);
}