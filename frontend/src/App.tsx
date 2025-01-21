import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CalendarPage from "./pages/Calendarpage/Calendarpage";
import RootLayout from "./layouts/RootLayout";
import ErrorComponent from "./components/error/Error";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorComponent message={"error occur"} />,
    children: [
      {
        path: "/calendar",
        element: <CalendarPage />,
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
