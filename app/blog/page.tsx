import { getAllPosts } from "@/lib/mdx";
import { FaCalendar, FaTag } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "Blog | Eugenio Rivera Ramos",
  description: "Thoughts on software development, technology, and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-indigo-950 mb-4">Blog</h1>
          <p className="text-indigo-900/70 text-lg font-semibold">
            Thoughts on software development, technology, and more.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="text-center py-16 cartoon-card rounded-2xl">
            <p className="text-indigo-900/70 text-lg font-semibold">No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group p-6 rounded-2xl cartoon-card hover:-translate-y-1 transition-transform duration-200"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-indigo-950 mb-3 group-hover:text-violet-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-indigo-900/70 mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-indigo-950/60 font-semibold">
                    <span className="flex items-center gap-2">
                      <FaCalendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    {post.tags && post.tags.length > 0 && (
                      <span className="flex items-center gap-2">
                        <FaTag className="w-3 h-3" />
                        {post.tags.join(", ")}
                      </span>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
