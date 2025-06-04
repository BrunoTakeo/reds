import {LOWERCASE, NUMBERS, PASSWORD_LENGTH, SPECIAL_CHARACTERS, UPPERCASE} from "../Configs/config";
import useValidacao from "../Hook/useValidacao";
import {ERROR_LOGIN, LOGIN} from "../Types/Login";

const validationLoginRules = {
    email: (email)=>{
        let mensagem = [];

        if(!email || !email.trim().length == 0){
            mensagem.push("Inform o e-mail")
        }
        if(email && /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(email)){
            mensagem.push("E-mail inválido!")
        }
        return mensagem;
    },
    senha: (senha)=>{
        let mensagem = [];

        if(!senha || senha.trim().length === 0){
            mensagem.push("Informe uma Senha")
        }

        if (!senha  && senha.length < PASSWORD_LENGTH) {
            mensagem.push("A senha deve conter no mínimo oito caracteres")
        }

        return mensagem;
    }
}
export const useValidarDadosLogin = () => {
    return useValidacao(LOGIN, ERROR_LOGIN, validationLoginRules);
}