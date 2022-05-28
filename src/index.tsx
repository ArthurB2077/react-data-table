import React from "react";
import ReactDOM from "react-dom";
import DataTable from "./lib/components/DataTable";

const testData = [
    {
        "firstName": "Bruce",
        "lastName": "Wayne",
        "dateOfBirth": "06/17/1983",
        "startDate": "05/04/2022",
        "department": "Engineering",
        "street": "blackgate",
        "city": "Gotham",
        "state": "NY",
        "zipCode": "89000"
    },
    {
        "firstName": "Clark ",
        "lastName": "Kent",
        "dateOfBirth": "01/08/1981",
        "startDate": "02/09/2022",
        "department": "Legal",
        "street": "General Ford",
        "city": "Metropolis",
        "state": "TX",
        "zipCode": "7000"
    },
    {
        "firstName": "Naomi",
        "lastName": "Strickland",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Vel ullamco sed offi",
        "city": "Minim et aspernatur ",
        "state": "AL",
        "zipCode": "28924"
    },
    {
        "firstName": "Naomi",
        "lastName": "Strickland",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Vel ullamco sed offi",
        "city": "Minim et aspernatur ",
        "state": "AL",
        "zipCode": "28924"
    },
    {
        "firstName": "Yuri",
        "lastName": "Bradford",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Molestiae natus cons",
        "city": "Facilis autem ut et ",
        "state": "AL",
        "zipCode": "85423"
    },
    {
        "firstName": "Marshall",
        "lastName": "Irwin",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Magna dolor deleniti",
        "city": "Nesciunt et ea ut a",
        "state": "AL",
        "zipCode": "87652"
    },
    {
        "firstName": "Aaron",
        "lastName": "Cohen",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "In molestiae molesti",
        "city": "Voluptate in tempore",
        "state": "AL",
        "zipCode": "75038"
    },
    {
        "firstName": "Eric",
        "lastName": "Foster",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Deserunt suscipit at",
        "city": "Qui reiciendis ut la",
        "state": "AL",
        "zipCode": "28086"
    },
    {
        "firstName": "Regan",
        "lastName": "Lowe",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Maxime consequuntur ",
        "city": "Aut quia consequuntu",
        "state": "AL",
        "zipCode": "58309"
    },
    {
        "firstName": "Yvonne",
        "lastName": "Gardner",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Ea qui itaque autem ",
        "city": "Temporibus odit maxi",
        "state": "AL",
        "zipCode": "50620"
    },
    {
        "firstName": "Dennis",
        "lastName": "Owen",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Aute quam saepe reru",
        "city": "Necessitatibus ut su",
        "state": "AL",
        "zipCode": "34302"
    },
    {
        "firstName": "Calista",
        "lastName": "Pacheco",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Dolor et quis dolore",
        "city": "Ex ab ipsa esse fug",
        "state": "AL",
        "zipCode": "94837"
    },
    {
        "firstName": "Marvin",
        "lastName": "Morse",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Nihil sed labore non",
        "city": "Iste cumque providen",
        "state": "AL",
        "zipCode": "98138"
    },
    {
        "firstName": "Francis",
        "lastName": "Sims",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Odio delectus tempo",
        "city": "Sint possimus est ",
        "state": "AL",
        "zipCode": "33037"
    },
    {
        "firstName": "Sylvester",
        "lastName": "Trujillo",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Non cillum fugiat re",
        "city": "Quasi consequatur i",
        "state": "AL",
        "zipCode": "30014"
    },
    {
        "firstName": "Dana",
        "lastName": "Walsh",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Labore voluptates qu",
        "city": "Quidem vel dolore in",
        "state": "AL",
        "zipCode": "10762"
    },
    {
        "firstName": "Leandra",
        "lastName": "Preston",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Id Nam eum est nulla",
        "city": "Tempora est deserunt",
        "state": "AL",
        "zipCode": "62883"
    },
    {
        "firstName": "Noelle",
        "lastName": "Jackson",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Ea veritatis volupta",
        "city": "Quis perspiciatis t",
        "state": "AL",
        "zipCode": "97392"
    },
    {
        "firstName": "Philip",
        "lastName": "Hampton",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Quia obcaecati ut au",
        "city": "Eos inventore eos ",
        "state": "AL",
        "zipCode": "64978"
    },
    {
        "firstName": "Bethany",
        "lastName": "Houston",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Neque occaecat tempo",
        "city": "Eligendi et et ea do",
        "state": "AL",
        "zipCode": "38908"
    },
    {
        "firstName": "Dorothy",
        "lastName": "Bush",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Nobis laboris molest",
        "city": "Ut qui illum adipis",
        "state": "AL",
        "zipCode": "57027"
    },
    {
        "firstName": "Sybil",
        "lastName": "Beard",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Non temporibus ea al",
        "city": "Sed nostrud mollitia",
        "state": "AL",
        "zipCode": "90487"
    },
    {
        "firstName": "Ivana",
        "lastName": "Franklin",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Sunt sequi quis mole",
        "city": "Commodo harum quis l",
        "state": "AL",
        "zipCode": "53708"
    },
    {
        "firstName": "Anjolie",
        "lastName": "Knight",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Quis rerum sed dolor",
        "city": "Aut architecto unde ",
        "state": "AL",
        "zipCode": "53130"
    },
    {
        "firstName": "Tyrone",
        "lastName": "Walters",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Aut doloribus facere",
        "city": "Aut enim ipsum magn",
        "state": "AL",
        "zipCode": "38339"
    },
    {
        "firstName": "Aspen",
        "lastName": "Lara",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Ipsa in ipsum ex eo",
        "city": "Voluptatem sint veni",
        "state": "AL",
        "zipCode": "79780"
    },
    {
        "firstName": "Autumn",
        "lastName": "Schmidt",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Amet ad non deserun",
        "city": "Iusto esse praesenti",
        "state": "AL",
        "zipCode": "94442"
    },
    {
        "firstName": "Lavinia",
        "lastName": "Barrett",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Qui fuga Ex fugiat",
        "city": "Blanditiis labore et",
        "state": "AL",
        "zipCode": "94954"
    },
    {
        "firstName": "Kiayada",
        "lastName": "Mitchell",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Vel aut hic in venia",
        "city": "Et mollit aperiam qu",
        "state": "AL",
        "zipCode": "29939"
    },
    {
        "firstName": "Moana",
        "lastName": "Sweet",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Ducimus cumque ut p",
        "city": "In vitae ipsam eum l",
        "state": "AL",
        "zipCode": "63946"
    },
    {
        "firstName": "Colton",
        "lastName": "Mcgee",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Itaque ut necessitat",
        "city": "Laborum Soluta nesc",
        "state": "AL",
        "zipCode": "71215"
    },
    {
        "firstName": "Giacomo",
        "lastName": "Hanson",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Eaque cupiditate min",
        "city": "Qui vero blanditiis ",
        "state": "AL",
        "zipCode": "33425"
    },
    {
        "firstName": "Cheyenne",
        "lastName": "Dominguez",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Modi aut sunt commo",
        "city": "Qui animi similique",
        "state": "AL",
        "zipCode": "71183"
    },
    {
        "firstName": "Chadwick",
        "lastName": "Farmer",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Quibusdam culpa quid",
        "city": "Vel proident illo e",
        "state": "AL",
        "zipCode": "86019"
    },
    {
        "firstName": "Laith",
        "lastName": "Roth",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Quos qui voluptas ip",
        "city": "Iusto quia numquam n",
        "state": "AL",
        "zipCode": "76608"
    },
    {
        "firstName": "Bradley",
        "lastName": "Daniel",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Dolorem provident i",
        "city": "Minus qui qui quia e",
        "state": "AL",
        "zipCode": "55260"
    },
    {
        "firstName": "Kuame",
        "lastName": "Riggs",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Error minim qui obca",
        "city": "Libero deleniti recu",
        "state": "AL",
        "zipCode": "64427"
    },
    {
        "firstName": "Charity",
        "lastName": "Cobb",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Laboris eos quia po",
        "city": "Molestiae porro null",
        "state": "AL",
        "zipCode": "13550"
    },
    {
        "firstName": "Isaiah",
        "lastName": "Beck",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Vel et ad velit volu",
        "city": "Ut facere non distin",
        "state": "AL",
        "zipCode": "93381"
    },
    {
        "firstName": "Dominique",
        "lastName": "Maldonado",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Dolor laborum Volup",
        "city": "Dolore sint anim lab",
        "state": "AL",
        "zipCode": "92021"
    },
    {
        "firstName": "Rowan",
        "lastName": "Chavez",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Autem quis eveniet ",
        "city": "Ipsam quasi aliquam ",
        "state": "AL",
        "zipCode": "38774"
    },
    {
        "firstName": "Rogan",
        "lastName": "Mcclain",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Nulla aut fugiat dol",
        "city": "Sed dolor dolorum ut",
        "state": "AL",
        "zipCode": "51628"
    },
    {
        "firstName": "Heidi",
        "lastName": "Carey",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Vero molestias et ne",
        "city": "Voluptates occaecat ",
        "state": "AL",
        "zipCode": "97734"
    },
    {
        "firstName": "Ariel",
        "lastName": "Holloway",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Velit illum incidu",
        "city": "In eaque magnam temp",
        "state": "AL",
        "zipCode": "88842"
    },
    {
        "firstName": "Leilani",
        "lastName": "Dickerson",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Eveniet doloribus s",
        "city": "Doloremque aliquip a",
        "state": "AL",
        "zipCode": "89224"
    },
    {
        "firstName": "Carly",
        "lastName": "Wynn",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Ipsum doloribus ipsu",
        "city": "Possimus consequatu",
        "state": "AL",
        "zipCode": "89765"
    },
    {
        "firstName": "Oscar",
        "lastName": "Beard",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Magna animi facilis",
        "city": "Consectetur eius qu",
        "state": "AL",
        "zipCode": "69187"
    },
    {
        "firstName": "Heather",
        "lastName": "Hatfield",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Reprehenderit duis ",
        "city": "Nihil sit enim place",
        "state": "AL",
        "zipCode": "93217"
    },
    {
        "firstName": "Kirk",
        "lastName": "Lee",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Amet ullamco omnis ",
        "city": "Placeat est natus ",
        "state": "AL",
        "zipCode": "20433"
    },
    {
        "firstName": "Louis",
        "lastName": "Walker",
        "dateOfBirth": "05/14/2022",
        "startDate": "05/14/2022",
        "department": "Sales",
        "street": "Sed cillum maiores v",
        "city": "Distinctio Veniam ",
        "state": "AL",
        "zipCode": "90224"
    }
]

ReactDOM.render(
    <DataTable 
        headers={Object.keys(testData[0])} 
        rows={testData.map(item => Object.values(item))}
    />,
    document.getElementById("root")
)