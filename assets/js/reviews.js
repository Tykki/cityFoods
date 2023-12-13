const slData = [
    {
        title:'Lowcountry - South Loop',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque iure ipsa reiciendis fuga saepe nostrum quis dolorem. Ea cumque ullam, deserunt magnam sit consequuntur, deleniti omnis adipisci nihil, corrupti qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum et iste sunt, natus dolor commodi repudiandae sit in consectetur molestiae reprehenderit ullam quos vitae quas totam molestias ea qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit doloremque vel voluptatum odio, quae ducimus totam in assumenda veritatis qui minus voluptatibus cumque! At praesentium consequatur voluptates saepe adipisci? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus alias magnam pariatur itaque quaerat sunt reiciendis perferendis aut voluptatum quasi harum, natus saepe placeat quibusdam vitae, porro facilis blanditiis minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto fugit nam, provident perspiciatis doloribus commodi in magnam, autem, assumenda quia quidem atque cum rem molestias repellat labore ipsa id?',
        street: '1132 S. Wabash Ave.',
        city: 'Chicago IL 60605',
        dets: 'Happy Hour Monday-Friday 5pm - 7pm.',
        link: '#gallery', 
    }, {
        title: 'Coming Soon',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque iure ipsa reiciendis fuga saepe nostrum quis dolorem. Ea cumque ullam, deserunt magnam sit consequuntur, deleniti omnis adipisci nihil, corrupti qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum et iste sunt, natus dolor commodi repudiandae sit in consectetur molestiae reprehenderit ullam quos vitae quas totam molestias ea qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit doloremque vel voluptatum odio, quae ducimus totam in assumenda veritatis qui minus voluptatibus cumque! At praesentium consequatur voluptates saepe adipisci? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus alias magnam pariatur itaque quaerat sunt reiciendis perferendis aut voluptatum quasi harum, natus saepe placeat quibusdam vitae, porro facilis blanditiis minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto fugit nam, provident perspiciatis doloribus commodi in magnam, autem, assumenda quia quidem atque cum rem molestias repellat labore ipsa id?',
        street: 'Somewhere in the city',
        city: 'Chicago, IL',
        dets: 'Some Cool Note About place',
        link: '#',
    }, {
        title: 'Coming Soon',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque iure ipsa reiciendis fuga saepe nostrum quis dolorem. Ea cumque ullam, deserunt magnam sit consequuntur, deleniti omnis adipisci nihil, corrupti qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum et iste sunt, natus dolor commodi repudiandae sit in consectetur molestiae reprehenderit ullam quos vitae quas totam molestias ea qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit doloremque vel voluptatum odio, quae ducimus totam in assumenda veritatis qui minus voluptatibus cumque! At praesentium consequatur voluptates saepe adipisci? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus alias magnam pariatur itaque quaerat sunt reiciendis perferendis aut voluptatum quasi harum, natus saepe placeat quibusdam vitae, porro facilis blanditiis minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto fugit nam, provident perspiciatis doloribus commodi in magnam, autem, assumenda quia quidem atque cum rem molestias repellat labore ipsa id?',
        street: 'Somewhere in the city',
        city: 'Chicago, IL',
        dets: 'Some Cool Note About place',
        link: '#', 
    }]

