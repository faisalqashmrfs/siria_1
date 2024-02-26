import   './About.css'

const CardSection4Br = (props) => {
  return (
    <div  className='CardSection4Br'>
        <img src={props.img} alt="" />
        <p>{props.paraghrap}</p>
    </div>
  )
}

export default CardSection4Br