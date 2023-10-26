const min = document.querySelector('#min');
const max = document.querySelector('#max');

min.addEventListener('change', () => {
    min.value = parseInt(Number(min.value));
    if(Number(min.value)<0 || isNaN(min.value)){
        min.value = 0
    }
});

max.addEventListener('change', () => {
    max.value = parseInt(Number(max.value));
    if(Number(max.value)<0 || isNaN(max.value)){
        max.value = 0
    }
    if(Number(max.value) < Number(min.value)){
        max.value = null
    }
    
});