import repositorio from "./script.js";

describe("Gerenciamento de cadastro", () => {
    beforeEach(() => {
      repositorio.limparUsuarios()
    });
  
    test("Deve cadastrar um usuario se ele não existir", () => {
        
        let usuario = {login:"Usuario", senha: "senha"}
        repositorio.cadastrarUsuario(usuario)
        let isLogado = repositorio.logarUsuario(usuario)
        expect(isLogado).toBe(true)
    }); 

    test("Não deve cadastrar um usuario se ele existir no sistema", () => {
        let usuario = {login:"Usuario", senha: "senha"}
        repositorio.cadastrarUsuario(usuario)
        expect(()=>{
            repositorio.cadastrarUsuario(usuario)
        }).toThrow()
        
    }); 
  
    test("Não deve cadastrar um usuario se existir valores vazios", () => {
        let usuario = {login:"Usuario", senha: ""}
        expect(()=>{
            repositorio.cadastrarUsuario(usuario)
        }).toThrow()
        
    }); 
  });
  