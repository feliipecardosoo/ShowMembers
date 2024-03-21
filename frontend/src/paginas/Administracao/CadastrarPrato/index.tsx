import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import http from "../../../http/API";
import ITag from "../../../interfaces/ITag";
import IRestaurante from "../../../interfaces/IRestaurante";

export default function PratosPost() {

    const [nomePrato, setNomePrato] = useState('')
    const [descricao, setDescricao] = useState('')
    
    const [tag, setTag] = useState('')
    const [restaurante, setRestaurante] = useState('')

    const [tags, setTags] = useState<ITag[]>([])
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    useEffect(() => {
        http.get<{tags: ITag[]}>('tags/')
            .then(e => setTags(e.data.tags))
        http.get<IRestaurante[]>('restaurantes/')
            .then(e => setRestaurantes(e.data))
    }, [])

    const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

    }

    return(
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '10%'}}>
            <Typography component="h1" variant="h6">Formulario Pratos</Typography>
            <Box 
                component="form" 
                onSubmit={submeterForm}
                sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}
            >
                <TextField 
                    id="standard-basic" 
                    label="Digite o nome do prato" 
                    variant="standard"
                    value={nomePrato} 
                    onChange={
                        evento => setNomePrato(evento.target.value)
                    }
                    fullWidth
                    required
                    margin="dense"
                />
                 <TextField 
                    id="standard-basic" 
                    label="Digite a descricao do prato" 
                    variant="standard"
                    value={descricao} 
                    onChange={
                        evento => setDescricao(evento.target.value)
                    }
                    fullWidth
                    required
                    margin="dense"
                />
                <FormControl margin="dense" fullWidth>
                    <InputLabel id="select-tag">Tag</InputLabel>
                    <Select labelId="select-tag" value={tag} onChange={e => setTag(e.target.value)}>
                        {tags.map(tag => <MenuItem key={tag.id} value={tag.id}>
                            {tag.value}
                        </MenuItem>)}
                    </Select>
                </FormControl>

                <FormControl margin="dense" fullWidth>
                    <InputLabel id="select-restaurante">Restaurante</InputLabel>
                    <Select labelId="select-restaurante" value={restaurante} onChange={e => setRestaurante(e.target.value)}>
                        {restaurantes.map(restaurante => <MenuItem key={restaurante.id} value={restaurante.id}>
                            {restaurante.nome}
                        </MenuItem>)}
                    </Select>
                </FormControl>


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