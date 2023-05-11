import "./App.css";
import { useEffect, useState } from "react";
import PersonList from "./Components/PersonList";
import Form from "./Components/Form";

function App() {
  const [persons, setPersons] = useState([]);
  const [editedPerson, setEditedPerson] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/persons", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setPersons(resp))
      .catch((err) => console.log(err));
  }, []);

  const editPerson = (person) => {
    setEditedPerson(person);
  };
  const updatedData = (person) => {
    const new_person = persons.map((my_person) => {
      if (my_person.id === person.id) {
        return person;
      } else {
        return my_person;
      }
    });
    setPersons(new_person);
  };

  const openForm = () => {
    setEditedPerson({ name: "", age: "", gender: "", email: "" });
  };

  const addedPerson = (person) => {
    const new_person = [...persons, person];
    setPersons(new_person);
  };

  const deletePerson = (person) => {
    const new_person = persons.filter((my_person) => {
      if (my_person.id === person.id) {
        return false;
      } else {
        return true;
      }
    });
    setPersons(new_person);
  };

  return (
    <div className="App">
      <div className="row">
        <div className="col cust">
          <h1 className="custs">RESTFUL API Assigment</h1>
        </div>
        <div className="col custs">
          <button className="btn btn-success" onClick={openForm}>
            Add People
          </button>
        </div>
      </div>

      <p className="cust2">By Ahmed Mansy</p>
      <h2 className="Title">List of Persons</h2>
      <div className="Body">
        <PersonList
          persons={persons}
          editPerson={editPerson}
          deletePerson={deletePerson}
        />
        {editedPerson ? (
          <Form
            person={editedPerson}
            updatedData={updatedData}
            addedPerson={addedPerson}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
