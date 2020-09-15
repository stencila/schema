# Developing with Docker

If you don't want to install npm on your host directly, you can build the provided
Dockerfile:

```bash
$ make build-image
```

And then bind your local repository to `/code` and run commands from the container.
Here is how we would run `npm run build` or `make docs`

```bash
$ make run-image
# npm run build
# make docs
```
