function playerNameClor(playerId){
    document.getElementById(playerId).style.color = 'white';
}
playerNameClor('player-1');
playerNameClor('player-2');
playerNameClor('player-3');
playerNameClor('player-4');
playerNameClor('player-5');
playerNameClor('player-6');

function playerBackgropund(divID){
    const idCatch = document.getElementById(divID);
    idCatch.style.backgroundColor = 'black';
    idCatch.style.padding = '10px';
    idCatch.style.marginRight = '25px';
    idCatch.style.borderRadius = '40px';
    // document.getElementById(divID).style.backgroundColor = 'black';
    // document.getElementById(divID).style.backgroundColor = 'black';
}
playerBackgropund('player-section-1');
playerBackgropund('player-section-2');
playerBackgropund('player-section-3');
playerBackgropund('player-section-4');
playerBackgropund('player-section-5');
playerBackgropund('player-section-6');

document.getElementById('basic-addon2').addEventListener('click',function(){
    const nameLi = document.createElement('li');
    const getName = document.getElementById('input-name').value;
    nameLi.innerText = getName;
    const listed = document.getElementById('list-parent');
    listed.appendChild(nameLi);
    document.getElementById('input-name').value = '';
})

document.getElementById('basic-addon3').addEventListener('click',function(){
    const getValue = document.getElementById('basic-addon1');
    if( getValue.innerText < 5){
        getValue.innerText = parseInt(getValue.innerText) + 1 ;
    }
    else if (getValue.innerText >= 5){
        document.getElementById('basic-addon3').disabled = true;
    }
})