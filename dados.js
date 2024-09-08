let dados = [
  {
    titulo: "Daenerys Targaryen",
    descricao: "Daenerys Targaryen é uma das personagens mais complexas e icônicas da saga As Crônicas de Gelo e Fogo de George R.R. Martin e da adaptação para a televisão, Game of Thrones. Exilada desde a infância, Daenerys ascende de uma escrava a uma poderosa rainha, forjando um exército e domando três dragões.",
    link: "https://pt.wikipedia.org/wiki/Daenerys_Targaryen",
    tags: "mãe dos dragões dracarys khaleesi"
  },
  {
    titulo: "Arya Stark",
    descricao: "Arya Stark é uma personagem forte e determinada da saga As Crônicas de Gelo e Fogo. Desde jovem, demonstra habilidades com a espada e um desejo de vingança. Ao longo da série, ela se transforma em uma assassina habilidosa, conhecida como 'Faceless Man'.",
    link: "https://pt.wikipedia.org/wiki/Arya_Stark",
    tags: "ninguém agulha Braavos sem rosto"
  },
  {
    titulo: "Tyrion Lannister",
    descricao: "Tyrion Lannister, o Anão, é uma das personagens mais inteligentes e complexas de Game of Thrones. Apesar de ser frequentemente subestimado por sua aparência, Tyrion prova ser um estrategista brilhante e um conselheiro leal. Ele desempenha um papel crucial em diversos eventos da série.",
    link: "https://pt.wikipedia.org/wiki/Tyrion_Lannister",
    tags: "anão anao inteligente conselheiro"
  },
  {
    titulo: "Jon Snow",
    descricao: "Bastardo de Ned Stark, Jon Snow é um personagem complexo e moralmente questionável. Ele se junta à Patrulha da Noite e se torna um líder, enfrentando os perigos além da Muralha.",
    link: "https://pt.wikipedia.org/wiki/Jon_Snow",
    tags: "bastardo muralha patrulha da noite"
  },
  {
    titulo: "Cersei Lannister",
    descricao: "Rainha regente de Westeros, Cersei Lannister é uma manipuladora e ambiciosa personagem, disposta a fazer qualquer coisa para proteger sua família e manter o poder.",
    link: "https://pt.wikipedia.org/wiki/Cersei_Lannister",
    tags: "rainha leões westeros poder"
  },
  {
    titulo: "Jaime Lannister",
    descricao: "Gêmeo de Cersei Lannister, Jaime é um guerreiro habilidoso e complexo. Ele começa como um vilão, mas evolui ao longo da série, mostrando um lado mais humano.",
    link: "https://pt.wikipedia.org/wiki/Jaime_Lannister",
    tags: "guerreiro lannister"
  },
  {
    titulo: "Bran Stark",
    descricao: "O filho mais novo de Ned Stark, Bran desenvolve habilidades sobrenaturais após uma queda que o deixa paralisado. Ele se torna o Corvo de Três Olhos, com a capacidade de ver o passado, presente e futuro.",
    link: "https://pt.wikipedia.org/wiki/Bran_Stark",
    tags: "stark corvo de três olhos verdevidente"
  },
  {
    titulo: "Joffrey Baratheon",
    descricao: "Filho de Cersei Lannister e Robert Baratheon, Joffrey é um jovem rei sádico e cruel. Sua tirania desencadeia uma série de eventos que levam à guerra.",
    link: "https://pt.wikipedia.org/wiki/Joffrey_Baratheon",
    tags: "baratheon cruel rei"
  },
  {
    titulo: "Varys",
    descricao: "Eunuco e mestre da intriga, Varys é conhecido como o Pássaro e Mão Pequena. Ele é um jogador mestre nos bastidores do poder, buscando sempre o bem maior para Westeros.",
    link: "https://pt.wikipedia.org/wiki/Varys",
    tags: "intriga mestre dos sussurros"
  },
  {
    titulo: "Tywin Lannister",
    descricao: "Patriarca da Casa Lannister, Tywin é um homem calculista e implacável. Ele é conhecido por sua inteligência e astúcia, e por fazer o que for necessário para proteger sua família e aumentar seu poder.",
    link: "https://pt.wikipedia.org/wiki/Tywin_Lannister",
    tags: "lannister patriarca estratégia"
  },
  {
    titulo: "Daario Naharis",
    descricao: "Mercenário dothraki, conhecido por sua beleza e habilidade com a espada. Tornou-se amante de Daenerys Targaryen e um de seus principais conselheiros militares.",
    link: "https://pt.wikipedia.org/wiki/Daario_Naharis",
    tags: "dothraki mercenário amante"
  },
  {
    titulo: "Melisandre",
    descricao: "Sacerdotisa de R'hllor, a deusa da luz. Conhecida por suas habilidades mágicas e profecias, ela se junta a Stannis Baratheon em sua luta pelo Trono de Ferro.",
    link: "https://pt.wikipedia.org/wiki/Melisandre",
    tags: "sacerdotisa magia r'hllor"
  },
  {
    titulo: "Jorah Mormont",
    descricao: "Cavaleiro exilado, leal a Daenerys Targaryen. Inicialmente espionava Daenerys para o rei Robert Baratheon, mas eventualmente se torna um de seus mais fiéis companheiros.",
    link: "https://pt.wikipedia.org/wiki/Jorah_Mormont",
    tags: "cavaleiro exilado leal"
  },
  {
    titulo: "Sandor Clegane",
    descricao: "Conhecido como O Montanha, é um guerreiro brutal e queimado, a serviço da Casa Lannister. Apesar de sua aparência assustadora, mostra um lado mais humano ao longo da série.",
    link: "https://pt.wikipedia.org/wiki/Sandor_Clegane",
    tags: "montanha guerreiro brutal"
  },
  {
    titulo: "Ygritte",
    descricao: "Selvagem do povo livre, habilidosa com arco e flecha. Se apaixona por Jon Snow durante sua jornada além da Muralha.",
    link: "https://pt.wikipedia.org/wiki/Ygritte",
    tags: "selvagem arco e flecha"
  },
  {
    titulo: "Gendry Baratheon",
    descricao: "Bastardo de Robert Baratheon, Gendry é um habilidoso ferreiro. Ele se junta a Arya Stark e ao Cão de Caça em sua jornada e descobre suas verdadeiras origens.",
    link: "https://pt.wikipedia.org/wiki/Gendry_Baratheon",
    tags: "baratheon ferreiro bastardo"
  },
  {
    titulo: "Yara Greyjoy",
    descricao: "Irmã de Theon Greyjoy, Yara é uma guerreira feroz e ambiciosa. Ela busca liderar as Ferro-Nascidos e restaurar a glória de sua casa.",
    link: "https://pt.wikipedia.org/wiki/Yara_Greyjoy",
    tags: "greyjoy guerreira ferro-nascidos"
  },
  {
    titulo: "Davos Seaworth",
    descricao: "Contrabandista de sal, Davos é um homem leal e honrado. Ele se torna a Mão do Rei Stannis Baratheon e um conselheiro sábio.",
    link: "https://pt.wikipedia.org/wiki/Davos_Seaworth",
    tags: "contrabandista leal conselheiro"
  },
  {
    titulo: "Brienne de Tarth",
    descricao: "Uma das maiores guerreiras de Westeros, Brienne é leal a Catelyn Stark e, posteriormente, a Sansa Stark. Ela é conhecida por sua força e honra.",
    link: "https://pt.wikipedia.org/wiki/Brienne_de_Tarth",
    tags: "guerreira leal honra"
  },
  {
    titulo: "Samwell Tarly",
    descricao: "Um homem tímido e estudioso, Samwell se junta à Patrulha da Noite. Apesar de não ser um guerreiro, ele demonstra grande inteligência e coragem.",
    link: "https://pt.wikipedia.org/wiki/Samwell_Tarly",
    tags: "patrulha da noite estudioso"
  },
  {
    titulo: "Tormund Giantsbane",
    descricao: "Um selvagem imponente e barbudo, Tormund é conhecido por sua força e amor pela cerveja. Ele se torna um aliado de Jon Snow e um líder respeitado entre os selvagens.",
    link: "https://pt.wikipedia.org/wiki/Tormund_Giantsbane",
    tags: "selvagem forte líder"
  },
  {
    titulo: "Gilly",
    descricao: "Uma mulher selvagem que se junta à Patrulha da Noite após a morte de seu marido. Ela se apaixona por Samwell Tarly e dá à luz ao filho dele.",
    link: "https://pt.wikipedia.org/wiki/Gilly",
    tags: "selvagem mãe"
  },
  {
    titulo: "Vargo Hoat",
    descricao: "Um mercenário cruel e sádico, Vargo Hoat é conhecido por sua crueldade e por cortar as línguas de seus prisioneiros. Ele serve a Tywin Lannister.",
    link: "https://pt.wikipedia.org/wiki/Vargo_Hoat",
    tags: "mercenário cruel sádico"
  },
  {
    titulo: "Ellaria Sand",
    descricao: "Uma das Serpentes das Areias de Dorne, Ellaria é uma mulher ambiciosa e vingativa. Ela busca vingança pela morte de Oberyn Martell.",
    link: "https://pt.wikipedia.org/wiki/Ellaria_Sand",
    tags: "dorne vingança serpente"
  },
  {
    titulo: "Beric Dondarrion",
    descricao: "Um cavaleiro ressuscitado várias vezes pela Irmandade Sem Bandeira, Beric é um homem justo e dedicado à proteção dos inocentes.",
    link: "https://pt.wikipedia.org/wiki/Beric_Dondarrion",
    tags: "ressuscitado justiça irmandade"
  },
];