import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FaCalendar, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Eugenio Rivera Ramos`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-indigo-950/70 hover:text-violet-600 transition-colors mb-8 font-semibold"
        >
          <FaArrowLeft className="w-3 h-3" />
          Back to blog
        </Link>

        {/* Content card */}
        <div className="cartoon-card rounded-2xl p-8 md:p-12">
          {/* Header */}
          <header className="mb-8 pb-8 border-b-2 border-indigo-950/10">
            <h1 className="text-3xl md:text-4xl font-black text-indigo-950 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-indigo-950/60 font-semibold">
              <span className="flex items-center gap-2">
                <FaCalendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-full font-semibold border-2 border-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-indigo-950 prose-headings:font-bold prose-p:text-indigo-900/80 prose-a:text-violet-600 prose-strong:text-indigo-950 prose-code:text-violet-600 prose-code:bg-violet-50 prose-code:px-1 prose-code:rounded prose-pre:bg-indigo-950 prose-pre:text-white prose-li:text-indigo-900/80">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>
    </div>
  );
}
