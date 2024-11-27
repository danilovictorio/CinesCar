# Usa una imagen base de PHP con FPM
FROM php:8.2-fpm

# Instala las dependencias necesarias
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev zip git

# Instala Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /var/www/laravel

# Copia los archivos del proyecto al contenedor
COPY back/laravel /var/www/laravel

# Instala las dependencias de Composer
RUN composer install

# Expone el puerto donde PHP-FPM escuchará
EXPOSE 9000