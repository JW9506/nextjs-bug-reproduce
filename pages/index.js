// import Link from "next/link"
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleNav = () => {
    router.push(
      {
        pathname: "/zpage",
        query: { name: "99" }
      },
      "zpage/99"
    );
  };

  return (
    <div className="container">
      <button onClick={handleNav}>Goto ZPage</button>
      {/* <Link href="/zpage?param=99" as="zpage/99">
        <a>Goto ZPage</a>
      </Link> */}
    </div>
  );
}
