import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <SectionLabel>404</SectionLabel>
      <SectionTitle as="h1" className="mt-4">
        Page not found
      </SectionTitle>
      <p className="mt-4 max-w-md text-content-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8">
        <Button href="/">Back to Home</Button>
      </div>
    </main>
  );
}
