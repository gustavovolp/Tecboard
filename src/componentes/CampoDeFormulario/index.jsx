import './campoFormulario.estilo.css';

export function CampoDeFormulario({children}){
  return(
    <fieldset className='campo-form'>
      {children}
    </fieldset>
  )
}