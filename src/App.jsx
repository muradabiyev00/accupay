import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { PiLightbulbFilament } from "react-icons/pi";
import { IoRocketSharp } from "react-icons/io5";
import { WiDirectionUpRight } from "react-icons/wi";



const App = () => {
  return (
    <div>
      <nav className='navbar'>
        <div>
          <img src="https://softivuspro.com/accupay/main/assets/images/logo.png" alt="" />
        </div>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Shop</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Pages</li>
        <li>
          <FaPhoneVolume/>+ 1234 567 865</li>
        <li><button className='btn5'>Get Started < WiDirectionUpRight /></button></li>
      </ul>
      </nav>
      <section className='heading'>
      <div className='left'>
        <h3>EFFICIENCY PAYROLL AND WORKFORCE MASTERY</h3>
        <h2>We Make<p className='ikinci'>Payroll </p>Painless.</h2>
        <p className='paragraph'>We get your employees paid while providing online access to paystubs, tax reports & payroll tax filings.</p>
        <button className='btn'>Get Started</button> <span><a>Learn More</a></span>
      </div>
      <div className='right'>
        <img className='sekil' src="https://softivuspro.com/accupay/main/assets/images/hero_illus.png" alt="" />
      </div>
      </section>
      <section className='body'>
        <div className='body_top'>
          <button className='btn1'>Solutions</button>
          <h4>The global payroll solution</h4>
          <p className='paragraph2'>When it comes to payroll solutions, we have a variety of options that benefit both your company and your contractor.</p>
        </div>
        <div className='body_bottom'>
          <div className='body_left'>
            <img className='sekil2' src="https://softivuspro.com/accupay/main/assets/images/solution_illustrations.png" alt="" />
            </div>
            <div className='body_right'>
            <h2 className='basliq'>Consolidate Payroll Processing</h2>
            <p className='paragraph3'>We have designed a fast and effective payroll system that streamlines your payment process.</p>
            <button className='btnss'><IoDocumentText/></button><span>Tax Preparation</span>
            <button className='btnss'><FaHandHoldingHeart /></button><span>Payroll Processing</span><br />
            <button className='btnss'><PiLightbulbFilament/></button><span>Cost Effective</span>
            <button className='btnss'><IoRocketSharp/></button><span>Scale Rapidly</span><br />
            <button className='btn6'>Get Started<WiDirectionUpRight /></button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default App