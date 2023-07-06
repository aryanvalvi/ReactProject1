import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
const Searched = () => {
  let params = useParams();
  const [searched, setSearched] = useState([]);
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearched(recipes.results);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <Grid>
      {searched.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} />
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </Grid>
  );
};

export default Searched;
const Grid = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: 90px 50px 120px;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  /* flex-direction: wrap; */
  /* flex-direction: column;? */
  img {
    width: 100%;
  }
`;
