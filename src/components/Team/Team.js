import React from 'react'
import './Team.css'
import ap from '../../assets/jpeg/ap.jpg'
const Team = () => {
  return (
    <section>
      <div class="row">
        <h1>Our Team</h1>
      </div>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="img-container">

            </div>
            <h3>Abhishek Kurian</h3>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="img-container">
            </div>
            <h3>Achyuth Mohan</h3>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="img-container">
            <img src={ap} alt=""/>
            </div>
            <h3>Athul Prakash</h3>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="img-container">
            </div>
            <h3>Harikrishna Biju</h3>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Team