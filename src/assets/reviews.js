const reviews = [
    {
        id: 1,
        film_id: 1,
        autore: "Marco Rossi",
        voto: 5,
        data: "2023-05-15",
        testo: "Capolavoro assoluto di Nolan. La complessità narrativa e gli effetti visivi lasciano senza fiato. Da vedere e rivedere."
    },
    {
        id: 2,
        film_id: 1,
        autore: "Anna Verdi",
        voto: 4,
        data: "2023-06-22",
        testo: "Concettualmente straordinario, a volte un po' confusionario. Di Leo è fenomenale nel suo ruolo."
    },
    {
        id: 3,
        film_id: 2,
        autore: "Luigi Bianchi",
        voto: 5,
        data: "2022-11-30",
        testo: "Il miglior film di sempre. Brando e Pacino danno lezioni di recitazione. La scena del ristorante è leggendaria."
    },
    {
        id: 4,
        film_id: 3,
        autore: "Sofia Neri",
        voto: 5,
        data: "2023-01-27",
        testo: "Una commovente lezione di umanità. Benigni riesce a far sorridere anche nell'orrore. Strappalacrime garantito."
    },
    {
        id: 5,
        film_id: 4,
        autore: "Elena Romano",
        voto: 4,
        data: "2022-09-14",
        testo: "Epico racconto gangster con una colonna sonora indimenticabile. La lunghezza potrebbe scoraggiare alcuni spettatori."
    },
    {
        id: 6,
        film_id: 5,
        autore: "Paolo Costa",
        voto: 5,
        data: "2023-03-08",
        testo: "Amore puro per il cinema. La scena finale è uno dei momenti più emozionanti della storia del cinema."
    },
    {
        id: 7,
        film_id: 6,
        autore: "Giovanni Ferrari",
        voto: 4,
        data: "2023-07-19",
        testo: "Crowe è perfetto come Massimo Decimo Meridio. Le scene di battaglia sono ancora impressionanti dopo 20 anni."
    },
    {
        id: 8,
        film_id: 7,
        autore: "Laura Esposito",
        voto: 5,
        data: "2023-04-05",
        testo: "Scienza e emozioni si fondono perfettamente. La teoria dei buchi neri è resa accessibile e poetica."
    },
    {
        id: 9,
        film_id: 8,
        autore: "Davide Greco",
        voto: 4,
        data: "2022-12-10",
        testo: "Colori e musica trascinanti. Il finale realistico aggiunge profondità a questa fiaba moderna."
    },
    {
        id: 10,
        film_id: 9,
        autore: "Francesca Russo",
        voto: 5,
        data: "2023-02-18",
        testo: "Geniale satira sociale che diventa thriller. Il cambio di tono è gestito magistralmente. Meritatissimo Oscar."
    },
    {
        id: 11,
        film_id: 10,
        autore: "Alessio Marino",
        voto: 4,
        data: "2023-08-23",
        testo: "Tarantino al suo meglio. Christoph Waltz ruba la scena in ogni apparizione. Violento ma necessario."
    },
    {
        id: 12,
        film_id: 2,
        autore: "Cinzia Lombardi",
        voto: 5,
        data: "2023-09-01",
        testo: "Ogni volta che lo rivedo scopro nuovi dettagli. La sceneggiatura è perfetta in ogni battuta."
    },
    {
        id: 13,
        film_id: 3,
        autore: "Matteo De Santis",
        voto: 5,
        data: "2023-10-12",
        testo: "Un capolavoro senza tempo che ridefinisce il concetto di amore paterno. Benigni supera sé stesso."
    },
    {
        id: 14,
        film_id: 7,
        autore: "Elisa Conti",
        voto: 4,
        data: "2023-09-30",
        testo: "La rappresentazione scientifica dello spazio è impeccabile. La scena del buco nero è ipnotica."
    },
    {
        id: 15,
        film_id: 4,
        autore: "Roberto Mariani",
        voto: 5,
        data: "2023-11-05",
        testo: "Il montaggio non-lineare di Leone crea un'atmosfera onirica. De Niro dà una performance monumentale."
    },
    {
        id: 16,
        film_id: 9, autore: "Alessia Riva",
        voto: 5,
        data: "2023-08-17",
        testo: "La scena della scala è un'allegoria perfetta della lotta di classe. Regia chirurgica."
    },
    {
        id: 17,
        film_id: 5,
        autore: "Gabriele Colombo",
        voto: 5,
        data: "2023-12-14",
        testo: "La colonna sonora di Morricone fa piangere ancora prima che accada qualcosa. Cinema puro."
    },
    {
        id: 18,
        film_id: 1,
        autore: "Federico Gallo",
        voto: 3,
        data: "2023-07-22",
        testo: "Idee visivamente stupefacenti ma la trama è troppo convoluta per i propri stessi standard."
    },
    {
        id: 19,
        film_id: 10,
        autore: "Simona Ferrara",
        voto: 4,
        data: "2023-01-09",
        testo: "La scena del tavolo da pranzo è Tarantino allo stato puro: dialoghi taglienti e tensione crescente."
    },
    {
        id: 20,
        film_id: 6,
        autore: "Daniele Barbieri",
        voto: 5,
        data: "2023-02-28",
        testo: "Ridley Scott eleva il peplum a opera d'arte. 'A me gli occhi' resta una delle frasi più iconiche."
    },
    {
        id: 21,
        film_id: 2,
        autore: "Valentina Serra",
        voto: 5,
        data: "2023-04-19",
        testo: "La scena del battesimo è forse il miglior montaggio parallelo della storia del cinema."
    },
    {
        id: 22,
        film_id: 8,
        autore: "Luca Gentili",
        voto: 3,
        data: "2023-05-03",
        testo: "Estetica impeccabile ma il finale lascia un po' di amaro in bocca. Stone è luminosa."
    },
    {
        id: 23,
        film_id: 7,
        autore: "Eva Lombardi",
        voto: 5,
        data: "2023-06-11",
        testo: "La teoria del quinto elemento è spiegata con una poesia rara per un film scientifico."
    },
    {
        id: 24,
        film_id: 4,
        autore: "Marco Moretti",
        voto: 4,
        data: "2023-12-01",
        testo: "La versione integrale di 229 minuti è un'esperienza immersiva che ogni cinefilo dovrebbe fare."
    }
];

export default reviews;