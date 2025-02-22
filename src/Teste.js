import { useEffect, useState } from "react";

function TesteBackend() {
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/teste")
            .then(response => response.text())
            .then(data => setMensagem(data))
            .catch(error => console.error("Erro ao conectar ao backend:", error));
    }, []);

    return <h1>{mensagem}</h1>;
}

export default TesteBackend;
