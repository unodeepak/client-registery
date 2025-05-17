import React from "react";
import { Bell, Settings, Search } from "lucide-react";

type Props = {
  search: string;
  type: string;
  birthday: string;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onBirthdayChange: (value: string) => void;
};

const SearchForm = ({
  search,
  type,
  birthday,
  onSearchChange,
  onTypeChange,
  onBirthdayChange,
}: Props) => {
  return (
    <div
      className="flex items-center justify-between gap-4 p-4 border rounded-xl shadow-sm"
      style={{ padding: "26px", border: "1px solid #efefef" }}
    >
      {/* Left section: form inputs */}
      <div className="flex flex-wrap items-end gap-4 w-full">
        <div className="flex flex-col w-full sm:w-1/3">
          <label
            htmlFor="name"
            className="text-sm text-red-900 font-medium mb-1"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="border border-red-900 text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-black"
          />
        </div>

        <div className="flex flex-col w-full sm:w-1/4">
          <label
            htmlFor="birthday"
            className="text-sm text-gray-700 font-medium mb-1"
          >
            Date Of Birth
          </label>
          <input
            id="birthday"
            type="date"
            value={birthday}
            onChange={(e) => onBirthdayChange(e.target.value)}
            className="border border-gray-300 text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <div className="flex flex-col w-full sm:w-1/10">
          <label
            htmlFor="type"
            className="text-sm text-gray-700 font-medium mb-1"
          >
            Account Type
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => onTypeChange(e.target.value)}
            className="border border-gray-300 text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <option value="">All</option>
            <option value="Savings">Savings</option>
            <option value="Checking">Checking</option>
          </select>
        </div>

        <button className="bg-red-900 hover:bg-red-800 text-white p-3 rounded-md mt-6">
          <Search className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-4 ml-auto">
          <Bell className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          <Settings className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5xn7wanLDkCqoBxukTW9k232HFSZZB2frA&s"
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-red-900 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
