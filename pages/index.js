export default function Home(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  console.log("Re-Generating...");
  const products = [
    { id: "p1", title: "Product 1" },
    { id: "p2", title: "Product 2" },
    { id: "p3", title: "Product 3" },
  ];

  if (products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: products,
    },
    revalidate: 10,
    notFound: false,
    // redirect: {
    //   destinitation: "/",
    // },
  };
}
