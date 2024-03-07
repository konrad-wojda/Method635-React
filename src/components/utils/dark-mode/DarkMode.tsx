import cn from "../helpers/classname";
import sun from "/public/assets/icons/sun.svg";
import moon from "/public/assets/icons/moon.svg";
import styles from "./DarkMode.module.scss";
import { Theme } from "../../../models/models";
import { useTheme, useThemeUpdate } from "../../../states/ThemeContext";

export const DarkMode: React.FC = () => {
    const theme = useTheme();

    return (
        <div className={styles["dark-mode"]}>
            <input
                className={styles["dark-mode__input"]}
                type="checkbox"
                id="darkmode-toggle"
                onChange={useThemeUpdate()}
                defaultChecked={theme === Theme.dark}
            />
            <label className={styles["dark-mode__label"]} htmlFor="darkmode-toggle">
                <img
                    src={sun}
                    alt="L"
                    className={cn(styles["dark-mode__label-svg"], styles["dark-mode__label-svg--sun"])}
                />
                <img
                    src={moon}
                    alt="D"
                    className={cn(styles["dark-mode__label-svg"], styles["dark-mode__label-svg--moon"])}
                />
            </label>
        </div>
    );
};
