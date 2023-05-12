//Objeto de ususarios
const users={
    nome:'',
    usuario:'',
    senha:'',
    logado: false
}
//Array de objetos de usuarios
let usersArray=[]

function startApp()
{
let opçao = 6543513;

    while(opçao !==0)
    {
        let result

         switch(opçao)
         {
            case 1:
               result = login()
               if(result){
                alert('entrou')
               }else{
                alert('ususario ou senha incorretos')
               }

                

            break;
            case 2:
               result= register();
               if(!result){
                alert('nao foi pssovel receber o cadastro')
               }else{
                alert('usuario cadastrado com sucesso 👍 so acessar paizao')
               }
               

            break
            case 3:

            break
            case 0:

            break
            case 6543513:
                alert('voce precisa estar logado para acessar o menu principal \n' + 'Caso nao tenha usuario cadastrado ultilize a opçao 2 do menu')

            break
            default:
                alert('opçao nao encontrada')
                break
         }
         opçao =Number(prompt('selecione a opçao desejada: \n ' + 
         '1-Login \n ' + 
         '2-Cadastrar usuario \n' +
         '3-Esqueci minhas credenciais \n' + 
         '0-Sair '))
    }
}

function login(){
    let login = prompt('seu usuario')
    let pessword = prompt('sua senha')
   
    return validateLogin(login,pessword)
}

function validateLogin(login,pessword){
   let result = false
    for(let i = 0; i< usersArray.length; i++){
        console.log(usersArray[i])
        if(usersArray[i].usuario === login && usersArray[i].senha === pessword){
            result = true;
            usersArray[i].logado = true
        }  
    }
    return result
}

function register(){
    
        users.nome= prompt('digite seu nome:')
        users.usuario= prompt('digite seu usuario:')
        users.senha= prompt('digite sua senha:')

        if(users.nome !== '' && users.senha !==''){
            usersArray.push(users); 
            result=true
        }
        return result
       

}


startApp();