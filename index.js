import global from "../styles/global.css";

import Home from "../components/Home";
import Header from "../components/Header";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
    </div>
  );
}
