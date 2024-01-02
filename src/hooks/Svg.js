import Demo from "./Demo";
import makerjs from "makerjs";
import { parse } from "opentype.js";

const configuration = {
  useSvgPathOnly: false,
  accuracy: 0.001,
};

const Svg = async (url) => {
  try {
    const buffer = await fetch(url).then((res) => res.arrayBuffer());

    const fontBuffer = await parse(buffer);

    const demoInstance = await new Demo(fontBuffer, "JABER");

    const generatedModel = await demoInstance.models.example;

    const svg = await makerjs.exporter.toSVG(generatedModel, configuration);

    return svg;
  } catch (e) {
    console.log("❌️ : svg generation failed", { e });
  }
};

export default Svg;
