
    let cardbody = Array.from(document.getElementsByClassName('card-body'));
    let counter = document.querySelectorAll('.quantity');
    let plus = Array.from(document.getElementsByClassName('fas fa-plus-circle'));
    let moin = Array.from(document.getElementsByClassName('fas fa-minus-circle'));
    let deleteButtons = document.querySelectorAll('.fas.fa-trash-alt');
    let heartIcons = document.querySelectorAll('.fas.fa-heart');


    //fonction plus
    for (let i = 0; i < cardbody.length; i++) {
        plus[i].addEventListener('click', function() {
            counter[i].innerText++
            updateTotalPrice();
        })
        //fonction moin
    moin[i].addEventListener('click', function() {if (counter[i].innerHTML >0) {
                
        counter[i].innerHTML--;
        updateTotalPrice();
    }
    })

    //suprimer le produit
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', function() {
            let cardBody = this.parentElement.parentElement.parentElement;
            cardBody.remove();

        });
    }
    //changer la couleure du coeur
    heartIcons[i].addEventListener('click', function() {
            // Changer la couleur de l'icône de cœur en rouge
                    this.style.color = 'red'
        });
    // prix produit 
    }
    function updateTotalPrice() {
        let totalPrice = 0;
        const unitPrices = document.querySelectorAll(".unit-price");
        const quantities = document.querySelectorAll(".quantity");
        unitPrices.forEach((price, index) => {
            totalPrice += parseInt(price.textContent) * parseInt(quantities[index].textContent);
        });
        document.querySelector(".total").textContent = totalPrice + " $";
    } 