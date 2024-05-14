
import './App.css';
import {useState} from 'react'

function App() {

  const [nombre,setNombre]=useState("");
  const [edad,setEdad]=useState(0);
  const [dia,setDia]=useState("");
  const [estudios,setEstudios]=useState("No tiene estudios");
  const [lista,setLista]=useState([]);
  const [tipo,setTipo]=useState("");

  function entrevista(e){
      const opciones=e.target.options;
      const seleccionados=[];
      for(let i=0;i<opciones.length;i++){
         if(opciones[i].selected){
            seleccionados.push(opciones[i].value)
         }
      }
      setLista(seleccionados)
  }

  function opt1(){
    if(estudios=="tiene estudios"){
      return(
        <div>
          <p>Selecciones el tipo de estudio :</p>
          <input type="radio" id="html" name="fav_language" value="a nivel Primaria" onChange={(event)=>{setTipo(event.target.value)}}/>
          <label for="Primaria"> Primaria</label><br/>
          <input type="radio" id="css" name="fav_language" value="a nivel Secundaria" onChange={(event)=>{setTipo(event.target.value)}}/>
          <label for="Secundario"> Secundario</label><br/>
          <input type="radio" id="javascript" name="fav_language" value="a nivel Universitario" onChange={(event)=>{setTipo(event.target.value)}}/>
          <label for="Universitario"> Universitario</label><br/>
        </div>
      );
    }
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Finanzas personales</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Formulario React</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Proyecto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="card text-dark bg-light mb-3">
        <div className="card-body">
          <div className="container">
              <form>
                  <div className="mb-3">
                    <label for="nombre" class="form-label">Ingrese nombre</label>
                    <input type="text" onChange={(event)=>{setNombre(event.target.value)}}  class="form-control" id="nombre" name="nombre" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label for="edad" class="form-label">Ingrese edad</label>
                    <input type="number" onChange={(event)=>{setEdad(event.target.value)}}  class="form-control" id="edad" name="edad" min="0" max="100" />
                  </div>
                  <p>Seleccione el día de registro </p>
                  <select className="form-select" onChange={(event)=>{setDia(event.target.value)}}  aria-label="Default select example">
                    <option selected></option>
                    <option value="Lunes">Lunes</option>
                    <option value="Martes">Martes</option>
                    <option value="Miércoles">Miércoles</option>
                    <option value="Jueves">Jueves</option>
                    <option value="Viernes">Viernes</option>
                    <option value="Sábado">Sábado</option>
                    <option value="Domingo">Domingo</option>
                  </select>
                  <br/>
                  <p>Seleccione los días disponibles para entrevista </p>
                  <select className="form-select" multiple aria-label="Default select example" onChange={entrevista} value={lista}>
                    <option value="Lunes">Lunes</option>
                    <option value="Martes">Martes</option>
                    <option value="Miércoles">Miércoles</option>
                    <option value="Jueves">Jueves</option>
                    <option value="Viernes">Viernes</option>
                  </select>

                  <br/>
                  <div className="mb-3 form-check">
                    <input type="checkbox" onChange={(event)=>{
                      if(event.target.checked){
                        setEstudios("tiene estudios");
                      }else{
                        setEstudios("No tiene estudios");
                      }
                    }}  
                      class="form-check-input" id="estudios" name="estudios"/>
                    <label className="form-check-label" for="estudios">Estudios</label>
                  </div>
                  {opt1()}
                  <br/>
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Enviar
                  </button>
              </form>

          </div>
        </div>
      </div>
      <div className="card footer1 text-dark bg-light mb-3">
        <div className="card-body">
          <footer>
            <p>Corporación Universitaria Minuto de Dios</p>
            <p>Fundamentos de programación WEB</p>
            <p>Autor: William Suárez Ortiz</p>
            <p>Correo: William.suarez-o@uniminuto.edu.co</p>
          </footer>
        </div>
      </div>
      
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Reporte</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Usuario registrado : {nombre}</p>
              <p>Edad : {edad} años</p>
              <p>El usuario se registró el día {dia} y reporta que {estudios} {tipo}</p>
              <hr></hr>
              <p>Los días disponibles para entrevista son : </p>
              {lista.map((ms)=>{
                return(
                  <p> ➸ {ms}</p>
                )
              })}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>



















          
    </div>
  );
}

export default App;

