import { Link } from "react-router-dom";

interface Props {
    tablePage: boolean
}

export function HeaderClients({tablePage}: Props) {
    return (
        <main>
          <header>
            <div>
                { tablePage == true ? <h1>Directorio de clientes</h1> 
                : <h1>Información de clientes</h1>}
                {tablePage == true ? <p>Directorio</p>
                : <p>Directorio | Cliente</p>}
            </div>
            {tablePage &&
              <Link to="/nuevo-cliente">
                <button type="button" className="btn btn-primary">              
                Agregar </button>
              </Link>
            }
          </header>
        </main>
    )
}