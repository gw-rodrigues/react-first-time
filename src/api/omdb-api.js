/*
    http://www.omdbapi.com/?apikey=[yourkey]&s=spider
    http://www.omdbapi.com/?apikey=[yourkey]&t=spider&y=2022&plot=full

    BY ID ---
    Parameter 	Required 	Valid Options 	Default Value 	Description
    ---------------------------------------------------------------------
    i 	        Optional* 		                <empty> 	A valid IMDb ID (e.g. tt1285016)
    t 	        Optional* 		                <empty> 	Movie title to search for.
    type 	    No 	    movie,series,episode 	<empty> 	Type of result to return.
    y 	        No 		                        <empty> 	Year of release.
    plot 	    No 	        short, full 	    short 	    Return short or full plot.
    r 	        No      	json, xml 	        json 	    The data type to return.
    callback 	No 		                        <empty>     JSONP callback name.
    v 	        No 		                          1 	    API version (reserved for future use).


    By Search
    Parameter 	Required 	Valid options 	Default Value 	Description
    ---------------------------------------------------------------------
    s 	        Yes 		                    <empty> 	Movie title to search for.
    type 	    No 	    movie,series,episode 	<empty> 	Type of result to return.
    y 	        No 		                        <empty>     Year of release.
    r 	        No 	        json, xml 	        json 	    The data type to return.
    page New! 	No 	        1-100 	            1 	        Page number to return.
    callback 	No 		                        <empty>     JSONP callback name.
    v 	        No 		                        1 	        API version (reserved for future use).
*/
//import axios from 'axios'
const OMDB_URL = 'http://www.omdbapi.com/?apikey=cfab33fe';
/*const Request = (id) =>{
    axios.get(`${API_URL}&i=&plot=full`).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    })
}*/
export default OMDB_URL