import margheritaImage from '../assets/products/margherita.jpg'
import calabresaImage from '../assets/products/calabresa.jpg'
import pepperoniImage from '../assets/products/pepperoni.jpg'
import quatroQueijosImage from '../assets/products/quatro-queijos.jpg'
import portuguesaImage from '../assets/products/portuguesa.jpg'
import frangoCatupiryImage from '../assets/products/frango-catupiry.jpg'
import boloDeLimaoImage from '../assets/products/desserts/bolo-de-limao.png'
import boloDeMorangoImage from '../assets/products/desserts/bolo-de-morango.png'
import boloRedVelvetImage from '../assets/products/desserts/bolo-red-velvet.png'
import brownieImage from '../assets/products/desserts/brownie-de-chocolate-com-sorvete.png'
import coxinhaCatupiryImage from '../assets/products/entry/coxinha-de-frango-com-catupiry.png'
import coxinhaFrangoImage from '../assets/products/entry/coxinha-de-frango.png'
import empadãoFrangoImage from '../assets/products/entry/empadao-de-frango.png'
import enroladinhoImage from '../assets/products/entry/enroladinho.png'
import paoPizzaImage from '../assets/products/entry/pao-pizza.png'
import pastelFrangoImage from '../assets/products/entry/pastel-de-frango.png'
import cocaColaLataImage from '../assets/products/refrigerants/coca-cola-lata.png'
import cocaCola1LitroImage from '../assets/products/refrigerants/coca-cola-1-litro.png'
import cocaCola2LitroImage from '../assets/products/refrigerants/coca-cola-2-litro.png'
import fantaLataImage from '../assets/products/refrigerants/fanta-lata.png'
import fanta1LitroImage from '../assets/products/refrigerants/fanta-1-litro.png'
import fanta2LitroImage from '../assets/products/refrigerants/fanta-2-litro.png'
import kuatLataImage from '../assets/products/refrigerants/kuat-lata.png'
import kuat1LitroImage from '../assets/products/refrigerants/kuat-1-litro.png'
import kuat2LitroImage from '../assets/products/refrigerants/kuat-2-litro.png'
import pepsiLataImage from '../assets/products/refrigerants/pepsi-lata.png'
import pepsi1LitroImage from '../assets/products/refrigerants/pepsi-1-litro.png'
import pepsi2LitroImage from '../assets/products/refrigerants/pepsi-2-litro.png'
import spriteLataImage from '../assets/products/refrigerants/sprite-lata.png'
import sprite1LitroImage from '../assets/products/refrigerants/sprite-1-litro.png'
import sprite2LitroImage from '../assets/products/refrigerants/sprite-2-litro.png'
import type { LucideIcon } from 'lucide-react'
import { CupSoda, IceCreamCone, Pizza, Salad } from 'lucide-react'

export type CategoryId = 'pizzas' | 'refrigerantes' | 'sobremesas' | 'entradas'

export type Category = {
  id: CategoryId
  name: string
  icon: LucideIcon
}

export type Product = {
  id: string
  categoryId: CategoryId
  name: string
  description: string
  price: number
  image: string
}

export const categories: Category[] = [
  { id: 'pizzas', name: 'Pizzas', icon: Pizza },
  { id: 'refrigerantes', name: 'Refrigerantes', icon: CupSoda },
  { id: 'sobremesas', name: 'Sobremesas', icon: IceCreamCone },
  { id: 'entradas', name: 'Entradas', icon: Salad },
]

