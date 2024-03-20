import { useEffect, useState } from 'react';
import NavBar from '../../../componentes/NavBar'
import IRestaurante from '../../../interfaces/IRestaurante'
import style from './Administracao.module.scss'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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
                        </TableRow>
                    )}   
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}