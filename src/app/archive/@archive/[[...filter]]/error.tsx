"use client";

import { ErrorContainer } from "@/app/globals";

export default function FilterError() {
  return (
    <ErrorContainer>
      <h2>An error occurred!</h2>
      <p>Invalid path.</p>
    </ErrorContainer>
  );
}
