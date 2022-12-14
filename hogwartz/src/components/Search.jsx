const Search = ({onSubmit, value, handleChange}) => {
	return (
	<form onSubmit={onSubmit}>
		<input
			type="text"
			name="search"
			value={value}
			placeholder="Search"
			onChange={handleChange}
		/>
	<button type="submit">Search</button>
	</form>
	);
};

export default Search;