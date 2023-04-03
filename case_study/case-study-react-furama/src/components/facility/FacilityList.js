import React from 'react'
import Footer from '../home/Footer'
import Navigation from '../home/Navigation'
import facilityData from './model/Facility'

function FacilityList() {
  return (

    <div>
      <Navigation />
      <div className="container-fluid">
        <div>
          <button className="btn btn-primary btn-outline-secondary btn-sm" data-bs-toggle="modal"
            data-bs-target="#addContract">
            <span className="fa-solid fa-plus text-light h6 my-auto me-1"></span>
            <span className="text-light"> Create Facility</span>
          </button>
        </div>
        <div className="row">
          <table className="table table-dark" border="1" style={{ textAlign: 'center' }}>
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Area</th>
                <th>Cost</th>
                <th>Max People</th>
                <th>Standard Room</th>
                <th>Description Other Convenience</th>
                <th>Pool Area</th>
                <th>Floors</th>
                <th>Facility Free</th>
                <th>Rent Type</th>
                <th>Facility Type</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody align="center">


              {
                facilityData.facility.map((facilityLists, index) => (
                  <>
                    <tr key={facilityLists.id}>
                      <td key={facilityLists.id} >{index + 1}</td>
                      <td>{facilityLists.name}</td>
                      <td>{facilityLists.area}</td>
                      <td>{facilityLists.cost}</td>
                      <td>{facilityLists.maxPeople}</td>
                      <td>{facilityLists.standardRoom}</td>
                      <td>{facilityLists.descriptionOtherCovenience}</td>
                      <td>{facilityLists.poolArea}</td>
                      <td>{facilityLists.numberOfFloors}</td>
                      <td>{facilityLists.facilityFree}</td>
                      <td>{facilityLists.rentType.name}</td>
                      <td>{facilityLists.facilityType.name}</td>
                    </tr>
                  </>

                ))
              }

            </tbody>
          </table>

        </div>
      </div>
      <Footer />
    </div>


  )
}

export default FacilityList