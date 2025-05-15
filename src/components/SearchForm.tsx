import React from "react";
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
    <div className="flex flex-wrap items-end gap-4 w-full">
      <div className="flex flex-col w-full sm:w-1/3">
        <label htmlFor="name" className="text-sm text-red-900 font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="border border-red-900 text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div className="flex flex-col w-full sm:w-1/3">
        <label
          htmlFor="birthday"
          className="text-sm text-gray-700 font-medium mb-1">
          Birthday
        </label>
        <input
          id="birthday"
          type="date"
          value={birthday}
          onChange={(e) => onBirthdayChange(e.target.value)}
          className="border border-gray-300 text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div className="flex flex-col w-full sm:w-1/4">
        <label
          htmlFor="type"
          className="text-sm text-gray-700 font-medium mb-1">
          Account Type
        </label>
        <select
          id="type"
          value={type}
          onChange={(e) => onTypeChange(e.target.value)}
          className="border border-gray-300 text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400">
          <option value="">All</option>
          <option value="Savings">Savings</option>
          <option value="Checking">Checking</option>
        </select>
      </div>
    </div>
  );
};

export default SearchForm;
