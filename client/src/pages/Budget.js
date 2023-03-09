import { Helmet } from "react-helmet-async";

export default function Budget () {
    return (
        <>
        <Helmet >
            <title>Budget Tracker | Budget</title>
        </Helmet>
        <div className="container">
        <form>
            <div className="form-group">
                <label htmlfor="monthIncome">Enter Monthly Income: </label>
                <input type="number" className="form-control col-sm" id="monthIncome"></input>
            </div>
            <div className="form-group">
                <label htmlfor="houseCost">Estimated Housing cost per month: </label>
                <input type="number" className="form-control col-sm" id="houseCost"></input>
            </div>
            <div className="form-group">
                <label htmlfor="foodCost">Estimated Grocery cost per month: </label>
                <input type="number" className="form-control col-sm" id="foodCost"></input>
            </div>
            <div className="form-group">
                <label htmlfor="gasCost">Estimated Gas cost per month: </label>
                <input type="number" className="form-control col-sm" id="gasCost"></input>
            </div>
            <div className="form-group">
                <label htmlfor="streamCost">Estimated Streaming Serveice costs per month: </label>
                <input type="number" className="form-control col-sm" id="streamCost"></input>
            </div>
            <div className="form-group">
                <label htmlfor="otherCosts">Estimated other costs per month: </label>
                <input type="number" className="form-control col-sm" id="otherCosts"></input>
            </div>
        </form>
        </div>
        </>
    );
}