import Link from "next/link";
import React from "react";

const clients = [
  { id: "max", name: "Maximilian" },
  { id: "manu", name: "Manuel" },
];

const ClientsPage = () => {
  return (
    <div>
      <h1>The clients page</h1>
      <ui>
        {clients.map((client) => (
          <li key={client.id}>
            {client.name}
            <Link
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ui>
    </div>
  );
};

export default ClientsPage;
