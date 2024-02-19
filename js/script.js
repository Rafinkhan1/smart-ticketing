// function handleClick(event){
// event.target.style.backgroundColor = 'red';
// }
// onclick="handleClick(event)"

const allButton = document.getElementsByClassName('seat-number');
let count = 0;
let sub = 8;
let priceCount = 0;
for (const buttons of allButton) {

    buttons.addEventListener('click', function (event) {
        count = count + 1;
        if (count <= 4) {
            setInnerNumber('total-seat', count)

        }

        if (count <= 4) {
            event.target.style.backgroundColor = '#1DD100';
        } else {
            event.target.style.backgroundColor = '';
        }
        // event.target.style.backgroundColor = 'red';
        if (sub >= 1 && sub <= 8) {
            sub = sub - 1;

        }
        else {
            alert('Sit not available');
        }

        setInnerNumber('seat-available', sub)


        if (count <= 4) {
            const totalPrice = document.getElementById('total-price').innerText;

            const PriceInteger = parseInt(totalPrice);
            const sum = PriceInteger + 550;
            setInnerNumber('total-price', sum);

            const grandTotal = document.getElementById('grand-total').innerText;
            const grandInteger = parseInt(grandTotal);
            const sum2 = grandInteger + 550;
            setInnerNumber('grand-total', sum2)

        }
        else {

            alert('you cannot buy more than 4 tickets');

        }
        
        if (count <= 4) {


            const buttonName = event.target.parentNode.childNodes[1].innerText
            // const buttonName1 = event.target.parentNode.childNodes[5].innerText;
            const selectedButtonContainer = document.getElementById('selected-Btn');
            const li = document.createElement('li');

            const p1 = document.createElement('p');
            p1.innerText = buttonName;
            const p2 = document.createElement('p');
            p2.innerText = 'Economoy';
            const p3 = document.createElement('p');
            p3.innerText = '550';


            li.appendChild(p1);
            li.appendChild(p2);
            li.appendChild(p3);

            selectedButtonContainer.appendChild(li);

        }




        console.log(buttonName)
        // console.log(buttonName1)

    })
}

function setInnerNumber(id, value) {
    document.getElementById(id).innerText = value;
}
document.getElementById('continue').addEventListener('click', function () {
    window.location.reload();
})




