import React from "react";
import Card from "./Card";

export default function EventsList(props) {
  const eventsList = props.data.map((event) => (
    <Card
      id={event.id}
      image={event.image}
      title={event.title}
      location={event.location}
      description={event.description}
    />
  ));

  return <div>{eventsList}</div>;
}
