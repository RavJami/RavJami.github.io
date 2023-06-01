
	var select = document.querySelector('.table-container');
	var button = document.getElementsByClassName('add-cart');
	for(var but of button){
		but.addEventListener('click', (e)=>{

			// copy and paste //
			var parent = e.target.parentNode;
			var clone = parent.cloneNode(true);
			select.appendChild(clone);
			clone.lastElementChild.innerText = "cart-buy";

			if (clone) {
				noti.onclick = ()=>{
					select.classList.toggle('display');
				}	
			}
		})
	}

function hideCart(){
    const cartCont = document.querySelector(".cart-cont");

    if(cartCont.style.display == "none"){
        cartCont.style.display ="flex";
    }

    else{
        cartCont.style.display ="none";
    }
};

function showCart(){
    const cartCont = document.querySelectorAll(".cart-cont");

   
};