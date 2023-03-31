import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;

  input {
    padding: 8px 15px;
    margin-bottom: 1.5em;
    border-radius: 0;
    border: 1px solid #282c34;
  }

  input[type="submit"] {
    background-color: #61bafb;
    border: 1px solid #61bafb;
    color: #000;
    transition: 0.5s;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #fff;
    border: 1px solid #282c34;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .input-container label {
    font-weight: bold;
    margin-bottom: 0.4em;
  }
`;
