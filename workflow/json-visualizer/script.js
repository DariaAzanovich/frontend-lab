const treeBtn = document.querySelector('.tree-btn');
const dataArea = document.getElementById('d-area');
const tree = document.querySelector('.tree');
const jsonFormatExmpl = document.querySelector('.json-format');
const jsonData = document.querySelector('.json-data');
const errMessage = document.querySelector('.error-message');


const exampData = '{"number": 123, "string": "Hello!", "array": [1, 3, 4, 123], "obj": {"name": "Kate", "age": 23} }';

const jsonFormat = `JSON format: <br>
{
    "key": value, 
    "key": value
} 
<br> OR <br>
[
    "key": value, 
    "key": value
]`;

function createTree(obj) {

}

document.addEventListener('DOMContentLoaded', () => {
    dataArea.value = exampData;
    jsonFormatExmpl.innerHTML = jsonFormat;
})



treeBtn.addEventListener('click', function() {
    const data = dataArea.value;

    try {
        const obj = JSON.parse(data);

        tree.innerHTML = obj;
        errMessage.innerHTML = '';

        /*------------*/
        console.log(obj);
    } catch(err) {
        if (err.name == "SyntaxError") {
            const message = `Your code doesn\'t match the JSON format! Error: ${err.message}`;

            errMessage.innerHTML = message;
          } else {
            throw err;
        }
    }
})

