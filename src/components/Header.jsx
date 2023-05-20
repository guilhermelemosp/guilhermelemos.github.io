import React from 'react'
// import logo from "../assets/images/astronout.png"
// import logo1 from "../assets/images/astronout1.png"
import logo1 from '../assets/images/Captura de Tela 2022-10-13 às 19.02.33.jpg';
import bg from "../assets/images/maxresdefault.jpeg"
import Navbar from './Navbar'
import "../styles.css"

function Header() {

  return (
   <>
   <div id='home' style={{backgroundImage: `url(${bg})`}} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
    <Navbar/>
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center">
        <h1 className='text-white text-5xl font-bold'>Hi! I'm Guilherme</h1>
        <p className='text-white py-4 max-w-lg '>Seja bem-vindo ao meu portifófio! Aqui você encontrará todos os meus projetos desenvolvidos, além das linguagens de programação utilizadas. ENJOY!</p>
      </div>
      <div className="image lg:hidden w-[300px] flex ">
        <div className="card-zoom">
           <img className="card-zoom-image" src={logo1} alt="" />
         </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Header