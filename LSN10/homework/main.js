
// const imge = document.createElement('img');
// imge.src = 'https://www.google.com/search?client=ubuntu-sn&hs=u4t&sca_esv=566478814&channel=fs&sxsrf=AM9HkKmn4TC0o6qwh32e5lOVV_WIYbLr-Q:1695108335496&q=picture&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiFrsXRkraBAxUYEhAIHcfiDYgQ0pQJegQIDRAB&biw=1366&bih=656&dpr=1#imgrc=pNOvi6Lmth0eoM'
// const node = document.getElementById('header-id');
// node.appendChild(imge);
// console.log(node);
// console.log(imge);
// console.log(imge.src);
// const header = document.getElementById('header');
// const image1 = document.getElementById('image');
// const image2 = document.createElement('img');
// image2.src = 'IMAGE(3).jpg';
// image1.appendChild(image2);
// // document.body.appendChild(image2);
// const item1 = document.getElementById('item-1');
// const item12 = document.createElement('button');
// item1.appendChild(item12);
const profil = document.getElementById('profile12');
const profil1 = document.createElement('div');
profil1.setAttribute('class', 'profile-image');
profil.appendChild(profil1);

const img = document.createElement('img');
img.setAttribute('src', 'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces');
profil1.appendChild(img);

const profileusersettings = document.createElement('div');
profileusersettings.setAttribute('class', 'profile-user-settings')
profil.appendChild(profileusersettings);

const h1 = document.createElement('h1');
h1.setAttribute('class', 'profile-user-name');
h1.innerText = 'janedoe_'
profileusersettings.appendChild(h1);

const button1 = document.createElement('button');
button1.setAttribute('class', 'btn profile-edit-btn');
button1.innerText = 'Edit Profile';
profileusersettings.appendChild(button1);

const button2 = document.createElement('button');
button2.setAttribute('class', 'btn profile-settings-btn');
button2.setAttribute('aria-label', 'profile settings');
profileusersettings.appendChild(button2);

const i = document.createElement('i');
i.setAttribute('class', 'fas fa-cog');
i.setAttribute('aria-hidden', 'true');
button2.appendChild(i);

const profilestats = document.createElement('div');
profilestats.setAttribute('class', 'profile-stats');
profil.appendChild(profilestats);

const ul = document.createElement('ul');
profilestats.appendChild(ul);

{/* <li><span class="profile-stat-count">164</span> posts</li>
<li><span class="profile-stat-count">188</span> followers</li>
<li><span class="profile-stat-count">206</span> following</li> */}

function liFun(arg, num) {
    const li = document.createElement('li');
    ul.appendChild(li);
    const span = document.createElement('span');
    span.setAttribute('class', 'profile-stat-count');
    li.appendChild(span);
    li.innerText = arg;
    span.innerText = num;

}

liFun('posts', '164');
liFun('followers', '188');
liFun('following', '206');


const profilbio = document.createElement('div');
profilbio.setAttribute('class', 'profile-bio');
profil.appendChild(profilbio);

const parag = document.createElement('p');
parag.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️`;
profilbio.appendChild(parag);
const span1 = document.createElement('span');
span1.setAttribute('class', 'profile-real-name');
span1.innerText = 'Jane Doe';
parag.appendChild(span1);

const galleryitem = document.querySelector('gallery-item');
const img2 = document.createElement('img');
img2.setAttribute('src', 'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop');
// galleryitem.appendChild(img2);

{/* <div class="gallery-item" tabindex="0">

<img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" class="gallery-image" alt="">

<div class="gallery-item-info">

    <ul>
        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
    </ul>

</div>

</div> */}

function funMain(argImg, num1, num2) {
    const gallery = document.querySelector('.gallery');
    const galleryitem = document.createElement('div');
    galleryitem.setAttribute('class', 'gallery-item');

    console.log("galleryitem =", gallery, galleryitem);
    galleryitem.setAttribute('tabindex', '0');
    gallery.append(galleryitem);

    const img3 = document.createElement('img');
    img3.setAttribute('src', 'argImg');
    galleryitem.appendChild(img3);

    const galleryiteminfo = document.createElement('div');
    galleryiteminfo.setAttribute('class', 'gallery-item-info');
    galleryitem.appendChild(galleryiteminfo);

    const ul3 = document.createElement('ul');
    galleryiteminfo.appendChild(ul3);

    // <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
    //     <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>

    const li3 = document.createElement('li');
    li3.setAttribute('class', 'gallery-item-likes');
    li3.innerText = 'num1'
    ul3.appendChild(li3);

    const span2 = document.createElement('span');
    span2.setAttribute('class', 'visually-hidden');
    span2.innerText = 'Likes:';
    li3.appendChild(span2);

    const i3 = document.createElement('i');
    i3.setAttribute('class', 'fas fa-heart');
    i3.setAttribute('aria-hidden', 'true');
    li3.appendChild(i3);

    const li4 = document.createElement('li');
    li4.setAttribute('class', 'gallery-item-comments');
    li4.innerText = 'num2'
    ul3.appendChild(li4);

    const span3 = document.createElement('span');
    span2.setAttribute('class', 'visually-hidden');
    span2.innerText = 'Comments:';
    li3.appendChild(span3);

    const i4 = document.createElement('i');
    i3.setAttribute('class', 'fas fa-comment');
    i3.setAttribute('aria-hidden', 'true');
    li3.appendChild(i3);








}
funMain('https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop', '4', '2');
