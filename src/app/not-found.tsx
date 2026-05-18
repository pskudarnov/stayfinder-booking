import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-slate-600">This route does not exist.</p>
      <Link href="/" className="mt-5 inline-block text-sky-700 hover:underline">
        Go home
      </Link>
    </section>
  );
}
