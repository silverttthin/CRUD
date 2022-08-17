let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let allClear = document.getElementById("allClear");
let data = {};

allClear.addEventListener(
    "click",
    () => {
        posts.innerHTML = "";
        data = {};
        console.log(data);
    }
)

form.addEventListener(
    "submit", 
    (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
}
) // 왼쪽에 있는게(form) 첫번째 인수가 되면(submit이 되면) 두번째 인수 함수를 실행해주세요

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be balnk";
        console.log("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";

        acceptData();
    }
};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
    input.value = "";
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};