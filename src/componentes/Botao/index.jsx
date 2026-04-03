import './btn-submit.estilo.css'

export function Botao({ children }) {
     return (
        <button className='btnSubmit'>
            {children}
        </button>
     )
}