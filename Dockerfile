FROM node:20.18.0

RUN useradd -ms /bin/sh -u 1001 app
USER app

WORKDIR /app
COPY --chown=app:app package*.json ./
RUN npm install

COPY --chown=app:app . .
# RUN npm run build
# RUN rm -fr node_modules

EXPOSE 3000

CMD ["npm", "run", "dev"]
# CMD ["npm", "run", "preview"]