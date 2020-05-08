import { useRouter } from "next/router";

const ZPage = () => {
  const router = useRouter();
  console.log(router.query.name);

  return <div className="ZPage">param: {router.query.name}</div>;
};

export default ZPage;
