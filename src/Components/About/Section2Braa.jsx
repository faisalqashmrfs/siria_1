import  './About.css'
import img1 from "./assest/images/graan.png"
import img2 from "./assest/images/section2.png"

const Section2Braa = () => {
  return (
   <>
<div className="titleBraa">
    <img src={img1} alt="" className='titleBraa-img'/>
    <h2><span>Let</span> tomorrow <span>begin</span> today.</h2>
</div>
 <div className='Section2Braa'>
<div className="Section2Braa-1">
    <img src={img2} alt="" />
</div>
<div className="Section2Braa-2">
<p>Syria Natural Products Company understands the concept of social responsibility and its importance in achieving sustainable developmentas a commitment from the company towards each of: its investors, consumers, employees, society, and the surrounding environment. Its activities in the field of social responsibility crystallize within the main areas, namely: sustainable contract farming ,preserving the environment, human healthSyria also adopts policies that contribute to the
     protection of the environment and natural resources.</p>
</div>

    </div>
    </>
  )
}

export default Section2Braa