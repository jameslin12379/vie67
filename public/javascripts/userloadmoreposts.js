const loadMore = document.querySelector('#loadMore');
const container = document.querySelector('#container');
let url = window.location.pathname;
const lastcharacter = url[url.length-1];
if (lastcharacter === '/'){
    url = url.substring(0, url.length-1);
}
let userid = url.substring(url.lastIndexOf('/') + 1);
let count = document.getElementsByClassName('list-item').length;
let total = Number(document.getElementById('postscount').innerText);
let skip = count;
let loading = false;
const API_URL = window.location.hostname.includes("dev") ? `https://www.vie67.com.dev/api/users/${userid}` : `https://www.vie67.com/api/users/${userid}`;


document.addEventListener('scroll', () => {
    const rect = loadMore.getBoundingClientRect();
    if (rect.top < window.innerHeight && !loading) {
        loading = true;
        if (count < total) {
            fetch(API_URL + `?skip=${skip}`).then(response => response.json()).then(result => {
                result = result.results;
                result.forEach(post => {
                    const div = document.createElement('div');
                    div.classList.add("post-review");
                    div.classList.add("list-item");
                    div.classList.add("mb-50");
                    const div2 = document.createElement('div');
                    div2.classList.add("mb-15");
                    const link = document.createElement('a');
                    link.setAttribute("href", `/posts/${post.id}`);
                    const video = document.createElement('video');
                    video.setAttribute("controls", "");
                    video.setAttribute("controlsList", "nodownload");
                    video.setAttribute("webkitallowfullscreen", "");
                    video.setAttribute("mozallowfullscreen", "");
                    video.setAttribute("allowfullscreen", "");
                    video.classList.add("width-100p");
                    const source = document.createElement('source');
                    source.setAttribute("src", post.videourl);
                    source.setAttribute("type", "video/mp4");
                    video.appendChild(source);
                    link.appendChild(video);
                    div2.appendChild(link);
                    div.appendChild(div2);
                    const div4 = document.createElement('div');
                    div4.classList.add("flex");
                    div.appendChild(div4);
                    const div5 = document.createElement('div');
                    div5.classList.add("mr-15");
                    div4.appendChild(div5);
                    l1 = document.createElement('a');
                    l1.setAttribute("href", `/users/${post.userid}`);
                    i1 = document.createElement('img');
                    i1.setAttribute("src", post.userimageurl);
                    i1.classList.add('width-60');
                    i1.classList.add('height-60');
                    i1.classList.add('border-radius');
                    l1.appendChild(i1);
                    div5.appendChild(l1);
                    div6 = document.createElement('div');
                    div4.appendChild(div6);
                    const div7 = document.createElement('div');
                    l2 = document.createElement('a');
                    l2.setAttribute("href", `/users/${post.userid}`);
                    l2.innerText = post.username;
                    l2.classList.add("bold");
                    l2.classList.add("fs-16");
                    l2.classList.add("marginr-5");
                    l3 = document.createElement('a');
                    l3.setAttribute("href", `/topics/${post.topicid}`);
                    l3.innerText = post.topicname;
                    l3.classList.add("bold");
                    l3.classList.add("fs-16");
                    div7.appendChild(l2);
                    div7.appendChild(l3);
                    div6.appendChild(div7);
                    const div8 = document.createElement('div');
                    div8.innerText = moment(post.datecreated).format('LLL');
                    div8.classList.add("fs-16");
                    div6.appendChild(div8);
                    container.appendChild(div);
                });
                count = document.getElementsByClassName('list-item').length;
                skip = count;
                loading = false;
            });
        }
    }
});



// const div = document.createElement('div');
// div.classList.add("et_pb_module");
// div.classList.add("et_pb_blurb");
// div.classList.add("et_pb_blurb_0");
// // div.classList.add("et_animated");
// div.classList.add("et_pb_bg_layout_light");
// div.classList.add("et_pb_text_align_left");
// div.classList.add("et_pb_blurb_position_left");
// div.classList.add("container-item");
// const div2 = document.createElement('div');
// div2.classList.add("et_pb_blurb_content");
// div.appendChild(div2);
// const div3 = document.createElement('div');
// div3.classList.add("et_pb_blurb_container");
// div2.appendChild(div3);
// const h4 = document.createElement('h4');
// h4.classList.add("et_pb_module_header");
// div3.appendChild(h4);
// if (post.posttype === 1){
//     const link = document.createElement('a');
//     link.setAttribute("href", `/posts/${post.id}`);
//     link.innerText = post.name;
//     h4.appendChild(link);
// } else {
//     const link = document.createElement('a');
//     link.setAttribute("href", `/posts/${post.id}`);
//     link.innerText = `/posts/${post.id}`;
//     h4.appendChild(link);
// }
// const div4 = document.createElement('div');
// div4.classList.add("et_pb_blurb_description");
// div3.appendChild(div4);
// if (post.posttype === 1){
//     const p = document.createElement('p');
//     p.innerText = post.description;
//     div4.appendChild(p);
//
// } else if (post.posttype === 2){
//     const img = document.createElement('img');
//     img.setAttribute("src", post.imageurl);
//     div4.appendChild(img);
// } else {
//     const video = document.createElement('video');
//     const source = document.createElement('source');
//     video.setAttribute("controls", true);
//     video.setAttribute("allowfullscreen", true);
//     source.setAttribute("src", post.videourl);
//     source.setAttribute("type", "video/mp4");
//     video.appendChild(source);
//     div4.appendChild(video);
// }
// const div5 = document.createElement('div');
// div5.classList.add("flex");
// div5.classList.add("mt-15");
// div4.appendChild(div5);
// const div6 = document.createElement('div');
// div6.classList.add("pr-15");
// div5.appendChild(div6);
// l1 = document.createElement('a');
// l1.setAttribute("href", `/users/${post.userid}`);
// i1 = document.createElement('img');
// i1.setAttribute("src", post.userimageurl)
// i1.classList.add('et_pb_animation_top');
// i1.classList.add('item-image');
// l1.appendChild(i1);
// div6.appendChild(l1);
// div7 = document.createElement('div');
// div5.appendChild(div7);
// const div8 = document.createElement('div');
// l2 = document.createElement('a');
// l2.setAttribute("href", `/users/${post.userid}`);
// l2.classList.add("hd");
// l2.innerText = post.username;
// div7.appendChild(div8);
// div8.appendChild(l2);
// const div9 = document.createElement('div');
// l3 = document.createElement('a');
// l3.setAttribute("href", `/topics/${post.topicid}`);
// l3.innerText = post.topicname;
// div7.appendChild(div9);
// div9.appendChild(l3);
// const div10 = document.createElement('div');
// div10.innerText = moment(post.datecreated).format('LLL');
// div7.appendChild(div10);
// container.appendChild(div);
//
// <div class="flex mt-15">
//     <div class="pr-15">
//     <a href="/users/<%= results[1][i].userid %>"><img src="<%= results[1][i].userimageurl %>" alt="" class="et-waypoint et_pb_animation_top item-image" /></span></a>
// </div>
// <div>
// <div><a href="/users/<%= results[1][i].userid %>" class="brown"><%= results[1][i].username %></a></div>
// <div><a href="/topics/<%= results[1][i].topicid %>" class="brown"><%= results[1][i].topicname %></a></div>
// <div><%= moment(results[1][i].datecreated).format('LLL') %></div>
//
//     </div>
//     </div>