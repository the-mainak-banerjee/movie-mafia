import React from "react";
import fs from "fs";

const Review = ({ movieDetails }) => {
  return <div>{movieDetails?.title}</div>;
};

export default Review;

export const getStaticPaths = async () => {
  const files = fs.readdirSync("data");
  const paths = files.map((item) => {
    const pathName = item.split(".");
    return {
      params: { slug: pathName[0] },
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
