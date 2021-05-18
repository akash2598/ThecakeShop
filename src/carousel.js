

var img1="https://res.cloudinary.com/ashudev/image/upload/v1615291611/d6irltnfa9kknsq9pi1y.jpg";
var img2="https://res.cloudinary.com/ashudev/image/upload/v1615293948/nvtmmgae8zbq2qdwfznc.jpg";
var img3="https://res.cloudinary.com/ashudev/image/upload/v1615294654/fstgjqzauobzircprd51.jpg"


function Carousel() {
  

    return (
      <div className="Carousel" style={{width:"90%" ,margin:"auto"}}>
       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..." height="500" />
    </div>
    <div class="carousel-item ">
      <img src={img2}  class="d-block w-100" alt="..." height="500"/>
    </div>
    <div class="carousel-item">
      <img src={img3}  class="d-block w-100" alt="..." height="500"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      </div>
    );
  }
  
  export default Carousel;