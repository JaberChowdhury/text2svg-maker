import Converter from "@/features/converter";
import Display from "@/components/custom/Display";

const Home = () => {
  return (
    <div className="w-full px-2 pt-20 min-h-screen relative">
      <Converter />
      <Display />
    </div>
  );
};

export default Home;
