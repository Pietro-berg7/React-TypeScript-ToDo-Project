import React, { useState } from "react";

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
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <div>
      <Header />
      <Container>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
