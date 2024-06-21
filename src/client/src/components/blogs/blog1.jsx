import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
 
const Blog1 = () => {
    return (
        <div className="blogCardWrapper">
            <NavLink to={"https://www.ssense.com/en-us/editorial/culture/atsushi-nishijima-interview-yorgos-lanthimos-photographer"}>
                <Card className="blogCardL">
                    <Card.Img
                        className="blogCardImgL"
                        src=
                        "https://res.cloudinary.com/ssenseweb/image/upload/w_1280,q_90,f_auto,dpr_auto/v1718829724/nocml6j6xqj6g9ttkuut.jpg"
                    />
                    <Card.Body className="blogCardBodyL">
                        <div className=".bCBHeading">
                            <Card.Title className="bCBTitleL"> Culture |       ATSUSHI NISHIJIMA IS THREE FEET FROM STARDOM</Card.Title>
                            <Card.Text className="bCBTextL">Yorgos Lanthimos's go-to photographer discusses his multi-film collaboration capturing the intimacy, horror, and beauty of the director's storytelling.</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </NavLink>
        </div>
    );
};
 
export default Blog1;