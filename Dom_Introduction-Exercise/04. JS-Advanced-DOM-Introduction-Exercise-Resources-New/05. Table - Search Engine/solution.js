function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let button = document.querySelector('#searchField');
      let body = document.querySelectorAll('tbody tr');
      for (let i of body){
         i.parentElement.className = '';
      }
      for (let i of body){
         if(i.textContent.toLowerCase().includes(button.value.toLowerCase())){
            i.setAttribute('class', 'select');
         }else{
            i.removeAttribute('class');
         }
      }

   }
}

// function solve() {
//    document.querySelector('#searchBtn').addEventListener('click', onClick);

//    function onClick() {
//       let button = document.querySelector('#searchField');
//       let body = document.querySelectorAll('tbody tr td');
//       for (let i of body){
//          i.parentElement.className = '';
//       }
//       for (let i of body){
//          if(i.textContent.includes(button.value)){
//             i.parentElement.className = 'select';
//             or i.classList.add('select')
//          }
//       }
//       button.value = '';

//    }
// }