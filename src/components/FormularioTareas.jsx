import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const FormularioTareas = () => {
const [tarea, setTarea] = useState('');

  return (
    <Form>
      <Form.Group className="mb-3 d-flex justify-content-between">
        <Form.Control
          type="text"
          placeholder="Agregar Tarea"
          minLength={3}
          maxLength={50}
          onChange={(e)=> setTarea(e.target.value)} 
          value={tarea}
        />
        <Button variant="primary" className="mx-2" type='submit'>
          Agregar
        </Button>
      </Form.Group>
    </Form>
  );
};

export default FormularioTareas;
