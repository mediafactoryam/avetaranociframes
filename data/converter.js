const fileToRead = "data/datafiles/datasetv.0.2-Sheet1.csv"
const newFile = "data/datafiles/datasetv.0.3.csv"
const namesAndSexes = require("./datafiles/names.json")

const csv = require('csv-parser');
const fs = require('fs');
let groupCounter = 0

fs.unlink(newFile,()=>{})

fs.createReadStream(fileToRead)
    .pipe(csv())
    .on('data', (row) => {

        const names = row.names.split("\n")
        const dates = row.date.split("\n")
        const places = row.place.split("")

        for (let i = 0; i < names.length; i++) {
            const sex = getNamesAndSexes(names[i])
            console.log(groupCounter, names[i], sex, dates[i])
            fs.appendFile(newFile, makeString(groupCounter, names[i], sex, dates[i]), ()=>{})
        }

        groupCounter++

    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });

const makeString = (groupCounter, name, sex, date) => {
    return groupCounter+","+name+","+sex+","+date+"\n"
}


const getNamesAndSexes = (namestring) => {
    const names = namestring.split(" ")
    const nameToCheck = names[1]
    const nameAndSex = findSexByName(nameToCheck)
    return nameAndSex
}


const findSexByName = (name) => {
    const filterer = (ns) => { return ns.name == name }
    const result = namesAndSexes.filter(filterer)
    const reducer = (accumulator, currentValue) => {
        return accumulator + " " + currentValue.sex
    }

    return (result.length > 0) ? result.reduce(reducer, "") : []

}


