export default function Home () {
    return ( 
        <>
            <div className="Parallax__content__heading">
                <h1 className="Parallax__content__heading__text">Welcome to Budget Tracker</h1>
                <h2 className="Parallax__content__heading__caption">A website to help better your spending habits</h2>
            </div>

            <div className="Parallax__content__cta">
                <p>
                    <b>About this page</b>
                     <p>Have you ever found yourself a little short on funds, or you can't quite see why you cant afford to go out to eat once or twice a month? Well with Budget Tracker, you can enter your information and get a personalized budget made for you in seconds. It will tell you how much of your monthly income youve made so far, and let you know whether you can afford to pay for that chocolate bar at the gas station.</p>
                </p>
                <p>
                  <b>Things you may choose to enter:</b>  
                  <ul className="list-group p-4" id="list">
                            <li className="list-group-item p-1">Monthly Income (this is required)</li>
                            <li className="list-group-item p-1">Monthly Hosuing Cost</li>
                            <li className="list-group-item p-1">Monthly Food Cost</li>
                            <li className="list-group-item p-1">Monthly Gas Cost</li>
                            <li className="list-group-item p-1">Monthly Streaming Cost</li>
                            <li className="list-group-item p-1">Other Monthly Costs</li>
                        </ul>
                </p>
                <p>
                    <b>What you will get:</b>
                    <ul className="list-group p-4" id="list">
                        <li className="list-group-item p-1">A personalized budget based on monthly income and spending.</li>
                        <li className="list-group-item p-1">A quick easy way to view all your spending and record it.</li>
                        <li className="list-group-item p-1">Exquisite ways to vizualize your budget through the dashboard function which allows you to see where you're spending too much</li>
                   </ul>
                </p>
            </div>


    
        </>
    );

    
}

