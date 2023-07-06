import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const eventHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    console.log(navigate);
  };
  return (
    <FormStyle onSubmit={eventHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
};
export default Search;
const FormStyle = styled.form`
  margin: 0rem 20rem;
  position: relative;
  width: 100%;
  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #cdc4c4, #593f3f);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    /* padding-left: -500px; */
    margin-left: -100px;
    /* width: 50%; */
  }
  svg {
    position: absolute;
    top: 50%;
    left: -11%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
