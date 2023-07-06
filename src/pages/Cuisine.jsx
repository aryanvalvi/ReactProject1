import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

import { useParams } from "react-router-dom";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Grid key={item.id}>
            <img src={item.image} />
            <h4>{item.title}</h4>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Cuisine;
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
// const Grid = styled.div`
//   display: flex;
//   grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
//   grid-gap: 3rem;
//   flex-direction: wrap;
// `;
// const Card = styled.div`
//   img {
//     width: 100%;
//     max-width: 50%;
//     border-radius: 2rem;
//   }
//   a {
//     text-decoration: none;
//   }
//   h4 {
//     text-align: center;
//     padding: 1rem;
//   }
// `;
