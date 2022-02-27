import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

const ui = SwaggerUI({
  url: "http://localhost:8081/spec/swagger-config.yaml",
  deepLinking: true,
  dom_id: "#swagger",
});

ui.initOAuth({
  appName: "My test demo",
});
