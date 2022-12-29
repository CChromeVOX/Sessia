const container = document.querySelector('#container')
const getRes = async(url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`status: ${res.status}`);
    }
    return await res.json()
}

getRes('user.json')
    .then(data => {
        console.log(data);
        for(let key in data) {
            
            const block = document.createElement('div');
            const title = data[key].title;
            const desc = data[key].desc;
            const share = data[key].share;
            const img = data[key].img;
            const id = data[key].id;


            block.innerHTML =`<div class="pro"><div class="block">
                <a href="${share}"target="_blank">
                <h2>Имя работы: ${title}</h2>
                <p>Описание: ${desc}</p>
                <img class="inside" src="${img}">
                </a>
            </div>
            <div class="">
            
            <h2>Добавить комментарий</h2>
                <input id="textpost${id}" type="text"/><button id="${id}" onClick="addComment(this)"type="submit">Добавить</button>
            <div id="comm${id}"></div> 
            </div>
            </div>`
            container.append(block);
        }
    })
 
    function addComment(obj) {
        let idi = obj.id;
        let commBlock=document.querySelector(`#comm${idi}`);
        let text=document.querySelector(`#textpost${idi}`).value;
        let newComm = document.createElement('p');
        newComm.textContent = text;
        commBlock.append(newComm);
        
    }