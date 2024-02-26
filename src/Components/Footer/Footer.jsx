import   './Footer.css'
import img from "./assest/images/footer.png"
import img1 from "./assest/images/call.png"
import img2 from "./assest/images/message.png"
import img3 from "./assest/images/f.png"
import img4 from "./assest/images/ed.png"
import img5 from "./assest/images/ff.png"
import img6 from "./assest/images/fff.png"

const Footer = () => {
  return (
    <footer>
<div className="emailBraa">
    <div className="emailBraa1">
        <h3>SIRIA NATURE IS THE HEART OF NATURE</h3>
        <div className='ff'>
        <img src={img4} alt="" />
        <p>Subscribe and receive the news about our product first</p>
        </div>

    </div>
    <div className="emailBraa2">
      <input type="email"placeholder='Email Address'   />
      <button>Subscripte</button>
    </div>
    <div className="emailBraa3">
        <img src={img5} alt="" />
        <img src={img6} alt="" />
    </div>
</div>
<div className="MainFooterBraa">
    <div className="logofooter">
        <img src={img} alt="" />
        <p>Syria Company was established in 2021,
             to be a new Syrian chapter for the story of the giving of land and people. From the heart of the Syrian coastal mountains, our first word was written</p>
    </div>
    <div className="linksfooter">
        <h3>Links</h3>
        <p>Certificates</p>
        <p>Policy</p>
    </div>
    <div className="linksfooter">
        <h3>Brands</h3>
        <p>Green Gold</p>
        <p>Malika</p>
        <p>Ogaro</p>
        <p>a vie </p>
    </div>
    <div className="linksfooter">
        <h2>Contact</h2>
       <div className='contact-footer'>
       <img src={img1} alt="" />
        <p>+963 41 2020</p>
       </div>
        <div className='contact-footer'>
        <img src={img2} alt="" />
        <p>info@siriaherbs.com</p>
    
       </div>
    </div>
</div>
<hr />
<p className='copy'>Siria Herbs 2023 © All Rights Reserved | Designed and Developed by 
 <img src={img3} alt=""  className='copy'/>    </p>
    </footer>
  )
}

export default Footer