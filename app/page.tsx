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
    <div>
      <h1>Mis hábitos</h1>

      {habits.length === 0 ? (
        <p>No hay hábitos aún</p>
      ) : (
        habits.map((habit: any) => (
          <div key={habit._id}>{habit.title}</div>
        ))
      )}
    </div>
  );
}
// este es un comentario para ver el commit inicial