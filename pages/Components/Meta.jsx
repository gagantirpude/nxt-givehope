import Head from "next/head";

export default function Meta({ title, description }) {
  return (
    <Head>
      <title>{title ? `${title} | GIVEHOPE` : "GIVEHOPE"}</title>
      <meta
        name="description"
        content={description || "Charity website for donations and support."}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
