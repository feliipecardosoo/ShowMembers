import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function RestaurantesPost() {

    const [nomeRestaurante, setNomeRestaurante] = useState('')

    const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

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