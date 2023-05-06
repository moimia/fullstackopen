import { useState } from 'react';

const App = () => {
	const [ persons, setPersons ] = useState([ { name: 'Arto Hellas' } ]);
	const [ newName, setNewName ] = useState('');

	const handleName = (event) => {
		console.log(event.target.value);
		setNewName(event.target.value);
	};

	const addName = (event) => {
		event.preventDefault();
		const nameObject = {
			name: newName
		};
		setPersons(persons.concat(nameObject));
		setNewName('');
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form>
				<div>
					name: <input value={newName} onChange={handleName} />
				</div>
				<div>
					<button type="submit" onClick={addName}>
						add
					</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => <div key={person.name}>{person.name}</div>)}
		</div>
	);
};

export default App;
