"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export default function SearchBar({ placeholder, onSearch }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("search_query") as string;
    onSearch(query);
  };

  return (
    <div className="dir-search" role="search">
      <form
        className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-md"
        onSubmit={handleSubmit}
      >
        <label htmlFor="search_query" className="sr-only">
          Search
        </label>
        <input
          type="text"
          name="search_query"
          id="search_query"
          placeholder={placeholder || "Search..."}
          className="px-4 py-2 w-full outline-none text-gray-700 placeholder-gray-400"
        />

        <button
          type="submit"
          className="p-2 bg-blue-500 hover:bg-white-600 transition-colors flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}
