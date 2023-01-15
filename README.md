# Docker CircleCI Upgraded NPM Images

CircleCI provides convenience images for a variety of Node versions: https://hub.docker.com/r/cimg/node

However, the NPM version in some of the images may not match the version that you would like.

This project contains a set of Dockerfiles that are based on the convenience images, but with the NPM version upgraded to specific versions.

CircleCI documentation for convenience images: https://circleci.com/docs/circleci-images/

## Generating the Dockerfiles

The `index.js` can be run with `npm start`. Using the `image_list.csv` it will generate a set of Dockerfiles that include an upgrade to the latest version of NPM or a specific version. The `Dockerfile.base` is the template that is used to generate the Dockerfiles.

The generated Dockerfiles will appear in the `dist` directory.

The format of the `image_list.csv` is:

```csv
image_tag,npm_version
19.4.0,latest
```

## Building an image

Building to include the latest npm version:

```shell
docker build -t cimg-node-19-4-0-npm-latest -f ./dist/Dockerfile.cimg_node-19.4.0-npm-latest .
docker run -it --rm cimg-node-19-4-0-npm-latest
```

Building to include a specific npm version:

```shell
docker build -t cimg-node-16-19-browsers-npm-8-19-3 -f ./dist/Dockerfile.cimg_node-16.19-browsers-npm-8.19.3 .
docker run -it --rm cimg-node-16-19-browsers-npm-8-19-3
```

After running the container, you can verify the NPM version by checking the output.
