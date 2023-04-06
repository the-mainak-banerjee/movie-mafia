import React from "react";

const Reviews = ({ moviesData }) => {
  return (
    <div>
      <h2>Reviews</h2>
      {moviesData.map((movie) => {
        return <p key={movie.id}>{movie.title}</p>;
      })}
    </div>
  );
};

export default Reviews;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:4000/hindiMovies");
  const moviesData = await res?.json();

  return {
    props: {
      moviesData,
    },
    revalidate: 10,
  };
};