export const products: Product[] = [
  {
    id: 'margherita-premium',
    categoryId: 'pizzas',
    name: 'Margherita Premium',
    description: 'Molho artesanal, mozzarella de búfala, manjericão fresco e azeite…',
    price: 54.9,
    image: margheritaImage,
  },
  {
    id: 'calabresa-especial',
    categoryId: 'pizzas',
    name: 'Calabresa Especial',
    description: 'Calabresa fatiada, cebola roxa, azeitonas pretas e orégano…',
    price: 49.9,
    image: calabresaImage,
  },
  {
    id: 'pepperoni-feast',
    categoryId: 'pizzas',
    name: 'Pepperoni Feast',
    description: 'Dobro de pepperoni crocante sobre generosa camada de queijo…',
    price: 59.9,
    image: pepperoniImage,
  },
  {
    id: 'quatro-queijos',
    categoryId: 'pizzas',
    name: 'Quatro Queijos',
    description: 'Combinação perfeita de mozzarella, provolone, parmesão e gorgonzola.',
    price: 58.9,
    image: quatroQueijosImage,
  },
  {
    id: 'portuguesa',
    categoryId: 'pizzas',
    name: 'Portuguesa',
    description: 'Presunto, ovos, cebola, ervilha, azeitonas e muita mozzarella.',
    price: 52.9,
    image: portuguesaImage,
  },
  {
    id: 'frango-catupiry',
    categoryId: 'pizzas',
    name: 'Frango com Catupiry',
    description: 'Frango desfiado temperado com o legítimo requeijão Catupiry.',
    price: 56.9,
    image: frangoCatupiryImage,
  },
  {
    id: 'coca-cola-lata',
    categoryId: 'refrigerantes',
    name: 'Coca-Cola Lata',
    description: 'Refrigerante gelado, sabor clássico e refrescante em lata 350ml…',
    price: 6.9,
    image: cocaColaLataImage,
  },
  {
    id: 'coca-cola-1-litro',
    categoryId: 'refrigerantes',
    name: 'Coca-Cola 1 Litro',
    description: 'Garrafa PET de 1 litro, ideal para compartilhar na mesa…',
    price: 9.9,
    image: cocaCola1LitroImage,
  },
  {
    id: 'coca-cola-2-litro',
    categoryId: 'refrigerantes',
    name: 'Coca-Cola 2 Litros',
    description: 'Garrafa PET de 2 litros, perfeita para reunir a família toda…',
    price: 14.9,
    image: cocaCola2LitroImage,
  },
  {
    id: 'fanta-lata',
    categoryId: 'refrigerantes',
    name: 'Fanta Laranja Lata',
    description: 'Sabor cítrico intenso de laranja, bem gelada em lata 350ml…',
    price: 6.5,
    image: fantaLataImage,
  },
  {
    id: 'fanta-1-litro',
    categoryId: 'refrigerantes',
    name: 'Fanta Laranja 1 Litro',
    description: 'Refrescante sabor laranja em garrafa PET de 1 litro…',
    price: 8.9,
    image: fanta1LitroImage,
  },
  {
    id: 'fanta-2-litro',
    categoryId: 'refrigerantes',
    name: 'Fanta Laranja 2 Litros',
    description: 'Garrafa PET de 2 litros com o clássico sabor laranja da Fanta…',
    price: 13.5,
    image: fanta2LitroImage,
  },
  {
    id: 'kuat-lata',
    categoryId: 'refrigerantes',
    name: 'Kuat Lata',
    description: 'Guaraná brasileiro, sabor marcante e super refrescante em lata…',
    price: 5.9,
    image: kuatLataImage,
  },
  {
    id: 'kuat-1-litro',
    categoryId: 'refrigerantes',
    name: 'Kuat 1 Litro',
    description: 'Guaraná tradicional em garrafa PET de 1 litro, bem gelado…',
    price: 7.9,
    image: kuat1LitroImage,
  },
  {
    id: 'kuat-2-litro',
    categoryId: 'refrigerantes',
    name: 'Kuat 2 Litros',
    description: 'Garrafa PET de 2 litros com o autêntico sabor guaraná Kuat…',
    price: 12.9,
    image: kuat2LitroImage,
  },
  {
    id: 'pepsi-lata',
    categoryId: 'refrigerantes',
    name: 'Pepsi Lata',
    description: 'Cola suave e equilibrada, servida gelada em lata 350ml…',
    price: 6.9,
    image: pepsiLataImage,
  },
  {
    id: 'pepsi-1-litro',
    categoryId: 'refrigerantes',
    name: 'Pepsi 1 Litro',
    description: 'Garrafa PET de 1 litro com o sabor clássico da Pepsi…',
    price: 9.5,
    image: pepsi1LitroImage,
  },
  {
    id: 'pepsi-2-litro',
    categoryId: 'refrigerantes',
    name: 'Pepsi 2 Litros',
    description: 'Garrafa PET de 2 litros, ideal para acompanhar a refeição…',
    price: 14.5,
    image: pepsi2LitroImage,
  },
  {
    id: 'sprite-lata',
    categoryId: 'refrigerantes',
    name: 'Sprite Lata',
    description: 'Limão e lima cítricos, leve e refrescante em lata 350ml…',
    price: 6.5,
    image: spriteLataImage,
  },
  {
    id: 'sprite-1-litro',
    categoryId: 'refrigerantes',
    name: 'Sprite 1 Litro',
    description: 'Sabor limão-lima intenso em garrafa PET de 1 litro…',
    price: 8.9,
    image: sprite1LitroImage,
  },
  {
    id: 'sprite-2-litro',
    categoryId: 'refrigerantes',
    name: 'Sprite 2 Litros',
    description: 'Garrafa PET de 2 litros com o refresco cítrico da Sprite…',
    price: 13.9,
    image: sprite2LitroImage,
  },
  {
    id: 'bolo-de-limao',
    categoryId: 'sobremesas',
    name: 'Bolo de Limão',
    description: 'Massa fofa com calda cítrica de limão e cobertura aveludada…',
    price: 22.9,
    image: boloDeLimaoImage,
  },
  {
    id: 'bolo-de-morango',
    categoryId: 'sobremesas',
    name: 'Bolo de Morango',
    description: 'Camadas de pão de ló, chantilly e morangos frescos selecionados…',
    price: 24.9,
    image: boloDeMorangoImage,
  },
  {
    id: 'bolo-red-velvet',
    categoryId: 'sobremesas',
    name: 'Bolo Red Velvet',
    description: 'Massa aveludada vermelha com cream cheese e toque de cacau…',
    price: 26.9,
    image: boloRedVelvetImage,
  },
  {
    id: 'brownie-de-chocolate-com-sorvete',
    categoryId: 'sobremesas',
    name: 'Brownie com Sorvete',
    description: 'Brownie quente de chocolate meio amargo com bola de sorvete…',
    price: 19.9,
    image: brownieImage,
  },
  {
    id: 'coxinha-de-frango',
    categoryId: 'entradas',
    name: 'Coxinha de Frango',
    description: 'Massa crocante recheada com frango desfiado bem temperado…',
    price: 8.9,
    image: coxinhaFrangoImage,
  },
  {
    id: 'coxinha-de-frango-com-catupiry',
    categoryId: 'entradas',
    name: 'Coxinha com Catupiry',
    description: 'Frango desfiado com requeijão Catupiry cremoso por dentro…',
    price: 10.9,
    image: coxinhaCatupiryImage,
  },
  {
    id: 'empadao-de-frango',
    categoryId: 'entradas',
    name: 'Empadão de Frango',
    description: 'Massa amanteigada, recheio cremoso de frango com milho e ervas…',
    price: 12.9,
    image: empadãoFrangoImage,
  },
  {
    id: 'enroladinho',
    categoryId: 'entradas',
    name: 'Enroladinho de Salsicha',
    description: 'Massa folhada dourada envolvendo salsicha suculenta e quente…',
    price: 7.9,
    image: enroladinhoImage,
  },
  {
    id: 'pao-pizza',
    categoryId: 'entradas',
    name: 'Pão de Pizza',
    description: 'Pão macio com queijo derretido, orégano e molho de tomate…',
    price: 9.9,
    image: paoPizzaImage,
  },
  {
    id: 'pastel-de-frango',
    categoryId: 'entradas',
    name: 'Pastel de Frango',
    description: 'Massa fina e crocante com recheio cremoso de frango temperado…',
    price: 11.9,
    image: pastelFrangoImage,
  },
]

export function getProductsByCategory(categoryId: CategoryId): Product[] {
  return products.filter((product) => product.categoryId === categoryId)
}

export function getCategoryById(categoryId: CategoryId): Category | undefined {
  return categories.find((category) => category.id === categoryId)
}
