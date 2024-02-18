// function handleClick(event){
// event.target.style.backgroundColor = 'red';
// }
// onclick="handleClick(event)"
        
    const allButton = document.getElementsByClassName('seat-number');
    let count = 0;
    for(const buttons of allButton){

        buttons.addEventListener('click',function(event){
            count = count+1;
            setInnerNumber('total-seat',count)


            const buttonName = event.target.parentNode.childNodes[1].innerText
            // const buttonName1 = event.target.parentNode.childNodes[5].innerText;
            const selectedButtonContainer = document.getElementById('selected-Button');
            const li= document.createElement('li');

            const p1 = document.createElement('p');
            p1.innerText = buttonName ;
            // const p2 = document.createElement('p');
            // p2.innerText = 'Economoy';
            // const p3 = document.createElement('p');
            // p3.innerText = '550';
            

            li.appendChild(p1);
            // li.appendChild(p2);
            // li.appendChild(p3);

            selectedButtonContainer.appendChild(li);






            console.log(buttonName)
            // console.log(buttonName1)
            event.target.style.backgroundColor = 'red';
        })
    }

    function setInnerNumber(id, value){
        document.getElementById(id).innerText = value;
    }
    
    

    
   