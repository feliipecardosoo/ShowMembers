import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";
import http from "../../../http/API";

export default function RestaurantesPost() {

    const parametro = useParams()

    useEffect(() => {
        if(parametro.id) {
            http.get<IRestaurante>(`restaurantes/${parametro.id}/`)
                .then(resposta => setNomeRestaurante(resposta.data.nome))
        }
    }, [parametro])

    const [nomeRestaurante, setNomeRestaurante] = useState('')

    const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if(parametro.id) {
            http.put(`/restaurantes/${parametro.id}/`, {
                nome: nomeRestaurante
            })  
            .then(() => {
                alert('Alterado')
            })            
        }  
        else {
            http.post('/restaurantes/', {
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
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '10%'}}>
            <Typography component="h1" variant="h6">Formulario Restaurante</Typography>
            <Box 
                component="form" 
                onSubmit={submeterForm}
                sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}
            >
                <TextField 
                    id="standard-basic" 
                    label="Digite o nome do restaurante" 
                    variant="standard"
                    value={nomeRestaurante} 
                    onChange={
                        evento => setNomeRestaurante(evento.target.value)
                    }
                    fullWidth
                    required
                />
                <Button 
                    variant="outlined"
                    type="submit"
                >
                    Enviar
                </Button>
            </Box>
        </Box>
    )
}