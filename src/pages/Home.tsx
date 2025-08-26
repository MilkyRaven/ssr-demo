import { Link, useLoaderData } from "react-router";

function Home() {
    const movies = useLoaderData() as { id: number; title: string }[];
    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map((m) => (
                    <>
                        <li key={m.id}>{m.title}</li>
                        <Link to={`/movie/${m.id}`}>Ver más</Link>
                        {/* <a href={`/movie/${m.id}`}>{m.title}</a> */}
                    </>


                ))}
            </ul>
        </div>
    )
}

export default Home