import Navbar from "../components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { client } from "../tina/__generated__/databaseClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Title",
  description: "Description",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resNav = await client.queries.navbar({
    relativePath: "nav.md",
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar
          data={JSON.parse(JSON.stringify(resNav.data))}
          query={resNav.query}
          variables={resNav.variables}
        ></Navbar>
        {children}
      </body>
    </html>
  );
}
