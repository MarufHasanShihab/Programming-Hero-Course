

document.getElementById("add-comment-btn").addEventListener('click', function(){
    const commentInput = document.getElementById("comment-input");
    let commentInputText = commentInput.value;
    const comment = document.createElement("h2");
    comment.innerText = commentInputText;
    const commentBox = document.getElementById("comment-box");
    commentBox.appendChild(comment);
    commentInput.value = "";
})