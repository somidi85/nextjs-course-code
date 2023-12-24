import { useRouter } from "next/router";
import React from "react";

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return <div>ClientProjectPage</div>;
};

export default ClientProjectPage;
