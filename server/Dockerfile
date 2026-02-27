# Imagen base
FROM node:20-alpine

# Carpeta de trabajo
WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar código
COPY . .

# Puerto del backend
EXPOSE 3000

# Ejecutar servidor
CMD ["node", "server.js"]
