import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
 
const Blog1 = () => {
    return (
        <div className="blogCardWrapper">
            <NavLink to={"https://www.ssense.com/en-us/editorial/fashion/nicklas-skovgaard-is-full-of-questions"}>
                <Card className="blogCard">
                    <Card.Img
                        className="blogCardImg"
                        src=
                        "https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1718301293/l14qjbxbx6h45ob7hwww.jpg"
                    />
                    <Card.Body className="blogCardBody">
                        <Card.Title className="bCBTitle">NICKLAS SCOVGAARD IS FULL OF QUESTIONS</Card.Title>
                        <Card.Text className="bCBText">Fashion | June 17</Card.Text>
                    </Card.Body>
                </Card>
            </NavLink>
        </div>
    );
};
 
export default Blog1;