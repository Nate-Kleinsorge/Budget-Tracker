import { Helmet } from "react-helmet-async";

export default function Budget () {
    return (
        <>
        <Helmet >
            <title>Budget Tracker | Budget</title>
        </Helmet>
        <form>
            <div className="container">
                <div className="flex">
                    <div className="flex-row flex-wrap">
                    <label className="p-2">
                        Monthly Income:  
                        <input
                            name="income"
                            type="number">
                        </input>
                    </label>
                    <br />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="flex">
                    <div className="flex-row flex-wrap">
                    <label>
                        Estimated Housing Costs:  
                        <input
                            name="houseCost"
                            type="number">
                        </input>
                    </label>
                    <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="flex">
                    <div className="flex-row flex-wrap">
                    <label>
                        Estimated Grocery Costs:  
                        <input
                            name="foodCost"
                            type="number">
                        </input>
                    </label>
                    <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="flex">
                    <div className="flex-row flex-wrap">
                    <label>
                        Estimated Gas Costs:  
                        <input
                            name="gasCost"
                            type="number">
                        </input>
                    </label>
                    <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="flex">
                    <div className="flex-row flex-wrap">
                    <label>
                        Estimated Streaming Service Costs:  
                        <input
                            name="gasCost"
                            type="number">
                        </input>
                    </label>
                    <br />
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="flex">
                    <div className="flex-row flex-wrap">
                    <label>
                        Other Estimated Costs:  
                        <input
                            name="otherCost"
                            type="number">
                        </input>
                    </label>
                    <br />
                    </div>
                </div>
            </div>
            <br />
        </form>    
        </>
    );
}