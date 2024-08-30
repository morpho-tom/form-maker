import { useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  const createPage = () => {
    navigate("/Create");
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Welcome to Form.com</h1>
        <p>This is a simple form builder</p>
        <button className="createButton" onClick={createPage}>
          Create New Form
        </button>
        <hr />
      </div>
      <div className="">
        <h1>Forms</h1>
        <p>You have no forms created yet.</p>
      </div>
    </div>
  );
}

export default Home;
