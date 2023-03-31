import React from "react";

import { Container } from "./styles";

interface Props {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
  return (
    <Container>
      <div className="input-container">
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Título da tarefa" />
      </div>
      <div className="input-container">
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="number"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
        />
      </div>
      <input type="submit" value={btnText} />
    </Container>
  );
};

export default TaskForm;
