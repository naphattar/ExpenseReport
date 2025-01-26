import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CalendarPage from "./pages/Calendarpage/Calendarpage";
import RootLayout from "./layouts/RootLayout";
import ErrorComponent from "./components/error/Error";
import LoginPage from "./pages/Loginpage/Loginpage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorComponent message={"error occur"} />,
    children: [
      {
        path: "/",
        element: <CalendarPage />,
      },
      {
        path: "/login",
        element: <LoginPage/>
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
