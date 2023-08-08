import "../LandingPage/LandingPage.css";
import img1 from '../images/img1.jpg'
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <section id="gallery">
    <div class="gallery-center">
      {/* <!-- single img gallery --> */}
      <article class="gallery-img-container">
        <img src={img1} alt="" class="gallery-img"/>
      <Link to="/searchPage" class="gallery-icon">
        <FiSearch></FiSearch>
      </Link>
     </article>
     {/* <!-- end single img gallery -->
     <!-- single img gallery --> */}
     <article class="gallery-img-container">
     <img src={img1} alt="" class="gallery-img"/>
       <Link to="/searchPage"   class="gallery-icon">
       <FiSearch></FiSearch>
       </Link>
     </article>
     {/* <!-- end single img gallery -->
     <!-- single img gallery --> */}
     <article class="gallery-img-container">
     <img src={img1} alt="" class="gallery-img"/>
       <Link to="/searchPage"  class="gallery-icon">
       <FiSearch></FiSearch>
       </Link>
     </article>
     {/* <!-- end single img gallery -->
     <!-- single img gallery --> */}
     <article class="gallery-img-container">
     <img src={img1} alt="" class="gallery-img"/>
       <Link to="/searchPage"  class="gallery-icon">
       <FiSearch></FiSearch>
       </Link>
     </article>
     {/* <!-- end single img gallery -->
     <!-- single img gallery --> */}
     <article class="gallery-img-container">
     <img src={img1} alt="" class="gallery-img"/>
       <Link to="/searchPage"  class="gallery-icon">
       <FiSearch></FiSearch>
       </Link>
     </article>
     {/* <!-- end single img gallery -->
     <!-- single img gallery --> */}
     <article class="gallery-img-container">
     <img src={img1} alt="" class="gallery-img"/>
       <Link to="/searchPage"  class="gallery-icon">
       <FiSearch></FiSearch>
       </Link>
     </article>
     {/* <!-- end single img gallery -->
     <!-- single img gallery --> */}
     <article class="gallery-img-container">
     <img src={img1} alt="" class="gallery-img"/>
       <Link to="/searchPage"  class="gallery-icon">
       <FiSearch></FiSearch>
       </Link>
     </article>
     {/* <!-- end single img gallery -->
     <!-- single img gallery --> */}
     <article class="gallery-img-container">
     <img src={img1} alt="" class="gallery-img"/>
       <Link to="/searchPage"  class="gallery-icon">
       <FiSearch></FiSearch>
       </Link>
     </article>
     {/* <!-- end single img gallery --> */}
    </div>
  </section>
  );
}

export default Gallery;


