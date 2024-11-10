import { Container, Row, Col } from "react-bootstrap";

export const Projects = () => {
    return (
        <section id="works" className="projects">
            <Container fluid="md" className="projects-container">
                <Row className="projects-description">
                    <Col size={12}>
                    <div>
                        <h2>My Projects</h2>
                        <p>Every project I work on is a chance to bring my ideas to life. I enjoy tackling challenges, whether it's crafting intuitive apps, improving user experience, or just finding better ways to solve problems.   </p>
                    </div>
                    </Col>
                </Row>

                <Row className="projects-row">
                        <Col xs={12} md={8} xl={6}>
                            <div className="projects-item">
                                <h3>The Vegan Pub</h3>
                                <p>An app designed to promote healthy eating through the power of AI. It features a camera tool for scanning and logging food, providing macro details and healthier alternatives.</p>
                                <button>View Case Study</button>
                            </div>
                        </Col>
                </Row>

                <Row className="projects-row">
                    <Col xs={12} md={8} xl={6} className="ms-auto">
                        <div className="projects-item">
                            <h3>AccessBSU</h3>
                            <p>An app aimed to improving accessibility and engagement for Bowie State University studets. It centralizes important resources, schedules, and notifications, making campus life more manageable.</p>
                            <button>View Case Study</button>
                        </div>
                    </Col>
                </Row>

                <Row className="projects-row">
                    <Col xs={12} md={8} xl={6}>
                        <div className="projects-item">
                            <h3>Grade Enhancer</h3>
                            <p>A web platform designed to help students book a session with mentors and tutors.  </p>
                            <button>View Case Study</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}