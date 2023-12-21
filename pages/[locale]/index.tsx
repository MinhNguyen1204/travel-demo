import Link from "next/link";

import { Meta } from "../../shared/layouts/Meta";
import { getStaticPaths, makeStaticProps } from "../../utils/getStatic";
const Index = () => {
  return (
    <>
      <Meta
        title="Next.js Boilerplate"
        description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      />
      <h2 className="text-2xl font-bold">
        Boilerplate code for Nextjs project
      </h2>
      <p>
        Made with Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged,
        RTK, RTK query/Axios, React Hook Form, VSCode, PostCSS, Tailwind CSS.
      </p>
      <h3 className="text-lg font-semibold">Next js Boilerplate Features</h3>

      <ul>
        <li>
          <span role="img" aria-label="fire">
            🔥
          </span>{" "}
          <Link href="https://nextjs.org" rel="nofollow">
            Next.js
          </Link>
        </li>
        <li>
          <span role="img" aria-label="art">
            🎨
          </span>{" "}
          Integrate with{" "}
          <Link href="https://tailwindcss.com" rel="nofollow">
            Tailwind CSS
          </Link>
        </li>
        <li>
          <p></p>
          <span role="img" aria-label="art">
            🎨
          </span>{" "}
          Redux Toolkit for management state,
        </li>
        <li>
          <p></p>
          <span role="img" aria-label="art">
            🎨
          </span>{" "}
          Redux Toolkit Query with customize Axios for fetching data,
        </li>
        <li>
          <span role="img" aria-label="nail_care">
            💅
          </span>{" "}
          PostCSS for processing Tailwind CSS
        </li>
        <li>
          <span role="img" aria-label="tada">
            🎉
          </span>{" "}
          Type checking Typescript
        </li>
        <li>
          <span role="img" aria-label="pencil2">
            ✏️
          </span>{" "}
          Linter with{" "}
          <Link href="https://eslint.org" rel="nofollow">
            ESLint
          </Link>
        </li>
        <li>
          <span role="img" aria-label="hammer_and_wrench">
            🛠
          </span>{" "}
          Code Formatter with{" "}
          <Link href="https://prettier.io" rel="nofollow">
            Prettier
          </Link>
        </li>
        <li>
          <span role="img" aria-label="fox_face">
            🦊
          </span>{" "}
          Husky for Git Hooks
        </li>
        <li>
          <span role="img" aria-label="no_entry_sign">
            🚫
          </span>{" "}
          Lint-staged for running linters on Git staged files
        </li>
        <li>
          <span role="img" aria-label="no_entry_sign">
            🗂
          </span>{" "}
          VSCode configuration: Debug, Settings, Tasks and extension for
          PostCSS, ESLint, Prettier, TypeScript
        </li>
        <li>
          <span role="img" aria-label="robot">
            🤖
          </span>{" "}
          SEO metadata, JSON-LD and Open Graph tags with Next SEO
        </li>
        <li>
          <span role="img" aria-label="robot">
            ⚙️
          </span>{" "}
          <Link
            href="https://www.npmjs.com/package/@next/bundle-analyzer"
            rel="nofollow"
          >
            Bundler Analyzer
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Index;

const getStaticProps = makeStaticProps(["home"]);
export { getStaticPaths, getStaticProps };

