# Docker CircleCI Upgraded NPM Images

CircleCI provides convenience images for a variety of Node versions: https://hub.docker.com/r/cimg/node

However, the NPM version in some of the images may not match the version that you would like.

This project contains a set of Dockerfiles that are based on the convenience images, but with the NPM version upgraded to specific versions.

CircleCI documentation for convenience images: https://circleci.com/docs/circleci-images/

## Building an image

```shell
docker build -t cimg-node-19-4-0-latest-npm -f Dockerfile.node-19-4-0 .
docker run -it --rm cimg-node-19-4-0-latest-npm
```
