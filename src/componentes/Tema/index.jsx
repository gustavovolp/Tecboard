import './tema.estilos.css';

export function Tema({ tema }) {
  return <h3 className="Tema">{tema.nome}</h3>;
}