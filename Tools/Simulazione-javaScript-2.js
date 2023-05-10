// 2 - Find and update
// Scrivere una funzione che, dato in ingresso un array di oggetti così strutturato:
// sia in grado di attribuire un valore di default dove sia presente un null, seguendo queste
// regole:
// ● se il type e’ “boolean” deve aggiornare usando false
// ● se il type e’ “string” deve aggiornare usando stringa vuota
// ● se il type e’ “number” deve aggiornare usando 0
// ● se il type e’ “array” deve aggiornare usando array vuoto
// ● se il type e’ “object” deve aggiornare usando oggetto vuoto
// Come vedete ogni singolo oggetto ha sempre due attributi, uno la cui chiave non e’ dato a
// sapere a priori, un altro la cui chiave e’ sempre “type” e il valore e’ nella lista qui sopra.
// La funzione deve ritornare lo stesso oggetto ricevuto in input, con i valori aggiornati.