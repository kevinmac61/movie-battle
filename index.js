const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '8488c4f0',
            s: searchTerm
        }
    });
    console.log(response.data);
};

const input = document.querySelector(`input`);

let timeoutId;
const onInput = event => {
    if(timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
    }, 1000)
}

input.addEventListener(`input`, onInput);