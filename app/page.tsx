"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHabits } from "../redux/habitsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const habits = useSelector((state: any) => state.habits.habits);

  useEffect(() => {
    const fetchHabits = async () => {
      const res = await fetch("http://localhost:5000/api/habits");
      const data = await res.json();
      dispatch(setHabits(data));
    };

    fetchHabits();
  }, [dispatch]);

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Mis hábitos</h1>

        <div className="mb-6">
          <p className="mb-2 font-semibold">Progreso</p>

          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full w-1/3"></div>
          </div>
        </div>
      <div className="space-y-3">
        
        {habits.map((habit: any) => (
          <div
            key={habit._id}
            className="bg-gray-800 text-white p-4 rounded-lg flex justify-between items-center"
          >
           <span className="text-white">{habit.title}</span>

            <button className="bg-green-500 px-3 py-1 rounded">
              Done
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
// este es un comentario para ver el commit inicial