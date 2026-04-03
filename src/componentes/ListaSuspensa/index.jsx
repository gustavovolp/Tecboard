import './lista-suspensa.estilo.css'

export function ListaSuspensa(props){
    return (
        <select className='lista-suspensa-form' {...props}> 
            <option className='lista-suspensa-option' value="">Selecione uma opção</option>
            {props.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    )
}