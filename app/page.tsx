"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHabits } from "../redux/habitsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const habits = useSelector((state: any) => state.habits.habits);

  const obtenerHabitos = async () => {
  const res = await fetch("http://localhost:5000/api/habits");
  const data = await res.json();
  dispatch(setHabits(data)); 
};

  const MAX_STREAK = 66; // se configuro un maximo de 66 dias para que la barra no se complete al 100 si hay mas de 1 habito
  const progreso = habits.length
  ? (habits.reduce((acc, h) => acc + Math.min(h.streak, MAX_STREAK), 0) / (habits.length * MAX_STREAK)) * 100
  : 0;

  let color = "bg-red-500";

  if (progreso > 33) color = "bg-yellow-500"; // la barra pasa a ser amarilla una vez llegado a 33%
  if (progreso > 66) color = "bg-green-500";


useEffect(() => {
    obtenerHabitos();
  }, []);

  const marcarDone = async (id) => {
  await fetch(`http://localhost:5000/api/habits/${id}/done`, {
    method: "PUT",
  });

  obtenerHabitos(); // recargar lista
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

        <span className="text-white">{habit.name}</span>

      <div>
            <p className="font-semibold">{habit.name}</p>
            <p className="text-sm text-green-400">
              {habit.streak} día{habit.streak !== 1 ? "s" : ""}
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
    </main>
  );
}
// este es un comentario para ver el commit inicial