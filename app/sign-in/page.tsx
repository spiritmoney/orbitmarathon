import { SignInForm } from "@/components/content/SignInForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Sign in",
  path: "/sign-in",
  noIndex: true,
});

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
