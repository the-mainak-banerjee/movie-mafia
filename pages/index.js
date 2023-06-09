import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { MovieList } from "@/components/movielist/MovieList";

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
        <MovieList moviesData={moviesData} />
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  let moviesData;
  try {
    const response = await fetch("http://localhost:4000/hindiMovies");
    moviesData = await response.json();
  } catch (err) {}

  const props = moviesData ? { moviesData } : {};

  return {
    props,
    revalidate: 10,
  };
};
