import React from 'react';
import { useNavigate, NavLink } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

   return (
    <div className="container">
      <NavLink to={'/'}><img
        src="https://is4.revolveassets.com/images/up/2024/June/062024_rw_sophisticated_01_2x.jpg"
        alt="Background Image"
        className="background-image" />
      </NavLink>
        <div className="navigation">
          <div className="nav-item">
            <NavLink to={'/product/11'}><img src="https://img.ssensemedia.com/images/g_center,f_auto/241378F109008_1/ann-demeulemeester-white-jula-shirt.jpg" alt="Crew Neck" className="nav-image" /></NavLink>
            <div className="nST"></div>
          </div>
          <div className="nav-item">
            <NavLink to={'/product/2'}><img src="https://img.ssensemedia.com/images/g_center,f_auto/242483F069002_1/alaia-blue-round-jeans.jpg" alt="Jeans" className="nav-image" /></NavLink>
            <div className="nST"></div>
          </div>
          <div className="nav-item">
            <NavLink to={'/product/3'}><img src="https://img.ssensemedia.com/images/g_center,f_auto/241334F057000_1/nensi-dojaka-black-cropped-blazer.jpg" alt="Blazer" className="nav-image" /></NavLink>
            <div className="nST"></div>
          </div>
          <div className="nav-item">
            <NavLink to={'/product/4'}><img src="https://img.ssensemedia.com/images/g_center,f_auto/242808F110026_1/jean-paul-gaultier-brown-shayne-oliver-edition-long-sleeve-t-shirt.jpg" alt="Long Sleeve" className="nav-image" /></NavLink>
            <div className="nST"></div>
          </div>
          <div className="nav-item">
            <NavLink to={'/product/14'}><img src="https://img.ssensemedia.com/images/g_center,f_auto/241345F069012_1/mugler-blue-and-black-spiral-jeans.jpg" alt="Ankle Pants" className="nav-image" /></NavLink>
            <div className="nST"></div>
          </div>
          <div className="nav-item">
            <NavLink to={'/product/16'}><img src="https://img.ssensemedia.com/images/g_center,f_auto/241404F111008_1/versace-pink-contrasto-medusa-95-tank-top.jpg" alt="Tank Top" className="nav-image" /></NavLink>
            <div className="nST"></div>
        </div>
        <div className="nav-item">
            <NavLink to={'/product/8'}><img src="https://img.ssensemedia.com/images/g_center,f_auto/242809F055005_1/issey-miyake-beige-and-navy-light-leak-maxi-dress.jpg" alt="Dress" className="nav-image" /></NavLink>
            <div className="nST"></div>
        </div>
        <div className="nav-item">
            <NavLink to={'/product/9'}><img src="https://img.ssensemedia.com/images/g_center,f_auto/242232F110036_1/rick-owens-black-porterville-rib-long-sleeve-t-shirt.jpg" alt="Long Sleeve T-Shirt" className="nav-image" /></NavLink>
            <div className="nST"></div>
        </div>
    </div>
      <div className='bottomHome'>
        <p>Suggested For You</p>
      </div>
      <NavLink to={'/blogs'}><img
        src="https://www.vogue.nl/wp-content/uploads/2024/02/vogue-maart-2024-covers-social-912x513.jpg"
        alt="Background Image"
        className="background-image-b" />
      </NavLink>
    </div>
   );
 }