import { useRouter } from "next/router";
import React from "react";

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>ClientProjectPage</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectPage;
