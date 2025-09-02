import Navbar from "./components/includes/Navbar";

export default function Home() {
  return (
    <section
      id="main"
      className="min-h-screen p-20 flex flex-col-reverse items-center justify-center"
    >
      <Navbar />
      <h1 className="text-center mb-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit
        quam quae in aut odit veniam quaerat, sapiente similique incidunt quis
        consequatur nulla obcaecati dolorum ipsam enim possimus perspiciatis
        sit.
      </h1>
    </section>
  );
}
