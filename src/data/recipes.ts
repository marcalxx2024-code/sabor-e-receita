import type { Recipe } from '../types/recipe';

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Panquecas de banana e aveia',
    slug: 'panquecas-banana-aveia',
    description: 'Panquecas macias, nutritivas e naturalmente doces.',
    image: img('photo-1528207776546-365bb710ee93'),
    category: 'Café da manhã',
    type: [
      'Vegetariana',
      'Fitness'
    ],
    difficulty: 'Fácil',
    preparationTime: 10,
    cookingTime: 10,
    servings: 2,
    rating: 4.8,
    reviewCount: 132,
    ingredients: [
      '2 bananas maduras',
      '2 ovos',
      '1 xícara de aveia',
      'Canela a gosto'
    ],
    instructions: [
      'Amasse as bananas.',
      'Misture os ovos, a aveia e a canela.',
      'Doure porções em frigideira antiaderente.'
    ],
    nutrition: {
      calories: 310,
      protein: '14g',
      carbohydrates: '48g',
      fat: '8g',
    },
    tags: [
      'rápida',
      'sem açúcar'
    ],
    featured: true,
  },
  {
    id: '2',
    title: 'Risoto cremoso de cogumelos',
    slug: 'risoto-cogumelos',
    description: 'Risoto aromático com cogumelos frescos e parmesão.',
    image: img('photo-1476124369491-e7addf5db371'),
    category: 'Jantar',
    type: [
      'Vegetariana'
    ],
    difficulty: 'Médio',
    preparationTime: 15,
    cookingTime: 35,
    servings: 4,
    rating: 4.9,
    reviewCount: 205,
    ingredients: [
      '2 xícaras de arroz arbóreo',
      '300g de cogumelos',
      '1 litro de caldo',
      'Parmesão'
    ],
    instructions: [
      'Refogue os cogumelos.',
      'Adicione o arroz e o caldo aos poucos.',
      'Finalize com parmesão.'
    ],
    nutrition: {
      calories: 520,
      protein: '16g',
      carbohydrates: '72g',
      fat: '18g',
    },
    tags: [
      'conforto',
      'italiana'
    ],
    featured: true,
  },
  {
    id: '3',
    title: 'Frango grelhado com ervas',
    slug: 'frango-grelhado-ervas',
    description: 'Peito de frango suculento com limão e ervas frescas.',
    image: img('photo-1532550907401-a500c9a57435'),
    category: 'Almoço',
    type: [
      'Fitness',
      'Sem glúten'
    ],
    difficulty: 'Fácil',
    preparationTime: 15,
    cookingTime: 20,
    servings: 4,
    rating: 4.7,
    reviewCount: 98,
    ingredients: [
      '4 filés de frango',
      '1 limão',
      'Alecrim',
      'Azeite'
    ],
    instructions: [
      'Tempere o frango.',
      'Aqueça a grelha.',
      'Grelhe até dourar dos dois lados.'
    ],
    nutrition: {
      calories: 280,
      protein: '42g',
      carbohydrates: '3g',
      fat: '10g',
    },
    tags: [
      'proteica',
      'leve'
    ],
    featured: true,
  },
  {
    id: '4',
    title: 'Bolo de cenoura com chocolate',
    slug: 'bolo-cenoura-chocolate',
    description: 'Clássico brasileiro fofinho com cobertura brilhante.',
    image: img('photo-1578985545062-69928b1d9587'),
    category: 'Sobremesas',
    type: [
      'Vegetariana'
    ],
    difficulty: 'Médio',
    preparationTime: 20,
    cookingTime: 40,
    servings: 10,
    rating: 4.9,
    reviewCount: 340,
    ingredients: [
      '3 cenouras',
      '3 ovos',
      '2 xícaras de farinha',
      'Chocolate em pó'
    ],
    instructions: [
      'Bata os líquidos.',
      'Misture aos secos.',
      'Asse e cubra com brigadeiro.'
    ],
    nutrition: {
      calories: 390,
      protein: '6g',
      carbohydrates: '58g',
      fat: '16g',
    },
    tags: [
      'bolo',
      'brasileira'
    ],
    featured: true,
  },
  {
    id: '5',
    title: 'Salada mediterrânea',
    slug: 'salada-mediterranea',
    description: 'Salada fresca com tomate, pepino, azeitonas e queijo.',
    image: img('photo-1540420773420-3366772f4999'),
    category: 'Saladas',
    type: [
      'Vegetariana',
      'Rápida'
    ],
    difficulty: 'Fácil',
    preparationTime: 15,
    cookingTime: 0,
    servings: 4,
    rating: 4.6,
    reviewCount: 76,
    ingredients: [
      'Tomates-cereja',
      'Pepino',
      'Azeitonas',
      'Queijo branco'
    ],
    instructions: [
      'Corte os vegetais.',
      'Misture os ingredientes.',
      'Tempere com azeite e limão.'
    ],
    nutrition: {
      calories: 210,
      protein: '8g',
      carbohydrates: '14g',
      fat: '14g',
    },
    tags: [
      'fresca',
      'verão'
    ],
    featured: false,
  },
  {
    id: '6',
    title: 'Sopa de abóbora com gengibre',
    slug: 'sopa-abobora-gengibre',
    description: 'Creme aveludado e reconfortante com toque picante.',
    image: img('photo-1547592166-23ac45744acd'),
    category: 'Sopas',
    type: [
      'Vegana',
      'Sem glúten'
    ],
    difficulty: 'Fácil',
    preparationTime: 15,
    cookingTime: 30,
    servings: 4,
    rating: 4.7,
    reviewCount: 115,
    ingredients: [
      '700g de abóbora',
      '1 cebola',
      'Gengibre',
      'Caldo de legumes'
    ],
    instructions: [
      'Refogue cebola e gengibre.',
      'Cozinhe a abóbora no caldo.',
      'Bata até ficar cremosa.'
    ],
    nutrition: {
      calories: 180,
      protein: '4g',
      carbohydrates: '34g',
      fat: '5g',
    },
    tags: [
      'inverno',
      'vegana'
    ],
    featured: false,
  },
  {
    id: '7',
    title: 'Macarrão ao pesto',
    slug: 'macarrao-pesto',
    description: 'Massa rápida com pesto caseiro de manjericão.',
    image: img('photo-1473093295043-cdd812d0e601'),
    category: 'Massas',
    type: [
      'Vegetariana',
      'Rápida'
    ],
    difficulty: 'Fácil',
    preparationTime: 10,
    cookingTime: 15,
    servings: 4,
    rating: 4.8,
    reviewCount: 166,
    ingredients: [
      '400g de macarrão',
      'Manjericão',
      'Castanhas',
      'Parmesão'
    ],
    instructions: [
      'Cozinhe a massa.',
      'Bata os ingredientes do pesto.',
      'Misture e sirva.'
    ],
    nutrition: {
      calories: 560,
      protein: '18g',
      carbohydrates: '78g',
      fat: '20g',
    },
    tags: [
      'italiana',
      'rápida'
    ],
    featured: true,
  },
  {
    id: '8',
    title: 'Tacos de legumes assados',
    slug: 'tacos-legumes',
    description: 'Tacos coloridos com legumes temperados e molho cítrico.',
    image: img('photo-1551504734-5ee1c4a1479b'),
    category: 'Jantar',
    type: [
      'Vegana'
    ],
    difficulty: 'Médio',
    preparationTime: 20,
    cookingTime: 30,
    servings: 4,
    rating: 4.6,
    reviewCount: 84,
    ingredients: [
      'Tortilhas',
      'Pimentões',
      'Abobrinha',
      'Abacate'
    ],
    instructions: [
      'Asse os legumes.',
      'Aqueça as tortilhas.',
      'Monte com abacate e limão.'
    ],
    nutrition: {
      calories: 430,
      protein: '11g',
      carbohydrates: '64g',
      fat: '16g',
    },
    tags: [
      'mexicana',
      'vegana'
    ],
    featured: false,
  },
  {
    id: '9',
    title: 'Smoothie de frutas vermelhas',
    slug: 'smoothie-frutas-vermelhas',
    description: 'Bebida cremosa e refrescante para qualquer hora.',
    image: img('photo-1505252585461-04db1eb84625'),
    category: 'Bebidas',
    type: [
      'Vegetariana',
      'Rápida'
    ],
    difficulty: 'Fácil',
    preparationTime: 5,
    cookingTime: 0,
    servings: 2,
    rating: 4.7,
    reviewCount: 121,
    ingredients: [
      'Frutas vermelhas',
      'Iogurte natural',
      'Banana',
      'Mel'
    ],
    instructions: [
      'Coloque tudo no liquidificador.',
      'Bata até ficar cremoso.',
      'Sirva gelado.'
    ],
    nutrition: {
      calories: 220,
      protein: '9g',
      carbohydrates: '40g',
      fat: '4g',
    },
    tags: [
      'refrescante',
      'rápida'
    ],
    featured: false,
  },
  {
    id: '10',
    title: 'Bruschetta de tomate e manjericão',
    slug: 'bruschetta-tomate',
    description: 'Entrada crocante e aromática inspirada na Itália.',
    image: img('photo-1572695157366-5e585ab2b69f'),
    category: 'Lanches',
    type: [
      'Vegetariana',
      'Rápida'
    ],
    difficulty: 'Fácil',
    preparationTime: 15,
    cookingTime: 8,
    servings: 6,
    rating: 4.6,
    reviewCount: 71,
    ingredients: [
      'Pão italiano',
      'Tomate',
      'Manjericão',
      'Alho'
    ],
    instructions: [
      'Toste o pão.',
      'Misture tomate e manjericão.',
      'Cubra e finalize com azeite.'
    ],
    nutrition: {
      calories: 190,
      protein: '5g',
      carbohydrates: '28g',
      fat: '7g',
    },
    tags: [
      'entrada',
      'italiana'
    ],
    featured: false,
  },
  {
    id: '11',
    title: 'Lasanha de berinjela',
    slug: 'lasanha-berinjela',
    description: 'Camadas de berinjela, molho de tomate e queijo gratinado.',
    image: img('photo-1574894709920-11b28e7367e3'),
    category: 'Massas',
    type: [
      'Vegetariana',
      'Sem glúten'
    ],
    difficulty: 'Médio',
    preparationTime: 25,
    cookingTime: 45,
    servings: 6,
    rating: 4.8,
    reviewCount: 144,
    ingredients: [
      '2 berinjelas',
      'Molho de tomate',
      'Muçarela',
      'Parmesão'
    ],
    instructions: [
      'Grelhe as fatias de berinjela.',
      'Monte as camadas.',
      'Asse até gratinar.'
    ],
    nutrition: {
      calories: 360,
      protein: '20g',
      carbohydrates: '24g',
      fat: '22g',
    },
    tags: [
      'forno',
      'vegetariana'
    ],
    featured: false,
  },
  {
    id: '12',
    title: 'Cookies de chocolate',
    slug: 'cookies-chocolate',
    description: 'Cookies crocantes por fora e macios por dentro.',
    image: img('photo-1499636136210-6f4ee915583e'),
    category: 'Sobremesas',
    type: [
      'Vegetariana'
    ],
    difficulty: 'Fácil',
    preparationTime: 15,
    cookingTime: 12,
    servings: 12,
    rating: 4.9,
    reviewCount: 290,
    ingredients: [
      'Farinha',
      'Manteiga',
      'Açúcar mascavo',
      'Gotas de chocolate'
    ],
    instructions: [
      'Misture a massa.',
      'Modele os cookies.',
      'Asse até as bordas dourarem.'
    ],
    nutrition: {
      calories: 240,
      protein: '3g',
      carbohydrates: '34g',
      fat: '11g',
    },
    tags: [
      'cookie',
      'chocolate'
    ],
    featured: true,
  },
  {
    id: '13',
    title: 'Omelete de espinafre',
    slug: 'omelete-espinafre',
    description: 'Omelete proteica com espinafre e queijo branco.',
    image: img('photo-1510693206972-df098062cb71'),
    category: 'Café da manhã',
    type: [
      'Fitness',
      'Sem glúten'
    ],
    difficulty: 'Fácil',
    preparationTime: 8,
    cookingTime: 7,
    servings: 1,
    rating: 4.5,
    reviewCount: 68,
    ingredients: [
      '3 ovos',
      'Espinafre',
      'Queijo branco',
      'Pimenta'
    ],
    instructions: [
      'Bata os ovos.',
      'Refogue o espinafre.',
      'Cozinhe e dobre a omelete.'
    ],
    nutrition: {
      calories: 270,
      protein: '23g',
      carbohydrates: '5g',
      fat: '18g',
    },
    tags: [
      'proteica',
      'rápida'
    ],
    featured: false,
  },
  {
    id: '14',
    title: 'Quibe assado de abóbora',
    slug: 'quibe-abobora',
    description: 'Versão vegetariana, aromática e dourada no forno.',
    image: img('photo-1547592180-85f173990554'),
    category: 'Almoço',
    type: [
      'Vegana'
    ],
    difficulty: 'Médio',
    preparationTime: 25,
    cookingTime: 40,
    servings: 6,
    rating: 4.6,
    reviewCount: 92,
    ingredients: [
      'Trigo para quibe',
      'Abóbora',
      'Hortelã',
      'Cebola'
    ],
    instructions: [
      'Hidrate o trigo.',
      'Misture com a abóbora e temperos.',
      'Asse até dourar.'
    ],
    nutrition: {
      calories: 330,
      protein: '10g',
      carbohydrates: '58g',
      fat: '7g',
    },
    tags: [
      'árabe',
      'vegana'
    ],
    featured: false,
  },
  {
    id: '15',
    title: 'Hambúrguer artesanal',
    slug: 'hamburguer-artesanal',
    description: 'Hambúrguer suculento com cebola caramelizada.',
    image: img('photo-1568901346375-23c9450c58cd'),
    category: 'Lanches',
    type: [
      'Carne'
    ],
    difficulty: 'Médio',
    preparationTime: 20,
    cookingTime: 20,
    servings: 4,
    rating: 4.8,
    reviewCount: 198,
    ingredients: [
      '600g de carne moída',
      'Pães',
      'Queijo',
      'Cebola'
    ],
    instructions: [
      'Modele os hambúrgueres.',
      'Grelhe no ponto desejado.',
      'Monte com queijo e cebola.'
    ],
    nutrition: {
      calories: 690,
      protein: '38g',
      carbohydrates: '52g',
      fat: '36g',
    },
    tags: [
      'artesanal',
      'lanche'
    ],
    featured: true,
  },
  {
    id: '16',
    title: 'Moqueca de banana-da-terra',
    slug: 'moqueca-banana',
    description: 'Moqueca vegana perfumada com leite de coco e dendê.',
    image: img('photo-1601050690597-df0568f70950'),
    category: 'Almoço',
    type: [
      'Vegana',
      'Sem glúten'
    ],
    difficulty: 'Médio',
    preparationTime: 20,
    cookingTime: 35,
    servings: 4,
    rating: 4.9,
    reviewCount: 109,
    ingredients: [
      'Bananas-da-terra',
      'Leite de coco',
      'Pimentões',
      'Azeite de dendê'
    ],
    instructions: [
      'Refogue os vegetais.',
      'Adicione as bananas e o leite de coco.',
      'Cozinhe em fogo baixo.'
    ],
    nutrition: {
      calories: 410,
      protein: '6g',
      carbohydrates: '60g',
      fat: '18g',
    },
    tags: [
      'brasileira',
      'vegana'
    ],
    featured: false,
  },
  {
    id: '17',
    title: 'Pão de queijo de frigideira',
    slug: 'pao-queijo-frigideira',
    description: 'Lanche sem glúten pronto em poucos minutos.',
    image: img('photo-1573140401552-3fab0b24306f'),
    category: 'Lanches',
    type: [
      'Vegetariana',
      'Sem glúten',
      'Rápida'
    ],
    difficulty: 'Fácil',
    preparationTime: 5,
    cookingTime: 8,
    servings: 1,
    rating: 4.7,
    reviewCount: 154,
    ingredients: [
      '1 ovo',
      'Polvilho doce',
      'Queijo ralado',
      'Iogurte'
    ],
    instructions: [
      'Misture os ingredientes.',
      'Despeje na frigideira.',
      'Doure dos dois lados.'
    ],
    nutrition: {
      calories: 280,
      protein: '13g',
      carbohydrates: '29g',
      fat: '12g',
    },
    tags: [
      'brasileira',
      'rápida'
    ],
    featured: false,
  },
  {
    id: '18',
    title: 'Chili vegetariano',
    slug: 'chili-vegetariano',
    description: 'Feijões, milho e especiarias em um prato intenso e nutritivo.',
    image: img('photo-1574484284002-952d92456975'),
    category: 'Jantar',
    type: [
      'Vegana',
      'Sem glúten'
    ],
    difficulty: 'Fácil',
    preparationTime: 15,
    cookingTime: 35,
    servings: 6,
    rating: 4.7,
    reviewCount: 87,
    ingredients: [
      'Feijão vermelho',
      'Milho',
      'Tomate pelado',
      'Cominho'
    ],
    instructions: [
      'Refogue cebola e especiarias.',
      'Adicione os demais ingredientes.',
      'Cozinhe até encorpar.'
    ],
    nutrition: {
      calories: 390,
      protein: '18g',
      carbohydrates: '66g',
      fat: '7g',
    },
    tags: [
      'mexicana',
      'proteica'
    ],
    featured: false,
  },
  {
    id: '19',
    title: 'Mousse de maracujá',
    slug: 'mousse-maracuja',
    description: 'Sobremesa cremosa, azedinha e muito simples.',
    image: img('photo-1488477181946-6428a0291777'),
    category: 'Sobremesas',
    type: [
      'Vegetariana',
      'Rápida'
    ],
    difficulty: 'Fácil',
    preparationTime: 10,
    cookingTime: 0,
    servings: 6,
    rating: 4.8,
    reviewCount: 233,
    ingredients: [
      'Leite condensado',
      'Creme de leite',
      'Suco de maracujá',
      'Polpa de maracujá'
    ],
    instructions: [
      'Bata os três primeiros ingredientes.',
      'Distribua em taças.',
      'Leve à geladeira e decore.'
    ],
    nutrition: {
      calories: 350,
      protein: '6g',
      carbohydrates: '48g',
      fat: '15g',
    },
    tags: [
      'gelada',
      'brasileira'
    ],
    featured: false,
  },
  {
    id: '20',
    title: 'Água saborizada cítrica',
    slug: 'agua-saborizada',
    description: 'Água refrescante com limão, laranja, hortelã e gengibre.',
    image: img('photo-1556881286-fc6915169721'),
    category: 'Bebidas',
    type: [
      'Vegana',
      'Sem glúten',
      'Rápida'
    ],
    difficulty: 'Fácil',
    preparationTime: 5,
    cookingTime: 0,
    servings: 4,
    rating: 4.4,
    reviewCount: 44,
    ingredients: [
      '1 limão',
      '1 laranja',
      'Hortelã',
      'Gengibre'
    ],
    instructions: [
      'Fatie as frutas.',
      'Coloque tudo em uma jarra.',
      'Adicione água e gelo.'
    ],
    nutrition: {
      calories: 25,
      protein: '0g',
      carbohydrates: '6g',
      fat: '0g',
    },
    tags: [
      'detox',
      'refrescante'
    ],
    featured: false,
  },
  {
    id: '21',
    title: 'Tapioca com queijo e tomate',
    slug: 'tapioca-com-queijo-e-tomate',
    description: 'Tapioca leve e crocante nas bordas, recheada com queijo derretido, tomate e orégano.',
    image: '/assets/imagens/recipes/tapioca-com-queijo-e-tomate.jpg',
    category: 'Café da manhã',
    type: [
      'Vegetariana',
      'Sem glúten',
      'Rápida'
    ],
    difficulty: 'Fácil',
    preparationTime: 5,
    cookingTime: 8,
    servings: 1,
    rating: 4.6,
    reviewCount: 74,
    ingredients: [
      '4 colheres de sopa de goma de tapioca hidratada',
      '2 fatias de queijo muçarela',
      '4 rodelas finas de tomate',
      '1 colher de chá de orégano',
      'Sal e pimenta-do-reino a gosto'
    ],
    instructions: [
      'Tempere as rodelas de tomate com sal, pimenta e orégano.',
      'Espalhe a goma em uma frigideira antiaderente aquecida.',
      'Quando a tapioca estiver unida, acrescente o queijo e o tomate.',
      'Dobre ao meio e cozinhe até o queijo derreter.'
    ],
    nutrition: {
      calories: 318,
      protein: '13g',
      carbohydrates: '43g',
      fat: '10g',
    },
    tags: [
      'sem glúten',
      'vegetariana',
      'rápida',
      'tapioca'
    ],
    featured: false,
  },
  {
    id: '22',
    title: 'Overnight oats com morango e chia',
    slug: 'overnight-oats-morango-chia',
    description: 'Aveia cremosa preparada de véspera com morangos, chia e iogurte.',
    image: '/assets/imagens/recipes/Overnight-oats-com-morango-e-chia.jpg',
    category: 'Café da manhã',
    type: [
      'Fitness',
      'Vegetariana'
    ],
    difficulty: 'Fácil',
    preparationTime: 10,
    cookingTime: 0,
    servings: 1,
    rating: 4.9,
    reviewCount: 142,
    ingredients: [
      '5 colheres de sopa de aveia em flocos',
      '1 colher de sopa de sementes de chia',
      '120ml de leite',
      '100g de iogurte natural',
      '1 colher de chá de mel',
      '5 morangos picados'
    ],
    instructions: [
      'Misture a aveia, a chia, o leite, o iogurte e o mel em um pote.',
      'Adicione os morangos picados e misture delicadamente.',
      'Tampe e leve à geladeira por pelo menos 8 horas.',
      'Misture novamente antes de servir.'
    ],
    nutrition: {
      calories: 389,
      protein: '15g',
      carbohydrates: '58g',
      fat: '11g',
    },
    tags: [
      'fitness',
      'com aveia',
      'com chia',
      'sem cozimento'
    ],
    featured: true,
  },
  {
    id: '23',
    title: 'Cuscuz nordestino com ovo mexido',
    slug: 'cuscuz-nordestino-ovo-mexido',
    description: 'Cuscuz de milho úmido e soltinho servido com ovos mexidos cremosos.',
    image: '/assets/imagens/recipes/Cuscuz-nordestino-com-ovo-mexido.jpg',
    category: 'Café da manhã',
    type: [
      'Sem glúten',
      'Brasileira'
    ],
    difficulty: 'Fácil',
    preparationTime: 10,
    cookingTime: 15,
    servings: 2,
    rating: 4.8,
    reviewCount: 113,
    ingredients: [
      '1 xícara de flocão de milho',
      '1/2 xícara de água',
      '1/2 colher de chá de sal',
      '1 colher de sopa de manteiga',
      '3 ovos',
      '2 colheres de sopa de cheiro-verde'
    ],
    instructions: [
      'Misture o flocão com a água e o sal e deixe hidratar por 10 minutos.',
      'Coloque na cuscuzeira sem apertar e cozinhe por cerca de 10 minutos.',
      'Bata os ovos e cozinhe em fogo baixo, mexendo até ficarem cremosos.',
      'Misture a manteiga ao cuscuz e sirva com os ovos e o cheiro-verde.'
    ],
    nutrition: {
      calories: 421,
      protein: '18g',
      carbohydrates: '49g',
      fat: '17g',
    },
    tags: [
      'brasileira',
      'nordestina',
      'sem glúten',
      'com ovos'
    ],
    featured: true,
  },
{
  id: '24',
  title: 'Iogurte com Granola e Frutas',
  slug: 'iogurte-com-granola-e-frutas',
  description:
    'Uma tigela cremosa e refrescante com iogurte natural, frutas frescas, granola crocante e um toque de mel.',
  image: '/assets/imagens/recipes/Uma-tigela-cremosa.jpg',
  category: 'Café da manhã',
  type: ['Vegetariana', 'Fitness', 'Rápida'],
  difficulty: 'Fácil',
  preparationTime: 10,
  cookingTime: 0,
  servings: 1,
  rating: 4.7,
  reviewCount: 46,
  ingredients: [
    '170 g de iogurte natural',
    '3 colheres de sopa de granola',
    '1 banana pequena fatiada',
    '4 morangos fatiados',
    '1 colher de chá de mel',
    '1 colher de chá de sementes de chia',
  ],
  instructions: [
    'Coloque o iogurte em uma tigela e espalhe com uma colher.',
    'Distribua a banana e os morangos sobre o iogurte.',
    'Adicione a granola e as sementes de chia.',
    'Finalize com o mel e sirva imediatamente.',
  ],
  nutrition: {
    calories: 342,
    protein: '13g',
    carbohydrates: '56g',
    fat: '8g',
  },
  tags: [
    'rápida',
    'fitness',
    'vegetariana',
    'com frutas',
    'com granola',
    'sem cozimento',
  ],
  featured: false,
},
];

export const categories = [
  ...new Set(recipes.map((recipe) => recipe.category)),
];
