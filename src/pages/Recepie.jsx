import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
const Recepie = () => {
  const [detail, setDetail] = useState({});
  const params = useParams();
  const fetchDetail = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detaildata = await data.json();
    console.log(detaildata);
    setDetail(detaildata);
  };
  useEffect(() => {
    fetchDetail();
  }, [params.name]);
  return (
    <DetailWrapper>
      <img src={detail.image} />
      <h2>{detail.title}</h2>
    </DetailWrapper>
  );
};

export default Recepie;

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
