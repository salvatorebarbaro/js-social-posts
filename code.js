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
  ];

  const container_row=document.querySelector("#container_post");
//   creo gli elementi nel html tramite questo for 
  for( let i=0;i<post.length;i++)
  {
    // creo elemento nella pagina html
    const singlePostElement= document.createElement("section");
    // assegno classe col all'elemento cosi da poter strutturare con bootstrap
    singlePostElement.className="col"
    // assegno classi a singlePostElement
    singlePostElement.classList.add("bg-white","border","rounded-2")
    // fatto esclusivamente per esercitarsi     // 
        // inserisco il percorso delle immagini da qui per esercitarsi
        post[i].img=`./img/giornata${i+1}.jfif`;
        // inserisco nuova proprietà all'interno dell'oggetto
        post[i].like=[i+Math.floor(Math.random()* 100000)];
    // fine
    //inserisco il contenuto
    singlePostElement.innerHTML = `
<div>
    <div id="container_head" class="d-flex gap-3 my-3 ">
        <img class="border rounded-5  size_img" src=./img/persona${[i+1]}.jfif>
        <div id="container_head_text" class="d-flex flex-column ">
            // inserisco il titolo in maniera dinamica
            <h2 class="mb-1">${post[i].nome_e_cognome}</h2>
            <span>${post[i].data}</span>
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
    // non essendo nel don mi sono ricercato l'elemento all'inenro del mio col
    const buttonsLike=singlePostElement.querySelector(".addLike");
    // inizializzo variabile booleana
    let likeStatus=true;
    // ascoltatore inserito
    buttonsLike.addEventListener("click",() => 
    {
        
        if(!likeStatus)
            {
                // Se il pulsante "like" è disattivato, esegui le seguenti operazioni:

                // Incrementa il conteggio dei "like" di 1
                post[i].like = Number(post[i].like) + 1;

                // Seleziona l'elemento HTML del contatore dei "like"
                let contatore = singlePostElement.querySelector("#contatore");

                // Aggiorna il contenuto del contatore dei "like" con il nuovo valore
                contatore.innerHTML = `${post[i].like}`;
            }
            else
            {
                // Se il pulsante "like" è attivato, esegui le seguenti operazioni:

                // Decrementa il conteggio dei "like" di 1
                post[i].like = Number(post[i].like) - 1;

                // Seleziona l'elemento HTML del contatore dei "like"
                let contatore = singlePostElement.querySelector("#contatore");

                // Aggiorna il contenuto del contatore dei "like" con il nuovo valore
                contatore.innerHTML = `${post[i].like}`;
            }

            // Inverti lo stato del pulsante "like"
            likeStatus = !likeStatus; 


        })


    // appendo alla row
    container_row.appendChild(singlePostElement);
   
    

    //   prendo i dati dell'array
    for(let dati in post[i])
    {
    // abbiamo preso i dati dei post
    console.log(post[i][dati])
    }    
  }

