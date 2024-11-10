import { Container, Row, Col} from "react-bootstrap";
import logo from '../Assets/Img/Logo.svg';

export const Banner = () => {
    return (
        <section className="banner" id="/">

            <Container>

                <Row className="align-items-center justify-content-center">
                    <Col xs={12} xl={7} className="text-center">
                        <a href="/">
                            <img src={logo} alt="Logo" />
                        </a>
                        <span className="tagline">--- Welcome To My Portfolio ---</span>
                        <a href="#intro">
                            <button>Check Out My Work</button>
                        </a>
                    </Col>
                </Row>

            </Container>

        </section>
    )
}