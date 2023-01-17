# Docker CircleCI Upgraded NPM Images

CircleCI provides convenience images for a variety of Node versions:
* [cimg/node on Docker Hub](https://hub.docker.com/r/cimg/node)
* [cimg/node on GitHub](https://github.com/CircleCI-Public/cimg-node)
* [CircleCI documentation for convenience images](https://circleci.com/docs/circleci-images/)

However, the NPM version in some of the images may not match the version that you would like.

This project contains a set of Dockerfiles that are based on the convenience images, but with the NPM version upgraded to specific versions.

NPM versions: https://www.npmjs.com/package/npm?activeTab=versions

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

You can run the `cimg/node` container to verify the difference in NPM versions:

```shell
docker run --it -rm cimg/node:16.19-browsers
# in the container:
npm -v
```

For example, in one of the images with the latest NPM version, the output difference is `8.19.3` when the included npm version is `7.24.0`.

## Publishing the images

After generating the images and running the container, you can push the Docker image to a private (or public Docker Hub) registry.

Instructions are here: https://docs.docker.com/engine/reference/commandline/push/
