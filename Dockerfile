FROM nginx:alpine

# Install ngssc binary
ADD https://github.com/kyubisation/angular-server-side-configuration/releases/download/v20.0.0/ngssc_64bit /usr/sbin/ngssc
RUN chmod +x /usr/sbin/ngssc

# Add ngssc init script
COPY ngssc.sh /docker-entrypoint.d/ngssc.sh
RUN chmod +x /docker-entrypoint.d/ngssc.sh

# Copy app
COPY /dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
