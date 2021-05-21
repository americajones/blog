var blogPosts = [
    {
        title: "AJ makes art out of programs",
        content: `<p>So I've been learning C++ and making these tiny shitty programs that convert numbers to binary, or output ascii bubble text or do whatever simple thing I can manage, and they compile into little .exe files. If I take one of these files and force the computer to read the data as image data, it spits out all this pleasing green junk:</p>
        <img src="./images/grnGlitch-2.PNG">
        <p>ooo, yeah okay can I cram more in there to make it look less stretched?</p>
        <img src="./images/grnGlitch-4.png">
        <p>oo, yea I can render it in whatever size I want</p>
        <img src="./images/still3.jpg">
        <p>PRETTY NEAT, but why is it always green? Took some fiddling to find other color patterns</p>
        <img src="./images/still10.jpg">
        <p>pink</p>
        <img src="./images/still2.jpg">
        <p>frogger</p>
        <img src="./images/still15.jpg">
        <p>oo, found some dark reds and back into green</p>
        <img src="./images/still22.jpg">
        <p>now this is a beautiful glitch</p>
        <p>Useless!! But very cool. I now have lots of original glitch art stockpiled for... something, eventually I'm sure.</p>
        `,
        tagged: ["art stuff", "computer stuff"]
    },
    {
        title: "AJ and Errow sing the praises of deodorant",
        content: `<>We've been making an effort to cut down on plastic in our lives and Errow tried this natural deodorant and it works so well we are like- wait what</>
        <img src="https://cdn.shopify.com/s/files/1/1503/9114/products/BEST-UNSCENTED-NATURAL-DEODORANT-deodorent-aluminum-free-magnesium-strong-24-hour-sensitive-skin-organic-clean-cream-NATURAL-02_2048x2048.jpg?v=1569098589">
        <p>It smells like NOTHING! I love sniffing my wife</p>`,
        tagged: ["recs"]
    },
    {
        title: "AJ picks up garbage for fun",
        content: `<p>What do rats do? We collect trash. My friend once asked me to come volunteer and do roadside cleanup back in high school and I actually laughed, becuase there was no way in hell I was doing that shit for free. Working at a movie theatre at the time, those fuckers could barely convince me to sweep floors for mimimum wage, I wasn't about to lift a damn finger for free.</p>

        <p>I've always had trouble "going outside", and even walking the dog never got me to a place where I wanted to Go Outside and Stay There for a bit. But walking the dog DID start to take my trash blinders off. If you live in a city you live amidst scores of neverending trash, seeing trash is so common it becomes a part of our background. But our dogs see it, and want it in their mouths, lol. So I bought some trash picking tongs and a bucket. </p>

        <p>The expected results: My brain now has a never ending task to latch onto when walking around outdoors. I want to go for walks more, I am happy to go along with my wife whenever they walk the dog, and I'm even happy to go out by myself and take a little trash walk.</p>

        <p>The unexpected results: Neighbors fucking love it, I am forcably integrated into my local society. Old ladies offer me treats, old men nod vigorously at my efforts, I might end up actually knowing the people around me. Since I practically live downtown there's ALWAYS trash around and there's always gonna be more. I've found it doesn't dampen my mood at all, rather I'm kind of excited that I'll always have something to do out there. Trash collecting highly recommended.</p>

        <p>Anyways I really love picking up trash and have played myself for a fool. I wanna bring my bucket fucking everywhere. And that's character growth baybee.</p>`,
        tagged: ["life stuff", "recs"]
    },
    {
        title: "AJ goes retro and accidentally learns color theory",
        content: `<p>I was playing old Nintendo games and was curious to know how CRT screens worked so I looked it up. Here's one super super up close:</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/A_macro_of_a_CRT_picture_tube.jpg">
        <p>Turns out the RGB is literal, it goes Red then Green then Blue, with pauses in between. So I tried to replicate this effect on a larger scale so you could see the individual pieces:</p>
        <img src ="./images/3.PNG">
        <p>Then I wanted to see how other colors were made:</p>
        <img src="./images/1.jpeg">
        <p>Then I started having fun experimenting with color matching and using different opacities:</p>
        <img src="./images/4.jpeg">
        <p>It's a real fun form of pixel art, so I made a little program to easily make patterns and icons with. <a href="https://americajones.github.io/RGBtype/">Check it out!</a> </p>

        `,
        tagged: ["art stuff", "computer stuff"]
    },
    {
        title: "First Post",
        content: `<p>I'm trying to make my own place to post my own things. Fuck twitter and fuck instagram, I'm sick of nonstop ads in my face everywhere I go. I'm sick of being pressured to post everyday lest I fall from The Algorithm's graces. Fuck social media.</p>
        <img src="https://i0.wp.com/asiatimes.com/wp-content/uploads/2017/07/15048058263_05c06bf2fd_z.jpg?fit=640%2C426&ssl=1">
        <p>I also like when I can do thing 100% myself. Fuck wordpress I'm building my own content management system.</p>`,
        tagged: ["life stuff", "computer stuff"]

    },
];

const mainContent = document.querySelector('.main-content');
const latestBlock = document.querySelector('.latest-block');
const categoryList = document.querySelector('.category-list');
const header = document.querySelector('.header');
const li1 = document.querySelector('#art');
const li2 = document.querySelector('#com');
const li3 = document.querySelector('#lif');
const li4 = document.querySelector('#rec');
const lifetag = document.querySelector('.lifestuff');
const rectag = document.querySelector('.recs');
const comptag = document.querySelector('.computerstuff');
const arttag = document.querySelector('.artstuff');

function populate(blogPost) {
    let newBlock = document.createElement('div');
    newBlock.classList.add('blog-block');
    let newTitle = document.createElement('h1');
    newTitle.classList.add('blog-title');
    newTitle.textContent = blogPost.title;
    let newDiv = document.createElement('div');
    newDiv.classList.add('blog-content');
    newDiv.innerHTML = blogPost.content;
    let tagDiv = document.createElement('div');
    tagDiv.classList.add('tag-block');
    tagDiv.append("Tagged: ");
    let tags = blogPost.tagged;
    if (blogPost.tagged.length > 0) {
        tags.forEach(tag => {
            let nuDiv = document.createElement('p');
            nuDiv.classList.add(tag.split(" ").join(""))
            nuDiv.append(tag + ', ');
            nuDiv.addEventListener('click', function () {
                removeAllChildNodes(mainContent);
                loadPosts(tag);
            })
            tagDiv.append(nuDiv);
        })
    }
    newBlock.append(newTitle, newDiv, tagDiv);
    mainContent.append(newBlock);
};

blogPosts.forEach(post => {
    populate(post);
});

function loadPosts(tag) {
    let selectedPosts = blogPosts.filter(post => post.tagged.includes(tag));
    selectedPosts.forEach(post => {
        populate(post);
    })
};
header.addEventListener('click', function () {
    location.reload();
})
li1.addEventListener('click', function () {
    removeAllChildNodes(mainContent);
    loadPosts("art stuff");
});
li2.addEventListener('click', function () {
    removeAllChildNodes(mainContent);
    loadPosts("computer stuff");
});
li3.addEventListener('click', function () {
    removeAllChildNodes(mainContent);
    loadPosts("life stuff");
});
li4.addEventListener('click', function () {
    removeAllChildNodes(mainContent);
    loadPosts("recs");
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

// categories.forEach(category => {
//     let nuList = document.createElement('li');
//     nuList.textContent = category;
//     nuList.addEventListener()
//     categoryList.append(nuList);
// })
