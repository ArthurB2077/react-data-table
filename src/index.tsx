import React from "react";
import ReactDOM from "react-dom";
import DataTable from "./lib/components/DataTable";

const testData = [
    {
        "First Name": "Bruce",
        "Last Name": "Wayne",
        "Birth": "06/17/1983",
        "Start Date": "05/04/2022",
        "Department": "Engineering",
        "Street": "blackgate",
        "City": "Gotham",
        "State": "NY",
        "Zip Code": "89000"
    },
    {
        "First Name": "Clark ",
        "Last Name": "Kent",
        "Birth": "01/08/1981",
        "Start Date": "02/09/2022",
        "Department": "Legal",
        "Street": "General Ford",
        "City": "Metropolis",
        "State": "TX",
        "Zip Code": "7000"
    },
    {
        "First Name": "Naomi",
        "Last Name": "Strickland",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Vel ullamco sed offi",
        "City": "Minim et aspernatur ",
        "State": "AL",
        "Zip Code": "28924"
    },
    {
        "First Name": "Naomi",
        "Last Name": "Strickland",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Vel ullamco sed offi",
        "City": "Minim et aspernatur ",
        "State": "AL",
        "Zip Code": "28924"
    },
    {
        "First Name": "Yuri",
        "Last Name": "Bradford",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Molestiae natus cons",
        "City": "Facilis autem ut et ",
        "State": "AL",
        "Zip Code": "85423"
    },
    {
        "First Name": "Marshall",
        "Last Name": "Irwin",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Magna dolor deleniti",
        "City": "Nesciunt et ea ut a",
        "State": "AL",
        "Zip Code": "87652"
    },
    {
        "First Name": "Aaron",
        "Last Name": "Cohen",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "In molestiae molesti",
        "City": "Voluptate in tempore",
        "State": "AL",
        "Zip Code": "75038"
    },
    {
        "First Name": "Eric",
        "Last Name": "Foster",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Deserunt suscipit at",
        "City": "Qui reiciendis ut la",
        "State": "AL",
        "Zip Code": "28086"
    },
    {
        "First Name": "Regan",
        "Last Name": "Lowe",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Maxime consequuntur ",
        "City": "Aut quia consequuntu",
        "State": "AL",
        "Zip Code": "58309"
    },
    {
        "First Name": "Yvonne",
        "Last Name": "Gardner",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Ea qui itaque autem ",
        "City": "Temporibus odit maxi",
        "State": "AL",
        "Zip Code": "50620"
    },
    {
        "First Name": "Dennis",
        "Last Name": "Owen",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Aute quam saepe reru",
        "City": "Necessitatibus ut su",
        "State": "AL",
        "Zip Code": "34302"
    },
    {
        "First Name": "Calista",
        "Last Name": "Pacheco",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Dolor et quis dolore",
        "City": "Ex ab ipsa esse fug",
        "State": "AL",
        "Zip Code": "94837"
    },
    {
        "First Name": "Marvin",
        "Last Name": "Morse",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Nihil sed labore non",
        "City": "Iste cumque providen",
        "State": "AL",
        "Zip Code": "98138"
    },
    {
        "First Name": "Francis",
        "Last Name": "Sims",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Odio delectus tempo",
        "City": "Sint possimus est ",
        "State": "AL",
        "Zip Code": "33037"
    },
    {
        "First Name": "Sylvester",
        "Last Name": "Trujillo",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Non cillum fugiat re",
        "City": "Quasi consequatur i",
        "State": "AL",
        "Zip Code": "30014"
    },
    {
        "First Name": "Dana",
        "Last Name": "Walsh",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Labore voluptates qu",
        "City": "Quidem vel dolore in",
        "State": "AL",
        "Zip Code": "10762"
    },
    {
        "First Name": "Leandra",
        "Last Name": "Preston",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Id Nam eum est nulla",
        "City": "Tempora est deserunt",
        "State": "AL",
        "Zip Code": "62883"
    },
    {
        "First Name": "Noelle",
        "Last Name": "Jackson",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Ea veritatis volupta",
        "City": "Quis perspiciatis t",
        "State": "AL",
        "Zip Code": "97392"
    },
    {
        "First Name": "Philip",
        "Last Name": "Hampton",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Quia obcaecati ut au",
        "City": "Eos inventore eos ",
        "State": "AL",
        "Zip Code": "64978"
    },
    {
        "First Name": "Bethany",
        "Last Name": "Houston",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Neque occaecat tempo",
        "City": "Eligendi et et ea do",
        "State": "AL",
        "Zip Code": "38908"
    },
    {
        "First Name": "Dorothy",
        "Last Name": "Bush",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Nobis laboris molest",
        "City": "Ut qui illum adipis",
        "State": "AL",
        "Zip Code": "57027"
    },
    {
        "First Name": "Sybil",
        "Last Name": "Beard",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Non temporibus ea al",
        "City": "Sed nostrud mollitia",
        "State": "AL",
        "Zip Code": "90487"
    },
    {
        "First Name": "Ivana",
        "Last Name": "Franklin",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Sunt sequi quis mole",
        "City": "Commodo harum quis l",
        "State": "AL",
        "Zip Code": "53708"
    },
    {
        "First Name": "Anjolie",
        "Last Name": "Knight",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Quis rerum sed dolor",
        "City": "Aut architecto unde ",
        "State": "AL",
        "Zip Code": "53130"
    },
    {
        "First Name": "Tyrone",
        "Last Name": "Walters",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Aut doloribus facere",
        "City": "Aut enim ipsum magn",
        "State": "AL",
        "Zip Code": "38339"
    },
    {
        "First Name": "Aspen",
        "Last Name": "Lara",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Ipsa in ipsum ex eo",
        "City": "Voluptatem sint veni",
        "State": "AL",
        "Zip Code": "79780"
    },
    {
        "First Name": "Autumn",
        "Last Name": "Schmidt",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Amet ad non deserun",
        "City": "Iusto esse praesenti",
        "State": "AL",
        "Zip Code": "94442"
    },
    {
        "First Name": "Lavinia",
        "Last Name": "Barrett",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Qui fuga Ex fugiat",
        "City": "Blanditiis labore et",
        "State": "AL",
        "Zip Code": "94954"
    },
    {
        "First Name": "Kiayada",
        "Last Name": "Mitchell",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Vel aut hic in venia",
        "City": "Et mollit aperiam qu",
        "State": "AL",
        "Zip Code": "29939"
    },
    {
        "First Name": "Moana",
        "Last Name": "Sweet",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Ducimus cumque ut p",
        "City": "In vitae ipsam eum l",
        "State": "AL",
        "Zip Code": "63946"
    },
    {
        "First Name": "Colton",
        "Last Name": "Mcgee",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Itaque ut necessitat",
        "City": "Laborum Soluta nesc",
        "State": "AL",
        "Zip Code": "71215"
    },
    {
        "First Name": "Giacomo",
        "Last Name": "Hanson",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Eaque cupiditate min",
        "City": "Qui vero blanditiis ",
        "State": "AL",
        "Zip Code": "33425"
    },
    {
        "First Name": "Cheyenne",
        "Last Name": "Dominguez",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Modi aut sunt commo",
        "City": "Qui animi similique",
        "State": "AL",
        "Zip Code": "71183"
    },
    {
        "First Name": "Chadwick",
        "Last Name": "Farmer",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Quibusdam culpa quid",
        "City": "Vel proident illo e",
        "State": "AL",
        "Zip Code": "86019"
    },
    {
        "First Name": "Laith",
        "Last Name": "Roth",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Quos qui voluptas ip",
        "City": "Iusto quia numquam n",
        "State": "AL",
        "Zip Code": "76608"
    },
    {
        "First Name": "Bradley",
        "Last Name": "Daniel",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Dolorem provident i",
        "City": "Minus qui qui quia e",
        "State": "AL",
        "Zip Code": "55260"
    },
    {
        "First Name": "Kuame",
        "Last Name": "Riggs",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Error minim qui obca",
        "City": "Libero deleniti recu",
        "State": "AL",
        "Zip Code": "64427"
    },
    {
        "First Name": "Charity",
        "Last Name": "Cobb",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Laboris eos quia po",
        "City": "Molestiae porro null",
        "State": "AL",
        "Zip Code": "13550"
    },
    {
        "First Name": "Isaiah",
        "Last Name": "Beck",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Vel et ad velit volu",
        "City": "Ut facere non distin",
        "State": "AL",
        "Zip Code": "93381"
    },
    {
        "First Name": "Dominique",
        "Last Name": "Maldonado",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Dolor laborum Volup",
        "City": "Dolore sint anim lab",
        "State": "AL",
        "Zip Code": "92021"
    },
    {
        "First Name": "Rowan",
        "Last Name": "Chavez",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Autem quis eveniet ",
        "City": "Ipsam quasi aliquam ",
        "State": "AL",
        "Zip Code": "38774"
    },
    {
        "First Name": "Rogan",
        "Last Name": "Mcclain",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Nulla aut fugiat dol",
        "City": "Sed dolor dolorum ut",
        "State": "AL",
        "Zip Code": "51628"
    },
    {
        "First Name": "Heidi",
        "Last Name": "Carey",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Vero molestias et ne",
        "City": "Voluptates occaecat ",
        "State": "AL",
        "Zip Code": "97734"
    },
    {
        "First Name": "Ariel",
        "Last Name": "Holloway",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Velit illum incidu",
        "City": "In eaque magnam temp",
        "State": "AL",
        "Zip Code": "88842"
    },
    {
        "First Name": "Leilani",
        "Last Name": "Dickerson",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Eveniet doloribus s",
        "City": "Doloremque aliquip a",
        "State": "AL",
        "Zip Code": "89224"
    },
    {
        "First Name": "Carly",
        "Last Name": "Wynn",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Ipsum doloribus ipsu",
        "City": "Possimus consequatu",
        "State": "AL",
        "Zip Code": "89765"
    },
    {
        "First Name": "Oscar",
        "Last Name": "Beard",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Magna animi facilis",
        "City": "Consectetur eius qu",
        "State": "AL",
        "Zip Code": "69187"
    },
    {
        "First Name": "Heather",
        "Last Name": "Hatfield",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Reprehenderit duis ",
        "City": "Nihil sit enim place",
        "State": "AL",
        "Zip Code": "93217"
    },
    {
        "First Name": "Kirk",
        "Last Name": "Lee",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Amet ullamco omnis ",
        "City": "Placeat est natus ",
        "State": "AL",
        "Zip Code": "20433"
    },
    {
        "First Name": "Louis",
        "Last Name": "Walker",
        "Birth": "05/14/2022",
        "Start Date": "05/14/2022",
        "Department": "Sales",
        "Street": "Sed cillum maiores v",
        "City": "Distinctio Veniam ",
        "State": "AL",
        "Zip Code": "90224"
    }
]

ReactDOM.render(
    <DataTable 
        headers={Object.keys(testData[0])} 
        rows={testData.map(item => Object.values(item))}
    />,
    document.getElementById("root")
)