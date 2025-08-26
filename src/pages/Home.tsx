import { useLoaderData } from "react-router";

function Home() {
    const movies = useLoaderData() as { id: number; title: string }[];
    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map((m) => (
                    <li key={m.id}>{m.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home