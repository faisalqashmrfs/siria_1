import React, { useState } from 'react'
import './Iso.css'
import iso_logo from './assest/images/Iso.png'
import Container from 'react-bootstrap/Container'
import box_two_image from './assest/images/box-two-image.png'
import certeficate_logo from './assest/images/certeficate-logo.svg'
import book from './assest/images/book.png'
import organic from './assest/images/organic.png'
import organic_book from './assest/images/organic_book.png'
import NavbarDown from '../NavbarAll/NavbarDown/NavbarDown'
import im2 from '../Products/assest/images/Gold1.svg';
import backGold from '../Products/assest/images/backGold.svg';
import iconGold from '../Products/assest/images/iconGold.svg'
import blurGold from '../Products/assest/images/RectangleGold.png';
import blurMalika from '../Products/assest/images/blurMalika.png';
import grayGold from '../Products/assest/images/grayGold.svg';
import backOgaro from '../Products/assest/images/backOgaro.svg';
import iconOgaro from '../Products/assest/images/iconOgaro.svg';
import Ogaro1 from '../Products/assest/images/Ogaro1.svg';
import grayOgaro from '../Products/assest/images/grayOgaro.svg';
import backMalica from '../Products/assest/images/backMalica.png';
import iconMalica from '../Products/assest/images/iconMalica.svg';
import Malika1 from '../Products/assest/images/Malika1.svg';
import backProMalika from '../Products/assest/images/backProMalik.svg';
import backAvie from '../Products/assest/images/backAvie.svg';
import blurAvie from '../Products/assest/images/blurAvie.png';
import Avie1 from '../Products/assest/images/Avie11.svg';
import backProAvie from '../Products/assest/images/backProAvie.svg';
import iconAvie from '../Products/assest/images/iconAvie.svg';
function Iso() {
    const [brandInfo, setBrandInfo] = useState(null);
    const products = brandInfo && brandInfo.products;
    console.log(products)
    const handleBrandClick = (brand) => {
      if (brand === 'GreenGold') {
        setBrandInfo({
          background: backGold,
          icon:iconGold,
          blur:blurGold,
          titleup:'Your Health is Gold',
          discriptionBrand:' Syrian Green Gold represents all the Syrian natural plants and herbs from the desert, the mountain, the coast, the Ghouta al-Sham and the Hauran plain. A wide variety of natural products with a special Syrian flavor.Collected carefully and lovingly with Syrian hands and expertise.',
          cat1:'Plastic Box',
          cat2:'Tin bag',
          cat3:'Carton Boxes',
          cat4:'Tea bag',
          cat5:'Zaatar',
          
          products: [
            {
              name: 'SWEET VIOLET',
              imageUrl:im2,
              imgback: grayGold,
              description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
              category: 'category1',
              productNumber:'444',
              weight: '14',
              coverDescription:'bbbbbb',
              coverNumber:'12',
              ingredients:'ingredients ingredients ingredients ingredients',
              additionalDescription:'additionalDescription additionalDescription additionalDescription',
              brand:brand,
              otherImages :{
                otherImage1:im2,
                otherImage2:im2,
                otherImage3:im2,
              },
              reltedImages:{
                reltedImage1:im2,
                reltedImage2:im2,
                reltedImage3:im2,
                reltedImage4:im2,
                reltedImage5:im2,
                reltedImage6:im2,
                reltedImage7:im2,
                reltedImage8:im2,
                
              }
            },
            // ... المزيد من المنتجات ...
          ]
        });
      } else if (brand === 'Ogaro') {
        setBrandInfo({
          background: backOgaro,
          icon:iconOgaro,
          blur:blurMalika,
          titleup:'Your Health is Ogaro',
          discriptionBrand:'Ogaro oil is associated with the spiritual heritage of our country , Through deep roots that pulsate with the life of the Syrian countryside . This oil is considered to be the greatest gift nature has bestowed on us.',
          cat1:'Bottle',
          cat2:'Glass',
          cat3:'Spray',
          
          products: [
            {
              name: 'olive oil',
              imageUrl:Ogaro1,
              imgback: grayOgaro,
              description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
              category: 'category1',
              productNumber:'444',
              weight: '14',
              coverDescription:'bbbbbb',
              coverNumber:'12',
              ingredients:'ingredients ingredients ingredients ingredients',
              additionalDescription:'additionalDescription additionalDescription additionalDescription',
              brand:brand,
              otherImages :{
                otherImage1:Ogaro1,
                otherImage2:Ogaro1,
                otherImage3:Ogaro1,
              },
              reltedImages:{
                reltedImage1:Ogaro1,
                reltedImage2:Ogaro1,
                reltedImage3:Ogaro1,
                reltedImage4:Ogaro1,
                reltedImage5:Ogaro1,
                reltedImage6:Ogaro1,
                reltedImage7:Ogaro1,
                reltedImage8:Ogaro1,
                
              }
            },
            // ... المزيد من المنتجات ...
          ]
        });
      } else if (brand === 'Malika') {
        setBrandInfo({
          background: backMalica,
          icon:iconMalica,
          blur:blurMalika,
          titleup:'Your Health is Yellow',
          discriptionBrand:'Malika Honey is considered to be the greatest gift nature has bestowed on us. malika can be used topically for both hair and skin health, as well as internally for both medicinal and spiritual healing. Skin Care Benefits include: Anti Bacterial Properties – Antioxidant Rich. This sweet golden liquid from the beehive also produces a Glow!',
          cat1:'Jar',
          cat2:'bag',
         
          
          products: [
            {
              name: 'SYRIAN HONEY',
              imageUrl:Malika1,
              imgback: backProMalika,
              description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
              category: 'category1',
              productNumber:'444',
              weight: '14',
              coverDescription:'bbbbbb',
              coverNumber:'12',
              ingredients:'ingredients ingredients ingredients ingredients',
              additionalDescription:'additionalDescription additionalDescription additionalDescription',
              brand:brand,
              otherImages :{
                otherImage1:Malika1,
                otherImage2:Malika1,
                otherImage3:Malika1,
              },
              reltedImages:{
                reltedImage1:Malika1,
                reltedImage2:Malika1,
                reltedImage3:Malika1,
                reltedImage4:Malika1,
                reltedImage5:Malika1,
                reltedImage6:Malika1,
                reltedImage7:Malika1,
                reltedImage8:Malika1,
                
              }
            },
            // ... المزيد من المنتجات ...
          ],
        });
      }
      else if (brand === 'Avie') {
        setBrandInfo({
          background: backAvie,
          icon:iconAvie,
          blur:blurAvie,
          titleup:'Your Health is Green',
          discriptionBrand:'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains, dried in the shade and sterilized according to the latest techniques under the supervision of pharmacists.Genus, species, and medical parts are chosen identically to the scientific pharmacopoeia.',
          cat1:'Capsules',
          cat2:'Tin bag',
          cat3:'Carton Boxes',
          cat4:'Tea bag',
         
          
          products: [
            {
              name: 'SLIM & FIT',
              imageUrl:Avie1,
              imgback: backProAvie,
              description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
              category: 'category1',
              productNumber:'444',
              weight: '14',
              coverDescription:'bbbbbb',
              coverNumber:'12',
              ingredients:'ingredients ingredients ingredients ingredients',
              additionalDescription:'additionalDescription additionalDescription additionalDescription',
              brand:brand,
              otherImages :{
                otherImage1:Avie1,
                otherImage2:Avie1,
                otherImage3:Avie1,
              },
              reltedImages:{
                reltedImage1:Avie1,
                reltedImage2:Avie1,
                reltedImage3:Avie1,
                reltedImage4:Avie1,
                reltedImage5:Avie1,
                reltedImage6:Avie1,
                reltedImage7:Avie1,
                reltedImage8:Avie1,
                
              }
            },
            // ... المزيد من المنتجات ...
          ],
        });
      }
      
    };
  
    return (
        <div className="iso-section">
            <NavbarDown handleBrandClick={handleBrandClick}/>
            <div className="ne-iso-hero">
                <div className="overlay"></div>
                <div className="ne-contact-content">
                    <img src={iso_logo} alt="" />
                    <h2 className='text-white'>Syrian Natural Products Company</h2>
                    <h2 className='hero-text-h2 text-white'>Obtains ISO 9001-2015 certefication in Quality Management System</h2>
                </div>
            </div>
                <Container>
                    <div className="iso-content mt-5">
                        <p className=' iso-text-content'>
                            The ISO 9001 standard paid attention to important factors related to enhancing the principle of leadership, risk management and business continuity. This allows organizations to align their strategic
                            orientations with the management system applied in order to improve performance and achieve customer requirements permanently.
                        </p>
                        <p className='iso-text-two-content'> 
                            ISO certification for the manufacture and sale of natural medicinal herbal products and honey products includes several points
                        </p>
                    </div>
                    <div className="iso-boxs">
                        <div className="row-one">
                            <div className="box-one">
                                <h1 className='box-one-title'>levels of safety</h1>
                                <p className='box-one-text'>Improving health and wellness The company seeks to promote health and wellness through its products. It works to develop high-quality and safe natural products that help improve the health and well-being of consumers.</p>
                            </div>
                            <div className="box-one">
                                <h1 className='box-two-title'>Quality & Safety</h1>
                                <p className='box-two-text'>The company sets a policy of achieving quality and safety in the manufacture of all products. It works to use natural ingredients with high quality and applies strict quality control procedures at all stages of manufacturing and distribution</p>
                            </div>
                        </div>
                        <div className="row-two mt-5">
                            <div className="box-two">
                                <h1 className="box-one-title">Transparency & Accountability</h1>
                                <p className="box-one-text">The company is committed to the principle of transparency and providing complete and correct information about products, their sources and practices. It works to provide products with a health impact while providing the highest</p>
                            </div>
                            <div className="box-two-image">
                                <img src={box_two_image} alt="" />
                            </div>
                            <div className="box-two">
                                <h1 className="box-two-title">Sustainability</h1>
                                <p className="box-two-text">The company ensures sustainability practices in its manufacture and marketing of products. It works to maintain the environmental, social and economic balance in its operations and seeks to provide healthy natural products without negatively affecting the environment.</p>
                            </div>
                        </div>
                        <div className="row-three mt-5">
                            <div className="box-three">
                                <h1 className="box-three-title">Compliance with standards</h1>
                                <p className="box-three-text">The company operates in accordance with internationally recognized quality standards such as ISO 9001 Quality Management Standard and ISO 22000 Food Safety Management Standard. Aims to make its products superior to the required health and quality standards</p>
                            </div>
                        </div>
                    </div>
                    <div className="iso-certeficat mt-5">
                        <div className="certeficat-sec-one">
                            <div className="certeficate-logo">
                                <img src={certeficate_logo} alt="" />
                                <div className="certefiacte-title">
                                    <h1 className='certeficate-title-h1'>GMP</h1>
                                    <p className='certeficate-title-p'>(Good Manufacturing Practice)</p>
                                </div>
                            </div>
                            <p className='certeficate-text mt-5'>
                                Good manufacturing practices of standards and guidelines aimed at ensuring quality and safety of pharmaceutical,
                                food and other sanitary products.<br/><br/>GMP Provide a framework for manufacturing processes, quality control, documentation, training,
                                verification, auditing and other aspects important to industries related to health and safety<br/><br/> Establishments
                                that obtain GMP certification are obliged to comply with stringent standards to ensure product quality and safety
                            </p>
                        </div>
                        <div className="certeficate-sec-two">
                            <img className='certeficate-book' src={book} alt="" />
                        </div>
                    </div>
                    <div className="iso-organic">
                        <div className="organic-sec-one">
                            <div className="iso-organic-title">
                                <img src={organic} alt="" />
                                <h1 className='organic-title-h1'>ORGANIC</h1>
                            </div>
                            <p className='certeficate-text mt-5'>
                                Organic Certification allows a farm or processing facility to sell, label,
                                and represent their products as organic. The organic brand provides consumers with more choices in the marketplace.
                            </p>
                        </div>
                        <div className="organic-sec-two">
                            <img className='organic-book-image' src={organic_book} alt="" />
                        </div>
                    </div>
                </Container>
        </div>
      )
}

export default Iso