import { NavLink, useRouteError } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <Header></Header>
            <div className="text-center space-y-4 my-12">
                <h1 className="text-4xl font-bold">Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>

                <button className="btn btn-error text-white">
                    <Link to="/">Go Back</Link>
                </button>
            </div>
            <Footer></Footer>
        </div>
    );
}
