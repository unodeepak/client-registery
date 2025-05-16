import ClientTable from "../components/clientTable";

export default async function HomePage() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseURL}/api/clients`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch clients");
  }

  const clients = await res.json();

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-red-900 mb-4">Client Directory</h1>
      <ClientTable initialData={clients} />
    </main>
  );
}
