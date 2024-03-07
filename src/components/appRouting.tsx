import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import mainRouting from "./mainRouting.tsx";
const Main = lazy(() => import("./Main.tsx").then((module) => ({ default: module.Main })));
const ErrorPage = lazy(() => import("../ErrorPage.tsx"));

export enum RoutePath {
    root = "/",
}

export const router = createBrowserRouter([
    {
        path: RoutePath.root,
        element: <Main />,
        children: mainRouting,
        errorElement: <ErrorPage />,
    },
]);
