"use client";

import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";

type Client = {
  name: string;
  birthday: string;
  type: string;
  account: string;
  balance: number;
};

type Props = {
  initialData?: Client[];
};

const ClientTable = ({ initialData = [] }: Props) => {
  const [clients, setClients] = useState<Client[]>(initialData);
  const [filtered, setFiltered] = useState<Client[]>(initialData);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [birthday, setBirthday] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 8;

  useEffect(() => {
    setLoading(true);
    fetch("/api/clients")
      .then((res) => res.json())
      .then((data) => {
        setClients(data);
        setFiltered(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = clients;
    if (search) {
      result = result.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (type) {
      result = result.filter((c) => c.type === type);
    }
    if (birthday) {
      result = result.filter((c) => c.birthday === birthday);
    }
    setFiltered(result);
    setCurrentPage(1);
  }, [search, type, birthday, clients]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedClients = filtered.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="bg-white text-black shadow rounded-lg p-4">
      <SearchForm
        search={search}
        type={type}
        birthday={birthday}
        onSearchChange={setSearch}
        onTypeChange={setType}
        onBirthdayChange={setBirthday}
      />

      {(search || type || birthday) && (
        <div className="mt-2 flex justify-end">
          <button
            onClick={() => {
              setSearch("");
              setType("");
              setBirthday("");
            }}
            className="text-sm text-red-700 underline hover:text-red-900">
            Clear all filters
          </button>
        </div>
      )}

      {loading ? (
        <div className="text-center text-gray-600 py-8">Loading clients...</div>
      ) : (
        <>
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full border border-gray-300 table-auto">
              <thead className="bg-red-900 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2">Birthday</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Account</th>
                  <th className="px-4 py-2">Balance</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedClients.map((client, idx) => (
                  <tr
                    key={`${client.account}-${idx}`}
                    className={
                      idx % 2 === 0
                        ? "bg-white , text-black"
                        : "bg-gray-100 , text-black"
                    }>
                    <td className="px-4 py-2">{client.name}</td>
                    <td className="px-4 py-2">{client.birthday}</td>
                    <td className="px-4 py-2">{client.type}</td>
                    <td className="px-4 py-2">{client.account}</td>
                    <td className="px-4 py-2 text-" >
                      ${client.balance.toLocaleString()}
                    </td>
                    <td className="px-4 py-2 text-red-600 space-x-2">
                      <button className="hover:underline">Details</button>
                      <span>|</span>
                      <button className="hover:underline">Transfer</button>
                      <span>|</span>
                      <button className="hover:underline">Close</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-center items-center gap-2 flex-wrap">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">
              Prev
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ClientTable;
