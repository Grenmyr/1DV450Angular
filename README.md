## Min Angular app

#### En app för hitta intressanta svamp/Bärplatser i sverige.

Installationsguide

1: Clona eller ladda ner repo.

2:Gå in i katalog 1dv450 angular.
3: Om du ej har NPM installera det på din dator.
4: Kör npm install 
5: Om du inte har bower installerat, kör npm install bower --save
6: kör bower install 
7: Skriv node server.js i consol
8: öppna webbläsare och adress http://localhost:8080/
9: klart



Då bör det funka, Apiet ligger publiserat. Ska funka. OM INTE FUNGERAR , får du clona ner dem två (föj deras installationsmanualer) och sätta upp lokal server.

Då får du även gå in i service katalog på angular repot. Och ändra url konstantens värde till localhost:3000/api/v1/
Får även ändra 
rad 122 i samma fil till 'localhost:3000/api/register'
rad 143 'localhost:3000/api/login'

