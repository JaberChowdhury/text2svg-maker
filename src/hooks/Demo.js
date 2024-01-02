import makerjs from "makerjs";

class Demo {
  constructor(
    font,
    text = "Hello jaber",
    fontSize = 120,
    combine = true,
    centerCharacterOrigin = false,
  ) {
    this.models = {
      example: new makerjs.models.Text(
        font,
        text,
        fontSize,
        combine,
        centerCharacterOrigin,
      ),
    };
  }
}
Demo.metaParameters = [
  { title: "font", type: "font", value: "*" },
  { title: "text", type: "text", value: "Hello jaber" },
  { title: "font size", type: "range", min: 10, max: 200, value: 22 },
  { title: "combine", type: "bool", value: true },
  { title: "center character origin", type: "bool", value: false },
];

export default Demo;
