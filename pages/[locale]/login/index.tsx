import LoginForm from "@features/auth/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = (page: React.ReactElement) => {
  console.log("get lay out");
  return page;
};
