import React, { ReactNode } from "react";

// CSS
import { Container, Fade } from "./styles";

// Interface
interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  };

  return (
    <div id="modal" className="hide">
      <Fade onClick={closeModal}></Fade>
      <Container>
        <h2>Texto modal</h2>
        {children}
      </Container>
    </div>
  );
};

export default Modal;
