import React from "react";
import Blog1 from "./blog1";
import Blog2 from "./blog2";
import Blog3 from "./blog3";
import Blog4 from "./blog4";
import Blog5 from "./blog5";
import { Container } from 'react-bootstrap';
 
 
const Blogs = () => {
    return (
        <div className="blogPageWrapper">
            <Container className="blogPageContainer">
                <div className="blogHeading">
                    <h1 className="bHT">INSPIRING FASHION ONE ARTICLE AT A TIME</h1>
                </div>
                <div className="bCardList">
                    <div className="bCardL">
                        <Blog1 />
                    </div>
                    <div className="bCardL">
                        <Blog2 />
                    </div>
                    <div className="bCard">
                        <Blog3 />
                    </div>
                    <div  className="bCard">
                        <Blog4 />
                    </div>
                    <div className="bCard">
                        <Blog5 />
                    </div>
                </div>
            </Container>
        </div>

    );
};
 
export default Blogs;
