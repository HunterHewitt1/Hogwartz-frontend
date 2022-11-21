import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import Student from '../components/Student'


const SearchResults = () => {
	const [searchResults, setSearchResults] = useState([]);

	const { student} = useParams();

	const getSearchResults = async () => {
		const response = await axios.get(`${BASE_URL}/student`);
		const studentSearchResults = response.data;
		const filteredResults = studentSearchResults.filter(
			(studentSearchResult) =>
				studentSearchResult.toLowerCase() === student.toLowerCase()
		);
		setSearchResults(filteredResults);
	};

	useEffect(() => {
		getSearchResults();
	}, []);

	return (
		<div>
			{searchResults.map((student) => (
				<Link
					key={student.id}
					to={`/student/${student.id}`}
				>
					<Student
                    name={student.name}
                    email ={student.email}
                    course={student.course}
                    gpa ={student.gpa}
                    />
				</Link>
			))}
		</div>
	);
};

export default SearchResults;