const nwData = [
    {
        title:'Chesa\'s Bar and Bistro',
        review: 'Nestled in the Avondale area of Chicago, Chesa\'s is a soulful oasis for those seeking a taste of tradition and a dash of culinary love. As a connoisseur of comfort food, I can confidently say that Chesa\'s doesn\'t just serve meals; it delivers an experience that feels like a warm embrace from grandma\'s kitchen. The menu boasts an impressive array of Southern classics, each dish a testament to the rich history and diverse flavors that define soul food. The fried chicken is a star, achieving the perfect balance of crispy exterior and juicy tenderness. Every bite is a symphony of spices, reminiscent of family gatherings and Sunday dinners. The macaroni and cheese is a decadent masterpiece, a gooey blend of cheeses that dances on the palate. It\'s not just a side; it\'s a celebration of the artistry that goes into crafting the perfect comfort dish. Pair it with the collard greens—slow-cooked to perfection—and you have a match made in soul food heaven. The service at Chesa\'s is as warm as the flavors they serve. From the moment you step in, you\'re welcomed like an old friend. The staff is knowledgeable and passionate about the menu, providing recommendations with the enthusiasm of true food enthusiasts. The ambiance is a delightful fusion of cozy and vibrant. The soulful tunes playing in the background add to the overall experience, transporting diners to a place where good food and good company reign supreme. In the realm of soul food, Chesa\'s isn\'t just a dining establishment; it\'s a pilgrimage for those seeking the true essence of comfort cuisine. Prepare to indulge not just in food, but in a journey through the soul of Southern culinary tradition.',
        street: '3235 W Addison St,',
        city: 'Chicago IL 60618',
        dets: 'Happy Hour Tuesday - Thursday 5pm - 6:30pm',
        link: '#gallery', 
    }, {
        title: 'Coming Soon',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque iure ipsa reiciendis fuga saepe nostrum quis dolorem. Ea cumque ullam, deserunt magnam sit consequuntur, deleniti omnis adipisci nihil, corrupti qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum et iste sunt, natus dolor commodi repudiandae sit in consectetur molestiae reprehenderit ullam quos vitae quas totam molestias ea qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit doloremque vel voluptatum odio, quae ducimus totam in assumenda veritatis qui minus voluptatibus cumque! At praesentium consequatur voluptates saepe adipisci? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus alias magnam pariatur itaque quaerat sunt reiciendis perferendis aut voluptatum quasi harum, natus saepe placeat quibusdam vitae, porro facilis blanditiis minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto fugit nam, provident perspiciatis doloribus commodi in magnam, autem, assumenda quia quidem atque cum rem molestias repellat labore ipsa id?',
        street: 'Somewhere in the city',
        city: 'Chicago, IL',
        dets: 'Some Cool Note About place',
        link: '#',
    }, {
        title: 'Coming Soon',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque iure ipsa reiciendis fuga saepe nostrum quis dolorem. Ea cumque ullam, deserunt magnam sit consequuntur, deleniti omnis adipisci nihil, corrupti qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum et iste sunt, natus dolor commodi repudiandae sit in consectetur molestiae reprehenderit ullam quos vitae quas totam molestias ea qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit doloremque vel voluptatum odio, quae ducimus totam in assumenda veritatis qui minus voluptatibus cumque! At praesentium consequatur voluptates saepe adipisci? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus alias magnam pariatur itaque quaerat sunt reiciendis perferendis aut voluptatum quasi harum, natus saepe placeat quibusdam vitae, porro facilis blanditiis minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto fugit nam, provident perspiciatis doloribus commodi in magnam, autem, assumenda quia quidem atque cum rem molestias repellat labore ipsa id?',
        street: 'Somewhere in the city',
        city: 'Chicago, IL',
        dets: 'Some Cool Note About place',
        link: '#', 
    }]

    const dtData = [
        {
            title:'RPM Steal',
            review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque iure ipsa reiciendis fuga saepe nostrum quis dolorem. Ea cumque ullam, deserunt magnam sit consequuntur, deleniti omnis adipisci nihil, corrupti qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum et iste sunt, natus dolor commodi repudiandae sit in consectetur molestiae reprehenderit ullam quos vitae quas totam molestias ea qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit doloremque vel voluptatum odio, quae ducimus totam in assumenda veritatis qui minus voluptatibus cumque! At praesentium consequatur voluptates saepe adipisci? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus alias magnam pariatur itaque quaerat sunt reiciendis perferendis aut voluptatum quasi harum, natus saepe placeat quibusdam vitae, porro facilis blanditiis minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto fugit nam, provident perspiciatis doloribus commodi in magnam, autem, assumenda quia quidem atque cum rem molestias repellat labore ipsa id?',
            street: '66 W Kinzie St,',
            city: 'Chicago IL 60654',
            dets: 'Happy Hour Weekdays | 4pm - 5:30pm',
            link: '#gallery', 
        }, {
            title: 'Coming Soon',
            review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque iure ipsa reiciendis fuga saepe nostrum quis dolorem. Ea cumque ullam, deserunt magnam sit consequuntur, deleniti omnis adipisci nihil, corrupti qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum et iste sunt, natus dolor commodi repudiandae sit in consectetur molestiae reprehenderit ullam quos vitae quas totam molestias ea qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit doloremque vel voluptatum odio, quae ducimus totam in assumenda veritatis qui minus voluptatibus cumque! At praesentium consequatur voluptates saepe adipisci? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus alias magnam pariatur itaque quaerat sunt reiciendis perferendis aut voluptatum quasi harum, natus saepe placeat quibusdam vitae, porro facilis blanditiis minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto fugit nam, provident perspiciatis doloribus commodi in magnam, autem, assumenda quia quidem atque cum rem molestias repellat labore ipsa id?',
            street: 'Somewhere in the city',
            city: 'Chicago, IL',
            dets: 'Some Cool Note About place',
            link: '#',
        }, {
            title: 'Coming Soon',
            review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque iure ipsa reiciendis fuga saepe nostrum quis dolorem. Ea cumque ullam, deserunt magnam sit consequuntur, deleniti omnis adipisci nihil, corrupti qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum et iste sunt, natus dolor commodi repudiandae sit in consectetur molestiae reprehenderit ullam quos vitae quas totam molestias ea qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit doloremque vel voluptatum odio, quae ducimus totam in assumenda veritatis qui minus voluptatibus cumque! At praesentium consequatur voluptates saepe adipisci? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus alias magnam pariatur itaque quaerat sunt reiciendis perferendis aut voluptatum quasi harum, natus saepe placeat quibusdam vitae, porro facilis blanditiis minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto fugit nam, provident perspiciatis doloribus commodi in magnam, autem, assumenda quia quidem atque cum rem molestias repellat labore ipsa id?',
            street: 'Somewhere in the city',
            city: 'Chicago, IL',
            dets: 'Some Cool Note About place',
            link: '#', 
        }]

