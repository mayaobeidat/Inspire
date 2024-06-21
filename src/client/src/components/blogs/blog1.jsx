import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
 
const Blog1 = () => {
    return (
        <div className="blogCardWrapper">
            <NavLink to={"https://www.ssense.com/en-us/editorial/culture/cannes-film-festival-2024-recap"}>
                <Card className="blogCard">
                    <Card.Img
                        className="blogCardImg"
                        src=
                        "https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1717077603/pyu9bdcwkqb6lbrjqihh.jpg"
                    />
                    <Card.Body className="blogCardBody">
                        <Card.Title className="bCBTitle">SEARCHING FOR GLAMOUR AT THE CANNES FILM FESTIVAL</Card.Title>
                        <Card.Text className="bCBText">Culture | May 30</Card.Text>
                    </Card.Body>
                </Card>
            </NavLink>
        </div>
    );
};
 
export default Blog1;