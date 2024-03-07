import { MainPath } from "../mainRouting";
import { RoutePath } from "../appRouting";
import homeIcon from "/public/assets/icons/home-icon.svg";
import styles from "./Navbar.module.scss";

export default function Navbar() {
    return (
        <div className={styles["navbar"]}>
            <span className={styles["navbar__element"]}>
                <a href={RoutePath.root}>
                    <img src={homeIcon} className="logo-icon"></img>
                </a>
            </span>
            <span className={styles["navbar__element"]}>
                <a href={MainPath.createLobby} className={styles["navbar__element__link"]}>
                    Create lobby
                </a>
            </span>
            <span className={styles["navbar__element"]}>
                <a href={MainPath.joinLobby} className={styles["navbar__element__link"]}>
                    Join lobby
                </a>
            </span>
            <span className={styles["navbar__element"]}>
                <a href={MainPath.aboutMethod635} className={styles["navbar__element__link"]}>
                    Method 635 - what is that?
                </a>
            </span>
            <span className={styles["navbar__element"]}>
                <a href={MainPath.aboutAuthor} className={styles["navbar__element__link"]}>
                    About author
                </a>
            </span>
        </div>
    );
}
