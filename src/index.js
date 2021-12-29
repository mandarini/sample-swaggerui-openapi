import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

const spec = require("./swagger-config.yaml");

const ui = SwaggerUI({
  spec,
  urls: [
    { url: "./clients.yaml", name: "Clients" },
    { url: "./users.yaml", name: "Users" },
  ],
  deepLinking: true,
  dom_id: "#swagger",
});

ui.initOAuth({
  appName: "My test demo",
});
