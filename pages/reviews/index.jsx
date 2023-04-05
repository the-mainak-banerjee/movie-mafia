import React from "react";
import fs from "fs";


const Reviews = ({moviesData}) => {
  return <div>
    <h2>Reviews</h2>
    {moviesData.map(movie => {
        return (<p key={movie.id}>{movie.title}</p>)
    })

    }
  </div>;
};

export default Reviews;

export const getStaticProps = async () => {
  const files = fs.readdirSync("data");
  const moviesData = files.map((file) => {
    const content = fs.readFileSync(`data/${file}`, "utf-8");
    const movieData = JSON.parse(content);
    return movieData;
  });

  return {
    props: {
        moviesData
    }
  }
};
