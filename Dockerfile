FROM node:20

# Establecer el directorio de trabajo
WORKDIR /sena/frontend

# Copiar solo los archivos necesarios para la instalación de dependencias
COPY package*.json ./

# Verificar la versión de npm y actualizar si es necesario
RUN npm --version
RUN npm install -g npm@latest

# Intentar instalar dependencias sin usar el caché
RUN npm cache clean --force
RUN npm install --no-cache

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir el proyecto
RUN npm run build

# Comando para ejecutar la aplicación
CMD ["npm", "start"]

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000