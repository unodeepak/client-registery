import ClientTable from "../components/clientTable";

export default async function HomePage() {
  const res = await fetch("http://localhost:3000/api/clients", {
    cache: "no-store",
  });
  const clients = await res.json();

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-red-900 mb-4">Client Directory</h1>
      <ClientTable initialData={clients} />
    </main>
  );
}
