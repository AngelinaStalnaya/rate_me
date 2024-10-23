
import Link from "next/link";
import Button from "./components/Button";

const Home = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Button>grtgrtg</Button>

            <h1> Домашняя страничка RateMe</h1>
            {children}

            <Link href='/profile'>Profile</Link>
            <Link href='/rating'>Rating</Link>
        </>
    )
};

export default Home;