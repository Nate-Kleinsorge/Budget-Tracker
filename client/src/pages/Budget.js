import { Helmet } from "react-helmet-async";

export default function Budget () {
    return (
        <>
        <Helmet >
            <title>Budget Tracker | Budget</title>
        </Helmet>
        <div className="container">
            <div className="p-5 text-center">
                <h1 className="mb-3 text-decoration-underline">Calculate your Budget</h1>
                <h4 className="mb-3">You can do this quickly, and easily by answering the few questions below:</h4>
            </div>
        <form>
            <div className="form-group p-3">
                <label for="monthIncome">Enter Monthly Income: </label>
                <input type="number" className="form-control col-sm" id="monthIncome"></input>
            </div>
            <div className="form-group p-3">
                <label for="houseCost">Estimated Housing cost per month: </label>
                <input type="number" className="form-control col-sm" id="houseCost"></input>
            </div>
            <div className="form-group p-3">
                <label for="foodCost">Estimated Grocery cost per month: </label>
                <input type="number" className="form-control col-sm" id="foodCost"></input>
            </div>
            <div className="form-group p-3">
                <label for="gasCost">Estimated Gas cost per month: </label>
                <input type="number" className="form-control col-sm" id="gasCost"></input>
            </div>
            <div className="form-group p-3">
                <label for="streamCost">Estimated Streaming Serveice costs per month: </label>
                <input type="number" className="form-control col-sm" id="streamCost"></input>
            </div>
            <div className="form-group p-3">
                <label for="otherCosts">Estimated other costs per month: </label>
                <input type="number" className="form-control col-sm" id="otherCosts"></input>
            </div>
            <div className="text-center p-1">
                <button type="submit" className="btn btn-primary mb-2">Calculate Budget</button>
            </div>
        </form>
        </div>
        </>
    );
}