# Habit Tracker Frontend

Este proyecto corresponde a la segunda fase del desarrollo de una aplicación web para el control de hábitos.
El frontend fue desarrollado utilizando Next.js y se conecta a un backend en Express con base de datos MongoDB.

---

## Objetivo

El objetivo de esta fase es mostrar los hábitos almacenados en la base de datos mediante una interfaz web, consumiendo la API del backend y utilizando Redux para el manejo del estado global.

---

## Tecnologías utilizadas

* Next.js
* React
* Redux Toolkit
* React Redux
* JavaScript / TypeScript

---

## Instalación

Para ejecutar el proyecto de forma local:

```bash
npm install
```

---

## Ejecución

```bash
npm run dev
```

Luego abrir en el navegador:

```plaintext
http://localhost:3000
```

---

## Conexión con el backend

El frontend realiza una petición GET al siguiente endpoint:

```plaintext
http://localhost:5000/api/habits
```

Es importante que el backend esté en ejecución para poder visualizar los datos correctamente.

---

## Funcionamiento

1. Al cargar la página, se realiza una petición al backend utilizando `fetch`.
2. El backend obtiene los datos desde MongoDB.
3. Los hábitos son enviados al frontend en formato JSON.
4. Redux almacena los hábitos en un estado global.
5. Finalmente, los hábitos se renderizan en pantalla.

---

## Estructura del proyecto

```plaintext
app/
  page.tsx        → Página principal (vista de hábitos)
  layout.tsx      → Layout general de la aplicación

redux/
  store.ts        → Configuración del store global
  habitsSlice.ts  → Slice para manejo de hábitos
  Provider.tsx    → Conexión de Redux con la aplicación
```

---

## Notas importantes

* Este proyecto utiliza Redux para manejar el estado global de los hábitos.
* La arquitectura separa frontend y backend, comunicándose mediante API.
* Es necesario tener el backend corriendo para que la aplicación funcione correctamente.

---

## Estado actual del proyecto

✔️ Visualización de hábitos
✔️ Consumo de API (GET)
✔️ Integración de Redux
✔️ Conexión con backend

---

## Aprendizajes

Durante esta fase se aprendió:

* Como Next.js maneja server Vs Client Components (error al usar useclient)
* Cómo consumir APIs desde el frontend
* Uso de `fetch` para obtener datos
* Implementación de Redux en Next.js
* Diferencia entre Server y Client Components en Next.js
* Manejo de estado global en aplicaciones web

---

## Semana 3

- Integración de TailwindCSS en Next.js
- Renderizado dinámico de hábitos desde Redux
- Barra de progreso (estática)
- Botón "Done" (sin funcionalidad aún)
