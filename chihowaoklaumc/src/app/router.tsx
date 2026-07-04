import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import EventsPage from "../pages/EventsPage";
import HistoryPage from "../pages/HistoryPage";
import VisitPage from "../pages/VisitPage";
import ContactPage from "../pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      {
        path: "visit",
        element: <VisitPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);