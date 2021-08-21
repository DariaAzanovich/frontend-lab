const NUMBER_COLOR = 'red';
const STRING_COLOR = 'green';
const BOOLEAN_COLOR = 'purple';

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


function appendTree(container, obj) {
    container.appendChild(createTreeDom(obj));
}

function createTreeDom(obj) {
    // если нет дочерних элементов, то вызов возвращает undefined
    // и элемент <ul> не будет создан
    if (!Object.keys(obj).length) {
        console.log(obj);

        return;
    }

    let ul = document.createElement('ul');
    ul.innerHTML += 'obj';

    for (let key in obj) {
        let li = document.createElement('li');

        if(typeof key !== 'object') {
            li.innerHTML = key + ': ' + obj[key];
        } else if(typeof key !== 'object') {

        } else {
            li.innerHTML = key;
        }

        // let childrenUl = appendTree(obj[key]);

        // if (childrenUl) {
        //     li.append(childrenUl);
        // }
        ul.append(li);
    }
    return ul;
}


document.addEventListener('DOMContentLoaded', () => {
    dataArea.value = exampData;
    jsonFormatExmpl.innerHTML = jsonFormat;
})

treeBtn.addEventListener('click', function() {
    const data = dataArea.value;
    tree.innerHTML = '';

    try {
        const parsedJson = JSON.parse(data);
        console.log(typeof parsedJson);

        if(typeof parsedJson === 'object') {
            createTree(tree, parsedJson);
        } else {
            tree.innerHTML = parsedJson;
            errMessage.innerHTML = '';
        }


        /*------------*/
        console.log(parsedJson);
    } catch(err) {
        if (err.name == "SyntaxError") {
            const message = `Your code doesn\'t match the JSON format! Error: ${err.message}`;

            errMessage.innerHTML = message;
          } else {
            throw err;
        }
    }
})


dataArea.addEventListener('input', function() {
    // const value = dataArea.value[dataArea.value.length - 1];
    // try {
    //     if(Number(value) !== NaN) {
    //         dataArea[dataArea.value.length - 1].style.color = NUMBER_COLOR;
    //     }

    // } catch(err) {
    //     console.log(err.message);
    // }
})