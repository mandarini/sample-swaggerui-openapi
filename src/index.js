import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

const spec = require("../output/swagger-config-merged.yaml");

const ui = SwaggerUI({
  spec,
  deepLinking: true,
  dom_id: "#swagger",
});

ui.initOAuth({
  appName: "My test demo",
});
