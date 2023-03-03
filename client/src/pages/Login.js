import { Helmet } from "react-helmet-async";

export default function Login () {
    return (
        <>
        <Helmet >
            <title>Budget Tracker | About</title>
        </Helmet>
        <div className="container">
            <div className="flex">
                <div className="flex-column">
                    <h1>About us</h1>
                    <h3>coming soon</h3>
                </div>
            </div>
        </div>
        </>
    );
}