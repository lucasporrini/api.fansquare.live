# Utilisez l'image de base Node.js v14.21.3
FROM node:14.21.3

# Créez un répertoire pour l'application
WORKDIR /usr/src/api

# Copiez les fichiers package.json et package-lock.json
COPY src/package*.json ./

# Installez les dépendances du projet
RUN npm install

# Copiez le reste des fichiers du projet
COPY src/ ./

# Exposez le port utilisé par votre application web
EXPOSE 3333

# Commande pour démarrer l'application web
CMD ["node", "app.js"]
