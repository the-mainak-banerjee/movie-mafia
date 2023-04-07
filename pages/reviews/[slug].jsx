import React from "react";

const Review = ({ movieDetails }) => {
  return <div>{movieDetails?.title}</div>;
};

export default Review;

export const getStaticPaths = async () => {
  let paths;
  try {
    const res = await fetch("http://localhost:4000/hindiMovies");
    const movies = await res.json();
    paths = movies.map((item) => {
      return {
        params: { slug: item.id },
      };
    });
  } catch (err) {}
  return {
    paths: paths ? paths : [],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const movieName = context.params.slug;
  let movieDetails;
  try {
    const res = await fetch(`http://localhost:4000/hindiMovies/${movieName}`);
    movieDetails = await res.json();
  } catch (err) {}

  if (!movieDetails.id) {
    return {
      notFound: blocking,
    };
  }

  return {
    props: {
      movieDetails,
    },
    revalidate: 30,
  };
};
