import React from "react";

function Home() {
  return (
    <section className="sectionHome">
      <img className="summaryContainer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/1280px-Flag_of_Myanmar.svg.png" alt="burmaflag" width="500" height="320"></img>
      <div>
        <div className="summaryBox">
          <h1 className="homeTitle">Burma Freedom Fund (BFF)</h1>
          <p>
          Different projects and initiatives can be found all across different platforms toward the Burmese revolution - but it is hard to navigate and even harder to vet whether the project/institution is credible.
          </p>
          <p>
          Here is where BFF springs into action to provide a single platform for individuals/organizations to set up their projects to begin crowd funding toward their individual goals.  
          </p>
          <p>
          Art assets can be donated toward projects to help fund their initiatives using the Stripe payment application integrated within the application.      
          </p>
          <p>
            Sign up today to set-up your own project or to donate towards the cause. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
