import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { ErrorResponse } from "@remix-run/router/utils.ts";
import NotFound from "./NotFound";

export default function ErrorPage() {
    const error = useRouteError() as ErrorResponse;
    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <NotFound />;
        }
    }

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.status || error?.statusText}</i>
            </p>
        </div>
    );
}
