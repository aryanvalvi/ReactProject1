import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
const Popular = () => {
  const [dish, setDish] = useState([]);

  const getPopular = async () => {
    const check = localStorage.getItem("dish");
    if (check) {
      setDish(JSON.parse(check));
    } else {
      const api = await fetch(
        //       `https://api.spoonacular.com/recipes/random?number=10&apikey=${process.env.REACT_APP_API_KEY}`
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api.json();
      localStorage.setItem("dish", JSON.stringify(data.recipes));
      console.log(data);
      setDish(data.recipes);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3>Hits</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {dish.map((food) => {
            const { title, id, image } = food;
            return (
              <SplideSlide key={id}>
                <Card key={id}>
                  <Link to={"/recipe/" + food.id}>
                    <img src={image} alt={title} />
                    <p>{title}</p>
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-width: 11rem;
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: inline-block;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default Popular;
