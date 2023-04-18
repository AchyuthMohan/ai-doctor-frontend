import React from 'react'
import './MainPage.css'
import Predictor from '../../components/Chatbot/Predictor'
import MainLayout from '../../components/MainLayout/MainLayout'
const MainPage = () => {
  return (
    <MainLayout>
      <Predictor/>
    </MainLayout>
  )
}

export default MainPage