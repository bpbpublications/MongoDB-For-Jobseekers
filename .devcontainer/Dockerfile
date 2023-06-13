# PHP version (use -bullseye variants on local arm64/Apple Silicon)
ARG VARIANT=8-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/php:0-${VARIANT}

ARG NODE_VERSION="none"
RUN if [ "${NODE_VERSION}" != "none" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | apt-key add - \
    && echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list \
    && apt-get update \
    && apt-get install -y mongodb-mongosh mongodb-org-tools

# Install Go and Go MongoDB drivers
RUN export DEBIAN_FRONTEND=noninteractive \
    && curl -OL https://dl.google.com/go/go1.19.2.linux-amd64.tar.gz \
    && rm -rf /usr/local/go && tar -C /usr/local -xzf go1.19.2.linux-amd64.tar.gz \
    && rm go1.19.2.linux-amd64.tar.gz \
    && export GOROOT=/usr/local/go \
    && export GOPATH=/workspace/lessions/5.4 \
    && export PATH=$GOPATH/bin:$GOROOT/bin:$PATH \
    && go install -v golang.org/x/tools/gopls@latest

# Install Python and Python MongoDB drivers
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt -y install --no-install-recommends python3 && apt -y install python3-pip \
    && python3 -m pip install 'pymongo[srv]' \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Install MongoDB PHP drivers and enable extention
RUN export DEBIAN_FRONTEND=noninteractive \
    && pecl install mongodb && docker-php-ext-enable mongodb
#php-mongodb    

# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>