import { Helmet } from "react-helmet-async";

export default function Dashboard () {
    return (
        <>
        <Helmet >
            <title>Budget Tracker | Dashboard</title>
        </Helmet>
        <div className="container">
            <div className="flex">
                <div className="flex-column">
                    <h1>Dashboard</h1>
                    <h3>coming soon</h3>
                </div>
            </div>
        </div>
        </>
    );
}