import { SignInForm } from "@/components/content/SignInForm";

export const metadata = { title: "Sign in" };

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="py-16 md:py-24">
      <SignInForm redirectTo={params.redirect} />
    </div>
  );
}
