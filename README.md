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

# Frontend - Semana 4 (Habit Tracker)

Este módulo implementa la interfaz de usuario para la gestión de hábitos y visualización del progreso.

---

# Funcionalidades implementadas

## 🔹 Visualización de hábitos

* Lista dinámica obtenida desde el backend
* Renderizado con React y Redux

---

## Botón "Done"

Permite marcar un hábito como completado:

```js
PUT /api/habits/:id/done
```

### Funcionalidad:

* Envía petición al backend
* Actualiza el estado global (Redux)
* Refresca la lista de hábitos

---

## Barra de progreso dinámica

Calcula el progreso total basado en las rachas:

```js
progreso = suma(streaks) / (habits.length * MAX_STREAK)
```

### Características:

* Actualización en tiempo real
* Progreso basado en 66 días (Atomic Habits)
* Límite por hábito usando `Math.min`

---

## Interfaz

* Diseño en modo oscuro
* Componentes estilizados con Tailwind
* Layout centrado y limpio

---

# Tecnologías utilizadas

* Next.js
* React
* Redux
* Tailwind CSS

---

# Estructura relevante

```id="front123"
app/
  page.tsx

redux/
  habitsSlice.js
```

---

# Objetivo cumplido

✔️ Integración con backend
✔️ Botón funcional para marcar hábitos
✔️ Actualización dinámica del estado
✔️ Barra de progreso basada en rachas

---

# Nota

El frontend refleja en tiempo real el estado de los hábitos, permitiendo una interacción directa con la lógica implementada en el backend.

# Frontend – Semana 5

## Descripción

En esta fase se integró el frontend con el sistema de autenticación del backend. Se implementó el login de usuario, manejo de sesión mediante cookies, protección de rutas y redirección automática según el estado de autenticación.

---

## Tecnologías utilizadas

* Next.js
* React
* Redux Toolkit
* Tailwind CSS

---

## Flujo de autenticación

1. El usuario inicia sesión desde `/login`
2. Se envía una petición al backend
3. El backend responde con un JWT en una cookie
4. El navegador guarda la cookie automáticamente
5. En cada request se envía la cookie usando `credentials: "include"`

---

## Envío de JWT

El frontend no maneja directamente el token.

Se utiliza:

```js
fetch(url, {
  credentials: "include"
});
```

Esto permite que el navegador envíe automáticamente la cookie en cada petición al backend.

---

## Protección de rutas

En la página principal (`/`) se valida la sesión del usuario:

* Se realiza un fetch a `/api/habits`
* Si la respuesta es 401 → redirige a `/login`
* Si es exitosa → se cargan los hábitos

Ejemplo:

```js
if (!res.ok) {
  window.location.href = "/login";
}
```

---

## Funcionalidades implementadas

### Login

* Formulario de email y contraseña
* Envío de credenciales al backend
* Redirección automática al iniciar sesión

---

### Logout

* Petición POST a `/api/auth/logout`
* Eliminación de cookie en backend
* Redirección a `/login`

---

### Hábitos

* Obtener hábitos desde backend
* Marcar hábitos como completados
* Actualización dinámica de la interfaz

---

## Estructura de páginas

* `/login` → página de autenticación
* `/` → lista de hábitos (protegida)

---

## Consideraciones

* El frontend depende del backend en `http://localhost:5000`
* Es necesario configurar CORS con `credentials: true`
* La sesión se maneja mediante cookies, no localStorage

---

## Ejecución

Instalar dependencias:

```bash
npm install
```

Ejecutar aplicación:

```bash
npm run dev
```


