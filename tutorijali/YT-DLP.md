Dobrodošli u Youtube DL, naj popularniji i najbolji program za skidanje bilo čega sa youtubea
Ovo jeste najbolji, ali zato i naj napredniji program ovakve vrste. Potrebno je određeno vreme da upoznate određene stvari, ali nakon što shvatite osnove shvatićete koliko je ovaj program zapravo dobar.
Ako ne znate šta je komandna linija(ENG command prompt) ili vam sve ovo zvuči previše komplikovano, pročitajte interfejs verziju.(imajte na umu da je uputstvo za interfejs verziju pisano uz NVDA čitač ekrana i da ćete sami morati da primenite neke stvari ukoliko koristite jaws) uputstvo za interfejs verziju još nije napisano, biće možda nekad
Hajmo sada sa uputstvom!
Priprema
Napomena: Ovo radite samo ako želite da pretvarate video u mp3 nakon skidanja
Youtube DL ne pretvara video u mp3 sam i potreban mu je dodatak koji se zove ffmpeg. U folderu ffmpeg imate 3 datoteke, koje samo kopirate u folder c:\windows\system 32 sa 32 bitni windows, ili c:\windows\syswow64 za 64 bitni windows
U arhivi se nalazi datoteka sa imenom youtube dl.exe koju kada pokrenete ne desi se ništa. To je zato što je ovo tip programa koji zahteva komande, a nema svoj grafički interfejs. Komandne mu dajemo, iz komandne linije. Postoji 2 načina, jedan lakši a jedan malo teži, ali ne previše.
Lakši bi bio da kopirate youtube dl u folder gde želite snimke a nakon toga dok ste u tom folderu, pritisnute aplikacijski taster i izabrati opciju open command promt here što će otvoriti proor komandne linije u tom folderu.
Drugi način je da u run dialog upišete cmd i otvorite komandnu liniju, a zatim cd do foldera (ako nam je na primer youtube dl u folderu gluposti na disku c, upisaćemo cd c:\gluposti).
Nakon što smo u tom folderu, možemo da počnemo!
Svaku komandu počinjemo sa youtube-dl AdresaVidea pa opcije, pre svake opcije ide crtica ili dve u zavisnosti od opcije.
Evo nekih osnovnih stvari.
Primer 1: Želim da skinem video i pretvorim ga u mp3
youtube-dl adresa --extract-audio --audio-format mp3 --output "%(title)s.%(ext)s" 
Šta sve ovo znači?
extract-audio --audio-format mp3 
Ovo govori aplikaciji da nakon skidanja, izvuče audio iz videa i pretvori ga u mp3
--output "%(title)s.%(ext)s"
Nemojte misliti da je ovo nešto nebitno, zapravo, jako je bitno. Bez ovoga, ime videa će izgledati nekako ovako. Saša Matić nadji novu ljubav webmvpxdzvg.mp3
Ta ekstra slova su ID videa, i ovom opcijom programu govorimo da nas to ne zanima.
Primer 2, želim samo video, a ne mp3
Ako ste mislili da samo obrišete extract-audio --audio-format mp3, pogodili ste!
Ostaje da napomenem još samo jedan problem, a to je kada skidanje pukne ako skidate playlistu ili kanal
Naime, ako imate malo nestabilniju konekciju a skidate velike playliste, može se desiti da youtube DL odbije da to uradi. Ne brinite, brinuli su programeri i o tome pa se i to može rešiti.
Hajde da zamislimo da skidate kanal od 500 snimka, i da je skidanje prestalo nakon videa 100, znači imate 100 videa skinutih uspešno. Treba samo dodati opciju koja se zove --playlist-start u našem primeru to izgleda ovako.
youtube-dl adresa --extract-audio --audio-format mp3 --output "%(title)s.%(ext)s" --playlist-start 101
naravno, vi menjate broj u primeru. Ova opcija konkretno govori programu od kog videa da počne skidanje.
Šta da radim ako program ne radi?
Periodično, stvari se menjaju i morate ažurirati program.
To radite komandom youtube-dl -u
Srećno korišćenje!