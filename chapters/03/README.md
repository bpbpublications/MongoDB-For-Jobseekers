#Getting Started

## Installing MongoDB

### Windows

[https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

[https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)

### macOS

[Homebrew](https://brew.sh/)

[https://github.com/mongodb/homebrew-brew](https://github.com/mongodb/homebrew-brew)

```
brew tap mongodb/brew
brew update
brew install mongodb-community@6.0
```

[https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)

```
brew services start mongodb-community@6.0
brew services stop mongodb-community@6.0
```

### Docker

```
docker run --name mongodb-server -d -p 27017:27017 mongo:6.0
```

See a `docker-compose.yaml` example file [here](../../docker/docker-compose.yaml).

### MongoDB Atlas

[https://cloud.mongodb.com/ ](https://cloud.mongodb.com/)

## MongoDB Tools

[https://www.mongodb.com/try/download/database-tools](https://www.mongodb.com/try/download/database-tools)
