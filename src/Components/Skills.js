import "./Styles/Skills.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MySkills() {
  return (
    <Container className="skillsContainer mt-5">
      <Row>
        <h2 id="skills">Skills</h2>
      </Row>
      <Row style={{ marginTop: 2 + "rem" }}>
        <h4>Frontend</h4>
      </Row>
      <Row style={{ marginTop: 1 + "rem" }}>
        <Col xs="auto">
          <MyIcon
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            alt="css 3"
          />
        </Col>
        <Col xs="auto">
          <MyIcon
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            alt="html 5"
          />
        </Col>
        <Col xs="auto">
          <MyIcon
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="javascript"
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 2 + "rem" }}>
        <h4>Backend</h4>
      </Row>
      <Row style={{ marginTop: 1 + "rem" }}>
        <Col xs="auto">
          <MyIcon
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            alt="java"
          />
        </Col>
        <Col xs="auto">
          <MyIcon
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            alt="python"
          />
        </Col>
        <Col xs="auto">
          <MyIcon
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
            alt="c sharp"
          />
        </Col>
        <Col xs="auto">
          <MyIcon
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            alt="postgresql"
          />
        </Col>
        <Col xs="auto">
          <MyIcon
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
            alt="mysql"
          />
        </Col>
        <Col xs="auto">
          <MyIcon
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            alt="git"
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 2 + "rem" }}>
        <h4>Learning</h4>
      </Row>
      <Row style={{ marginTop: 1 + "rem" }}>
        <Col xs="auto">
          <MyIcon
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="react"
          />
        </Col>
        <Col xs="auto">
          <MyIcon
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            alt="bootstrap"
          />
        </Col>
        <Col xs="auto">
          <MyIcon
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            alt="tailwind"
          />
        </Col>
      </Row>
    </Container>
  );
}

// I can change whatever i want of the icons in this function
function MyIcon({ src, alt }) {
  return (
    <>
      <img className="m-2" src={src} alt={alt} style={{ width: 3 + "rem" }} />
    </>
  );
}

export default MySkills;
