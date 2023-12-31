import { Meta } from "../../shared/layouts/Meta";
import { getStaticPaths, makeStaticProps } from "../../utils/getStatic";

const About = () => (
  <>
    <Meta title="Lorem ipsum" description="Lorem ipsum" />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
  </>
);

export default About;

const getStaticProps = makeStaticProps(["about"]);
export { getStaticPaths, getStaticProps };
