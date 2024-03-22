"use client";

import { PageQuery } from "../tina/__generated__/types";
import React from "react";

export function Page(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  return (
    <>
      <main className="flex justify-center px-8 py-8 md:px-0">content...</main>
    </>
  );
}
