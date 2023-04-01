import React from "react";

// CSS
import { Actions, Container, Details } from "./styles";

// Interface
import { ITask } from "../../interfaces/Task";

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
}

const TaskList = ({ taskList, handleDelete }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <Container>
            <Details>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </Details>
            <Actions>
              <i className="bi bi-pencil"></i>
              <i
                className="bi bi-trash"
                onClick={() => {
                  handleDelete(task.id);
                }}
              ></i>
            </Actions>
          </Container>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  );
};

export default TaskList;
