import React from 'react';
import { useNavigate, NavLink } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

   return (
     <div className="container">
       <img
         src="https://www.adobomagazine.com/wp-content/uploads/2022/01/Style-Tips-from-these-multi-hyphenates-for-your-Everyday-Bottoms-HERO.jpg"
         alt="Background Image"
         className="background-image" />
       <div className="navigation">
         <div className="nav-item">
          <NavLink to={'/product/11'}>
           <img src=" https://img.ssensemedia.com/images/g_center,f_auto/241378F109008_1/ann-demeulemeester-white-jula-shirt.jpg" alt="Crew Neck" className="nav-image" /></NavLink>
           <div className="Crew-Neck">Crew Neck</div>
         </div>
         <div className="nav-item">
           <NavLink to={'/product/2'}><img src="  https://img.ssensemedia.com/images/g_center,f_auto/242483F069002_1/alaia-blue-round-jeans.jpg" alt="Jeans" className="nav-image" /></NavLink>
           <div className="Jeans">Jeans</div>
         </div>




         {/* <div className="nav-item">
           <img src=" https://img.ssensemedia.com/images/g_center,f_auto/241334F057000_1/nensi-dojaka-black-cropped-blazer.jpg" alt="Blazer" className="nav-image" />
           <div className="Blazer">Blazer</div>
         </div>
         <div className="nav-item">
           <img src="  https://img.ssensemedia.com/images/g_center,f_auto/242808F110026_1/jean-paul-gaultier-brown-shayne-oliver-edition-long-sleeve-t-shirt.jpg" alt="Long Sleeve" className="nav-image" />
           <div className="Blazer">Long Sleeve</div>
         </div>
        <div className="nav-item">
           <img src="  https://image.uniqlo.com/UQ/ST3/us/imagesgoods/450606/sub/usgoods_450606_sub9_3x4.jpg?width=400" alt="Ankle Pants" className="nav-image" />
           <div className="Blazer">Ankle Pants</div>
         </div>
         <div className="nav-item">
           <img src="  https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/453687/sub/goods_453687_sub1_3x4.jpg?width=400" alt="Hat" className="nav-image" />
           <div className="Blazer">Hat</div>
         </div> */}
       </div>
       <div>
         <button onClick={() => navigate("/AllProducts")}>About</button>
       </div>
     </div>
   );
 }