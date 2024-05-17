import { useForm } from "react-hook-form";
import { userForm } from "../types";
import { createUser, getClient, updateUser } from "../services/userServices";
import './Cliente.css'
import { HeaderClients } from "./header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function NewClient() {

    const [userId, setUserId] = useState(false);

    const { id } = useParams();

    useEffect(()=>{
        if(id) {
            getClient(parseInt(id))
            .then(response =>{
                console.log(response)
                setValue("name",response.nombre_comercial)
                setValue("email",response.correo)
                setValue("phone",response.telefono)
                setUserId(true)
            })   
        }        
    },[])

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
      } = useForm<userForm>();

      const onSubmit = handleSubmit((data) => {
          console.log(data);
          const body ={
              nombre_comercial: data.name,
              telefono: data.phone,
              correo: data.email
          }

        if(userId){

            updateUser(body).then(response => {
                if (!response.ok) throw new Error('Error creando usuario')
            })

        }else{

            createUser(body).then(response => {
                if (!response.ok) throw new Error('Error creando usuario')
            })

        }


    });

    return (
        <main>
            <HeaderClients tablePage={false}></HeaderClients>
            <div className="card card-margin" >
                <form onSubmit={onSubmit}>
                    <div  className="table-container">
                        <div className="row">
                            <div className="input-Form col">
                                <label className="form-label">Nombre comercial:</label>
                                <input type="text" 
                                className="form-control"
                                placeholder="Ingrese el nombre comercial"
                                {...register("name", {
                                    required: {
                                    value: true,
                                    message: "Nombre es requerido",
                                    },
                                    minLength:{ 
                                        value: 2,
                                        message: "Nombre debe ser mayor a 2 caracteres"
                                    },
                                })}/>
                                {errors.name && (
                                <span> {errors.name.message} </span>
                                )}
                            </div>
                            <div  className="input-Form col">
                                <label className="form-label">Correo electrónico:</label>
                                <input type="email" 
                                className="form-control"
                                placeholder="Ingrese el correo electrónico"
                                {...register("email", {
                                    required: {
                                    value: true,
                                    message: "Email es requerido",
                                    },
                                    pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: "Correo no válido",
                                    },
                                })}/>
                                {errors.email && (
                                <span> {errors.email.message} </span>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div  className="input-Form col">
                                <label className="form-label">Teléfono:</label>
                                <input type="tel" className="form-control" placeholder="Ingrese el teléfono principal"
                                {...register("phone")}/>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                    <div className="btn-save">
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}