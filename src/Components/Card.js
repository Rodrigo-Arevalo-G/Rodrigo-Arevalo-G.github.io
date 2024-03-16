import "./Styles/Card.css";
import MyImage from "./../Resources/Me.png";

//Note: check the responsiveness, make the navbar fixed
function MyCard() {
  return (
    <div
      className="card-div d-flex flex-wrap container flex-lg-nowrap"
      style={{ marginTop: "10rem" }}
    >
      <div className=" m-3">
        <img className="my-image img-fluid" src={MyImage} alt="Una foto de mi" />
      </div>
      <div className="w-100 m-3 m-lg-5">
        <p>Hi, my name is</p>
        <h2>Rodrigo Arevalo</h2>
        <h4>Fullstack developer</h4>
        <p>and quick introduction. Add CV download button.</p>
        <a
          href="https://github.com/Rodrigo-Arevalo-G"
          className="btn border border-white m-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="Github Icon"
            style={{ width: "2rem" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rodrigo-arevalo-gaytan/"
          className="btn border border-white m-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn Icon"
            style={{ width: "2rem" }}
          />
        </a>
      </div>
    </div>
  );
}

export default MyCard;
