const NUMBER_COLOR = 'red';
const STRING_COLOR = 'green';
const BOOLEAN_COLOR = 'purple';
const EXAMP_DATA = '{"number": 123, "string": "Hello!", "array": [1, 3, 4, 123], "obj": {"name": "Kate", "age": 23}, "bool": true }';
const JSON_FORMAT = `JSON format: <br>
{
    "key": value, 
    "key": value
} 
<br> OR <br> []/string/number.`;

const treeBtn = document.querySelector('.tree-btn');
const dataArea = document.getElementById('d-area');
const tree = document.querySelector('.tree');
const jsonFormatExmpl = document.querySelector('.json-format');
const jsonData = document.querySelector('.json-data');
const errMessage = document.querySelector('.error-message');
const ul = document.getElementsByTagName('ul');


/*--------------------- Functions ------------------*/

function setSpanColorizedData(span, data) {
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

    const ul = document.createElement('ul');

    for (let key in obj) {
        const li = document.createElement('li');
        const span = document.createElement('span');

        if(typeof obj[key] !== 'object') {
            if(!Array.isArray(obj)) {
                li.innerHTML = key + ': ';
            }
            li.appendChild(setSpanColorizedData(span, obj[key]));
        } else {
            span.innerHTML += key;
            span.classList.add('show');
            li.appendChild(span);

            const childrenUl = createTreeDom(obj[key]);

            if (childrenUl) {
                li.append(childrenUl);
            }
        }

        ul.append(li);
    }
    return ul;
}


function appendTree(container, obj) {
    container.appendChild(createTreeDom(obj));
}


function jsonDataHandling() {
    const data = dataArea.value;
    tree.innerHTML = '';
    errMessage.innerHTML = '';

    try {
        const parsedJson = JSON.parse(data);
        const span = document.createElement('span');

        if(typeof parsedJson === 'object') {
            appendTree(tree, parsedJson);
            
            span.innerHTML = 'JSON data';
            span.classList.add('show');

            tree.insertAdjacentElement('afterbegin', span);
        } else {
            tree.appendChild(setSpanColorizedData(span, parsedJson));
        }

    } catch(err) {
        if (err.name == "SyntaxError") {
            const message = `Your code doesn\'t match the JSON format! Error: ${err.message}`;

            errMessage.innerHTML = message;
          } else {
            throw err;
        }
    }
}

/*----------------- Event listeners -----------------*/

document.addEventListener('DOMContentLoaded', () => {
    dataArea.value = EXAMP_DATA;
    jsonFormatExmpl.innerHTML = JSON_FORMAT;
})


treeBtn.addEventListener('click', jsonDataHandling);

tree.addEventListener('click', function(event) {
    console.log(event.target.tagName);
    if (event.target.tagName != "SPAN") {
        return;
    }

    const childrenList = event.target.parentNode.querySelector("ul");

    if (!childrenList) return;
    childrenList.hidden = !childrenList.hidden;


    if (childrenList.hidden) {
        event.target.classList.add("hide");
        event.target.classList.remove("show");
    } else {
        event.target.classList.add("show");
        event.target.classList.remove("hide");
    }
})