import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";

import { useTypedTranslation } from "@hooks/useTranslationType";

import { Meta } from "../../../shared/layouts/Meta";
import { getI18nProps } from "../../../utils/getStatic";

type IBlogUrl = {
  slug: string;
};

interface IProps {
  slug: string;

}
const Blog = ({ slug }: IProps) => {
  const { t } = useTypedTranslation();
  console.log("!! slug: ", slug);
  if (!slug) return null;

  return (
    <>
      <Meta title={slug} description="Lorem ipsum" />
      <h1 className="capitalize">{slug}</h1>
      {t("test")}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos
        earum doloribus, quibusdam magni accusamus vitae! Nisi, sunt! Aliquam
        iste expedita cupiditate a quidem culpa eligendi, aperiam saepe dolores
        ipsum!
      </p>
    </>
  );
};

export default Blog;


export const getStaticPaths: GetStaticPaths<IBlogUrl> = async (ctx) => {


  return {

    paths: [
      { params: { locale: "jp", slug: "1" }, },

    ],
    fallback: "blocking",
  };
};

export const getStaticProps: any = async (ctx: any) => {
  return {
    props: {
      slug: ctx.params!.slug,

      ...await getI18nProps(ctx)
    },
  };
};

// export const getServerSideProps: any = async (ctx: any) => {
//   return {
//     props: {
//       slug: ctx.params!.slug,
//       ...await getI18nProps(ctx)
//     },
//   };
// };
