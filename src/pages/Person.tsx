import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Person {
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
}

export default function Person() {
  const { id } = useParams<{ id: string }>();
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${Number(id) + 1}/`)
      .then((response) => response.json())
      .then((data) => {
        setPerson(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching:', error));
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!person) {
    return <p>Person not found</p>;
  }

  return (
    <div className="bg-gray-700 min-h-screen max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl text-yellow-300 mb-6 font-bold">{person.name}</h1>
      <ul className="text-white">
        <li>Height: {person.height}</li>
        <li>Mass: {person.mass}</li>
        <li>Hair Color: {person.hair_color}</li>
        <li>Skin Color: {person.skin_color}</li>
        <li>Eye Color: {person.eye_color}</li>
        <li>Birth Year: {person.birth_year}</li>
        <li>Gender: {person.gender}</li>
        <li>Films: {person.films.length}</li>
      </ul>
    </div>
  );
}

