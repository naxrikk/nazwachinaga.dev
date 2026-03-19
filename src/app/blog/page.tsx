import { blogPosts } from "@/data";

export default function BlogPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Blog</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Catatan belajar, tutorial, dan cerita seputar dunia tech!
        </p>
      </section>

      {/* Blog Posts */}
      <section className="grid gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-blue-300 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                {post.category}
              </span>
              <span className="text-xs text-gray-400">📅 {post.date}</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{post.excerpt}</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {post.content}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}