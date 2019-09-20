import React from "react";
import {Card, CardBody,Button, CardTitle, CardText, CardImg } from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <div className="characterWrap">
      {/* <h1>{props.character.name}</h1>
      <h2>{props.character.species}</h2>
      <img src={props.character.image}alt="Rick Morty characters" /> */}

     
      <Card>
        <CardImg top width="100%" src={props.character.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.character.name}</CardTitle>
          <CardText>
            <small className="text-muted">{props.character.species}</small>
          </CardText>
        </CardBody>
      </Card>

    </div>
  );
}
