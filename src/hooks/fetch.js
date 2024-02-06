import {useCallback, useEffect, useState} from "react";

export const useFetch = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    const getData = useCallback(async () => {
        setLoading(true);
        const res = await fetch(url, {
            method: "GET",
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmNkY2UyYzU3YzQ3Mjk2OTNkNDM3YzFhOTI4ZDBkZSIsInN1YiI6IjY1NWUxMDc2ZDM5OWU2MDEyZTAyMDNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hq98-Bxaonwz4cniOcrJB9s78VM-TqgWaWrKIUkvy90'
            }
        });

        const json = await res.json();
        setData(json);
        setLoading(false);
    }, [url]);

    useEffect(() => {
        getData();
    }, [getData]);

    return { data, loading };
};