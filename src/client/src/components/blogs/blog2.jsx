import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
 
const Blog2 = () => {
    return (
        <div className="blogCardWrapper">
            <NavLink to={"https://www.ssense.com/en-us/editorial/fashion/menswear-ss25-pitti-uomo-marine-serre"}>
                <Card className="blogCardL">
                    <Card.Img
                        className="blogCardImgL"
                        src=
                        "https://res.cloudinary.com/ssenseweb/image/upload/w_1280,q_90,f_auto,dpr_auto/v1718828902/idh1ldl6324v1mjc9cae.jpg"
                    />
                    <Card.Body className="blogCardBodyL">
                        <div className=".bCBHeading">
                            <Card.Title className="bCBTitleL"> Fashion | THE NO-SHOW SOCKS CONUNDRUM; OR, WHAT IS MENSWEAR GOING TO DO WITH ITSELF?</Card.Title>
                            <Card.Text className="bCBTextL">There was an unmistakable air of anxiety at Milan Men's Feshion Week. How does one escape?</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </NavLink>
        </div>
    );
};
 
export default Blog2;