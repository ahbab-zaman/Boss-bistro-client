import TitleSection from "../../../Components/TitleSection/TitleSection";
import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <TitleSection heading="Get Ready" subHeading="Admin Home"></TitleSection>
      <div className="w-11/2 mx-auto px-12 text-4xl font-semibold">
        {user?.displayName ? user?.displayName : "Hi Welcome Back"}
      </div>
    </div>
  );
};

export default AdminHome;
