import React from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// CSS
import { Container } from "./App.styles";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <h1>Conteudo...</h1>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
