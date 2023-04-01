import React, { ReactNode } from "react";

// CSS
import { Container, Fade } from "./styles";

// Interface
interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  return (
    <div>
      <Fade></Fade>
      <Container>
        <h2>Texto modal</h2>
        {children}
      </Container>
    </div>
  );
};

export default Modal;
