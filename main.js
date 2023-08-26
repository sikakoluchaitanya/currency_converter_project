const populate = async (value, currency) => {
    let myStr = ""
    let url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_p3fxwzdTYoKLFjjttlWHxOybPPxoPQtBWQf5dd8w&base_currency=" + currency;
    console.log(url);
    let response = await fetch(url)
    let rJson = await response.json()
    document.querySelector(".output").style.display = "block"

    for (let key of Object.keys(rJson["data"])) {
        myStr += ` <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${(rJson["data"][key]["value"] * value)}</td>
                    </tr> 
                `;
       
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

}
const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseFloat(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value
    populate(value, currency)
});



