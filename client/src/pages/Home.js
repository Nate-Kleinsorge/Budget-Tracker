export default function Home () {
    return ( 
        <>
        <header>
            <div className="container px-4 text-center p-5">
                <h1 className="fw-bolder">Welcome to Budget Tracker</h1>
                <p className="lead">A website to help better your spending habits</p>
            </div>
            <section id="about">
            <div className="container px-4">
                <div class="row gx-4 justify-content-center">
                    <div className="col-lg-8">
                        <h3>About this page</h3>
                        <p className="lead">Have you ever found yourself a little short on funds, or you can't quite see why you cant afford to go out to eat once or twice a month? Well with Budget Tracker, you can enter your information and get a personalized budget made for you in seconds. It will tell you how much of your monthly income youve made so far, and let you know whether you can afford to pay for that chocolate bar at the gas station.</p>
                        <label for="list">Things you may choose to enter: </label>
                        <ul className="list-group p-4" id="list">
                            <li className="list-group-item p-1">Monthly Income (this is required)</li>
                            <li className="list-group-item p-1">Monthly Hosuing Cost</li>
                            <li className="list-group-item p-1">Monthly Food Cost</li>
                            <li className="list-group-item p-1">Monthly Gas Cost</li>
                            <li className="list-group-item p-1">Monthly Streaming Cost</li>
                            <li className="list-group-item p-1">Other Monthly Costs</li>
                        </ul>
                        <label for="list">What you will get: </label>
                        <ul className="list-group p-4" id="list">
                            <li className="list-group-item p-1">A personalized budget based on monthly income and spending.</li>
                            <li className="list-group-item p-1">A quick easy way to view all your spending and record it.</li>
                            <li className="list-group-item p-1">Exquisite ways to vizualize your budget through the dashboard function which allows you to see where you're spending too much</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Parallax__content__heading">
                <h1 className="Parallax__content__heading__text"></h1>
                <h2 className="Parallax__content__heading__caption"></h2>
            </div>
        </section>
        </header>
        </>
    );
}

