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


/*--------------------- Functions ------------------*/

function typeBrackets(data) {
    let keyBrackets = '';

    if(Array.isArray(data)) {
        keyBrackets = ' []';
    } else {
        keyBrackets = ' {}';
    }
    
    return keyBrackets;
}


function setSpanColorizedData(span, data) {
    switch(typeof data) {
        case 'number':  
            span.style.color = NUMBER_COLOR;
            break;
        case 'string': 
            span.style.color = STRING_COLOR;
            break;
        case 'boolean':
            span.style.color = BOOLEAN_COLOR;
            break;
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
            const childrenUl = createTreeDom(obj[key]);

            childrenUl.insertAdjacentHTML('afterbegin', key + typeBrackets(obj[key]));

            if (childrenUl) {
                li.append(childrenUl);
            }
        }

        ul.append(li);
        ul.classList.add('active');
    }

    ul.addEventListener('click', collapseExpand);
    return ul;
}

function collapseExpand(event) {
    event.stopPropagation();
    const childrenList = event.target.children;

    if (!childrenList) {
        return;
    }
    for(child of childrenList) {
        child.classList.toggle('collapsed');
    }

    if(event.target.tagName === "UL") {
        event.target.classList.toggle("active");
    }
}

function appendTree(container, obj) {
    container.appendChild(createTreeDom(obj));
    container.firstChild.insertAdjacentHTML('afterbegin', 'JSON data' + typeBrackets(obj));
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