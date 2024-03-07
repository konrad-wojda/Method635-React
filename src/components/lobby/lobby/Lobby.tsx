import openEye from "/public/assets/icons/password-eye.svg";

import styles from "./Lobby.module.scss";

interface LobbyProps {
    isJoining: boolean;
}

const Lobby = ({ isJoining = false }: LobbyProps) => {
    let isPassword = true;

    const togglePassword: React.MouseEventHandler<HTMLImageElement> = () => {
        const lobbyPassword = document.getElementById("lobbyPassword") as HTMLInputElement;
        isPassword = !isPassword;
        lobbyPassword.type = ["text", "password"][+isPassword];
    };

    function getRandomArbitrary(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const value = getRandomArbitrary(1_000_000_000, 100_000_000_000);

    const serverId = <input className={styles["input"]} type="text" id="lobbyID" name="lobbyID" />;

    return (
        <>
            <form action="">
                <label htmlFor="userName">Your name (to show others):</label>
                <input className={styles["input"]} type="text" id="userName" name="userName" />
                <label htmlFor="lobbyID">Lobby ID (to share): </label>
                {isJoining && serverId}
                {!isJoining && value}
                <span className={styles["input__password"]}>
                    <label htmlFor="lobbyPassword">Lobby password (to prevent guests):</label>
                    <input className={styles["input"]} type="password" id="lobbyPassword" name="lobbyPassword" />
                    <img className={styles["input__password__icon"]} onClick={togglePassword} src={openEye} />
                </span>
                <button className="submit-button" type="submit">
                    Create lobby!
                </button>
            </form>
        </>
    );
};

export default Lobby;
