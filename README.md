# React Delta Table

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)


## :checkered_flag: Requirements
React Data Table Component requires the following be installed in your project:

- React 16.8.0+
- React DOM 16.8.0+

If you're using Typescript: 

- Typescript 4.7.3

## :package: Installation

### npm

```
npm install react-delta-table
```

### yarn

```
yarn add react-delta-table
```

## :rocket: How to use

### Import

Import the DataTable from "react-delta-table". By default the table will set it width to 100%. Use a container if you want the table to use only a certain width.

**Example** :

```swift
import { createRoot } from 'react-dom/client';
import { DataTable } from 'react-delta-table';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <div style={{width: "80vw", margin: "auto"}}>
        <DataTable 
            headers={['First Name', 'Last Name', 'Birth', 'Start Date', 'Department', 'Street', 'City', 'State', 'Zip Code']} 
            rows={
                [
                    [
                        "Bruce",
                        "Wayne",
                        "06/17/1983",
                        "05/04/2022",
                        "Engineering",
                        "Blackgate",
                        "Gotham",
                        "NY",
                        "89000"
                    ],
                    [
                        "Clark ",
                        "Kent",
                        "01/08/1981",
                        "02/09/2022",
                        "Legal",
                        "General Ford",
                        "Metropolis",
                        "TX",
                        "7000"
                    ],
                    [
                        "Diana",
                        "Prince",
                        "05/14/1901",
                        "05/14/2022",
                        "Sales",
                        "Venici Beach",
                        "Miami",
                        "CA",
                        "28924"
                    ]
                ]
            }
            itemPerPageRanges={[5, 10, 20, 50, 100]}
            labels={{
                search: "Search : ",
                display: "Display : ",
                export: "Export to :",
                first: "First",
                previous: "Prev",
                next: "Next",
                last: "Last",
            }}
            className=""
            theme="dark"
        />
    </div>
)
```
### Props

**headers**: <span style="color:lime">Array[string]</span> <span style="color:red">required</span>

An array of strings that includes all your headers. The order in your array will be the order oof your headers

**rows**: <span style="color:lime">Array[Array[string]]</span> <span style="color:red">required</span>

An array of arrays of strings. Each array in this array will be a row in your table. In each of this array (row) there will be a cell value

**itemPerPageRanges**: <span style="color:lime">Array[number]</span>  <span style="color:red">required</span>

Each number will be a possible number of items per page that you will can select in the item per page select component of the table

**labels**: <span style="color:lime">Object {
                search: string,
                display: string,
                export: string,
                first: string,
                previous: string,
                next: string,
                last: string
            }</span> <span style="color:red">required</span>

Object that contains all the value for the text labels of the table. Replace the string value with what you want instead

**className** <span style="color:lime">string</span> 

A className attribut that will be include in first position of the higher component of the table HTML tree. Check the inspector for the html of the component for more details.

**theme**: <span style="color:lime">"dark" | "light"</span>  <span style="color:red">required</span>

Two default dark/light style for the table component