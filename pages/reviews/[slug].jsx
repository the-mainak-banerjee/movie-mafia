import React from "react";

const Review = ({ movieDetails }) => {
  return <div>{movieDetails?.title}</div>;
};

export default Review;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:4000/hindiMovies");
  const movies = await res.json();
  const paths = movies.map((item) => {
    return {
      params: { slug: item.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const movieName = context.params.slug;
  const res = await fetch(`http://localhost:4000/hindiMovies/${movieName}`);
  const movieDetails = await res.json();
  return {
    props: {
      movieDetails,
    },
    revalidate: 30,
  };
};
