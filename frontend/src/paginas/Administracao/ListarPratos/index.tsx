import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../../http/API"
import IPrato from "../../../interfaces/IPrato"

import { Link as RouterLink } from 'react-router-dom'

const AdministracaoPratos = () => {

    const [pratos, setPratos] = useState<IPrato[]>([])

    useEffect(() => {
        http.get<IPrato[]>('pratos/')
            .then(resposta => setPratos(resposta.data))
    }, [])

    const excluir = (pratoAhSerExcluido: IPrato) => {
        http.delete(`pratos/${pratoAhSerExcluido.id}/`)
            .then(() => {
                const listaPratos = pratos.filter(prato => prato.id !== pratoAhSerExcluido.id)
                setPratos([...listaPratos])
            })
    }

    console.log(pratos)

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Tag
                        </TableCell>
                        <TableCell>
                            Imagem
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pratos.map(pratos => <TableRow key={pratos.id}>
                        <TableCell>
                            {pratos.nome}
                        </TableCell>
                        <TableCell>
                            {pratos.tag}
                        </TableCell>
                        <TableCell>
                            [<a href={pratos.imagem} target="_blank" rel="noreferrer">ver imagem</a>]
                        </TableCell>
                        <TableCell>
                            [ <RouterLink to={`/admin/pratos/${pratos.id}`}>editar</RouterLink> ]
                        </TableCell>
                        <TableCell>
                            <Button variant="outlined" color="error" onClick={() => excluir(pratos)}>
                                Excluir
                            </Button>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoPratos