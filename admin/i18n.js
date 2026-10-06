/* Venga Admin — Polish interface.
   The panel is written in English; when Polish is chosen this file swaps every
   piece of interface text as it appears on screen (including text drawn later
   by scripts). Guest data, article content and anything typed by staff is never
   touched. Language is remembered per device. */
(function () {
  var L = window.ADMIN_LANG;
  if (L !== 'pl') return;

  var D = {
    /* ---- login & shell ---- */
    'Reservation management': 'Zarządzanie rezerwacjami',
    'Email': 'E-mail', 'Password': 'Hasło', 'Sign in': 'Zaloguj się', 'Signing in…': 'Logowanie…',
    'Admin': 'Panel', 'Reservations': 'Rezerwacje', 'Occupancy': 'Obłożenie', 'Blocked dates': 'Zablokowane dni',
    'Fleet & prices': 'Flota i ceny', 'Extras': 'Dodatki', 'Journal': 'Blog', 'SEO': 'SEO', 'Sign out': 'Wyloguj',
    'No connection — reservations shown may be out of date.': 'Brak połączenia — widoczne rezerwacje mogą być nieaktualne.',
    'Install': 'Zainstaluj', 'Close': 'Zamknij',
    'Install Venga Admin': 'Zainstaluj Venga Admin',
    'on this device — it opens like an app, full screen, from the home screen.': 'na tym urządzeniu — otwiera się jak aplikacja, na pełnym ekranie, z ekranu głównego.',
    'Install on iPhone:': 'Instalacja na iPhonie:',
    'tap the Share button': 'stuknij przycisk Udostępnij',
    'at the bottom of Safari, then': 'na dole Safari, a potem',
    'Add to Home Screen': 'Do ekranu początkowego',
    'open this page in': 'otwórz tę stronę w',
    ', tap Share, then': ', stuknij Udostępnij, a potem',

    /* ---- reservations ---- */
    'New requests appear here first. Confirm to lock the bike, cancel to release it.': 'Nowe zgłoszenia pojawiają się tutaj. Potwierdź, żeby zarezerwować rower, anuluj, żeby go zwolnić.',
    'Awaiting confirmation': 'Czeka na potwierdzenie', 'Upcoming & current': 'Nadchodzące i trwające',
    'Bikes out today': 'Rowery dziś na trasie', 'Booked value': 'Wartość rezerwacji',
    'New': 'Nowe', 'Confirmed': 'Potwierdzone', 'Cancelled': 'Anulowane', 'All': 'Wszystkie',
    'new': 'nowa', 'confirmed': 'potwierdzona', 'cancelled': 'anulowana', 'manual': 'ręczna',
    'emailed': 'mail wysłany', 'expired': 'minęło', 'active': 'aktywna',
    'Search name, email, code…': 'Szukaj: nazwisko, e-mail, kod…',
    '+ Manual reservation': '+ Rezerwacja ręczna',
    'Nothing matches that search.': 'Nic nie pasuje do wyszukiwania.',
    'No reservations in this view yet.': 'Brak rezerwacji w tym widoku.',
    'Phone': 'Telefon', 'Insurance': 'Ubezpieczenie', 'Delivery': 'Dostawa', 'Season': 'Sezon',
    'Booked on': 'Zarezerwowano', 'Accommodation': 'Zakwaterowanie', 'Notes': 'Uwagi',
    'None': 'Brak', 'Basic': 'Podstawowe', 'FULL & SOS': 'PEŁNE + SOS', 'yes': 'tak',
    'Pickup in shop': 'Odbiór w sklepie', 'High season': 'Wysoki sezon', 'Low season': 'Niski sezon',
    'Edit': 'Edytuj', 'Confirm': 'Potwierdź', 'Cancel': 'Anuluj', 'Reopen': 'Otwórz ponownie',
    'Email customer': 'Napisz do klienta', 'Guest has been emailed': 'Do gościa wysłano e-mail',
    'Height': 'Wzrost', 'Weight': 'Waga', 'Riding position': 'Pozycja jazdy', 'Language': 'Język',
    'Sporty': 'Sportowa', 'Balanced': 'Zrównoważona', 'Relaxed': 'Wygodna', 'Not sure': 'Nie wiem',
    'Sporty — low and aero': 'Sportowa — nisko i aero', 'Relaxed — upright': 'Wygodna — wyprostowana',
    'Not sure — we recommend': 'Nie wiem — polecamy',
    'Reservation cancelled — the bike is available again.': 'Rezerwacja anulowana — rower jest znów dostępny.',
    'Reservation confirmed — the bike is locked for those dates.': 'Rezerwacja potwierdzona — rower jest zablokowany na te dni.',
    'Reservation reopened.': 'Rezerwacja otwarta ponownie.',
    'Could not update that reservation.': 'Nie udało się zaktualizować rezerwacji.',
    'Could not find that reservation.': 'Nie znaleziono tej rezerwacji.',
    'Could not load data. Check your connection and refresh.': 'Nie udało się wczytać danych. Sprawdź połączenie i odśwież.',

    /* ---- manual reservation form ---- */
    'Manual reservation': 'Rezerwacja ręczna', 'Edit reservation': 'Edycja rezerwacji',
    'For phone and walk-in bookings. Availability and price are checked the same way as online.': 'Dla rezerwacji telefonicznych i z ulicy. Dostępność i cena są sprawdzane tak samo jak online.',
    'Change anything below. Availability is re-checked, but this reservation no longer competes with itself.': 'Zmień, co trzeba. Dostępność zostanie sprawdzona ponownie, ale ta rezerwacja nie blokuje samej siebie.',
    'Bike': 'Rower', 'Size': 'Rozmiar', 'First day': 'Pierwszy dzień', 'Last day': 'Ostatni dzień',
    'Pickup': 'Odbiór', 'Customer name': 'Imię i nazwisko', 'Delivery address': 'Adres dostawy',
    'Hotel or address': 'Hotel lub adres', 'Height, cm': 'Wzrost, cm', 'Weight, kg': 'Waga, kg',
    '(optional)': '(opcjonalnie)', 'optional for phone bookings': 'opcjonalne przy rezerwacji telefonicznej',
    'Estimated total:': 'Szacowana kwota:', '— final amount is calculated on save': '— ostateczna kwota liczona przy zapisie',
    'Create reservation': 'Utwórz rezerwację', 'Save changes': 'Zapisz zmiany', 'Saving…': 'Zapisywanie…',
    'Status': 'Status', 'Price (€)': 'Cena (€)', '(blank = auto)': '(puste = automatycznie)',
    'Allow blocked dates (override a service or holiday block)': 'Zezwól na zablokowane dni (pomiń blokadę serwisową lub urlopową)',
    'Pick the first day, then the last day.': 'Wybierz pierwszy dzień, potem ostatni.',
    'Previous month': 'Poprzedni miesiąc', 'Next month': 'Następny miesiąc',
    'Blocked': 'Zablokowane', 'No sizes': 'Brak rozmiarów', 'Extra': 'Dodatek',
    'Enter the guest name.': 'Wpisz imię i nazwisko gościa.',
    'Give either an email or a phone number — we need one way to reach the guest.': 'Podaj e-mail albo telefon — potrzebujemy jakiegoś kontaktu z gościem.',
    'Give either an email or a phone number.': 'Podaj e-mail albo telefon.',
    'That email address is not valid. Write it in full, like name@gmail.com — or leave it empty and keep just the phone number.': 'Ten adres e-mail jest niepoprawny. Wpisz go w całości, np. imie@gmail.com — albo zostaw puste i podaj tylko telefon.',
    'That email address is not valid — it needs an @ and a domain, like name@gmail.com.': 'Niepoprawny adres e-mail — potrzebny jest znak @ i domena, np. imie@gmail.com.',
    'Pick the first and last day.': 'Wybierz pierwszy i ostatni dzień.',
    'Height must be between 120 and 220 cm — or leave it empty.': 'Wzrost musi wynosić od 120 do 220 cm — albo zostaw puste.',
    'Weight must be between 35 and 200 kg — or leave it empty.': 'Waga musi wynosić od 35 do 200 kg — albo zostaw puste.',
    'Height must be between 120 and 220 cm.': 'Wzrost musi wynosić od 120 do 220 cm.',
    'Weight must be between 35 and 200 kg.': 'Waga musi wynosić od 35 do 200 kg.',
    'No stock left for that bike, size and date range.': 'Brak wolnych sztuk dla tego roweru, rozmiaru i terminu.',
    'That size has no units.': 'Ten rozmiar nie ma żadnych sztuk.',
    'Pickup must be 09:00–12:30 or 16:00–18:00.': 'Odbiór możliwy w godz. 09:00–12:30 lub 16:00–18:00.',
    'Sunday bookings are allowed (pick-up/return by prior appointment). Seeing this means an outdated rule answered — refresh and try again.': 'Rezerwacje na niedzielę są dozwolone (odbiór/zwrot po wcześniejszym umówieniu). Ten komunikat oznacza starą regułę — odśwież i spróbuj ponownie.',
    'Add the delivery address.': 'Dodaj adres dostawy.',
    'The first day is in the past.': 'Pierwszy dzień jest w przeszłości.',
    'The last day must be on or after the first day.': 'Ostatni dzień nie może być przed pierwszym.',
    'Rentals over 60 days must be handled manually.': 'Wynajem powyżej 60 dni trzeba obsłużyć indywidualnie.',
    'Those dates are blocked for service or holiday. Tick "Allow blocked dates" to override.': 'Te dni są zablokowane (serwis lub urlop). Zaznacz „Zezwól na zablokowane dni”, żeby to pominąć.',
    'That reservation no longer exists — refresh the page.': 'Ta rezerwacja już nie istnieje — odśwież stronę.',
    'The server still requires accommodation — refresh the page (Cmd+Shift+R) and try again.': 'Serwer nadal wymaga zakwaterowania — odśwież stronę (Cmd+Shift+R) i spróbuj ponownie.',
    'The server still requires height — refresh the page (Cmd+Shift+R) and try again.': 'Serwer nadal wymaga wzrostu — odśwież stronę (Cmd+Shift+R) i spróbuj ponownie.',
    'Could not save. Check the fields and try again.': 'Nie udało się zapisać. Sprawdź pola i spróbuj ponownie.',

    /* ---- occupancy ---- */
    'Booked units per bike and size. Orange means fully booked, hatched × means blocked for service or holiday.': 'Zarezerwowane sztuki dla każdego roweru i rozmiaru. Pomarańczowe — brak wolnych, kratka × — blokada serwisowa lub urlopowa.',
    'Bike / size': 'Rower / rozmiar',
    'Mon': 'Pn', 'Tue': 'Wt', 'Wed': 'Śr', 'Thu': 'Cz', 'Fri': 'Pt', 'Sat': 'So', 'Sun': 'Nd',

    /* ---- blocked dates ---- */
    'Close dates for service, holidays or repairs. Blocked days disappear from the booking calendar and can\'t be reserved online.': 'Zamknij dni na serwis, urlop lub naprawy. Zablokowane dni znikają z kalendarza rezerwacji i nie da się ich zarezerwować online.',
    'Block dates': 'Zablokuj dni', 'Blocking…': 'Blokowanie…', 'From': 'Od', 'To': 'Do', 'Reason': 'Powód',
    'Service, holiday…': 'Serwis, urlop…', 'All bikes (shop closed)': 'Wszystkie rowery (sklep zamknięty)',
    'All bikes — shop closed': 'Wszystkie rowery — sklep zamknięty', 'All sizes': 'Wszystkie rozmiary',
    'No reason given': 'Bez podanego powodu', 'Remove': 'Usuń',
    'No blocked dates. Everything in the calendar is bookable.': 'Brak blokad. Wszystkie dni w kalendarzu można rezerwować.',
    'Dates blocked — they are no longer bookable online.': 'Dni zablokowane — nie można ich już rezerwować online.',
    'Block removed — those dates are bookable again.': 'Blokada usunięta — te dni znów są dostępne.',
    'Could not remove that block.': 'Nie udało się usunąć blokady.',
    'Could not save that block. Check the dates and try again.': 'Nie udało się zapisać blokady. Sprawdź daty i spróbuj ponownie.',
    'Pick both a start and an end date.': 'Wybierz datę początkową i końcową.',
    'The end date must be on or after the start date.': 'Data końcowa nie może być przed początkową.',

    /* ---- fleet ---- */
    'Edit stock per size, season rates and insurance. Every length from 1 to 7 days has its own price, exactly as in your price list. Past 7 days the “+day” rate is added.': 'Edytuj stany w rozmiarach, ceny sezonowe i ubezpieczenie. Każda długość od 1 do 7 dni ma własną cenę, dokładnie jak w cenniku. Po 7 dniach doliczana jest stawka „+dzień”.',
    'Each figure is the total for the whole rental, not a daily rate. Past 7 days the “+ day” rate is added. High season: 1 Mar – 31 May and 1 Sep – 31 Oct.': 'Każda kwota to cena za cały wynajem, nie za dzień. Po 7 dniach doliczana jest stawka „+ dzień”. Wysoki sezon: 1 mar – 31 maj oraz 1 wrz – 31 paź.',
    '+ Add bike': '+ Dodaj rower', 'Add bike': 'Dodaj rower', 'Add a bike': 'Dodaj rower', 'Adding…': 'Dodawanie…',
    '+ size': '+ rozmiar', '+ day': '+ dzień', '+day': '+dzień', 'Stock per size': 'Stan w rozmiarach',
    'Show on the site': 'Pokaż na stronie', 'Show on the site right away': 'Pokaż na stronie od razu',
    'Insurance €': 'Ubezpieczenie €', 'Full': 'Pełne',
    '‹ Previous': '‹ Poprzedni', 'Next ›': 'Następny ›', 'Clear': 'Wyczyść', 'Total €': 'Razem €',
    'email failed': 'mail nie wyszedł', 'Staying at': 'Zakwaterowanie', 'Rider': 'Rowerzysta', 'Set-up': 'Ustawienie',
    'high': 'wysoki', 'low': 'niski', 'Insurance · Basic': 'Ubezpieczenie · Podstawowe', 'Insurance · FULL & SOS': 'Ubezpieczenie · PEŁNE + SOS',
    'High season €': 'Wysoki sezon €', 'Low season €': 'Niski sezon €', 'Name': 'Nazwa', 'Category': 'Kategoria',
    'Groupset': 'Osprzęt', 'Badge on the card': 'Plakietka na karcie', 'Description': 'Opis',
    'One or two sentences shown in the bike\'s details.': 'Jedno-dwa zdania widoczne w szczegółach roweru.',
    'Photo address': 'Adres zdjęcia', 'Leave 0 for sizes you don\'t stock — customers never see them.': 'Zostaw 0 przy rozmiarach, których nie masz — klienci ich nie zobaczą.',
    'It appears on the booking page as soon as you save, unless you switch it off below.': 'Pojawi się na stronie rezerwacji od razu po zapisaniu, chyba że wyłączysz to poniżej.',
    'Change any value, then save.': 'Zmień dowolną wartość i zapisz.', 'Discard': 'Odrzuć',
    'Unsaved changes': 'Niezapisane zmiany', 'All changes saved.': 'Wszystkie zmiany zapisane.', 'Changes discarded.': 'Zmiany odrzucone.',
    'Fleet and prices updated — the booking page uses the new values immediately.': 'Flota i ceny zaktualizowane — strona rezerwacji od razu używa nowych wartości.',
    'Could not save everything. Nothing was lost — check the values and try again.': 'Nie udało się zapisać wszystkiego. Nic nie przepadło — sprawdź wartości i spróbuj ponownie.',
    'Could not add the bike. Nothing was saved — check the values and try again.': 'Nie udało się dodać roweru. Nic nie zapisano — sprawdź wartości i spróbuj ponownie.',
    'Could not add that size.': 'Nie udało się dodać rozmiaru.',
    'All eight sizes already exist for this bike.': 'Ten rower ma już wszystkie osiem rozmiarów.',
    'Give the bike a name.': 'Nadaj rowerowi nazwę.',
    'Give the bike a category, for example "Road · Racing".': 'Podaj kategorię roweru, np. „Road · Racing”.',
    'Set the stock for at least one size, otherwise nobody can book this bike.': 'Ustaw stan przynajmniej dla jednego rozmiaru, inaczej nikt nie zarezerwuje tego roweru.',
    'The one-day price is needed for both seasons — the booking page prices every rental from it.': 'Cena za 1 dzień jest potrzebna w obu sezonach — strona rezerwacji liczy od niej każdy wynajem.',
    'That slug is already taken. Pick another one.': 'Ten identyfikator jest już zajęty. Wybierz inny.',
    'The slug may use lowercase letters, numbers and dashes only.': 'Identyfikator może zawierać tylko małe litery, cyfry i myślniki.',
    'On request': 'Na zapytanie',

    /* ---- extras ---- */
    'Extras & settings': 'Dodatki i ustawienia', 'Extras and delivery fee': 'Dodatki i opłata za dostawę',
    'Add-on prices and the delivery fee. "Long stay" price applies from the day threshold onwards.': 'Ceny dodatków i opłata za dostawę. Cena „długi pobyt” obowiązuje od podanego progu dni.',
    'Price €': 'Cena €', 'Long stay €': 'Długi pobyt €', 'From day': 'Od dnia', 'Live': 'Aktywny',
    'Delivery fee € (flat, anywhere)': 'Opłata za dostawę € (stała, w dowolne miejsce)',
    'Price agreed individually': 'Cena ustalana indywidualnie',
    'Extras and delivery fee updated.': 'Dodatki i opłata za dostawę zaktualizowane.',
    'Could not save the extras. Check the values and try again.': 'Nie udało się zapisać dodatków. Sprawdź wartości i spróbuj ponownie.',

    /* ---- journal ---- */
    'Write an article, set how it looks in Google, publish. Publishing writes a real page to the site — that is what search engines index.': 'Napisz artykuł, ustaw, jak wygląda w Google, i opublikuj. Publikacja tworzy prawdziwą stronę w serwisie — to ją indeksują wyszukiwarki.',
    '+ New article': '+ Nowy artykuł', 'Article': 'Artykuł', 'Title': 'Tytuł', 'Summary': 'Zajawka',
    'Web address (slug)': 'Adres strony (slug)', 'Web address': 'Adres strony', 'Cover image': 'Zdjęcie główne',
    'Image description': 'Opis zdjęcia', 'What the photo shows': 'Co przedstawia zdjęcie',
    'One or two sentences shown in the listing.': 'Jedno-dwa zdania widoczne na liście artykułów.',
    'Search engine listing': 'Wpis w wyszukiwarce', 'Leave empty to use the article title': 'Zostaw puste, żeby użyć tytułu artykułu',
    'Leave empty to use the summary': 'Zostaw puste, żeby użyć zajawki', 'Markdown:': 'Markdown:',
    'heading ·': 'nagłówek ·', 'list ·': 'lista ·', 'quote ·': 'cytat ·',
    'Write in plain text. Blank line starts a new paragraph.': 'Pisz zwykłym tekstem. Pusta linia zaczyna nowy akapit.',
    'Save draft': 'Zapisz szkic', 'Publish to site': 'Opublikuj na stronie', 'Publishing…': 'Publikowanie…',
    'Delete': 'Usuń', 'Draft': 'Szkic', 'Published': 'Opublikowany', 'Untitled': 'Bez tytułu',
    'No articles yet.': 'Brak artykułów.', 'Draft saved.': 'Szkic zapisany.', 'Article deleted.': 'Artykuł usunięty.',
    'Give the article a title.': 'Nadaj artykułowi tytuł.',
    'The web address (slug) cannot be empty.': 'Adres strony (slug) nie może być pusty.',
    'The web address may use lowercase letters, numbers and dashes only.': 'Adres strony może zawierać tylko małe litery, cyfry i myślniki.',
    'That web address is already taken by another article.': 'Ten adres jest już zajęty przez inny artykuł.',
    'Delete this article? The published page will be removed from the site too.': 'Usunąć ten artykuł? Opublikowana strona też zniknie z serwisu.',
    'English': 'Angielski', 'Español': 'Hiszpański', 'Polski': 'Polski',

    /* ---- SEO ---- */
    'How every page of the site appears in Google — titles, descriptions, keywords and overall health. Edits save as drafts first; "Apply to site" writes them to the live pages.': 'Jak każda strona serwisu wygląda w Google — tytuły, opisy, frazy i ogólna kondycja. Zmiany zapisują się najpierw jako szkice; „Zastosuj na stronie” wprowadza je na żywe strony.',
    'Score': 'Wynik', 'Page': 'Strona', 'Title in Google': 'Tytuł w Google', 'Keyword': 'Fraza',
    'Scanning the site…': 'Skanowanie serwisu…', 'Re-scan site': 'Skanuj ponownie', 'Apply all drafts to site': 'Zastosuj wszystkie szkice',
    '← All pages': '← Wszystkie strony', 'Focus keyword': 'Fraza kluczowa', 'Canonical address': 'Adres kanoniczny',
    'e.g. bike rental port de pollenca': 'np. bike rental port de pollenca',
    'The phrase this page should rank for. The checklist measures the page against it.': 'Fraza, na którą ta strona ma się pozycjonować. Lista kontrolna ocenia stronę pod jej kątem.',
    'The one official address Google should index for this content.': 'Jedyny oficjalny adres, który Google ma indeksować dla tej treści.',
    'Page title': 'Tytuł strony', 'Hide this page from search engines': 'Ukryj tę stronę przed wyszukiwarkami',
    'Google preview': 'Podgląd w Google', 'desktop': 'komputer', 'mobile': 'telefon', 'Checklist': 'Lista kontrolna',
    'Apply to site': 'Zastosuj na stronie', 'Readability': 'Czytelność',
    'Draft — not on site': 'Szkic — nie na stronie', 'On site': 'Na stronie',
    'Applying to the live site…': 'Wprowadzanie na żywą stronę…',
    'Saved as draft. It is not on the live site yet — use "Apply to site".': 'Zapisano jako szkic. Nie ma go jeszcze na żywej stronie — użyj „Zastosuj na stronie”.',
    'Nothing to apply — no drafts.': 'Nie ma czego wprowadzać — brak szkiców.',
    'The server is missing the GITHUB_TOKEN secret (Supabase → Edge Functions → Secrets), so it cannot write to the site yet. Your changes are safe as drafts — add the token, or ask Claude to apply them.': 'Na serwerze brakuje sekretu GITHUB_TOKEN (Supabase → Edge Functions → Secrets), więc nie może jeszcze zapisywać na stronie. Zmiany są bezpieczne jako szkice — dodaj token albo poproś Claude o ich wprowadzenie.',
    'No description yet — Google will pick text from the page.': 'Brak opisu — Google wybierze tekst ze strony.',
    'Duplicate titles': 'Powtórzone tytuły', 'Duplicate descriptions': 'Powtórzone opisy', 'Sitemap': 'Mapa strony',
    'Sitemap coverage': 'Pokrycie mapy strony', 'Broken internal links': 'Niedziałające linki wewnętrzne',
    'Languages (hreflang)': 'Wersje językowe (hreflang)', 'Hidden pages': 'Ukryte strony', 'Unapplied drafts': 'Niewprowadzone szkice',
    'Pages needing work': 'Strony do poprawy', 'Site score': 'Wynik serwisu',
    'Every page has a unique title.': 'Każda strona ma unikalny tytuł.',
    'Every page has a unique description.': 'Każda strona ma unikalny opis.',
    'sitemap.xml could not be read.': 'Nie udało się odczytać sitemap.xml.',
    'Every indexable page is in the sitemap.': 'Każda indeksowana strona jest w mapie strony.',
    'Not checked yet.': 'Jeszcze nie sprawdzono.', 'All internal links on the site lead somewhere.': 'Wszystkie linki wewnętrzne działają.',
    'No hreflang links found on the homepage.': 'Na stronie głównej brak linków hreflang.',
    'No page is blocked from indexing.': 'Żadna strona nie jest zablokowana przed indeksowaniem.',
    'Everything saved here is live on the site.': 'Wszystko, co tu zapisano, jest na żywej stronie.',
    'No page scores red.': 'Żadna strona nie ma czerwonego wyniku.',
    'Missing — Google will invent one.': 'Brak — Google wymyśli własny.',
    'Missing — Google will pick random text from the page.': 'Brak — Google wybierze przypadkowy tekst ze strony.',
    'Description': 'Opis',
    'Not set — set it to unlock the keyword checks.': 'Nie ustawiono — ustaw, żeby włączyć kontrole frazy.',
    'Keyword in title': 'Fraza w tytule', 'Keyword in description': 'Fraza w opisie', 'Keyword in main heading': 'Fraza w nagłówku głównym',
    'Keyword in address': 'Fraza w adresie', 'Keyword in opening text': 'Fraza na początku treści', 'Keyword in content': 'Fraza w treści',
    'Keyword density': 'Nasycenie frazą', 'Content length': 'Długość treści', 'Headings': 'Nagłówki',
    'Image descriptions': 'Opisy obrazków', 'Internal links': 'Linki wewnętrzne', 'Social preview': 'Podgląd w social mediach',
    'Structured data': 'Dane strukturalne', 'Visibility': 'Widoczność', 'Sentence length': 'Długość zdań',
    'Paragraph length': 'Długość akapitów', 'Subheading use': 'Śródtytuły',
    'Present, near the start — ideal.': 'Jest, blisko początku — idealnie.', 'Present.': 'Jest.',
    'All the words are there, but scattered.': 'Wszystkie słowa są, ale rozproszone.',
    'All the words are there (scattered — still fine).': 'Wszystkie słowa są (rozproszone — nadal OK).',
    'Not in the description.': 'Brak w opisie.', 'Present in the H1.': 'Jest w H1.', 'All the words appear in the H1.': 'Wszystkie słowa są w H1.',
    'The main heading does not contain it.': 'Nagłówek główny jej nie zawiera.', 'Present in the page address.': 'Jest w adresie strony.',
    'The address does not contain it (fine for existing pages — do not change live addresses lightly).': 'Adres jej nie zawiera (dla istniejących stron to OK — nie zmieniaj pochopnie działających adresów).',
    'Present early in the content.': 'Jest na początku treści.', 'The words appear early in the content.': 'Słowa pojawiają się na początku treści.',
    'Does not appear in the first paragraph.': 'Nie ma jej w pierwszym akapicie.',
    'The words appear separately, but never together — work the phrase in once or twice.': 'Słowa występują osobno, ale nigdy razem — wpleć frazę raz czy dwa.',
    'Does not appear in the page text at all.': 'W ogóle nie występuje w tekście strony.',
    'No H1 on the page.': 'Brak H1 na stronie.', 'og:title and og:description present.': 'Są og:title i og:description.',
    'Missing og tags — ugly shares on social media.': 'Brak tagów og — brzydkie udostępnienia w social mediach.',
    'No structured data on this page.': 'Brak danych strukturalnych na tej stronie.',
    'No overlong paragraphs.': 'Brak zbyt długich akapitów.',
    'Over 300 words with no subheadings — add H2s so the text scans.': 'Ponad 300 słów bez śródtytułów — dodaj H2, żeby tekst dało się przeskanować wzrokiem.',
    'Text is broken up well by subheadings.': 'Tekst jest dobrze podzielony śródtytułami.',
    'Set.': 'Ustawiony.', 'Not set — risk of duplicate-content signals.': 'Nie ustawiono — ryzyko sygnałów o powielonej treści.',
    'This page is hidden from search engines (noindex).': 'Ta strona jest ukryta przed wyszukiwarkami (noindex).'
  };

  var P = [
    [/^Size (\S+)$/, 'Rozmiar $1'],
    [/^(\d+) free$/, function (m, n) { return n + ' ' + (n === '1' ? 'wolna' : 'wolnych'); }],
    [/^size (\S+)$/, 'rozmiar $1'],
    [/^Size (\S+) · (\d+) in stock$/, 'Rozmiar $1 · $2 na stanie'],
    [/^(\S+) \((\d+) in stock\)$/, '$1 ($2 na stanie)'],
    [/^(\d+) days · pickup (\d\d:\d\d)$/, function (m, n, t) { return n + ' ' + dni(n) + ' · odbiór ' + t; }],
    [/^(\d+) (day|days)( · past)?$/, function (m, n, x, p) { return n + ' ' + dni(n) + (p ? ' · minęło' : ''); }],
    [/^(.+) · size (\S+)$/, '$1 · rozmiar $2'],
    [/^(.+) · all sizes$/, '$1 · wszystkie rozmiary'],
    [/^First day (.+) — now pick the last day\.$/, 'Pierwszy dzień $1 — teraz wybierz ostatni.'],
    [/^(\d+) days? selected/, function (m, n) { return n + ' ' + dni(n) + ' wybrano'; }],
    [/^Reservation (\w+) created and confirmed — (.+)\.$/, 'Rezerwacja $1 utworzona i potwierdzona — $2.'],
    [/^Reservation (\w+) updated — (.+?)( \(manual price; calculated (.+)\))?\.$/, function (m, c, t, x, k) { return 'Rezerwacja ' + c + ' zaktualizowana — ' + t + (x ? ' (cena ręczna; wyliczona ' + k + ')' : '') + '.'; }],
    [/^No unit free on (.+) for this bike and size\. Pick other dates, or tick "Allow blocked dates" if this is a service block you want to override\.$/, 'Brak wolnej sztuki w dniu $1 dla tego roweru i rozmiaru. Wybierz inne daty albo zaznacz „Zezwól na zablokowane dni”, jeśli to blokada serwisowa do pominięcia.'],
    [/^Add which size\? Available: (.+)$/, 'Który rozmiar dodać? Dostępne: $1'],
    [/^Size (\S+) added with 1 unit — set the stock and save\.$/, 'Dodano rozmiar $1 z 1 sztuką — ustaw stan i zapisz.'],
    [/^"(.+)" isn't one of the available sizes\.$/, '„$1” nie jest dostępnym rozmiarem.'],
    [/^Another bike already uses the slug "(.+)"\.$/, 'Inny rower używa już identyfikatora „$1”.'],
    [/^(.+) added\. It is live on the booking page now\.$/, 'Dodano: $1. Jest już widoczny na stronie rezerwacji.'],
    [/^(.+) added\. It is hidden until you switch it on\.$/, 'Dodano: $1. Pozostaje ukryty, dopóki go nie włączysz.'],
    [/^Published\. The page appears at (.*) in about a minute\.$/, 'Opublikowano. Strona pojawi się pod adresem $1 za około minutę.'],
    [/^Saved, but publishing failed: (.*)$/, 'Zapisano, ale publikacja się nie udała: $1'],
    [/^Could not (save|delete|apply|load SEO data|load articles): (.*)$/, function (m, a, r) { return ({ 'save': 'Nie zapisano', 'delete': 'Nie usunięto', 'apply': 'Nie wprowadzono', 'load SEO data': 'Nie wczytano danych SEO', 'load articles': 'Nie wczytano artykułów' })[a] + ': ' + r; }],
    [/^Not saved: (.*)$/, 'Nie zapisano: $1'],
    [/^Applied: (.+)\. Live in about a minute\.$/, 'Wprowadzono: $1. Na żywo za około minutę.'],
    [/^Short \((\d+) characters\) — room to say more\.$/, 'Krótki ($1 znaków) — jest miejsce na więcej.'],
    [/^Likely cut off in Google \((\d+) characters, ~(\d+)px of 580px\)\.$/, 'Google go prawdopodobnie przytnie ($1 znaków, ~$2px z 580px).'],
    [/^Good length \((\d+) characters, ~(\d+)px\)\.$/, 'Dobra długość ($1 znaków, ~$2px).'],
    [/^Good length \((\d+) characters\)\.$/, 'Dobra długość ($1 znaków).'],
    [/^Short \((\d+) of ~155 characters\) — use the space\.$/, 'Krótki ($1 z ~155 znaków) — wykorzystaj miejsce.'],
    [/^Will be cut off \((\d+) of ~155 characters\)\.$/, 'Zostanie przycięty ($1 z ~155 znaków).'],
    [/^"(.+)" does not appear in the title\.$/, '„$1” nie występuje w tytule.'],
    [/^(\d+)× \(([\d.]+)%\) — reads as keyword stuffing, trim it\.$/, '$1× ($2%) — to już upychanie frazy, ogranicz.'],
    [/^Appears (\d+)× \(([\d.]+)% of the text\)\.$/, 'Występuje $1× ($2% tekstu).'],
    [/^(\d+) words\.$/, '$1 słów.'],
    [/^(\d+) words — thin; 300\+ ranks better\. \(Text drawn by scripts is not counted here, though Google sees it\.\)$/, '$1 słów — mało; 300+ pozycjonuje się lepiej. (Tekst rysowany przez skrypty nie jest tu liczony, choć Google go widzi.)'],
    [/^Only (\d+) words of visible text\.$/, 'Tylko $1 słów widocznego tekstu.'],
    [/^Exactly one visible H1(, (\d+) subheadings)?\.$/, function (m, x, n) { return 'Dokładnie jeden widoczny H1' + (x ? ', śródtytułów: ' + n : '') + '.'; }],
    [/^(\d+) visible H1 tags — should be exactly one\.$/, 'Widocznych H1: $1 — powinien być dokładnie jeden.'],
    [/^(\d+) of (\d+) images have no alt attribute at all\.$/, '$1 z $2 obrazków nie ma w ogóle atrybutu alt.'],
    [/^All (\d+) images carry an alt attribute \(empty alt on decorative images is correct\)\.$/, 'Wszystkie obrazki ($1) mają atrybut alt (pusty alt na ozdobnikach jest poprawny).'],
    [/^(\d+) links to other pages of the site\.$/, 'Linków do innych stron serwisu: $1.'],
    [/^JSON-LD present: (.+)\.$/, 'Jest JSON-LD: $1.'],
    [/^(\d+)% of sentences run past 20 words — easy to read\.$/, '$1% zdań ma ponad 20 słów — czyta się łatwo.'],
    [/^(\d+)% of sentences run past 20 words — aim for 25% or less\.$/, '$1% zdań ma ponad 20 słów — celuj w 25% lub mniej.'],
    [/^(\d+) paragraph\(s\) over 150 words — split them\.$/, 'Akapitów ponad 150 słów: $1 — podziel je.'],
    [/^Longest block between subheadings is (\d+) words — add an H2 in there\.$/, 'Najdłuższy blok bez śródtytułu ma $1 słów — dodaj tam H2.'],
    [/^(\d+) pages listed in sitemap\.xml\.$/, 'Stron w sitemap.xml: $1.'],
    [/^Not in the sitemap: (.+)$/, 'Brak w mapie strony: $1'],
    [/^(\d+) language links on the homepage \(EN\/ES\/PL\)\.$/, 'Linków językowych na stronie głównej: $1 (EN/ES/PL).'],
    [/^(.+) hidden from Google\.$/, '$1 — ukryte przed Google.'],
    [/^(\d+) draft\(s\) waiting: (.+)$/, 'Czekające szkice ($1): $2'],
    [/^(\d+) \/ 100 on average across (\d+) pages\.$/, 'Średnio $1 / 100 na $2 stronach.']
  ];
  function dni(n) { n = +n; return n === 1 ? 'dzień' : 'dni'; }

  function tr(s) {
    if (s == null) return s;
    var t = String(s), core = t.trim();
    if (!core) return t;
    var out = null;
    if (Object.prototype.hasOwnProperty.call(D, core)) out = D[core];
    else for (var i = 0; i < P.length; i++) {
      if (P[i][0].test(core)) { out = core.replace(P[i][0], P[i][1]); break; }
    }
    if (out == null) return t;
    var lead = t.match(/^\s*/)[0], tail = t.match(/\s*$/)[0];
    return lead + out + tail;
  }
  window.trPL = tr;

  /* never translate guest data, article content, typed values or SEO previews */
  /* areas holding data, previews or typed content: never touched */
  var SKIP = 'script,style,code,pre,.cd,#sSerp,#cSerp,.serp,.cms-body,.md-prev,[data-notr]';
  function skip(el) { return !el || (el.closest && el.closest(SKIP)); }
  /* form fields: their labels (placeholder, title) are translated, their values never */
  function isField(el) { return el && /^(TEXTAREA|INPUT)$/.test(el.tagName); }

  var ATTRS = ['placeholder', 'title', 'aria-label'];
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { fixText(root); return; }
    if (root.nodeType !== 1 || skip(root)) return;
    fixAttrs(root);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (n.nodeType === 1) return skip(n) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        return isField(n.parentElement) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = w.nextNode())) { if (n.nodeType === 3) fixText(n); else fixAttrs(n); }
  }
  function fixText(n) {
    if (skip(n.parentElement) || isField(n.parentElement)) return;
    var v = n.nodeValue, r = tr(v);
    if (r !== v) n.nodeValue = r;
  }
  function fixAttrs(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = el.getAttribute && el.getAttribute(ATTRS[i]);
      if (a) { var r = tr(a); if (r !== a) el.setAttribute(ATTRS[i], r); }
    }
  }

  var _confirm = window.confirm, _alert = window.alert, _prompt = window.prompt;
  window.confirm = function (m) { return _confirm.call(window, tr(m)); };
  window.alert = function (m) { return _alert.call(window, tr(m)); };
  window.prompt = function (m, d) { return _prompt.call(window, tr(m), d); };

  function start() {
    walk(document.body);
    document.title = 'Venga — Panel';
    new MutationObserver(function (list) {
      for (var i = 0; i < list.length; i++) {
        var m = list[i];
        if (m.type === 'characterData') fixText(m.target);
        else if (m.type === 'attributes') fixAttrs(m.target);
        else for (var j = 0; j < m.addedNodes.length; j++) walk(m.addedNodes[j]);
      }
    }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
