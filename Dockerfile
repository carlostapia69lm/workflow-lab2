# Imagen base oficial de Node
FROM node:18-alpine

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer puerto
EXPOSE 3000

# Comando para iniciar app
CMD ["npm", "start"]
