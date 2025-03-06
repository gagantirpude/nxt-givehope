export default function About() {
  return (
    <main>
      <h1>About Us</h1>
      <p>Learn more about GIVEHOPE and our mission.</p>
    </main>
  );
}

export async function getStaticProps() {
  return { props: { title: "About Us" } };
}
