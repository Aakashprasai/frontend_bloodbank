import { React } from 'react'
import '../../src/style/homepage.css'
const HomePage = () => {
  return (
    <>
      <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/images/csone.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/images/csone.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/images/csone.png" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="container-fluid">
        {/* <img src="../assets/images/app.png" class="" style={{width: "111 rem"}} alt="..." /> */}

      </div>

    </>

  )
}

export default HomePage
