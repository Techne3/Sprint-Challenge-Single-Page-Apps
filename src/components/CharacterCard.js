import React from "react";
import {Card, CardBody,Button, CardTitle, CardText, CardImg } from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <div className="characterWrap">
      <Card className="card">
        <CardImg top width="100%" src={props.character.image} alt="Card image cap" className="cardImg" />
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
