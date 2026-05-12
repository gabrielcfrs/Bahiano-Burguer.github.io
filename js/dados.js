// =============================================
// BAHIANO BURGER - DADOS DO CARDÁPIO
// Arquivo: js/dados.js
//
// COMO ADICIONAR UM ITEM NOVO:
// 1. Copie um bloco { ... } existente
// 2. Cole depois da última vírgula
// 3. Mude nome, descricao, preco, imagem e categoria
// 4. Para categoria, use: "hamburguer" ou "porcao"
// =============================================

// 'const' cria uma variável que não muda (constante)
// 'ITENS' é o nome que damos à nossa lista de lanches
// Os colchetes [ ] indicam que é uma lista (array) de objetos
const ITENS = [

  // Cada { } é um "objeto" — um bloco com informações de um item
  {
    nome: "Bahiano Clássico",                       // Nome que aparece no card
    descricao: "Blend de costela, cheddar cremoso, bacon crocante e molho da casa.", // Texto descritivo
    preco: "R$ 29,00",                              // Preço exibido (texto)
    precoNum: 29.00,                                // Preço numérico (usado para calcular o total do carrinho)
    categoria: "hamburguer",                         // Categoria para o filtro ("hamburguer" ou "porcao")
    imagem: "../img/classico.png" // URL da foto
  },

  // --- Segundo hambúrguer ---
  {
    nome: "Smash Duplo",
    descricao: "Dois smash burgers empilhados com queijo americano e cebola caramelizada.",
    preco: "R$ 35,00",
    precoNum: 35.00,                                // Número que o JavaScript usa para somar no carrinho
    categoria: "hamburguer",
    imagem: "../img/smash duplo.png"
  },

  // --- Terceiro hambúrguer ---
  {
    nome: "Cheddar Bacon",
    descricao: "Hambúrguer suculento com muito cheddar e bacon defumado.",
    preco: "R$ 27,00",
    precoNum: 27.00,
    categoria: "hamburguer",
    imagem: "../img/cheddar e bacon.png"
  },

  // --- Hambúrguer vegetariano ---
  {
    nome: "Veggie Bahiano",
    descricao: "Blend de grão-de-bico com queijo brie, rúcula e tomate seco.",
    preco: "R$ 28,00",
    precoNum: 28.00,
    categoria: "hamburguer",
    imagem: "../img/vegano.png"
  },

  // --- Porção 1 ---
  {
    nome: "Batata Rústica",
    descricao: "Batatas assadas com páprica, alecrim e molho aioli.",
    preco: "R$ 18,00",
    precoNum: 18.00,
    categoria: "porcao",                            // Categoria "porcao" — filtrável separadamente
    imagem: "../img/batata rustica.png"
  },

  // --- Porção 2 ---
  {
    nome: "Onion Rings",
    descricao: "Anéis de cebola empanados e fritos, sequinhos e crocantes.",
    preco: "R$ 16,00",
    precoNum: 16.00,
    categoria: "porcao",
    imagem: "../img/onion rings.png"
  }

]; // Fim da lista ITENS — não esqueça o ponto e vírgula!


// =============================================
// BEBIDAS
// Para adicionar: copie um bloco e cole abaixo
// =============================================

// Mesma estrutura da lista de ITENS, mas para bebidas
const BEBIDAS = [

  {
    nome: "Coca-Cola Gelada",
    descricao: "Lata bem gelada 350ml.",
    preco: "R$ 7,00",
    precoNum: 7.00,                                 // Preço numérico para o carrinho
    imagem: "../img/coca.png" // Foto de lata de refrigerante
  },

  {
    nome: "Milkshake de Nutella",
    descricao: "Cremoso, gelado e delicioso. Copo de 400ml.",
    preco: "R$ 22,00",
    precoNum: 22.00,
    imagem: "../img/milkshake.png"
  },

  {
    nome: "Suco de Maracujá",
    descricao: "Suco natural batido na hora, 400ml.",
    preco: "R$ 12,00",
    precoNum: 12.00,
    imagem: "../img/maracuja.png"
  },

  {
    nome: "Água com Gás",
    descricao: "Garrafa 500ml gelada.",
    preco: "R$ 5,00",
    precoNum: 5.00,
    imagem: "../img/agua.png"
  }

]; // Fim da lista BEBIDAS
