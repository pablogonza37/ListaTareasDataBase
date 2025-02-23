import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas, setTareas, token }) => {

  return (
    <ListGroup className='my-4'>
      {tareas.map((tarea) => (
        <ItemTarea
          key={tarea._id}
          idTarea={tarea._id}
          tareaAgregada={tarea}
          setTareas={setTareas}
          token={token}
        ></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
