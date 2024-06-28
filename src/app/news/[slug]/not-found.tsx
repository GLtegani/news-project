import { ErrorContainer } from "@/app/globals";

export default function NewsNotFoundPage() {
  return (
    <ErrorContainer>
      <h1>Not Found!</h1>
      <p>Unfortunately, we could not find the requested article.</p>
    </ErrorContainer>
  );
}
