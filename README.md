# cryptoWallet

Ce site web est un projet de classe. Développé par **Yohann Markuc** et **Pierre Abeille**

Développé avec *VueJS*, *CoinGecko API*, *Axios*, *ApexCharts* ainsi que *NodeJS*, *Express*, et *SQL* pour la partie Serveur.

Il faut d'abord installer la base de donnée fournie dans le rendu de devoir.

Pour lancer l'application il faut ouvrir un terminal dans /crypto-wallet-app et spécifier les commandes `npm install` puis `npm run serve` \n
Pour lancer le serveur, il faut ouvrir un terminal dans /services et spécifier les commandes `npm install` puis `nodemon .\services.js`

Le fonctionnement de notre base de données fonctionne seulement sur des transactions et non des jours
Quand on achète une monnaie le jour X, on ne voit pas de total journalier sur la base de données, seulement des entrées positives et négatives, et l'API nous retourne une somme journalière en faisant le calcul elle-même

Nous avons travaillé avec Eslint, qui nous a posé des problèmes lors des collaborations via Git, au niveau des indentations et des espaces, nous espérons que vous ne rencontrerez aucun souci et n'aurez pas à débug les fichiers à cause de ce petit chenapan
