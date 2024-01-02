const init = async () => {
  try {
    const ranNumber = Math.floor(Math.random() * 100);
    const allfonts = await Fonts();

    const selectedFont = allfonts[ranNumber].font;
    const svgData = await Svg(selectedFont);
  } catch (e) {
    console.log("❌️ : init failed");
  }
};
init();
