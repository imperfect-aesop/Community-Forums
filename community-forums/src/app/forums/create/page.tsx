export default function CreateForum() {
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6">Create New Forum</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter forum title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="w-full p-2 border rounded-lg"
              rows={4}
              placeholder="Enter forum description"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tags</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter tags (comma separated)"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create Forum
          </button>
        </form>
      </div>
    );
  }