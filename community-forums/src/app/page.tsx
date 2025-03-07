
"use client"; // Add this line if the page uses interactivity.
// By adding the "use client" directive, you tell Next.js to render this component on the client side,
//  where interactivity (e.g., onSubmit) is supported.

import Link from "next/link";
import SearchBar from "./components/Searchbar";

// Mock data for forums (replace with real data from your database)
const forums = [
  {
    id: 1,
    title: "How to Learn Next.js",
    description: "A beginner's guide to mastering Next.js.",
    tags: ["Next.js", "React", "Web Development"],
    createdAt: "2023-10-01",
  },
  {
    id: 2,
    title: "Best Practices for Tailwind CSS",
    description: "Tips and tricks for using Tailwind CSS effectively.",
    tags: ["Tailwind CSS", "CSS", "UI/UX"],
    createdAt: "2023-10-02",
  },
];

export default function Home() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Perform search logic here (e.g., filter forums or fetch data from an API)
  };

  return (
    <div className="home">
      <div className="">
        <div className="mb-6">
          <SearchBar placeholder="Search" onSearch={handleSearch} />
        </div>
        <h1 className="text-3xl font-bold mb-6">Community Forums</h1>
        <div className="qodef-group-hot-trending-holder">
          {forums.map((forum) => (
            <Link key={forum.id} href={`/forums/${forum.id}`}>
              <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold mb-2">{forum.title}</h2>
                <p className="text-gray-600 mb-4">{forum.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {forum.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  Created on: {forum.createdAt}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/forums/create"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create New Forum
          </Link>
        </div>
      </div>
    </div>
  );
}
