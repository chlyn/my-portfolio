import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import introImg from "../Assets/Img/Intro-Img.png";
import 'animate.css';

export const Intro = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["CS Student", "UX Designer", "Software Engineer", "Researcher"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(100);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } 
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(150);
        }
    }

    const scrollToSection = (selector) => {
        const target = document.querySelector(selector);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
    };
      
    
    return (
        <section className="intro" id="intro">

            <Container>

                <Row className="align-items-center">

                    <Col xs={12} md={8} xl={6}>

                        <h1>{"Hi! I'm Chenilyn a "}<span className="wrap">{text}</span></h1>

                        <p>I love design and anything related to art. I'm passionate about blending creativity with 
                            my technical skills to create meaningful and engaging experiences. I've been lucky enough 
                            to have a career experience in both Front-End and Back-End Software Engineering that has 
                            given me a well-rounded perspective on building user-friendly applications and take on new
                            challenges.
                        </p>

                        <a href="#about-me" className="intro-button">
                            <button>More About Me</button>
                        </a>

                    </Col>

                    <Col xs={12} md={4} xl={6}>

                        <div className="circle"></div>
                        <img src={introImg} className="intro-img"/>

                    </Col>

                {/* </Row>
                    <Col xs={12} className="text-center">
                        <button className="intro-scroll-button" onClick={() => scrollToSection('#next-section')}>
                            <span>Scroll Down</span>
                            <i class="bi bi-chevron-compact-down"></i></button>
                    </Col>
                <Row> */}

                </Row>

            </Container>

        </section>
    )
}