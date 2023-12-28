
//localStorage.removeItem('Users.json');
//если пользователей нет то добавим двух пользователей.
var login = document.getElementById('login');
var password = document.getElementById('password');
if(!localStorage.getItem("Users.json"))
{
    //создаем запись json
   var  data ={
        name: 'Alice',
        surname:'Gazizullina',
        login: 'Alice',
        password: '',
        email:'digpig@gmai.ru',
        basket: []
    };
    var data2 ={
        name: 'Marina',
        surname:'Belochia',
        login: 'Marina',
        password:'1',
        email:'MBel7@mail.ru',
        basket: []
    };
    Users.push(data);
    Users.push(data2);
    var jasonRecord = JSON.stringify(Users);
    localStorage.setItem('Users.json', jasonRecord);
}
var jasonData =localStorage.getItem('Users.json')
Users = JSON.parse(jasonData);

document.getElementById('enterButton').addEventListener('click',function(){
var result = Users.find((item, index, array)=>item.login==login.value && item.password ==password.value)
if (result!=undefined)
{
    location.href= 'Catalog.html';
}else
{
    alert('У вас неправильный логин или пароль');
}
});