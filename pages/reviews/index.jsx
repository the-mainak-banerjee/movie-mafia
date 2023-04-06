import React from "react";

const Reviews = ({ moviesData }) => {
  return (
    <div>
      <h2>Reviews</h2>
      {moviesData?.map((movie) => {
        return <p key={movie.id}>{movie.title}</p>;
      })}
    </div>
  );
};

export default Reviews;

export const getStaticProps = async () => {
  let moviesData;
  try {
    const res = await fetch("http://localhost:4000/hindiMovies");
    moviesData = await res?.json();
  } catch (err) {}

  const props = moviesData ? { moviesData } : {};

  return {
    props,
    revalidate: 10,
  };
};
