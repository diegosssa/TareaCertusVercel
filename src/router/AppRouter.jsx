import { Route, Routes } from "react-router-dom";

import { Login, Home, Dashboard, Peliculas, SingleMovie } from "../pages";

import { RouterPrivate } from "./RouterPrivate";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<RouterPrivate><Dashboard /></RouterPrivate>
        }
      />
      <Route path="/Peliculas" element={<Peliculas />} />
      <Route path="/movies/:id" element={<SingleMovie />} />
    </Routes>
  );
};
