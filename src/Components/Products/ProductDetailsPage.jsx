import React, { useEffect, useState } from 'react';
import { useLocation,Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const ProductDetailsPage = () => {
  const location= useLocation();
  const [detailes,setDetailes]= useState({});
  const [selectedContent, setSelectedContent] = useState('');
  const navigate = useNavigate();
  const _id= detailes.name;
  const idstring=(_id)=>{
      return String(_id).toLowerCase().split(" ").join("")
    }
    const handleToDetailes = () => {
      navigate( `/ProductDetailsPage/${rootId} `, {
        state: {
          item: detailes
         
        }
      });
    }
    const rootId = idstring(_id);
   console.log(rootId)
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerRow = 3;
  
  const reltedImages = detailes.reltedImages || {};
  const imageUrls = Object.values(reltedImages);
  
  const indexOfLastImage = currentPage * imagesPerRow;
  const indexOfFirstImage = indexOfLastImage - imagesPerRow;
  
  const currentImages = imageUrls.slice(indexOfFirstImage, indexOfLastImage);
  
  const pageNumbers = Math.ceil(imageUrls.length / imagesPerRow);
  
  const paginate = pageNumber => setCurrentPage(pageNumber);  

    const handleContentClick = (content) => {
      if (content === 'ingredients') {
        setSelectedContent(detailes.ingredients);
      } else if (content === 'additionalDescription') {
        setSelectedContent(detailes.additionalDescription);
      }
      else if (content === 'brand') {
        setSelectedContent(detailes.brand);
      }
       else {
        setSelectedContent(null); // إذا كان العنصر غير محدد
      }
    };
    useEffect(()=>{
      setDetailes(location.state.item)
    },[])
  
  return (
    <div>
      <div className="breadcrumb">
        <span>Home »<Link className='link-page' to="/Products">Products</Link> » {detailes.name}</span>
      </div>
    <div className="product-details-page">
   
      <div className="product-images-one">
      
      <div className="product-container">
     
      <img src={detailes.imageUrl} alt={detailes.name} />
      <div className="image-back" style={{ backgroundImage: `url(${detailes.imgback})` }}></div>
    </div>
    <div className="thumbnail-images">
  {detailes.otherImages && Object.values(detailes.otherImages).map((image, index) => (
    <img className='thumbnail-image' key={index} src={image} alt={detailes.name} />
  ))}
</div>
      </div>
      <div className="product-details">
        <h2 className="product-details-name">{detailes.name}</h2>
        <p className="product-details-desc">{detailes.description}</p>
        <div className="specifications">
         
          <ul className="specifications-ul">
            <li>Brand:<span className="specifications-span"> {detailes.brand}</span>  </li>
            <li>Product Number:<span className="specifications-span">{detailes.productNumber}</span> </li>
            <li>Weight:<span className="specifications-span">{detailes.weight}</span> </li>
            <li>Cover Description:<span className="specifications-span">{detailes.coverDescription}</span> </li>
      <li>Cover Number:<span className="specifications-span">{detailes.coverNumber}</span> </li>
      </ul>
      <div className='detailesone'>
          <button className='detailesone-but'> <FontAwesomeIcon icon={faLink} />Contact Us</button>
          <div className="social-icons">
            <p>SHARE: </p>
            <FontAwesomeIcon icon={faFacebook}  className="icon-blue"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram}  className="icon-blue"></FontAwesomeIcon>
          </div>
          </div>
        </div>
      </div>
      
    </div>
    <div  className="detalies-detalies">
      <div className='detalies-detalis-div' onClick={() => handleContentClick('ingredients')}>Ingredients</div>
      <div className='detalies-detalis-div' onClick={() => handleContentClick('additionalDescription')}>Description</div>
      <div className='detalies-detalis-div' onClick={() => handleContentClick('brand')}>Brand</div>
      </div>
      <hr className="detalies-detalies-hr" />
      
     
        <div>
          
          <p className='detailes-content'>{selectedContent}</p>
        </div>

        <div className="images-related">
  <h3 className='related-title'>You May Like:</h3>
  <div className="row-related">
    {currentImages.slice(0, 3).map((image, index) => (
            //<div key={index} className="product-image" style={{ backgroundImage:  `url(${detailes.imgback}) `, backgroundSize: '110% auto' }}>//
      <div key={index} className="product-image" >
        <img className='img-related' src={image} alt={detailes.name} />
        <button onClick={handleToDetailes} className='btn-related'  >more details <span className="bottom-arrow"></span></button>
      </div>
    ))}
  </div>
  <ul className='pagination'>
    {Array.from({ length: pageNumbers }, (_, i) => (
      <li key={i + 1} onClick={() => paginate(i + 1)}>
        {i + 1}
      </li>
    ))}
  </ul>
</div>
    </div>
    
  );
};

export default ProductDetailsPage;