import React from "react";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import AboutUsPage from "../pages/AboutUsPage";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import ContactUsPage from "../pages/ContactUsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import CoursesPage from "../pages/CoursesPage";
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
      link: "/auth",
      element: <AuthPage />,
      id: 2,
    },
    {
      link: "/about",
      element: <AboutUsPage />,
      id: 3,
    },
    {
      link: "/courses",
      element: <CoursesPage />,
      id: 4,
    },
    {
      link: "/courses/:id",
      element: <CourseDetailsPage />,
      id: 5,
    },
    {
      link: "/contacts",
      element: <ContactUsPage />,
      id: 6,
    },
    {
      link: "/payment",
      element: <PaymentPage />,
      id: 7,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 8,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 9,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/edit/:id",
      element: <EditCoursePage />,
      id: 2,
    },
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
