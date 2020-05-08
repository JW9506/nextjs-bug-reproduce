import { useRouter } from "next/router"

ZPage.getInitialProps = function () {
  return {}
}
function ZPage() {
  const router = useRouter()
  return <div className="ZPage">param: {router.query.param}</div>
}

export default ZPage
