import './App.css'
import { FormularioDeEvento } from './componentes/FormularioDeEvento';
import { Header } from './componentes/Header';
import { Tema } from './componentes/Tema';
import { Banner } from './componentes/Banner';
import { CardEvento } from './componentes/CardEvento';


function App() {

  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial'
    }, {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    }

  ]

const eventos = [
  {
    capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
    tema: temas[0],
    data: new Date(),
    titulo: 'Mulher no frontend'
  }
]

function adicionarEvento(evento) {
  eventos.push(evento);
  console.log(eventos);
}
  return (
    <main>
      <Header />
      <Banner />
      <FormularioDeEvento 
      temas={temas} 
      aoSubmeter={adicionarEvento} 
      />
      {temas.map(function (item){
        return (
          <section key={item.id}>
            <Tema tema={item} />
            {eventos.map(function (item, index){
              return <CardEvento evento={item} key={index} />
            })}
          </section>
        )
      })}
      
    </main>

  )
}

export default App
