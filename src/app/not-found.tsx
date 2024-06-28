import { ErrorContainer } from "./globals";

export default function NotFoundPage() {
  return (
    <ErrorContainer>
      <h1>Not Found!</h1>
      <p>The requested resource could not be found!</p>
    </ErrorContainer>
  );
}
