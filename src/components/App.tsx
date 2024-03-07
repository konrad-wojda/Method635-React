import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./appRouting";
import { ThemeProvider } from "../states/ThemeContext";

export default function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
