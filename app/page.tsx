
"use client";
import { useEffect, useState } from "react";

interface Habit {
  _id: string;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/habits");
        const data = await res.json();
        setHabits(data);
      } catch (error) {
        console.error("Error al obtener hábitos:", error);
      }
    };

    fetchHabits();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mis hábitos</h1>

      {habits.length === 0 ? (
        <p>No hay hábitos aún</p>
      ) : (
        habits.map((habit) => (
          <div key={habit._id}>
            {habit.title}
          </div>
        ))
      )}
    </div>
  );
}

// este es un comentario para ver el commit inicial