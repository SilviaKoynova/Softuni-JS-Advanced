function solve() {
  const text = document.getElementById('input').value.split('.').map((s) => s.trim()).filter(s => s.length > 0);

  for (let i = 0; i < text.length; i += 3) {
    document.getElementById('output').innerHTML += `<p>${text.slice(i, i + 3).join('.')}.</p>`;

  }

}