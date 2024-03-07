import React from "react";
import StartLobby from "./lobby/start-lobby/StartLobby.tsx";
import JoinLobby from "./lobby/join-lobby/JoinLobby.tsx";
const AboutAuthor = React.lazy(() => import("./about-author/AboutAuthor.tsx"));
const AboutMethod635 = React.lazy(() => import("./about-method635/AboutMethod635.tsx"));

export enum MainPath {
    aboutAuthor = "about-author",
    aboutMethod635 = "about-method635",
    createLobby = "create-lobby",
    joinLobby = "join-lobby",
}

const MainRouting = [
    {
        path: MainPath.aboutAuthor,
        element: <AboutAuthor />,
    },
    {
        path: MainPath.aboutMethod635,
        element: <AboutMethod635 />,
    },
    {
        path: MainPath.createLobby,
        element: <StartLobby />,
    },
    {
        path: MainPath.joinLobby,
        element: <JoinLobby />,
    },
];

export default MainRouting;
