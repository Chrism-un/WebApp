FROM nginx
COPY ./dhparam.pem /etc/ssl/certs/dhparam.pem
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./proxy.conf /etc/nginx/proxy.conf
COPY ./nginx-selfsigned.key /cert/nginx-selfsigned.key 
COPY ./nginx-selfsigned.crt /cert/nginx-selfsigned.crt
