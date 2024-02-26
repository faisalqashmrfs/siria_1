import  './About.css'
import img1 from "./assest/images/graan.png"
import img2 from "./assest/images/sec4.png"
import img3 from "./assest/images/sec42.png"
import img4 from "./assest/images/sec43.png"
import img5 from "./assest/images/sec44.png"
import CardSection4Br from './CardSection4Br'
const Section4Braa = () => {
  return (
    <div className='Section4Braa'>
        <div className="titleBraa">
    <img src={img1} alt="" className='titleBraa-img'/>
    <h2>OUR AIMS</h2>
</div>
<div className="cardsBraa">
<CardSection4Br img={img2}  paraghrap="WE USE NEW TECHNOLOGY"/>
<CardSection4Br img={img3}  paraghrap="PROFESSIONAL FARMERS"/>
<CardSection4Br img={img4}  paraghrap="WE’RE CERTIFIED COMPANY"/>
<CardSection4Br img={img5}  paraghrap="WE DELIVER EVERYWHERE"/>
</div>
<div className="light-braa">
  
</div>

    </div>
  )
}

export default Section4Braa