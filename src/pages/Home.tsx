import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Root {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export default function Home() {
  const [people, setPeople] = useState<Root[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        setPeople(data.results);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching:', error));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-600 min-h-screen max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl text-yellow-300 text-center mb-6 font-bold">People List:</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {people.map((person, index) => (
          <Link to={`${index}`} key={index}>
            <li className="bg-yellow-500 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl text-white font-semibold">{person.name}</h2>
              {/* <p className="text-sm text-gray-400">Gender: {person.gender}</p>
              <p className="text-sm text-gray-400">Height: {person.height}</p>
              <p className="text-sm text-gray-400">Mass: {person.mass}</p>
              <p className="text-sm text-gray-400">Hair Color: {person.hair_color}</p>
              <p className="text-sm text-gray-400">Eye Color: {person.eye_color}</p>
              <p className="text-sm text-gray-400">Birth Year: {person.birth_year}</p>
              <p className="text-sm text-gray-400">Films: {person.films.length}</p> */}

            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