slData.forEach((data, ind) => {
    southLoopPage.innerHTML += `
        <article data-index="${ind}" data-status="${ind === 0 ? 'active':'inactive'}">
            <div class="article-review-section article-section">
            <p>${data.review}</p>
            </div>
            <div class="article-description-section article-section">
            <h1>${data.title}</h1>
            <p>
                ${data.street}
                <br>
                ${data.city}
            </p>
            <p>${data.dets}</p>
            </div>
            <div class="article-title-section article-section">
            <h2><a href="${data.link}">Gallery</a></h2>
            <div class="rating-stars">
                <input type="radio" name="rating" id="sl${ind}rs0"><label for="sl${ind}rs0"></label>
                <input type="radio" name="rating" id="sl${ind}rs1"><label for="sl${ind}rs1"></label>
                <input type="radio" name="rating" id="sl${ind}rs2"><label for="sl${ind}rs2"></label>
                <input type="radio" name="rating" id="sl${ind}rs3"><label for="sl${ind}rs3"></label>
                <input type="radio" name="rating" id="sl${ind}rs4"><label for="sl${ind}rs4"></label>
                <input type="radio" name="rating" id="sl${ind}rs5"><label for="sl${ind}rs5"></label>
                <span class="number"></span>
            </div>
            </div>
            <div class="article-nav-section article-section">
            <button class="article-nav-button" type="button" onclick="handleLeftClick(${ind})">
                <span>&#8592;</span>
            </button>
            <button class="article-nav-button" type="button" onclick="handleRightClick(${ind})">
                <span>&#8594;</span>
            </button>
            </div>
        </article>
    `

})

nwData.forEach((data, ind) => {
    northWestPage.innerHTML += `
        <article data-index="${ind+3}" data-status="${ind === 0 ? 'active':'inactive'}">
            <div class="article-review-section article-section">
            <p>${data.review}</p>
            </div>
            <div class="article-description-section article-section">
            <h1>${data.title}</h1>
            <p>
                ${data.street}
                <br>
                ${data.city}
            </p>
            <p>${data.dets}</p>
            </div>
            <div class="article-title-section article-section">
            <h2><a href="${data.link}">Gallery</a></h2>
            <div class="rating-stars">
                <input type="radio" name="rating" id="nw${ind}rs0"><label for="nw${ind}rs0"></label>
                <input type="radio" name="rating" id="nw${ind}rs1"><label for="nw${ind}rs1"></label>
                <input type="radio" name="rating" id="nw${ind}rs2"><label for="nw${ind}rs2"></label>
                <input type="radio" name="rating" id="nw${ind}rs3"><label for="nw${ind}rs3"></label>
                <input type="radio" name="rating" id="nw${ind}rs4"><label for="nw${ind}rs4"></label>
                <input type="radio" name="rating" id="nw${ind}rs5"><label for="nw${ind}rs5"></label>
                <span class="number"></span>
            </div>
            </div>
            <div class="article-nav-section article-section">
            <button class="article-nav-button" type="button" onclick="handleLeftClick(${ind+3})">
                <span>&#8592;</span>
            </button>
            <button class="article-nav-button" type="button" onclick="handleRightClick(${ind+3})">
                <span>&#8594;</span>
            </button>
            </div>
        </article>
    `
})

dtData.forEach((data, ind) => {
    downtownPage.innerHTML += `
        <article data-index="${ind+6}" data-status="${ind === 0 ? 'active':'inactive'}">
            <div class="article-review-section article-section">
            <p>${data.review}</p>
            </div>
            <div class="article-description-section article-section">
            <h1>${data.title}</h1>
            <p>
                ${data.street}
                <br>
                ${data.city}
            </p>
            <p>${data.dets}</p>
            </div>
            <div class="article-title-section article-section">
            <h2><a href="${data.link}">Gallery</a></h2>
            <div class="rating-stars">
                <input type="radio" name="rating" id="nw${ind}rs0"><label for="nw${ind}rs0"></label>
                <input type="radio" name="rating" id="nw${ind}rs1"><label for="nw${ind}rs1"></label>
                <input type="radio" name="rating" id="nw${ind}rs2"><label for="nw${ind}rs2"></label>
                <input type="radio" name="rating" id="nw${ind}rs3"><label for="nw${ind}rs3"></label>
                <input type="radio" name="rating" id="nw${ind}rs4"><label for="nw${ind}rs4"></label>
                <input type="radio" name="rating" id="nw${ind}rs5"><label for="nw${ind}rs5"></label>
                <span class="number"></span>
            </div>
            </div>
            <div class="article-nav-section article-section">
            <button class="article-nav-button" type="button" onclick="handleLeftClick(${ind+6})">
                <span>&#8592;</span>
            </button>
            <button class="article-nav-button" type="button" onclick="handleRightClick(${ind+6})">
                <span>&#8594;</span>
            </button>
            </div>
        </article>
    `
})