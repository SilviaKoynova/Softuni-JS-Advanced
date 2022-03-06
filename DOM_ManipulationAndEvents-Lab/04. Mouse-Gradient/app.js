function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const output = document.getElementById('result');
    gradient.addEventListener('mousemove', onmove);
    function onmove(ev){
        const box = ev.target;
        const offset = Math.floor(ev.offsetX / box.clientWidth * 100);
        output.textContent = `${offset}%`;
    }
}