import Svg from "@/hooks/Svg";
import { useRef, useEffect } from "react";
import { converterSelector } from "@/features/converter/converterSlice";
import { useSelector } from "react-redux";

const Display = () => {
  const { selectedFont } = useSelector(converterSelector);

  const divRef = useRef(null);

  useEffect(() => {
    const makeSvg = async () => {
      if (divRef.current) {
        divRef.current.innerHTML = await Svg(
          selectedFont?.regular || selectedFont?.files?.regular || "",
        );
      }
    };
    makeSvg();
    console.log(divRef.current);
  }, [selectedFont]);

  return (
    <div className="w-full max-h-[400px] border-2 border-slate-900 overflow-scroll p-2 flex justify-center items-center relative">
      <div ref={divRef}></div>
    </div>
  );
};

export default Display;
