import HomePage from "@/pages/HomePage";
import MenuTop from "@/modules/navigation/MenuTop";

export default function Root() {
  return (
    <>
      <MenuTop />
      <div className="container flex items-center justify-center h-screen">
        <HomePage title={"Page1"} />
      </div>
    </>
  );
}
