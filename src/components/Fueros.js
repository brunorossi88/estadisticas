import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';




function Fueros() {

    const [url, setURL] = useState('https://localhost:44322/api/Post/fueros');
    const [respuestaAPI, setRespuestaAPI] = useState([]);


    useEffect(() => {
        const consultaAPI = async () => {
            const consulta = await axios({ url });
            setRespuestaAPI(consulta.data);
        };
        consultaAPI();
    }, []);


    return (
        <div>        

            <h2>FUEROS</h2>

            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                ID
                            </TableCell>
                            <TableCell>
                                Fuero
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {respuestaAPI.map((fuero) => (
                            <TableRow>
                                <TableCell>
                                    {fuero.fuero_Id}
                                </TableCell>
                                <TableCell>
                                    {fuero.descripcion}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

export default Fueros