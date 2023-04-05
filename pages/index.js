import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { MovieList } from "@/components/movielist/MovieList";
import fs from "fs";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ moviesData }) {
  return (
    <>
      <Head>
        <title>Movie Mafia</title>
        <meta
          name="description"
          content="A movie review app by A Bolloywood fan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Navbar />
        <MovieList 
          moviesData = {moviesData}
        />
      </section>
    </>
  );
}

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
    },
  };
};
