import BasicCard from "../BasicCard/BasicCard";
import "../LandingPage/LandingPage.css";



function Destination() {
  return (
<section class="destination-head"id="featured">
<div class="section-title">
  <h2>destination <span>places</span></h2>
</div>
<BasicCard/>
<div class="tour-btn">
    <a href="#" class="my-btn">
          more tours
    </a>
</div>
</section>
  );
}

export default Destination;




