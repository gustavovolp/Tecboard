import './formulario-evento.estilos.css';
import { CampoDeEntrada } from '../CampoDeEntrada';
import { CampoDeFormulario } from '../CampoDeFormulario';
import { TituloFormulario } from '../TituloFormulario';
import { Label } from '../Label';
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';

export function FormularioDeEvento( {temas}) {
  return (
    <form className='form-evento' action={''}>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className='campos'>
        <CampoDeFormulario>
          <Label htmlFor='nomeEvento'>
            Qual o nome do evento?</Label>
          <CampoDeEntrada
            type='text'
            id='nomeEvento'
            placeholder='Summer dev hits'
            name='nomeEvento' />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor='dataEvento'>
            Data do evento</Label>
          <CampoDeEntrada
            type='date'
            id='dataEvento'
            name='dataEvento' />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor='tema'>
            Tema do evento</Label>
          <ListaSuspensa id='tema' name='tema' itens={temas} />
          
        </CampoDeFormulario>
      </div>
        <div className='acoes'>
          <Botao>
            Criar evento
          </Botao>

        </div>


    </form>
  )
}