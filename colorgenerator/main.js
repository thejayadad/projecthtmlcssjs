const colorPicker = document.getElementById('colorPicker');
const getColorBtn = document.getElementById('getColorBtn');
const colorDisplay = document.getElementById('colorDisplay');

getColorBtn.addEventListener('click', () => {
    colorPicker.click();
});

colorPicker.addEventListener('input', () => {
    const selectedColor = colorPicker.value;
    document.body.style.background = `linear-gradient(to right, ${selectedColor})`;
    colorDisplay.style.background = selectedColor;
});
