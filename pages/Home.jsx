export default function Home() {
  return (
    <main>
      <h1>Welcome to GIVEHOPE</h1>
      <p>This is the home page of our charity website.</p>
    </main>
  );
}

export async function getStaticProps() {
  return { props: { title: "Home" } };
}
