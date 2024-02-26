import './Home.css'
import hands from './assest/images/hands.svg'
import curve_1 from './assest/images/curve1.svg'
import curve_2 from './assest/images/curve2.svg'
import curve_3 from './assest/images/curve3.svg'
import curve_4 from './assest/images/curve4.svg'
import brand1 from './assest/images/brand1.svg'
import brand2 from './assest/images/brand2.svg'
import brand3 from './assest/images/brand3.svg'
import brand4 from './assest/images/brand4.svg'
import history_one_img from './assest/images/siria-herbs-history-img1.svg'
import play from './assest/images/play.svg'
import isoo from './assest/images/iso2015-1024x395-1 1.svg'
import leaf from './assest/images/leaf.svg'
import arrow from './assest/images/iso-arrow.svg'
import  logoo from './assest/images/Group.svg'
import  _01_ from './assest/images/01.svg'
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

import { Container } from 'react-bootstrap'
import NavbarDown from '../NavbarAll/NavbarDown/NavbarDown'
import { useState } from 'react'
const Home = () => {
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
        <div className="home-page-section">
             <NavbarDown handleBrandClick={handleBrandClick}/>
            <div className="hero">
                <img className='hands-hero' src={hands} alt="" />
                <img className='curve-1' src={curve_1} alt="" />
                <img className='curve-2' src={curve_2} alt="" />
                <img className='curve-3' src={curve_3} alt="" />
                <img className='curve-4' src={curve_4} alt="" />
            </div>
            <div className="text-hero">
                <p>
                    from the heart of the syrian coastal mountains
                </p>
                <div className='text-italic'>our first word was written</div>
            </div>
            <Container>
                <div className="products-we-offer">
                    <div className="headline mt-5">
                        <h1>PRODUCTS WE OFFER</h1>
                        <div className='product-we-offer-line'></div>
                    </div>
                    <div className="brands-logo mt-5">
                        <div className="brand-box mt-2">
                            <img src={brand1} alt="" />
                        </div>
                        <div className="brand-box mt-2">
                            <img src={brand2} alt="" />
                        </div>
                        <div className="brand-box mt-2">
                            <img src={brand3} alt="" />
                        </div>
                        <div className="brand-box mt-2">
                            <img src={brand4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="siria-herbs-history">
                    <h1>SIRIA HERBS HISTORY & STORY</h1>
                    <div className='siria-herbs-history-line'></div>
                    <div className="history-boxs">
                        <div className="siria-herbs-history-box">
                            <p>
                                <span>More </span>
                                than 8000 years BC, this birth has gained With plants of fragrance,
                                magic and healing, Syria or Assyria…the oldest civilizations and
                                richest in authenticity With its location in the eastern Mediterranean
                                and its unique terrain ,each of its details has the most beautiful stories. A bountiful land adorned with 3,000 plant species,
                                most of which are wild With the help of its children and the accumulation of their experiences through new civilizations,
                            </p>
                            <img className='history-one-img' src={history_one_img} alt="" />
                        </div>
                        <div className="siria-herbs-history-box">
                            <div className="natural">
                                <img src={play} alt="" />
                            </div>
                            <p>
                                <span>Siri </span>
                                company provided the building with the summaries of their 
                                experiences and the development of their sciences. Varieties of plants were transformed 
                                into food and medicine Syria Company was established in 2021, to be a new Syrian chapter for the story of the giving of land and people.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="iso-cerifecate">
                    <h1>ISO 9001 certificate</h1>
                    <div className="iso-certifecate-line"></div>
                    <div className="iso-certifecate-con">
                        <img className='iso-logo' src={isoo} alt="" />
                        <p className='iso-certifecate-text'>ISO certification for the manufacture and sale of natural medicinal herbal products and honey products includes several points</p>
                        <div className="properties-iso">
                            <div className="pro-box">
                                <img src={leaf} alt="" />
                                <p>Quality & Safety</p>
                            </div>
                            <div className="pro-box">
                                <img src={leaf} alt="" />
                                <p>Levels of safety</p>
                            </div>
                            <div className="pro-box">
                                <img src={leaf} alt="" />
                                <p>Sustainability</p>
                            </div>
                        </div>
                        <div className="properties-iso">
                            <div className="pro-box">
                                <img src={leaf} alt="" />
                                <p>Transparency and Accountability</p>
                            </div>
                            <div className="pro-box">
                                <img src={leaf} alt="" />
                                <p>Compliance with standards</p>
                            </div>
                        </div>
                        <div className="iso-btn">
                            <p>Read more</p>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
                <div className="policy">
                    <h1>Company’s policy</h1>
                    <div className="policy-boxs">
                        <div className="policy-box">
                            <div className="policy-logo">
                                <img src={logoo} alt="" />
                                <img className='number' src={_01_} alt="" />
                            </div>
                            <p>In general, the company's policy aims to provide high quality products and maintain integrity consumers, promoting environmental sustainability and social responsibility.</p>
                        </div>
                        <div className="policy-box">
                            <div className="row-one">
                                <div className="policy-logo">
                                    <img src={logoo} alt="" />
                                    <img className='number' src={_01_} alt="" />
                                </div>
                                <p>In general, the company's policy aims to provide high quality products and maintain integrity consumers, promoting environmental sustainability and social responsibility.</p>
                            </div>
                            <div className="row-one mt-5">
                                <div className="policy-logo">
                                    <img src={logoo} alt="" />
                                    <img className='number' src={_01_} alt="" />
                                </div>
                                <p>In general, the company's policy aims to provide high quality products and maintain integrity consumers, promoting environmental sustainability and social responsibility.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}
export default Home