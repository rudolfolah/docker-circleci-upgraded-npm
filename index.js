const fs = require("fs");
const { parse } = require("csv-parse/sync");

const BASE_IMAGE_NAME = "cimg/node";

const csv = parse(fs.readFileSync("./image_list.csv"), {
  columns: true,
  skip_empty_lines: true,
});

csv.forEach((line) => {
  const { image_tag: imageTag, npm_version: npmVersion } = line;

  const dockerFile = `FROM ${BASE_IMAGE_NAME}:${imageTag}
  RUN sudo npm install -g npm@${npmVersion}
  CMD ["npm", "--version"]
  `;

  const outputPath = `./dist/Dockerfile.${BASE_IMAGE_NAME.replace("/", "_")}-${imageTag}-npm-${npmVersion}`;
  fs.writeFileSync(outputPath, dockerFile);

  console.log(`Generated Dockerfile: ${outputPath}`);
});
