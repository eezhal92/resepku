var form = document.querySelector('#commentForm');      

form.addEventListener('submit', submitComment);

function submitComment(e) {
    e.preventDefault();

    var inputs = 'name=' + this.nama.value + '&text=' + this.isi.value;         

    this.nama.value = '';
    this.isi.value = '';

    request('POST', 'server.php', inputs, function(data) {
        data = JSON.parse(data);
        
        var commentItem = makeCommentItem(data);

        document.querySelector('.comment-lists').appendChild(commentItem);
    });
}

function makeCommentItem(data) {
    var commentItem = document.createElement('div');
    var author = document.createElement('strong');
    var text = document.createElement('p');
    
    author.innerHTML = data.name;
    text.innerHTML = data.text;
    commentItem.appendChild(author);
    commentItem.appendChild(text);
    
    commentItem.setAttribute('class', 'comment-item');
        

    return commentItem;
}

function request(method, url, formData, callback) {
    if(typeof formData == 'object') {
        formData = {};
    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(xmlhttp.responseText);
        }
    }

    xmlhttp.open(method, url, true);

    if (method == 'POST') {
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    }
    
    xmlhttp.send(formData);
}