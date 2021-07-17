import React from "react";

const data = [
  {
    alt: "bike",
    link: "https://www.youtube.com/watch?v=6uq3P7zeYyU",
    thumbnail:
      "https://res.cloudinary.com/chukwutosin/image/upload/v1590019494/samples/bike.jpg"
  },
  {
    alt: "sheep",
    link: "https://www.youtube.com/watch?v=7w8K8GHs5Aw",
    thumbnail:
      "https://res.cloudinary.com/chukwutosin/image/upload/v1590019492/samples/sheep.jpg"
  },
  {
    alt: "kitten-playing",
    link: "https://www.youtube.com/watch?v=4SnUsJOpw74",
    thumbnail:
      "https://res.cloudinary.com/chukwutosin/image/upload/v1590019500/samples/animals/kitten-playing.gif"
  },
  {
    alt: "reindeer",
    link: "https://www.youtube.com/watch?v=ujxRTqqQODY",
    thumbnail:
      "https://res.cloudinary.com/chukwutosin/image/upload/v1590019491/samples/animals/reindeer.jpg"
  }
];

const Card = () => (
  <div className="card">
    {data.map((element, index) => (
      <span className="column">
        <a key={index} href={element.link}>
          <img alt={element.alt} src={element.thumbnail} />
        </a>
      </span>
    ))}
  </div>
);

export default Card;
