import React from "react";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import Activation from "../components/auth/Activation";
import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import CoursesPage from "../pages/CoursesPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import AdminPage from "../pages/AdminPage";
import EditCoursePage from "../pages/EditCoursePage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentPage from "../pages/PaymentPage";

const MainRoutes = () => {
  // const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/register",
      element: <Registration />,
      id: 2,
    },
    {
      link: "/activation",
      element: <Activation />,
      id: 3,
    },
    {
      link: "/login",
      element: <Login />,
      id: 4,
    },
    {
      link: "/about",
      element: <AboutUsPage />,
      id: 5,
    },
    {
      link: "/courses",
      element: <CoursesPage />,
      id: 6,
    },
    {
      link: "/courses/:id",
      element: <CourseDetailsPage />,
      id: 7,
    },
    {
      link: "/contacts",
      element: <ContactUsPage />,
      id: 8,
    },
    {
      link: "/payment",
      element: <PaymentPage />,
      id: 9,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 10,
    },
    {
      link: "/edit/:id",
      element: <EditCoursePage />,
      id: 11,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 12,
    },
  ];

  const PRIVATE_ROUTES = [
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
        {/* {user
          ? 

          PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element

                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              /> */}
        {/* ))
          : null} */}
      </Routes>
    </>
  );
};

export default MainRoutes;
