# VitalSync

Application de suivi medical et sportif conteneurisee avec une chaine CI/CD complete.

## Architecture

L'application est composee de 3 services :
- **Backend** : API Node.js/Express sur le port 3000
- **Frontend** : Interface servie par Nginx sur le port 80
- **Database** : PostgreSQL pour le stockage des donnees

```mermaid
graph LR
    Client -->|port 80| Frontend[Frontend Nginx]
    Frontend -->|proxy_pass /api/| Backend[Backend Node.js]
    Backend -->|port 5432| Database[PostgreSQL]
```

## Prerequis

- Docker >= 20.0
- Docker Compose >= 2.0
- Git >= 2.0
- Node.js >= 20.0 (pour le developpement local)

## Lancement avec Docker Compose

1. Cloner le depot :
```bash
git clone https://github.com/steven200294/VitalSync.git
cd VitalSync
```

2. Creer le fichier .env :
```bash
cp .env.example .env
```

3. Lancer les services :
```bash
docker compose up --build
```

4. Acceder a l'application :
- Frontend : http://localhost:80
- Backend API : http://localhost:3000/health

## Pipeline CI/CD

La pipeline GitHub Actions s'execute automatiquement et comporte 3 etapes :
1. **Lint & Tests** : verification du code avec ESLint et tests unitaires Jest
2. **Build Docker** : construction des images et push vers GHCR avec tag SHA
3. **Deploy Staging** : deploiement via Docker Compose et health check

## Choix techniques

| Choix | Justification |
|-------|--------------|
| Node.js/Express | Framework leger et performant pour les API REST |
| Nginx | Serveur web performant pour les fichiers statiques + reverse proxy |
| PostgreSQL | Base de donnees relationnelle robuste et open source |
| Docker Alpine | Images legeres reduisant la taille et la surface d'attaque |
| GitHub Actions | CI/CD integree a GitHub, gratuite pour les depots publics |
| GHCR | Registry integre a GitHub, meme authentification |
| Conventional Commits | Standard pour des messages de commit lisibles et exploitables |
