import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
 
const Blog1 = () => {
    return (
        <div className="blogCardWrapper">
            <NavLink to={"https://www.ssense.com/en-us/editorial/culture/gabriel-smith-interview-brat-novel"}>
                <Card className="blogCard">
                    <Card.Img
                        className="blogCardImg"
                        src=
                        "https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1718716438/oohvyyn9n7jpif3osdxo.jpg"
                    />
                    <Card.Body className="blogCardBody">
                        <Card.Title className="bCBTitle">HOW GABRIEL SMITH WROTE THE BOOK OF THE SUMMER</Card.Title>
                        <Card.Text className="bCBText">Culture | June 18</Card.Text>
                    </Card.Body>
                </Card>
            </NavLink>
        </div>
    );
};
 
export default Blog1;