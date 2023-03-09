# GamingTime

## Lancement de expo
cd dev <br />
expo start (expo start --tunnel pour WSL)

## Lancement serveur
cd login_server <br />
npx nodemon server.js

## Problème IP en WSL
./ngrok http 3000 <br />

## Modifier la connexion
code dev <br />
Global.js -> modifier l'ip par localhost ou l'ip ngrok
