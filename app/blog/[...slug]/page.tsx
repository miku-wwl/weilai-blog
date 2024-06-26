import { posts } from "#site/content";
import MDXcomponent from "@/components/mdx-components";
import { notFound } from "next/navigation";
import "@/styles/mdx.css";
interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromPageParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  console.log("首次渲染时载入", slug);
  const post = posts.find((post) => post.slugAsParams === slug);
  console.log("post", post);
  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromPageParams(params);

  if (!post || !post.published) {
    notFound();
  }
  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{post.title}</h1>
      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXcomponent code={post.body} />
    </article>
  );
}
