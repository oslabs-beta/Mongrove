FROM node:14
RUN apt-get update && apt-get install \
    git libx11-xcb1 libxcb-dri3-0 libxtst6 libnss3 libatk-bridge2.0-0 libgtk-3-0 libxss1 libasound2 \
    -yq --no-install-suggests --no-install-recommends \
    && apt-get clean && rm -rf /var/lib/apt/lists/*
RUN useradd -d /mongrove mongrove
USER mongrove
WORKDIR /mongrove
COPY . .
RUN npm install
USER root
RUN npm run build
USER mongrove
RUN npx electron-rebuild
USER root
RUN chown root /mongrove/node_modules/electron/dist/chrome-sandbox
RUN chmod 4755 /mongrove/node_modules/electron/dist/chrome-sandbox
USER mongrove
CMD npm run start