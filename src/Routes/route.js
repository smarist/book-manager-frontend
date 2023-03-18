import { createBrowserRouter } from "react-router-dom";
import Books from "../pages/Books/Books";
import ManageBooks from "../pages/ManageBooks/ManageBooks";

export const router = createBrowserRouter([
    {
      path: "*",
      // element: <ErrorPage />
    },
    {
      path: "/",
      element: <Books />
    },
    {
        path: "/add-book",
        element: <Books />
    },
    {
        path: "/edit-book/:bookId",
        element: <Books edit/>
    }
])