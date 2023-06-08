// if (typeof $ == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file properly!')};

let sumoRecords =[];

function fetchRikishiByShikonaEn (){
    fetch("https://www.sumo-api.com/api/rikishis").then(
        function(response){
            //console.log(response);
                response.json().then(function(data){
                    sumoRecords = data.records;
                    //console.log(sumoRecords);

                    let shikona = ""; 
                    let sumoId = 0;
                    let shikonaEn = "";
                    let shikonaJp = "";
                    let currentRank = "";
                    let heya = "";
                    let height = "";
                    let weight = "";
                    let shusshin = "";

                    shikona=document.getElementById("shikonaInput").value;
                    
                    for(i=0;i<sumoRecords.length;i++){

                        shikonaEn=sumoRecords[i].shikonaEn;

                        if (shikonaEn.toLowerCase() === shikona.toLowerCase()){
                            sumoId = sumoRecords[i].id;
                            shikonaEn = sumoRecords[i].shikonaEn;
                            shikonaJp = sumoRecords[i].shikonaJp;
                            currentRank = sumoRecords[i].currentRank;
                            heya = sumoRecords[i].heya;
                            height = sumoRecords[i].height;
                            weight = sumoRecords[i].weight;
                            shusshin = sumoRecords[i].shusshin;

                            console.log(sumoRecords[i]);
                            break;
                        }
                     }
                    document.getElementById("shikonaEn").innerText = shikonaEn;
                    document.getElementById("shikonaJp").innerText = shikonaJp;
                    document.getElementById("currentRank").innerText = currentRank;
                    document.getElementById("heya").innerText = heya;
                    document.getElementById("height").innerText = height;
                    document.getElementById("weight").innerText = weight;
                    document.getElementById("shusshin").innerText = shusshin;

                    document.getElementById("shikonaInput").value="";

                }
            )
        }
    )  
}

function fetchRikishiByShikonaJp (){
    fetch("https://www.sumo-api.com/api/rikishis").then(
        function(response){
            //console.log(response);
                response.json().then(function(data){
                    sumoRecords = data.records;
                    //console.log(sumoRecords);

                    let shikona = document.getElementById("shikonaInput").value;
                    let sumoId = 0;
                    let shikonaEn = "";
                    let shikonaJp = "";
                    let currentRank = "";
                    let heya = "";
                    let height = "";
                    let weight = "";
                    let shusshin = "";

                    for(i=0;i<sumoRecords.length;i++){
                        if (sumoRecords[i].shikonaJp === shikona){
                            sumoId = sumoRecords[i].id;
                            shikonaEn = sumoRecords[i].shikonaEn;
                            shikonaJp = sumoRecords[i].shikonaJp;
                            currentRank = sumoRecords[i].currentRank;
                            heya = sumoRecords[i].heya;
                            height = sumoRecords[i].height;
                            weight = sumoRecords[i].weight;
                            shusshin = sumoRecords[i].shusshin;

                            console.log(sumoRecords[i]);
                            break;
                        }
                     }
                     document.getElementById("shikonaEn").innerText = shikonaEn;
                     document.getElementById("shikonaJp").innerText = shikonaJp;
                     document.getElementById("currentRank").innerText = currentRank;
                     document.getElementById("heya").innerText = heya;
                     document.getElementById("height").innerText = height;
                     document.getElementById("weight").innerText = weight;
                     document.getElementsByTagName("shusshin").innerText = shusshin;

                     return data.records;
                }
            )
        }
    )  
}

function fetchAllRikishis (){
    return fetch("https://www.sumo-api.com/api/rikishis").then(res => res.json())
}
function fetchRikishiById(id){
    return fetch(`https://www.sumo-api.com/api/rikishi/${id}`).then(res => res.json())
}

// async function fetchRikishiByShikonaEn(){

//     //fetch all rikishis
//     sumoRecords = await fetchAllRikishis();
//     console.log(sumoRecords);
//     console.log(sumoRecords.length);
//     //sort rikishis - DO NOT DELETE
//     //const dRecords = data.records.sort((a, b) => a.id - b.id);
//     //const dRecords = data.records.sort((a,b) => (a.shikonaEn > b.shikonaEn) ? 1 : ((b.shikonaEn > a.shikonaEn) ? -1 : 0))
//     //console.log(dRecords);

//     //fetch rikishi by id - DO NOT DELETE
//     const datasearch = await fetchRikishiById(45);
//     console.log(datasearch);
//     console.log(datasearch.length);

//     let shikona = document.getElementById("shikonaInput").value;
//     let sumoId = 0;
//     let shikonaEn = "";
//     let shikonaJp = "";
//     let currentRank = "";
//     let heya = "";
//     let height = "";
//     let weight = "";
//     let shusshin = "";

//     // for(i=0;i<sumoRecords.length;i++){
//     //     if (sumoRecords[i].shikonaEn === shikona){
//     //         sumoId = sumoRecords[i].id;
//     //         shikonaEn = sumoRecords[i].shikonaEn;
//     //         shikonaJp = sumoRecords[i].shikonaJp;
//     //         currentRank = sumoRecords[i].currentRank;
//     //         heya = sumoRecords[i].heya;
//     //         height = sumoRecords[i].height;
//     //         weight = sumoRecords[i].weight;
//     //         shusshin = sumoRecords[i].shusshin;

//     //         console.log(sumoRecords[i]);
//     //         break;
//     //     }
//     // }


//     // document.getElementById("shikonaEn").innerText = shikonaEn;
//     // document.getElementById("shikonaJp").innerText = shikonaJp;
//     // document.getElementById("currentRank").innerText = currentRank;
//     // document.getElementById("heya").innerText = heya;
//     // document.getElementById("height").innerText = height;
//     // document.getElementById("weight").innerText = weight;
//     // document.getElementsByTagName("shusshin").innerText = shusshin;

//     // document.getElementById("shikonaEn").innerText = shikonaEn;
//     // document.getElementById("shikonaJp").innerText = shikonaJp;
//     // document.getElementById("currentRank").innerText = currentRank;
//     // document.getElementById("heya").innerText = heya;
//     // document.getElementById("height").innerText = height;
//     // document.getElementById("weight").innerText = weight;
//     // document.getElementsByTagName("shusshin").innerText = shusshin;

// }




