import Link from "next/link";

// Mock data for a forum (replace with real data from your database)
const forum = {
  id: 1,
  title: "How to Learn Next.js",
  description:
    "Next.js is a powerful React framework that enables features like server-side rendering and static site generation. This guide will help you get started.",
  tags: ["Next.js", "React", "Web Development"],
  createdAt: "2023-10-01",
  comments: [
    {
      id: 1,
      content: "Great post! Very helpful for beginners.",
      user: "John Doe",
      createdAt: "2023-10-02",
    },
    {
      id: 2,
      content: "I love how easy it is to set up a project with Next.js.",
      user: "Jane Smith",
      createdAt: "2023-10-03",
    },
  ],
};

export default function ForumDetail({ params }: { params: { id: string } }) {
  return (
    <div className="p-4">
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to Forums
      </Link>
      <h1 className="text-3xl font-bold mb-4">{forum.title}</h1>
      <p className="text-gray-600 mb-6">{forum.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {forum.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-500 mb-8">
        Created on: {forum.createdAt}
      </p>

      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="space-y-4">
        {forum.comments.map((comment) => (
          <div key={comment.id} className="p-4 border rounded-lg">
            <p className="text-gray-800">{comment.content}</p>
            <p className="text-sm text-gray-500 mt-2">
              By {comment.user} on {comment.createdAt}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Add a Comment</h3>
        <textarea
          className="w-full p-2 border rounded-lg mb-4"
          rows={4}
          placeholder="Write your comment here..."
        ></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit Comment
        </button>
      </div>
    </div>
  );
}