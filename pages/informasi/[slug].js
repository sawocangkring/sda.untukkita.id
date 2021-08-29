import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import LayoutMarkdownPages from 'components/layout/markdownpages';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

export default function PostPage({ source, frontMatter }) {
  return (
    <LayoutMarkdownPages
      metaTitle={frontMatter.title}
      pageTitle={frontMatter.title}
      metaDescription={frontMatter.description}
      pageDescription={frontMatter.description}
    >
      <MDXRemote {...source} />
    </LayoutMarkdownPages>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    // eslint-disable-next-line no-shadow
    .map(path => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
