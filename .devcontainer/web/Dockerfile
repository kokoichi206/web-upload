ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

RUN sudo apt update && \
    npm install && \
    npm install -g npm && \
    npm install -g @vue/cli
