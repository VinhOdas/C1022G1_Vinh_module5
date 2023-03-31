import React, { Component } from 'react'

 class Header extends Component {
  render() {
    return (
  
       <section className="header d-flex justify-content-center">
  <div className="wrapper d-flex justify-content-between align-items-center">

   <img className='header__logo' alt='' src="images/frf.png" style={{marginLeft: '-18px'}} ></img>
    
    <div class="header__contact d-flex">

      <div className="address flex-fill">
        <div className="d-flex">
          <img src="/images/map.svg" alt='' className="me-5"/>
          <div id="diaChi" className="d-flex flex-column">
            <p className="mb-3">103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District, Danang City, Vietnam</p>
            <p className="fs-4"><span className="fs-4" style={{fontSize: '0.275rem'}}>7,0 km from Danang Airport</span></p>
          </div>
        </div>
      </div>


      <div className="phone-email flex-fill">
        <div className="d-flex align-items-center mb-3">
          <img src="images/telephone.svg" className="me-4" alt=""/>
          <span className='fs-4 text-dark'>84-236-3847 333/888</span>
        </div>

        <div className='d-flex align-items-center'>
          <img src="images/envelope.svg" className="me-4" alt=""/>
          <span className='fs-4 text-dark'>reservation@furamavietnam.com</span>
        </div>
      </div>
    </div>
  </div>
</section>

    )
  }
}
 export default Header