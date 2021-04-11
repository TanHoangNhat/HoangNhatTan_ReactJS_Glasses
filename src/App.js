import logo from "./logo.svg";
import "./App.css";
import GlassesContainer from "./components/GlassesContainer";

function App() {
  return (
    <div>
      <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
        <h2 className="text-center h2 text-white py-1">Glasses App</h2>
        <div className="d-flex justify-content-center align-items-center">
          <GlassesContainer />
        </div>
      </section>
    </div>
  );
}

export default App;
