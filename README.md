# GamingTime

## Lancement de expo
cd dev
expo start (expo start --tunnel pour WSL)

## Lancement serveur
cd login_server
npx nodemon server.js

## Problème IP en WSL
./ngrok http 3000

## Modifier la connexion
code dev
Global.js -> modifier l'ip par localhost ou l'ip ngrok
