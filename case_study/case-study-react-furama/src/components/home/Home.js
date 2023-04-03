import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'

 class Home extends Component {
  render() {
    return (
      <div>
            <Header/>
            <div className="sticky-top">
                <Navigation/>
            </div>
            <div className="container-fluid">
            <div className="row ">
            <div style={{background: '#046056'}} className="col-2 col-lg-2 col-md-2 col-xl-2 col-sm-2">

</div>
<div className="col-8 col-lg-8 col-md-8 col-xl-8 col-sm-8">
  <div style={{marginLeft: '-30px', right: "-15px"}} id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" hidden data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" hidden data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" hidden data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="images\background_furama.jpeg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="images\background_furama.jpeg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="images\background_furama.jpeg" className="d-block w-100" alt="..."/>
      </div>
    </div>
  </div>
</div>
<div style={{background: '#046056'}} className="col-2 col-lg-2 col-md-2 col-xl-2 col-sm-2">
</div>
</div>

<div className="container-fluid">
    <div className="row">
    <div className="col-4 col-sm-4 col-xl-4 col-md-4 col-lg-4">
        <div className="card" style={{width: '100%' , height: '100%'}}>
          <img style={{width: '100%' , height: '70%'}} src="images/u-cr-800x450.jpg" className="card-img-top" alt=""/>
          <div className="card-body" align="center">
            <strong><h1 className="card-title " style={{color: 'red'}}>Phòng 101-VIP</h1></strong>
            <p className="card-text">Giá: 1.500.000 đ</p>
            <a href="/#" className="btn btn-primary">Đặt phòng</a>
          </div>
        </div>
      </div>
      <div className="col-4 col-sm-4 col-xl-4 col-md-4 col-lg-4">
        <div className="card" style={{width: '100%' , height: '100%'}}>
          <img style={{width: '100%' , height: '70%'}} src="images/u-cr-800x450.jpg" className="card-img-top" alt=""/>
          <div className="card-body" align="center">
            <strong><h1 className="card-title " style={{color: 'red'}}>Phòng 102-VIP</h1></strong>
            <p className="card-text">Giá: 1.500.000 đ</p>
            <a href="/#" className="btn btn-primary">Đặt phòng</a>
          </div>
        </div>
      </div>
      <div className="col-4 col-sm-4 col-xl-4 col-md-4 col-lg-4">
        <div className="card" style={{width: '100%' , height: '100%'}}>
          <img style={{width: '100%' , height: '70%'}} src="/images/u-cr-800x450.jpg" className="card-img-top" alt=""/>
          <div className="card-body" align="center">
            <strong><h1 className="card-title " style={{color: 'red'}}>Phòng 103-VIP</h1></strong>
            <p className="card-text">Giá: 1.500.000 đ</p>
            <a href="/#" className="btn btn-primary">Đặt phòng</a>
          </div>
        </div>
      </div>
    </div>
  </div>
            </div>

            <Footer/>

      </div>
    )
  }
}
export default Home