import repositorio from "./script.js";

describe("Gerenciamento de login", () => {
    beforeEach(() => {
      repositorio.limparUsuarios()
    });
  
    test("Deve logar um usuario se ele existir no sistema", () => {
        for(let index =0; index <10; index++){
            let usuario = repositorio.criarUsuario()
            repositorio.cadastrarUsuario(usuario)
        }
        let usuario = repositorio.getUsuario(Math.floor((Math.random() * 10)));
        let isLogado = repositorio.logarUsuario(usuario)
        expect(isLogado).toBe(true)
    }); 

    test("Nao deve logar um usuario se ele nao existir no sistema", () => {
        for(let index =0; index <10; index++){
            repositorio.cadastrarUsuario(repositorio.criarUsuario())
        }
        expect(()=>{
            repositorio.logarUsuario({login:"Inexistente", senha:"Inexistente"})
        }).toThrow()
        
    }); 
    
    test("Nao deve logar um usuario se dados estiverem vazios", () => {
        for(let index =0; index <10; index++){
            repositorio.cadastrarUsuario(repositorio.criarUsuario())
        }
        let usuario = repositorio.getUsuario(Math.floor((Math.random() * 10)));
        usuario.senha = ""
        expect(()=>{
            repositorio.logarUsuario(usuario)
        }).toThrow()
        
    });   
  });
  