import { RoutePath } from "./components/appRouting";

export default function NotFound() {
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <a href={RoutePath.root}>Go back to Homepage!</a>
        </div>
    );
}
