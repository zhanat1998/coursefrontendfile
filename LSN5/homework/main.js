// // Сделайте функцию, которая возвращает куб числа. Число передается парамеconst 
// function funCube(arg) {
//     let result = arg ** 3;
//     return result;
// }
// console.log(funCube(3));

// // Сделайте функцию, которая возвращает квадрат числа. Число передается параметром. 
// function funSquare(arg) {
//     let res = arg ** 2;
//     return res;
// }
// console.log(funSquare(3));
// // Сделайте функцию, которая возвращает сумму двух чисел. 
// function funSum(arg1, arg2) {
//     resu = arg1 + arg2;
//     return resu;
// }
// console.log(funSum(3, 5));
// // Сделайте функцию, которая отнимает от первого числа второе и делит на третье. 
// function funSumm(a, b, c) {
//     resul = (a - b) / c;
//     return resul;
// }
// console.log(funSumm(3, 4, 5));
// // Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. 
// // d is number
// function funWeek(d) {
//     if (d === 1) {
//         return 'ponidelnik';
//     }
//     else if (d === 2) {
//         return 'vtornik';
//     }
//     else if (d === 3) {
//         return 'sreda';
//     }
//     else if (d === 4) {
//         return 'chetverg';
//     }
//     else if (d === 5) {
//         return 'pyatnitsa';
//     }
//     else if (d === 6) {
//         return 'subbota';
//     }
//     else if (d === 7) {
//         return 'voskriseniye';
//     }
//     else {
//         return 'eto ne den'
//     }


// }
// console.log(funWeek(5));
// console.log(funWeek(8));

// // Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'. 
// let arr1 = [11, 2, 3, 4, 5, 6, 7];
// let arr2 = [11, 2, 3, 4, 6, 7];

// function funArr(arr) {
//     console.log("arr: ", arr)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 5) {
//             return 'da';
//         }
//     }
//     console.log('net')
// }

// console.log(funArr(arr2))
// // console.log(funArr(arr2))
// // console.log(funArr([1, 2, 3, 4, 5, 6, 7]))
// // Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'. 
// function prime(arg) {
//     for (let i = 2; i < arg; i++) {
//         let result = arg % i;
//         if (result === 0) {
//             return true;
//         }
//         else {
//             return false;
//         }

//     }

// }
// console.log(prime(37));
// console.log(prime(38));
// // Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'. 

// let arra1 = [11, 2, 2, 4, 2, 5, 6, 7];
// let arra2 = [11, 2, 3, 4, 6, 7];
// function funSame(arr) {
//     console.log('arr: ', arr);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             return 'da';
//         }
//     }
//     console.log('net');

// }
// console.log(funSame(arra1));
// console.log(funSame(arra2));

// // Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false. 
// function paramSame(a, b) {
//     console.log(a + ',' + b);
//     if (a === b) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(paramSame(4, 9));
// console.log(paramSame(9, 9));
// // Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false. 
// function paramSum(a, b) {
//     console.log(a + ',' + b);
//     if (a + b > 10) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(paramSum(4, 4));
// console.log(paramSum(9, 9));

// // Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false. 
// function neg(arg) {
//     console.log(arg);
//     if (arg >= 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(neg(-5));
// console.log(neg(5));







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
