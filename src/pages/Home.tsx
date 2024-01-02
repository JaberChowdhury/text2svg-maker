import Converter from "@/features/converter";

import { useDispatch, useSelector } from "react-redux";
import { fontsSelector, fetchFonts } from "@/features/fonts/fontsSlice";
import { Card } from "@/components/ui/card";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, fonts, error } = useSelector(fontsSelector);

  const fetchMoreFonts = async () => {
    dispatch(fetchFonts());
  };

  return (
    <div className="w-full pt-20 min-h-screen relative">
      <Converter />
      <div>Home</div>
      {fonts.length < 1000 && <div onClick={fetchMoreFonts}>fetch</div>}
      <Card>
        {isLoading
          ? "Loading...."
          : fonts.map((d, id) => (
              <div key={id}>
                {id}--Family: {d.family}
              </div>
            ))}
      </Card>
      <Card>{error}</Card>
    </div>
  );
};

export default Home;
