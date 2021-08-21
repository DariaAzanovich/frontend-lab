const treeBtn = document.querySelector('.tree-btn');
const dataArea = document.getElementById('d-area');
const tree = document.querySelector('.tree');
const jsonFormatExmpl = document.querySelector('.json-format');


const exampData = '{"number": 123, "string": "Hello!", "array": [1, 3, 4, 123], "obj": {"name": "Kate", "age": 23} }';

document.addEventListener('DOMContentLoaded', () => {
    dataArea.value = exampData;
})



treeBtn.addEventListener('click', function() {
    const data = dataArea.value;

    try {
        const obj = JSON.parse(data);

        tree.innerHTML = obj;
        console.log(obj);
    } catch(err) {
        alert('Your code doesn\'t match the JSON format!');
    }
})
