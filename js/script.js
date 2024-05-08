document.querySelector('button').addEventListener('click', viewPic);

function viewPic(){
    const dateSelected = document.getElementById('dateInput').value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=UOu1hcfU9q7CnigBAghNmgtWt7Vixjp4lMXBxCoN&date=${dateSelected}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector('h3').innerHTML = `explanation: ${data.explanation}`;
            document.querySelector('img').src = data.hdurl;
            document.querySelector('img').alt = "there is no pic for today";
        })
        .catch(err => console.log(`error ${err}`));
}