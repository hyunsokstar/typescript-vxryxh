// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

const dept_code = 'd7';
const new_dept_code = Number(dept_code.substring(1, 2));

const range = [...new Array(new_dept_code)].map((_, i) => i + 1);

console.log(new_dept_code);
console.log(range);

appDiv.innerHTML = `<h1>dept_code: ${new_dept_code} 계층 정보: ${range}</h1>`;
