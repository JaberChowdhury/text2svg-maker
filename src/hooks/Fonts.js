import axios from "axios";

const Fonts = async () => {
  try {
    const API_KEY = "AIzaSyCXc7cYhaQTGorf1XHwLJsNqCGMIUztTcU";
    const req = await axios.get(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`,
    );
    const data = await req.data;
    const fonts = data?.items
      .map((item) => {
        return { family: item.family, font: item.files.regular };
      })
      .slice(0, 100);
    return fonts;
  } catch (e) {
    console.log("❌️ : Font fetching failed");
  }
};

export default Fonts;
