var usersList = document.getElementById('usersList');
var nomeInput = document.getElementById('nomeInput');
var idadeInput = document.getElementById('idadeInput');
var addButton = document.getElementById('addButton');

addButton.addEventListener('click', function(){
    create(nomeInput.value, idadeInput.value);
});

function create(nome, idade){
    var data = {
        nome: nome,
        idade: idade
    };
    return firebase.database().ref().child('users').push(data);
}
firebase.database().ref('users').on('value', function (snapshot){
    usersList.innerHTML = '';
    snapshot.forEach(function(item){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().nome + ' : ' + item.val().idade));
        usersList.appendChild(li);
    });
});