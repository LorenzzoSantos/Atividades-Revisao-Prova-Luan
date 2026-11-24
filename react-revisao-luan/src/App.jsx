import Cartao from "./cartao";
import Aviso from "./aviso";
import Curtidas from "./curtidas";
import MostrarSenha from "./mostrarSenha";
import ListaTarefas from "./tarefas";

function App() {
  return (
    <div>
      <h1>Meus Cartões</h1>

      <Cartao
      titulo="Erly Gay"
      descricao="Sendo viado dentro e fora do senai"
    />
      <Aviso urgente={true} />
      <Curtidas />
      <Cartao
      titulo="Barbie Escultora"
      descricao="Sabe pq a Barbie tava esculpindo o ben 10 de olhos vendados do lado do Ken? Pq ela tava fazendo o ben sem olhar a Ken"
    />
      <Aviso urgente={false} />
      <Curtidas />
      <Cartao
      titulo="Rodrigo Viado"
      descricao="Sendo viado dentro e fora do senai seu lema és"
    />
      <Aviso urgente={true} />
      <Curtidas />
      <MostrarSenha />
      <h1>Lista de Tarefas</h1>
      <ListaTarefas />
    </div>
  )
}

export default App;