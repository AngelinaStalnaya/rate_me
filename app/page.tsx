
import Link from "next/link";
import Button from "./components/button"

const Home = ({ children }: { children: React.ReactNode }) => {
    return (
        <section>
            <Button>click me</Button>

            <h1> Домашняя страничка RateMe</h1>
            {children}

            <Link href='/profile'>Profile</Link>
            <Link href='/rating'>Rating</Link>
        </section>
    )
};

export default Home;