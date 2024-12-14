FROM php:8.1-fpm

WORKDIR /var/www

# Instalación de dependencias necesarias para Laravel
RUN apt-get update && \
    apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev zip unzip git libonig-dev libxml2-dev && \
    docker-php-ext-install pdo pdo_mysql gd

# Instalación de Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copia el código de Laravel al contenedor
COPY ./back/laravel /var/www

# Instalación de curl y wait-for-it
RUN apt-get update && apt-get install -y curl && \
    curl -sS https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -o /wait-for-it.sh && \
    chmod +x /wait-for-it.sh

EXPOSE 8000

# No ejecutar nada aquí; el comando se ejecutará desde docker-compose
CMD php artisan serve --host=0.0.0.0 --port=8000