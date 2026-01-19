export default function BlogLayout({ children }) {
  return (
    <main role="main">
      <h1 className="sr-only">Adesa Energy Blog</h1>
      <section>{children}</section>
    </main>
  );
}
