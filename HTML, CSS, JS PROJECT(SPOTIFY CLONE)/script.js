console.log("Lets start javascript...")

async function getSongs(){
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text()
    let div =  document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){

            songs.push(element.href.split("/songs/")[1])
        }
        
    }
    return songs


}

async function main(){
    let songs = await getSongs()
    console.log(songs)

    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li> 
    
                            <img class="invert svgsize" src="music.svg" alt="">
                            <div class="info">
                                <div> ${song.replaceAll("%20", " ")} </div>
                                <div>Sudhanshu</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="svgsize" src="play.svg" alt="play">
                            </div>
                        
       </li>`;
    }

    //Play first Song
    var audio = new Audio(songs[0]);
    audio.play();

    audio.addEventListener("loadeddata",()=>{
       console.log(audio.duration, audio.currentSrc)
        //the duration variable now holds the duration(in seconds) of the audio clip
    });
}

main()