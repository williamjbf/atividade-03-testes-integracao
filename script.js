let usuarios = [];

function cadastrarUsuario(usuario) {

    for(var i = 0; i < usuarios.length; i++) {
      if (usuarios[i].login == usuario.login) {
        throw Error("Não são permitidos usuarios iguais");
      }
    }
    for (const atributo in usuario) {
      if(usuario[atributo] === null || usuario[atributo] === ""){
        throw Error("Não são permitidos valores nulos ou vazios");
      }
    }
    
    usuarios.push(usuario);
}

function stringAleatorio(quantidade){
  return Math.random().toString(36).substring(0,quantidade);
  
}

function criarUsuario(){
  let usuario ={
      login: stringAleatorio(10),
      senha: stringAleatorio(8),
  }
  return usuario
}

function logarUsuario(usuario){

    for (const atributo in usuario) {
      if(usuario[atributo] === null || usuario[atributo] === ""){
        throw Error("Não são permitidos valores nulos ou vazios");
      }
    }

    const idUsuario = usuarios.indexOf(usuario);
    if (idUsuario === -1){
        throw Error("Usuario não cadastrado");
    }

    return true;
}

function limparUsuarios() {
  usuarios = [];
}

function getUsuario(index) {
  return usuarios[index];
}

export default {
  cadastrarUsuario,
  limparUsuarios,
  logarUsuario,
  criarUsuario,
  getUsuario
};