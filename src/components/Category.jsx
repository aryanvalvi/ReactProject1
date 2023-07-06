import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import "./index.css";
const Category = () => {
  return (
    <List className="fuck">
      <Slink to={"/cuisine/Italian"}>
        <FaPizzaSlice className="fuck" />
        <h4 className="fuck">Italian</h4>
      </Slink>
      <Slink to={"/cuisine/American"}>
        <FaHamburger className="fuck" />
        <h4 className="fuck">American</h4>
      </Slink>
      <Slink to={"/cuisine/Thai"}>
        <GiNoodles className="fuck" />
        <h4 className="fuck">Thai</h4>
      </Slink>
      <Slink to={"/cuisine/Japanese"}>
        <GiChopsticks className="fuck" />
        <h4 className="fuck">Japanese</h4>
      </Slink>
    </List>
  );
};

export default Category;

const List = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin: 2rem 0rem;
  color: gray;
`;
const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
