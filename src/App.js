import MyNavbar from "./Components/Navbar";
import MyCard from "./Components/Card";
import MySkills from "./Components/Skills";

function App() {
  return (
    <div className="container">
      <header>
        <MyNavbar />
      </header>
      <body>
        <MyCard />
        <MySkills />
      </body>
    </div>
  );
}

export default App;
