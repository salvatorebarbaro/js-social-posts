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
      img: "https://www.example.com/image.jpg",
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
    singlePostElement.classList.add("bg-white")
//inserisco il contenuto
singlePostElement.innerHTML = `
<div>
    <div id="container_head" class="d-flex gap-3 my-3 ">
        <img class="border rounded-5  size_img" src=./img/persona${[i+1]}.jfif>
        <div id="container_head_text" class="d-flex flex-column ">
            <h2 class="mb-1">${post[i].nome_e_cognome}</h2>
            <span>${post[i].data}</span>
        </div>
    </div>
 <p>${post[i].testo}</p>
</div>
`;


    // appendo alla row
    container_row.appendChild(singlePostElement);
   
    

    //   prendo i dati dell'array
    for(let dati in post[i])
    {
    // abbiamo preso i dati dei post
    console.log(post[i][dati])
    }    
  }

