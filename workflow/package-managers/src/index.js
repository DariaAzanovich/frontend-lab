import './styles/style.scss';
import _ from 'lodash';

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
const errMessage = document.querySelector('.error-message');

/* --------------------- Functions ------------------ */

function typeBrackets(data) {
    return Array.isArray(data) ? ' []' : ' {}';
}

function setSpanColorizedData(span, data) {
    switch (typeof data) {
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

function collapseExpand(event) {
    event.stopPropagation();

    const ulSibl = event.target.nextSibling;
    ulSibl.classList.toggle('collapsed');

    event.target.classList.toggle('active');
}

function createClickableSpan(content) {
    const span = document.createElement('span');
    span.classList.add('clickable');
    span.classList.add('active');
    span.addEventListener('click', collapseExpand);
    span.innerHTML = content;

    return span;
}

function createTreeDom(obj) {
    if (!Object.keys(obj).length) {
        return;
    }

    const ul = document.createElement('ul');

    _.each(obj, (value, key) => {
        const li = document.createElement('li');
        const span = document.createElement('span');

        if (typeof value !== 'object') {
            if (!Array.isArray(obj)) {
                li.innerHTML = `${key}: `;
            }
            li.appendChild(setSpanColorizedData(span, value));
        } else {
            const childrenUl = createTreeDom(value);

            if (childrenUl) {
                li.append(childrenUl);
                li.insertAdjacentElement('afterbegin', createClickableSpan(key + typeBrackets(value)));
            }
        }

        ul.append(li);
    });

    return ul;
}

function appendTree(container, obj) {
    container.appendChild(createTreeDom(obj));
    container.firstChild.insertAdjacentElement('beforebegin', createClickableSpan(`JSON data${typeBrackets(obj)}`));
}

function jsonDataHandling() {
    const data = dataArea.value;
    tree.innerHTML = '';
    errMessage.innerHTML = '';

    try {
        const parsedJson = JSON.parse(data);
        const span = document.createElement('span');

        if (typeof parsedJson === 'object') {
            appendTree(tree, parsedJson);
        } else {
            tree.appendChild(setSpanColorizedData(span, parsedJson));
        }
    } catch (err) {
        if (err.name === 'SyntaxError') {
            const message = `Your code doesn\'t match the JSON format! Error: ${err.message}`;

            errMessage.innerHTML = message;
          } else {
            throw err;
        }
    }
}

/* ----------------- Event listeners ----------------- */

document.addEventListener('DOMContentLoaded', () => {
    dataArea.value = EXAMP_DATA;
    jsonFormatExmpl.innerHTML = JSON_FORMAT;
});

treeBtn.addEventListener('click', jsonDataHandling);