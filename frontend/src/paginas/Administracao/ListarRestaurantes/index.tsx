import { useEffect, useState } from 'react';
import NavBar from '../../../componentes/NavBar'
import IRestaurante from '../../../interfaces/IRestaurante'
import style from './Administracao.module.scss'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Administracao() {

  const [ restaurantes, setRestaurantes ] = useState<IRestaurante[]>([])

  useEffect(() => {
    axios.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
        .then(e => {
            setRestaurantes(e.data)
        })
        .catch(e => {
            console.log(e)
        })
  }, [])

  const excluirRestaurante = (restaurante: IRestaurante) => {

    axios.delete(`http://localhost:8000/api/v2/restaurantes/${restaurante.id}/`, {})
        .then(() => {
            const show = restaurantes.filter(restauranteArray => restauranteArray.id !== restaurante.id)
            setRestaurantes([...show])
        })
  }

    return (
        <>
        <NavBar />
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
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