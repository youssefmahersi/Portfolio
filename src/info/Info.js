import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(95,75,139)","rgb(90,62,56)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Mahersi",
    lastName: "Youssef",
    initials: "Ts", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        
        {
            emoji: '🌎',
            text: 'France, Paris'
        },
        {
            emoji: "💼",
            text: "Full-stack developer"
        },
        {
            emoji: "📧",
            text: "youssefmahersi234@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/youssefmahersi",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/youssef-mahersi",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: `\nHello,I'm self-taught programmer, a node.js instructor and a full-stack developer who is passionate about inventing creative ideas and contributing to big projects like AI, Blockchain...`,
    skills:
        {
            proficientWith: ['https://img.icons8.com/color/96/000000/javascript--v1.png', 'https://img.icons8.com/color/96/000000/typescript.png', 'https://img.icons8.com/office/96/000000/react.png', 'https://img.icons8.com/color/96/000000/git.png', 'https://img.icons8.com/color/96/000000/mongodb.png', 'https://img.icons8.com/color/96/000000/stripe.png', 'https://img.icons8.com/fluency/96/000000/docker.png', 'https://img.icons8.com/color/96/000000/solidity.png',"https://img.icons8.com/color/96/000000/html-5--v1.png","https://img.icons8.com/color/96/000000/css3.png","https://img.icons8.com/fluency/96/000000/api-settings.png","https://img.icons8.com/plasticine/100/000000/github.png"],
            exposedTo: ['https://img.icons8.com/color/96/2ECC71/nextjs.png', 'https://img.icons8.com/color/96/000000/python--v1.png', 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-neo4j-a-graph-database-management-system-developed-logo-shadow-tal-revivo.png']
        }
    ,
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Chess',
            emoji: '♟'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Football',
            emoji: '⚽'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Twitter Clone", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/youssefmahersi/twitterClone", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Chat App(Socket.io)",
            source: "https://github.com/youssefmahersi/chatApp",
            image: mock2
        },
        {
            title: "Ranking Algorithm",
            source: "https://github.com/youssefmahersi/RankingAlgorithm",
            image: mock3
        },
        {
            title: "Shopping Platfrom",
            source: "https://github.com/youssefmahersi/shoppingApp",
            image: mock4
        }
    ]
}