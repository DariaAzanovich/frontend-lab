const NUMBER_COLOR = 'red';
const STRING_COLOR = 'green';
const BOOLEAN_COLOR = 'purple';

const treeBtn = document.querySelector('.tree-btn');
const dataArea = document.getElementById('d-area');
const tree = document.querySelector('.tree');
const jsonFormatExmpl = document.querySelector('.json-format');
const jsonData = document.querySelector('.json-data');
const errMessage = document.querySelector('.error-message');
const ul = document.getElementsByTagName('ul');


const exampData = '{"number": 123, "string": "Hello!", "array": [1, 3, 4, 123], "obj": {"name": "Kate", "age": 23}, "bool": true }';

const jsonFormat = `JSON format: <br>
{
    "key": value, 
    "key": value
} 
<br> OR <br>
[
    "key": value, 
    "key": value
]
<br> OR <br> string/number.`;

/*--------------------- Functions ------------------*/

function setDataTypeColor(span, data) {
    if(typeof data === 'string') {
        span.style.color = STRING_COLOR;
    } else if(typeof data === 'number') {
        span.style.color = NUMBER_COLOR;
    } else if(typeof data === 'boolean') {
        span.style.color = BOOLEAN_COLOR;
    }

    span.innerHTML = data;

    return span;
}

function createTreeDom(obj) {
    if (!Object.keys(obj).length) {
        return;
    }

    let ul = document.createElement('ul');
    // ul.innerHTML += 'JSON data';

    for (let key in obj) {
        const li = document.createElement('li');
        const span = document.createElement('span');

        if(typeof obj[key] !== 'object') {
            li.innerHTML = key + ': ';
            li.appendChild(setDataTypeColor(span, obj[key]));
            
            if(Array.isArray(obj)) {
                li.appendChild(setDataTypeColor(span, obj));
            }
        } else {
            // ul.innerHTML += key;
            let childrenUl = createTreeDom(obj[key]);

            if (childrenUl) {
                li.append(childrenUl);
            }
        }

        ul.append(li);
    }
    return ul;
}


function appendTree(container, obj) {
    container.innerHTML = 'JSON data'
    container.appendChild(createTreeDom(obj));
    // console.log(ul[0]);
    for(let item of ul) {
        item.addEventListener('click', function(event) {
            // let childrenList = event.target.parentNode.querySelector('ul');
            let childrenList = event.target.children;
    
            console.log(event.target);
            console.log(childrenList);

            for(item of childrenList) {
                item.classList.toggle('show');
            }  
        })
    }
}

/*----------------- Event listeners -----------------*/
document.addEventListener('DOMContentLoaded', () => {
    dataArea.value = exampData;
    jsonFormatExmpl.innerHTML = jsonFormat;
})


treeBtn.addEventListener('click', function() {
    const data = dataArea.value;
    tree.innerHTML = '';
    errMessage.innerHTML = '';

    try {
        const parsedJson = JSON.parse(data);

        if(typeof parsedJson === 'object') {
            appendTree(tree, parsedJson);
        } else {
            const span = document.createElement('span');

            tree.appendChild(setDataTypeColor(span, parsedJson));
        }

    } catch(err) {
        if (err.name == "SyntaxError") {
            const message = `Your code doesn\'t match the JSON format! Error: ${err.message}`;

            errMessage.innerHTML = message;
          } else {
            throw err;
        }
    }
})

