const post = [
  {
      nome_e_cognome: "Alberto Frettola",
      data: "06/24/2012",
      testo: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      img: "",
  },
  {
      nome_e_cognome: "Maria Rossi",
      data: "07/01/2023",
      testo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet aliquam purus. Donec tincidunt leo ac urna tincidunt, eget convallis risus tincidunt. Sed elementum tempus egestas. Nunc velit risus, tincidunt eget massa eget, aliquam ultrices nisi. Fusce aliquam neque eget neque ultrices, eget hendrerit neque ultricies.",
      img: "",
  },
  {
      nome_e_cognome: "Giovanni Verdi",
      data: "08/15/2024",
      testo: "Proin eget tortor risus. Cras ullamcorper massa sit amet lacus egestas, ac ultrices nisi tincidunt. Nunc accumsan, ipsum sed dignissim feugiat, risus nisl egestas massa, in pulvinar neque leo ac lectus. Fusce aliquam risus sit amet sapien ultrices, eget hendrerit neque ultricies.",
      img: "",
  },
  {
    nome_e_cognome: "Marco Rossi",
    data: "10/21/2023",
    testo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet ipsum ut quam consequat volutpat non ut diam. Sed cursus sem nec nunc faucibus, vitae pharetra quam tincidunt.",
    img: "marco_rossi.jpg",
    like: 123,
    id: 2
  }
  
];

const container_row = document.querySelector("#container_post");

// Ciclo per creare e aggiungere gli elementi post al DOM
for (let i = 0; i < post.length; i++) {
  const singlePostElement = document.createElement("section");
  singlePostElement.className = "col";
  singlePostElement.classList.add("bg-white", "border", "rounded-2");

  // Aggiungo l'immagine del profilo dinamicamente
  post[i].img = `./img/giornata${i+1}.jfif`;

  // Inizializzo il conteggio dei like con un numero casuale
  post[i].like = [i + Math.floor(Math.random() * 100000)];

  // Inizializzo l'id del post
  post[i].id = [i + 1];

  // Inserisco il contenuto HTML dinamico nel singlePostElement
  singlePostElement.innerHTML = `
      <div>
          <div id="container_head" class="d-flex gap-3 my-3 ">
          <img class="border rounded-5 size_img" src=./img/persona${[i+1]}.jfif>
              <div id="container_head_text" class="d-flex flex-column ">
                  <h2 class="mb-1">${post[i].nome_e_cognome}</h2>
                <!-- richiamo direttamente la funzione nel codice passandogli il valore.--> 
                  <span>${dateIta(post[i].data)}</span>
              </div>
          </div>
          <p class="fw-semibold">${post[i].testo}</p>
          <img class="img-fluid mb-3 border rounded-1 " src="${post[i].img}" alt="">
          <div id="containerButton" class="d-flex justify-content-around mb-4">
              <button type="button" class="btn btn-primary addLike"> Like <i class="fa-regular fa-thumbs-up"></i></button>
              <button type="button" id="contatore" class="btn btn-light border border-black" disabled>${post[i].like}</button>
          </div>
      </div>
  `;

  const buttonsLike = singlePostElement.querySelector(".addLike");
  let likeStatus = true;
  const arrayId = [];
  let button=singlePostElement.querySelector(".addLike");
  // Aggiungo un listener per il click sul pulsante "like"
  buttonsLike.addEventListener("click", () => {
      // Controllo se il like è già stato inserito
      if (!likeStatus) {
          // Se il like è già stato inserito, decremento il conteggio dei like e rimuovo l'id dal arrayId
          post[i].like = Number(post[i].like) - 1;
          // Questo codice ricerca l'indice di un elemento specifico nell'array arrayId. Viene utilizzato per verificare se l'id del post corrente è già presente nell'array
          const index = arrayId.indexOf(post[i].id);
          // togliamo l'id
          arrayId.splice(index, 1);
          // dichiaramo il bottone
          
          button.classList.add("text-danger","btn-warning");

          button.classList.remove("btn-primary");
      } else {
          // Se il like non è stato inserito, incremento il conteggio dei like e aggiungo l'id al arrayId
          post[i].like = Number(post[i].like) + 1;
          arrayId.push(post[i].id);
          button.classList.remove("text-danger","btn-warning");

          button.classList.add("btn-primary")

      }

      // Seleziono l'elemento HTML del contatore dei "like" e aggiorno il contenuto
      let contatore = singlePostElement.querySelector("#contatore");
      contatore.innerHTML = `${post[i].like}`;

      // Inverto lo stato del pulsante "like"
      likeStatus = !likeStatus;
  });

  // Aggiungo il singlePostElement al container
  container_row.appendChild(singlePostElement);
  console.log(`./img/persona${[i+1]}.jfif`)
}


function dateIta(date)
{
    // funzione usata per trasformare la data dall'inglese a italiano 
    const dateinitaliano=  new Date(date).toLocaleDateString('it-IT', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
    
    return dateinitaliano;
    
   
}

