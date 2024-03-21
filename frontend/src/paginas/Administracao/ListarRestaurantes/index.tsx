import { useEffect, useState } from 'react';
import NavBar from '../../../componentes/NavBar'
import IRestaurante from '../../../interfaces/IRestaurante'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import http from '../../../http/API';

export default function AdministracaoRestaurantes() {

  const [ restaurantes, setRestaurantes ] = useState<IRestaurante[]>([])

  useEffect(() => {
    http.get<IRestaurante[]>('/restaurantes/')
        .then(e => {
            setRestaurantes(e.data)
        })
        .catch(e => {
            console.log(e)
        })
  }, [])

  const excluirRestaurante = (restauranteExcluido: IRestaurante) => {

    http.delete(`/restaurantes/${restauranteExcluido.id}/`, {})
        .then(() => {
            const show = restaurantes.filter(restauranteArray => restauranteArray.id !== restauranteExcluido.id)
            setRestaurantes([...show])
        })
  }

  console.log(restaurantes)

    return (
        <>
        <NavBar />
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            ID: 
                        </TableCell>
                        <TableCell>
                            Nome: 
                        </TableCell>
                        <TableCell>
                            Editar: 
                        </TableCell>
                        <TableCell>
                            Excluir: 
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map(restaurantes => 
                         <TableRow key={restaurantes.id}>
                            <TableCell>    
                                {restaurantes.id}        
                            </TableCell>
                            <TableCell>    
                                {restaurantes.nome}        
                            </TableCell>
                            <TableCell>
                                [<Link to={`${restaurantes.id}`}>Teste</Link>]
                            </TableCell>       
                            <TableCell>
                               <Button 
                                    variant='outlined' 
                                    color='error'
                                    onClick={() => excluirRestaurante(restaurantes)}
                                > 
                                    Excluir
                                </Button>
                            </TableCell>                        
                        </TableRow>
                    )}   
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}