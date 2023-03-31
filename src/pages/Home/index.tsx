import React from "react";

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";

// CSS
import { Container } from "./styles";

// Interface
import { ITask } from "../../interfaces/Task";

function Home() {
  return (
    <div>
      <Header />
      <Container>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
