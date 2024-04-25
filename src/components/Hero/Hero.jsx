import React from 'react'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero_text">
            <h1>We Help Grow Your Business</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
           <div className="hero_btn"> <button className='hero_btn1'>Contact us</button>
            <button className='hero_btn2'>Watch the video</button></div>
        </div>
        <div className="hero_img">
            <img src="https://preview.colorlib.com/theme/financier/images/img_6.jpg.webp" alt="" />
        </div>
    </div>
  )
}

export default Hero