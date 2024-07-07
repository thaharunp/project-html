var select = document.querySelectorAll('.currency'),
input_currency = document.getElementById('input_currency'),
out_currency = document.getElementById('output_currency')

const host = 'api.frankfurter.app';
fetch('https://${host}/currencies')
.then((data) => Resp.js())
.then((data)=>{
    alert(` 10 GBP = ${data.rates.USD}USD`)
});