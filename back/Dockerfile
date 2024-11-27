# Usa una imagen base de PHP con soporte para Composer
FROM php:8.1-fpm

# Instalar dependencias necesarias
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev zip git libicu-dev && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install gd pdo pdo_pgsql intl && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Establecer el directorio de trabajo
WORKDIR /var/www

# Copiar el contenido del proyecto Laravel
COPY . .

# Instalar las dependencias de Laravel
RUN composer install

# Copiar los archivos de configuración
RUN cp .env.example .env

# Generar la clave de la aplicación
RUN php artisan key:generate

# Exponer el puerto en el que correrá la app
EXPOSE 9000

# Iniciar el servidor PHP en el puerto 9000
CMD ["php-fpm"]