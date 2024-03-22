import { Page } from "../../components/about/page";
import { client } from "../../tina/__generated__/databaseClient";

export default async function AboutUs() {
  const res = await client.queries.aboutUs({
    relativePath: "about_us.mdx",
  });
  return (
    <Page
      // https://github.com/vercel/next.js/issues/47447
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
