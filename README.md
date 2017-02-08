JFR Teamy - wizytówki zawodników
================================

Prosty skrypt wczytujący wizytówki z [witryny cezar.brydzystow.pl](http://cezar.brydzystow.pl/) do widoku składu teamu na stronie wyników JFR Teamy.

Użycie
------

1. Pobrać plik [vcards.js](vcards.js) do katalogu turnieju (np. do podkatalogu `sklady`).
2. Dołączyć skrypt do kodu strony, poprzez dodanie go w oknie wyboru `Players` -> `Link usage`:

```
<script src="sklady/vcards.js" type="text/javascript"></script>
<a href="http://www.msc.com.pl/cezar/?mycl=1&p=21&r=:LINK:" target="_blank">
```

Przykład działania
------------------

[IV liga LD, 2016/17](https://emkael.info/brydz/wyniki/2016/4liga/ivld_o_T3.html)

Uwagi
-----

* skrypt działa jedynie z linkami w domenie `*msc.com.pl`
* skrypt dołączany jest, przez `Link usage`, do każdego generowanego linku, ale wykonwyany jest jedynie raz
* można dołączyć go również w nagłówku turnieju, ale tylko, jeśli nie jest ono pobierane z zewnętrznego pliku (w przypadku zewnętrznego pliku, nie są wykonywane żadne skrypty JS, pobierane w ten sposób)
* narzędzie używa miejsca przeznaczonego na zdjęcie zawodnika na podstronie szczegółów teamu
* zawodnicy od ID wyższym niż 30000 uznawani są za niezrzeszonych (skrypt w ich przypadku usuwa niedziałający link do CEZaRa)

Autor
-----

Michał Klichowicz (mkl)

Licencja
--------

Kod źródłowy udostępniany jest na licencji [WTFPL](http://www.wtfpl.net/about/).
