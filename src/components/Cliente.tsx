
import { useEffect, useMemo, useState } from 'react';
import { User } from '../types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Cliente.css'
import { HeaderClients } from './header';
import { getClientes } from '../services/userServices';
import { useNavigate } from 'react-router-dom';

export function Cliente() {

    const [users, setUsers] = useState<User[]>([])
    const [filter, setFilter] = useState<string | null>(null)
    const navigate = useNavigate();

    const getUsers = async () => {
        const fakeData = await getClientes()
        setUsers(fakeData)
    }

    const deleteUser = (id:number) => {
      const newUsers = users.filter((user:User) => user.id != id)
      setUsers(newUsers)
    } 
  
    const filteredUsers = useMemo(()=>{
        return typeof filter === 'string' && filter.length > 0 
        ? users.filter(user => {
          return user.nombre_comercial.toLowerCase().includes(filter.toLowerCase())
        }) : users
            
      },[users, filter]) 
    

    useEffect(()=>{
        getUsers()
     },[])

    return (
        <main>
            <HeaderClients tablePage={true}></HeaderClients>
            <div className='card card-margin'>
                <div className='table-container'>
                    <input placeholder='Busqueda de clientes' onChange={(e) => { setFilter(e.target.value) }} />
                    <table className="table table-striped" >

                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre comercial</th>
                                <th>Telefono</th>
                                <th>Correo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody className="table-striped">
                            {
                                filteredUsers.map((user: User) => {
                                    return (
                                        <>
                                            <tr key={user.id}>
                                                <td>
                                                    {user.id}
                                                </td>
                                                <td>
                                                    {user.nombre_comercial}
                                                </td>
                                                <td>
                                                    {user.telefono}
                                                </td>
                                                <td>
                                                    {user.correo}
                                                </td>
                                                <td>
                                                    <button type="button" onClick={() => {navigate(`/cliente/${user.id}`)}} className="btn btn-primary"><i className="fa-solid fa-gears"></i></button>
                                                    <button type="button" onClick={() => deleteUser(user.id)} className="btn btn-danger"><i className="fa-solid fa-x"></i></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </main>        
    )
}

export default Cliente;