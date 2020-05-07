import Link from "next/link"

export default function Home() {
  return (
    <div className="container">
      <Link href="/zpage?param=99" as="zpage/99">
        <a>Goto ZPage</a>
      </Link>
    </div>
  )
}
