const loadMore = document.querySelector('#loadMore');
const container = document.querySelector('#container');
let url = window.location.pathname;
const lastcharacter = url[url.length-1];
if (lastcharacter === '/'){
    url = url.substring(0, url.length-1);
}
url = url.substring(0, url.lastIndexOf('/'));
let userid = url.substring(url.lastIndexOf('/')+1);
let count = document.getElementsByClassName('list-item').length;
let total = Number(document.getElementById('topicscount').innerText);
let skip = count;
let limit = 10;
let loading = false;
const API_URL = window.location.hostname.includes("dev") ? `https://www.vie67.com.dev/api/users/${userid}/topics` : `https://www.vie67.com/api/users/${userid}/topics`;

document.addEventListener('scroll', () => {
    const rect = loadMore.getBoundingClientRect();
    if (rect.top < window.innerHeight && !loading) {
        loading = true;
        if (count < total) {
            fetch(API_URL + `?skip=${skip}`).then(response => response.json()).then(result => {
                result = result.results;
                result.forEach(topic => {
                    const div = document.createElement('div');
                    div.classList.add("mb-50");
                    div.classList.add("list-item");
                    const link = document.createElement('a');
                    link.setAttribute("href", `/topics/${topic.id}`);
                    link.classList.add("mr-15");
                    const img = document.createElement('img');
                    img.setAttribute("src", topic.imageurl);
                    img.classList.add("width-60");
                    img.classList.add("height-60");
                    img.classList.add("border-radius");
                    const link2 = document.createElement('a');
                    link2.setAttribute("href", `/topics/${topic.id}`);
                    link2.innerText = topic.name;
                    link2.classList.add("bold");
                    link2.classList.add("fs-16");
                    div.appendChild(link);
                    link.appendChild(img);
                    div.appendChild(link2);
                    container.appendChild(div);
                });
                count = document.getElementsByClassName('list-item').length;
                skip = count;
                loading = false;
            });
        }
    }
});