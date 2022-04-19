import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/MainComponent";
import Header from "./components/HeaderComponent";
import Navigation from "./components/NavigationComponent";
import Footer from "./components/FooterComponent";

function App() {
  return (
    <div class="d-flex flex-column flex-grow-1">
      <Header></Header>
      <Navigation></Navigation>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;