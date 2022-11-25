import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import EventsList from "./components/EventList";
import { eventsData } from "./components/data";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import MyCarousel from "./components/MyCarousel";
import App from "./App";
import React  from 'react'




const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="card" element={<EventsList data={eventsData} />} />
      <Route path="create_post" element={<CreatePost />} />
      <Route path="edit_post" element={<EditPost />} />
      <Route path="carousel" element={<MyCarousel />} />
    </Routes>
  </BrowserRouter>
);
