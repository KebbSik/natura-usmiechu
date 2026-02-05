import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-primary/5">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg mb-6">
          Taka strona nie istnieje albo została przeniesiona.
        </p>

        <Link
          href="/"
          className="px-6 py-3 rounded-md bg-primary text-white hover:opacity-90 transition"
        >
          Wróć na stronę główną
        </Link>
      </main>
    </>
  );
};

export default NotFound;
