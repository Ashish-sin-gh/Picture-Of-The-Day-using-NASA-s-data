document.querySelector('button').addEventListener('click', viewPic);

function viewPic(){
const dateSelected = document.getElementById('dateInput').value;
const url = `https://api.nasa.gov/planetary/apod?api_key=UOu1hcfU9q7CnigBAghNmgtWt7Vixjp4lMXBxCoN&date=${dateSelected}`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const iframe = document.querySelector('iframe');
        const image = document.querySelector('img');

        document.querySelector('h3').innerHTML = `explanation: ${data.explanation}`;
        if(data.media_type === 'image'){
            iframe.style.display = "none"; 
            if(image.style.display === "none"){
            image.style.display = "block";
            }
            image.src = data.hdurl;
            image.alt = "there is no pic for today";
        }else if(data.media_type === 'video'){
            image.style.display = "none";
            if(iframe.style.display === "none"){
                iframe.style.display = "block";
            }
            iframe.src = data.url;
        }   
    })
    .catch(err => console.log(`error ${err}`));
}