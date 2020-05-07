import { useRouter } from "next/router"

const ZPage = () => {
  const router = useRouter()
  return <div className="ZPage">param: {router.query.param}</div>
}

export default ZPage
