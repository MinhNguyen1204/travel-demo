import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import type { ReactNode } from "react";

import nextI18nextConfig from "../../next-i18next.config";

type IMainProps = {
  children: ReactNode;
};

const MainLayout = (props: IMainProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const currentLocale =
    router.query.locale || nextI18nextConfig.i18n.defaultLocale;
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-md">
        <header className="border-b border-gray-300">
          <div className="pb-8 pt-16">
            <h1 className="text-3xl font-bold text-gray-900">
              {t("site_name")}
            </h1>
          </div>
          <nav>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <Link href={`/${currentLocale}`} className="border-none ">
                  Home
                </Link>
              </li>
              <li className="mr-6">
                <Link href={`/${currentLocale}/about`} className="border-none">
                  About
                </Link>
              </li>
              <li className="mr-6">
                <Link href={`/${currentLocale}/blog`} className="border-none">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="content py-5 text-xl">{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()}
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
