window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const localApi = 'http://localhost:7071/api/GetResumeCounter';
const functionApi = 'https://resicountget.azurewebsites.net/api/GetResumeCounter?code=dSUzc4oE8ZSGvY3DtVJeuHKzB2Aajovq415Osv3nJxtFAzFu-jpKzQ=='; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}
