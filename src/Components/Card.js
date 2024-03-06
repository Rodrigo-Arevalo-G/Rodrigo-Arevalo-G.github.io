import MyImage from "./../Resources/Me.png";

//Note: check the responsiveness
function MyCard() {
  return (
    <div
      className="d-flex container mt-5" //bg-danger to keep debugging flexbox size and padding
      style={{ width: 58 + "rem" }}
    >
      <div>
        <img
          className="" //bg-success to keep debugging flexbox size and padding
          src={MyImage}
          alt="Una foto de mi"
          style={{ width: 20 + "rem" }}
        />
      </div>
      <div class="">
        <p>Hi, my name is</p>
        <h3 class="">Rodrigo Arevalo</h3>
        <p class="">
          Fullstack developer and quick introduction. Add CV download button.
        </p>
        <a
          href="https://github.com/Rodrigo-Arevalo-G"
          class="btn bg-light"
          target="_blank"
          rel="noopener noreferrer" // this property is added for security reasons. It prevents the newly opened tab from having access to the window.opener property protecting the user against phishing.
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="Github Icon"
            style={{ width: 2 + "rem" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rodrigo-arevalo-gaytan/"
          class="btn bg-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
          alt="LinkedIn Icon"
          style={{ width: 2 + "rem" }}/>
        </a>
      </div>
    </div>
  );
}

export default MyCard;
