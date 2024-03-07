import cn from "../utils/helpers/classname";
import liLogo from "/public/assets/icons/linkedin.svg";
import ghLightLogo from "/public/assets/icons/github-mark-light.svg";
import ghDarkLogo from "/public/assets/icons/github-mark-dark.svg";
import styles from "./AboutAuthor.module.scss";
import { useTheme } from "../../states/ThemeContext";
import { Theme } from "../../models/models";

export default function AboutAuthor() {
    const theme = useTheme();

    return (
        <>
            <h1 className={styles["author-name"]}>Hello, my name is Konrad</h1>
            <span> and I'm fullstack developer.</span>

            <div className={styles["outside-link"]}>
                <h2 className={styles["outside-link__title"]}>Here you can contact me:</h2>
                <div className={styles["outside-link__element"]}>
                    <img src={liLogo} alt="LI" className={cn(styles["outside-link__element__icon"], "logo-icon")} />
                    <a
                        className={styles["outside-link__element__link"]}
                        href="https://linkedin.com/in/konrad-wojda-kobra300vs"
                    >
                        LinkedIn
                    </a>
                </div>
                <div className={styles["outside-link__element"]}>
                    <img
                        src={theme === Theme.dark ? ghDarkLogo : ghLightLogo}
                        alt="GH"
                        className={cn(styles["outside-link__element__icon"], "logo-icon")}
                    />
                    <a className={styles["outside-link__element__link"]} href="https://github.com/konrad-wojda">
                        GitHub
                    </a>
                </div>
            </div>
        </>
    );
}
