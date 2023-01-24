import reactLogo from "../assets/react.svg";

export default function Nav() {
  return (
    <nav className="navbar">
      <img className="logo react" src={reactLogo} alt="react-logo" />
      <h3>ReactFacts</h3>
      <div className="project-name">
        <h4>React Course - Project 1</h4>
      </div>
    </nav>
  );
}
