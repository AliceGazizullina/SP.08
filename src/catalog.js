var Products =[]
localStorage.removeItem("Products.json");
if(!localStorage.getItem("Products.json"))
{
    Products =
    [
        {
            id: 0,
            name:'Mortal Combat',
            Genre:'Fights',
            discription: '(— «Смертельная битва») — серия видеоигр в жанре файтинг, созданная Эдом Буном и Джоном Тобиасом.',
            img: 'imges/image 2.png',
            year: 2019,
            cost:12.3 //цена указана в $
        },
        {
            id: 1,
            name:'Blade',
            Genre:'Battle',
            discription: 'компьютерная игра, основанная на комиксах издательства Marvel Comics об одноимённом персонаже и являющаяся приквелом фильма',
            img: 'imges/image 9.png',
            year: 2020,
            cost:8.3
        },
        {
            id: 3,
            name:'Cyberpunk 2077',
            Genre:'RPG',
            discription: 'компьютерная игра в жанре Action/RPG в открытом мире, разработанная и изданная польской студией CD Projekt. ',
            img: 'imges/image 1.png',
            year:2018,
            cost:20.3
        },
        {
            id: 4,
            name:'Tower of fantasy',
            Genre:'Lutter_Battle',
            discription: 'трехмерная ролевая игра с «общим миром» , в которую можно играть с видом от третьего лица. ',
            img: 'imges/image 45.png',
            year: 2017,
            cost:5.3
        },
        {
            id: 5,
            name:'Ratchet and Clank',
            Genre:'Platformer',
            discription: 'платформер, рассказывающий о похождениях Рэтчета, представителя котоподобной расы Ломбакс и маленького робота Клэнка. ',
            img: 'imges/image 8.png',
            year: 2016,
            cost:3.8
        },
        {
            id: 6,
            name:'Exoprimal',
            Genre:'Fights',
            discription: 'брось вызов самым свирепым зверям в истории с помощью новейшей разработки человечества — экзокостюмов. ',
            img: 'imges/image 5.png',
            year: 2015,
            cost:15.7
        },
    ]
    var jasonRecord = JSON.stringify(Products);
    localStorage.setItem('Products.json', jasonRecord);
}
else
{
    const jasonData =localStorage.getItem('Products.json')
    Products = JSON.parse(jasonData);
}

var GetProducts = Products.forEach(function callback(currentValue,index,array){createElementForBasketWithHTML(index, currentValue)});

function createElementForBasketWithHTML(i, currentValue)
{   if(i<3){
    var parentElement = document.getElementById('firstParst');
    var HTML = '<div class="card-blade">'
        HTML+= '<div class="card-img">'
        HTML+='<img src="'+currentValue.img+'" alt="">'
        HTML+='</div>'
        HTML+='<p>'+currentValue.name+' <br> '+currentValue.discription+'</p>'
        HTML+='<div class="butt">'
        HTML+='<button>Купить</button>'
        HTML+='</div>'
        HTML+='</div>'
    parentElement.innerHTML += HTML;
    }else
    {
        var parentElement = document.getElementById('secondParst');
    var HTML = '<div class="card-blade">'
        HTML+= '<div class="card-img">'
        HTML+='<img src="'+currentValue.img+'" alt="">'
        HTML+='</div>'
        HTML+='<p>'+currentValue.name+' <br> '+currentValue.discription+'</p>'
        HTML+='<div class="butt">'
        HTML+='<button>Купить</button>'
        HTML+='</div>'
        HTML+='</div>'
    parentElement.innerHTML += HTML;
    }
}

/// простая сортировка по кнопке.
/// сортировка производится от меньшего к большему.
document.getElementById('MyPrice').addEventListener('click',function(){
    var chxGenre = document.getElementById('chxGenre');
    var chxCost =document.getElementById('chxCost');
    var chxYear =document.getElementById('chxYear');
    if(chxYear.checked==true){
   Products= Products.sort(function(a,b){
        if(a.year<b.year){return -1}
        if(a.year>b.year){return 1}
        else
        {return 0}
    });
    }
    if(chxCost.checked==true){
    Products= Products.sort(function(a,b){
            if(a.cost<b.cost){return -1}
            if(a.cost>b.cost){return 1}
            else
            {return 0}
        });
    }
    if(chxGenre.checked==true){
     Products= Products.sort(function(a,b){
            if(a.Genre<b.Genre){return -1}
            if(a.Genre>b.Genre){return 1}
            else
            {return 0}
        });
    }

    var parentElement = document.getElementById('firstParst');
    parentElement.innerHTML='';
    var parentElement = document.getElementById('secondParst');
    parentElement.innerHTML='';
    Products.forEach(function callback(currentValue,index,array){createElementForBasketWithHTML(index, currentValue)});
})
