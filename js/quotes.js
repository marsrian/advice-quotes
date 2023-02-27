const loadQuotes = () =>{
    const url = `https://api.adviceslip.com/advice`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayQuotes(data));
}

const displayQuotes = (data) =>{
    console.log(data)
    const quotesSection = document.getElementById("quotesSection");
    const quotesDiv = document.createElement('div');
    quotesDiv.innerHTML = `
        <div class='border-2 border-solid border-gray-700 bg-gray-700 rounded-lg p-4 text-white'>
            <h1 class='text-green-600 font-medium mb-4'>ADVICE # ${data.slip.id}</h1>
            <p class='font-bold mb-7'>${data.slip.advice}</p>
            <div class='flex flex-row relative'>
                <hr class='w-2/5 mr-7'>
                <h1 class='font-bold text-3xl absolute bottom-[-10px] left-10 md:left-64'>||</h1>
                <hr class='w-2/5 ml-7'>
            </div>
        </div>
        `
    quotesSection.appendChild(quotesDiv);

}


loadQuotes();

