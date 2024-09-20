
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  ScrollRestoration,
} from "react-router-dom";

import { MyDay } from "../pages/Home";
import { Sidebar } from "../components/navigation/sidebar";
import { Navbar } from "../components/navigation/navbar";
import { Task } from "../pages/Tasks";
import { Important } from "../pages/Important";

const Root = () => {
  return (
    <>
      <main className="w-full h-screen flex max-h-screen max-w-screen">
        <Sidebar />
        <div className="w-full ">
            <Navbar />
          <ScrollRestoration />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MyDay />} />
      <Route path="/task" element={<Task />} />
      <Route path="/important" element={<Important />} />
    </Route>
  )
);
