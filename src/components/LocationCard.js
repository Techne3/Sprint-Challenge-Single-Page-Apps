import React from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const Wrap = styled.div`
  background-color:#fff;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items: center;
  flex-wrap:wrap;
  border:2px solid black;
`
const Title = styled.h2`
  color:#312c82;
`


export default function LocationCard(props) {
  return (
    <Wrap>
      <Title >{props.location.name}</Title>
      <p>Type: {props.location.type}</p>
      <p>Dimensions: {props.location.dimension}</p>

      {/* <p>{props.location.residents.map(resident =>{
        return(
        <ul>
          <li>{resident}</li>
        </ul>
        )
      })}</p> */}
    </Wrap>

  )
}
