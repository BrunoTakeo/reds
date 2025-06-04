import { useCallback, useState } from "react";

const useValidacao = (initialModel, errorModel, validationRules) =>{
    const [model, setModel] = useState(initialModel);

    const [error, setError] = useState(errorModel);

    const handleChangeField = (name, value) =>{
        setModel(
            (prev) => ({...prev, [name]:value})
        )
    }
    const handleBlurField = (name) => {
        let errors = validBlurInput(name);

        setError({...errors})
    }

    const validadeAll = useCallback(
        () => {
            let errors = {};
            Object.keys(validationRules).forEach(
                (field) => {
                    const validationFunction = validationRules[field];

                    const value = model[field];

                    errors[`${field}Mensagem`] = validationFunction(value,model);

                    errors[field] = !!(errors[`${field}Mensagem`] && errors[`${field}Mensagem`].length)
                }
            );
            return errors;
        },[model,validationRules]
    )
    const validBlurInput = (field) =>{
        let errors = error;
        const validationFunction = validationRules[field];
        if (validationFunction){
            const value = model[field];

            errors[`${field}Mensagem`] = validationFunction(value,model);

            errors[field] = !!(errors[`${field}Mensagem`]&& errors[`${field}Mensagem`].length)
        }
        return errors;
    }
    return {model, setModel, error, setError, handleChangeField,handleBlurField,validadeAll}
}

export default useValidacao;