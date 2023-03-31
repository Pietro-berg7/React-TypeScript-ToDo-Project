import React from "react";

import { Container } from "./styles";

interface Props {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
  return (
    <Container>
      <form>
        <div>
          <label htmlFor="title">Título:</label>
          <input type="text" name="title" placeholder="Título da tarefa" />
        </div>
        <div>
          <label htmlFor="difficulty">Dificuldade:</label>
          <input
            type="number"
            name="difficulty"
            placeholder="Dificuldade da tarefa (1 a 5)"
          />
        </div>
        <input type="submit" value={btnText} />
      </form>
    </Container>
  );
};

export default TaskForm;
