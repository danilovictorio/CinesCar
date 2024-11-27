# Usa una imagen oficial de PHP con Apache
FROM php:8.2-apache

# Instala las dependencias necesarias para Laravel
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev zip git libxml2-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql xml

# Copia tu proyecto Laravel al contenedor
COPY back/laravel /var/www/html/

# Cambia el directorio de trabajo
WORKDIR /var/www/html

# Instala Composer, el gestor de dependencias de PHP
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Instala las dependencias de Composer
RUN composer install --no-dev --optimize-autoloader

# Asegura que los permisos sean correctos para Laravel
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Exponer el puerto 80 de Apache
EXPOSE 80

# Habilita mod_rewrite en Apache (necesario para Laravel)
RUN a2enmod rewrite