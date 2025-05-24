// let inputBox = document.getElementById("inputBox");
// let memory = 0;
// let history = [];

// function appendInput(value) {
//     inputBox.value += value;
// }

// function clearInput() {
//     inputBox.value = "";
// }

// function deleteLast() {
//     inputBox.value = inputBox.value.slice(0, -1);
// }

// function calculate() {
//     try {
//         let expression = inputBox.value
//             .replace(/log\(/g, "Math.log10( )")
//             .replace(/sin\(/g, "Math.sin(Math.PI/180*") // Convert degrees to radians
//             .replace(/cos\(/g, "Math.cos(Math.PI/180*")
//             .replace(/tan\(/g, "Math.tan(Math.PI/180*")
//             .replace(/√/g, "Math.sqrt"); // Square root

//         inputBox.value = eval(expression);
//         history.push(inputBox.value);
//     } catch (error) {
//         inputBox.value = "Error";
//     }
// }

// function memoryAdd() {
//     memory = parseFloat(inputBox.value) || 0;
// }

// function memoryRecall() {
//     inputBox.value += memory;
// }

// function memoryClear() {
//     memory = 0;
// }

// function showHistoryInInput() {
//     alert(history.join("\n"));
// }

// function toggleTheme() {
//     document.body.classList.toggle("dark-mode");
// }
