## Min Angular app

#### En app för hitta intressanta Svamp/Bärplatser i världen.

Installationsguide

1: Clona eller ladda ner repo.

2:Gå in i katalog 1dv450 angular.  
3: Om du ej har NPM installera det på din dator.  

4a: om du har bower Öppna konsol gå till root för applikation, skriv "npm install"     
4b: Om du inte har bower installerat, skriv "npm install bower --save"    

6: skriv "bower install"     
7: Skriv "node server.js" i konsol  
8: öppna webbläsare och adress http://localhost:8080/  
9: klart Api är publiserat, och anrop körs mot det så kan bara installera angular.  

Ändringar i API
* Lagt till bättre data i feed fil.    
* Vid login och register i creator (clientverifiering ej nyckel) retunerar jag från api nu även username och hur många submits han eller hon gjort samt userID. Min Angular ville ha den datan.  
* Ändrade så creator_id är FK inte bara hos Events utan även hos Positions. Där Events blev typtabell till Positions. Detta för det är intressant vem som lagt in findings också. Creator tabell har föutom namn property o så även property kallad submits som jag jobbat med i angular appen för lista hur många submits en användare gjort. Hade jag haft mer tid hade man kunna listat typ de 10 bästa bidragsgivarna till alla arter och findings som blivit inlagda, men jag han ej.  
*  Position klass har även fått amount property, utflyttad ifrån min event tabell som representerar hur stor fyndighet.  
*  Event tabllen är nu olika typer av bär eller svampar (ex kantarell eller rönnbär) som då e 2 olika typer. Jag har seedat arttyper, och orkade bara skapa namn för bär och svampar.  Men skapade fler kategorier för visa på vision.  
*  Event tabell har även fått ny parameter som heter taste, som ska reflektera hur god en art är.  
*  I modell till position har jag i serializable_hash lagt till "include: :creator," för kunna lista den nya   relationen en position har för vem som skapat den. (slipper onödiga anrop från angular app)
*  Skapat full crud för position kontroller. var tidgare bara show och index.  
*  Lagt in sökfunktion för event, så jag kan söka på bär eller svampar sparade i databasen.   

Krav Rails api/registrering
*  Jag har glömt kraven för mer än G i rails delen, men jag tror jag har vad som krävs o lite mer, mitt api kan tex hantera xml och json. 
*  Stöd för registrering av klientanvändare.  
*  Publiserat det på digitalocean http://188.166.3.35:3000/  bara gå dit o klicka runt för se registrering av hur man får api nyckel. (för utvecklare). Förutom registrering för användare där, så ligger mitt api o snurrar i bakgrunden som då min angular applikation jobbar mot. Jag har testat regga ny användare och använda den key i min angular app och det funkar bra.

Krav Angular app
Jag har bara gjort för G förutom.
*  Jag kan använda deep links.  
*  Jag är nöjd med min karttjänst, det var lite bök med få det att funka med flytta blå marker, bekräfta med klick för spara ni event, samt editera om man trycker på röd marker.   
* Kravet "Möjlighet att autentisera (logga in) användare/resursägare så att dessa kan skapa/ändra och ta bort egna resurser." Tyckte jag var fel för min app, så jag kräver bara klientinloggning för posta/edit/delete. Dock så kan man ta bort eller editera andras resursägares markers. Men jag listar vem som skapat markers beroende på vem som är inloggad, så jag hade kunna implementerat kravet, men helt ärligt tyckte jag det var fel för min app.
* Jag har implementerat enkel registrering av klientanvändare på angular appen


