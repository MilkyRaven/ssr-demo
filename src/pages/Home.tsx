import { Link, useLoaderData } from "react-router";

function Home() {

    const movies = useLoaderData() as { id: number; title: string }[];
    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map((m) => (
                    <li key={m.id}>
                        <p>{m.title}</p>
                        <Link to={`/movie/${m.id}`} reloadDocument>Ver más</Link>
                        <a href={`/movie/${m.id}`}>{m.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home