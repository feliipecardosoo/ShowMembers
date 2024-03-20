import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";

export default function RestaurantesPost() {

    const parametro = useParams()

    useEffect(() => {
        if(parametro.id) {
            axios.get<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${parametro.id}/`)
                .then(resposta => setNomeRestaurante(resposta.data.nome))
        }
    }, [parametro])

    const [nomeRestaurante, setNomeRestaurante] = useState('')

    const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if(parametro.id) {
            axios.put(`http://localhost:8000/api/v2/restaurantes/${parametro.id}/`, {
                nome: nomeRestaurante
            })  
            .then(() => {
                alert('Alterado')
            })            
        }  
        else {
            axios.post('http://localhost:8000/api/v2/restaurantes/', {
            nome: nomeRestaurante
            })
                .then(() => {
                alert('Inserido no Bd')
                })
                .catch(e => {
                console.log(e)
                })
        }
    }

    return(
        <form onSubmit={submeterForm}>
            <TextField 
                id="standard-basic" 
                label="Digite o nome do restaurante" 
                variant="standard"
                value={nomeRestaurante} 
                onChange={
                    evento => setNomeRestaurante(evento.target.value)
                }
            />
            <Button 
                variant="outlined"
                type="submit"
            >
                Enviar
            </Button>
        </form>
    )
}