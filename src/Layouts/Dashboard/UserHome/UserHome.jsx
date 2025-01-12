import TitleSection from "../../../Components/TitleSection/TitleSection";
import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <TitleSection heading="Hurry Up!!" subHeading="User Home"></TitleSection>

      <div className="px-12">
        <h2 className="text-4xl font-semibold">
          {user?.displayName ? user?.displayName : "Hi!! This is User Home"}
        </h2>
      </div>
    </div>
  );
};

export default UserHome;
