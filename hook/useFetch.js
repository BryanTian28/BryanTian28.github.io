import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const options = {
		method: "GET",
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		params: {
			...query,
		},
		headers: {
			"X-RapidAPI-Key":
				"195134b73bmsh867eee4f58266f4p11b8e8jsn79db01f3b2b9",
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
	};

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await axios.request(options);

			setData(response.data.data);
			setIsLoading(false);
		} catch (error) {
			setError(error);
			alert("There is an error");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		setIsLoading(true);
		fetchData();
	};

	return { data, isLoading, error, refetch };
};

export default useFetch;
