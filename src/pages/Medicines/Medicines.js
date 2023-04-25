import React from 'react'
import './Medicines.css'
import MainLayout from '../../components/MainLayout/MainLayout'
const Medicines = () => {
  return (
    <MainLayout>
      <h1>Medicines</h1>
      <div class="flex-container">
        <div class="flex-box">
          <img src="https://imgs.search.brave.com/MoP_HouzU278dGNqaOkhb4DuHlXG5WA3XeZ8Luu-3EA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/b2htYW4uaW4vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDIv/T0hNQU4tRGVsYXkt/Q2Fwc3VsZXMtaW1n/LmpwZw" alt="" />
          <div  class="name">
            NAME OF MEDICINE:
            STOCK QTY:
          </div>
        </div>
        <div class="flex-box">
          BOX2
        </div>
        <div class="flex-box">
          BOX3
        </div>
        <div class="flex-box">
          BOX4
        </div>
        <div class="flex-box">
          BOX5
        </div>
        <div class="flex-box">
          BOX6
        </div>
        <div class="flex-box">
          BOX7
        </div>
        <div class="flex-box">
          BOX8
        </div>
        <div class="flex-box">
          BOX9
        </div>
      </div>

    </MainLayout>
  )
}

export default Medicines