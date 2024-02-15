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

//   creo gli elementi nel html tramite questo for 
  for( let i=0;i<post.length;i++)
  {
    // creo elemento nella pagina html
    const singlePostElement= document.createElement("section");
    // assegno classe col all'elemento cosi da poter strutturare con bootstrap
    singlePostElement.className="col"
    // stampo i dati
    console.log(singlePostElement)
  }

//   prendo i dati dell'array
  for(let dati in post)
  {
    // abbiamo preso i dati dei post
    console.log(post[dati])
  }