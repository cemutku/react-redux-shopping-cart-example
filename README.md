## Simple React-Redux Example

This project contains basic usage of redux pattern and react-redux library.

Also has basic docker and docker-compose example. It sets current working directory to the container volume. So you can run dev server from container and start development.

## Development Environment

run `npm install` for necessary packages

**Development with docker-compose**

run `docker-compose -f "docker-compose.yml" up -d --build` command in project directory that contains docker-compose.yml file

**Without docker-compose**

Run `docker build --pull --rm -f "Dockerfile" -t reactreduxshoppingcartexample "."` for building image. Than run

`docker run --name reactreduxapp -p 3000:3000 -v "$(pwd):/src" reactreduxshoppingcartexample` to start a container for development

**Development without docker**

run `npm start` for development server.
