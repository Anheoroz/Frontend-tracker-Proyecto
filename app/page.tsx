"use client";

import { useEffect, useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { setHabits } from "../redux/habitsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const habits = useSelector((state: any) => state.habits.habits);
  const [newHabit, setNewHabit] = useState("");

 useEffect(() => {
  const checkAuth = async () => {
    const res = await fetch("https://tu-backend.onrender.com/api/habits", {
      credentials: "include",
    });

    if (!res.ok) {
      window.location.href = "/login";
      return;
    }   

    const data = await res.json();

    if (Array.isArray(data)) {
      dispatch(setHabits(data));
    }
  };

  checkAuth();
}, []);

  const obtenerHabitos = async () => {
  const res = await fetch("https://tu-backend.onrender.com/api/habits", {
  credentials: "include",
  });
 
  const data = await res.json();

  if (Array.isArray(data)) {
  dispatch(setHabits(data));
}

};

  const MAX_STREAK = 66; // se configuro un maximo de 66 dias para que la barra no se complete al 100 si hay mas de 1 habito
  const progreso = habits.length
  ? (habits.reduce((acc, h) => acc + Math.min(h.streak, MAX_STREAK), 0) / (habits.length * MAX_STREAK)) * 100
  : 0;

  let color = "bg-red-500";

  if (progreso > 33) color = "bg-yellow-500"; // la barra pasa a ser amarilla una vez llegado a 33% del progreso
  if (progreso > 66) color = "bg-green-500"; // La barra pasa a ser verde una vez llegado a 66% del progreso


  const marcarDone = async (id) => {
  await fetch(`https://tu-backend.onrender.com/api/habits/${id}/done`, {
    method: "PUT",
    credentials: "include",
  });

  obtenerHabitos(); // recargar lista de habitos

};


const logout = async () => {
  console.log("logout ejecutándose");

  await fetch("https://tu-backend.onrender.com/api/auth/logout", {
    method: "POST",
    credentials: "include",
  });

  window.location.href = "/login";
};

// agregando funcion para crear habito en mi frontend

const crearHabit = async () => {
  if (!newHabit.trim()) return;

  try {
    const res = await fetch("https://tu-backend.onrender.com/api/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name: newHabit }),
    });

    if (!res.ok) {
      console.error("Error al crear hábito");
      return;
    }

    setNewHabit("");
    obtenerHabitos(); 
  } catch (error) {
    console.error(error);
  }
};


  return (

      <main className="p-6 max-w-xl mx-auto min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Mis hábitos</h1>

          <div className="mb-6">
          <p className="mb-2 font-semibold">Progreso</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
          <div
              className={`${color} h-4 rounded-full transition-all duration-500`}
              style={{ width: `${progreso}%` }}
            ></div>
          </div>

        </div>

        <p className="text-sm text-gray-400">
          {Math.round(progreso)}% completado
        </p>
                
      <div className="space-y-3">
        
        {habits.map((habit: any) => (
          <div
            key={habit._id}
            className="bg-gray-800 text-white p-4 rounded-lg flex justify-between items-center">
          
      <div>
            <p className="font-semibold"> {habit.name}</p>
            <p className="text-sm text-green-400">
              {habit.streak} día{habit.streak !== 1 ? "s" : ""} cumpliendo hábito
            </p>

      </div>
            <button
                onClick={() => marcarDone(habit._id)}
                className="bg-green-500 px-3 py-1 rounded"
            >
              Done
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
      <p className="mb-2 font-semibold">Agregar nuevo hábito</p>

      <div className="flex gap-2">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Ej: Practicar mi Hobbie favorito"
          className="flex-1 p-2 rounded bg-gray-700 text-white outline-none"
        />

        <button
          onClick={crearHabit}
          className="bg-blue-500 px-4 rounded"
        >
        Agregar
        </button>
        </div>
      </div>

          <button
            onClick={logout}
            className="absolute top-4 right-4 bg-red-500 px-3 py-1 rounded"
>
            Logout
          </button>

      
    </main>
  );
}
// este es un comentario para ver el commit inicial