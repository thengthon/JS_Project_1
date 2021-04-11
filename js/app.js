// ___________Get Initial Values____________________________________
document.querySelector(".numInbox").textContent = document.querySelectorAll(".booking .item").length;
document.querySelector(".numPro").textContent = document.querySelectorAll(".proList .item").length;

// ____________Variables_____________________________________________
var preMenu = document.querySelector(".proList");
var idToAdd = document.querySelectorAll(".proList .item").length + 1;
var showSearchBar = 1;
var showFilterBar = 1;
var executeSort = 1;
var preBtn = document.querySelector(".search");


// ____________Functions & Events____________________________________

// ========Sort Products by Name=====================================

function sortProductsByName(){
    let allProducts = document.querySelectorAll(".proList .item");
    let search = document.querySelector(".proList .search");
    let filter = document.querySelector(".proList .filter");
    let subMenu = document.querySelector(".proList .subMenu");
    let goUp = document.querySelector(".proList .goUp");

    document.querySelector(".proList").innerHTML = "";
    document.querySelector(".proList").appendChild(subMenu);
    document.querySelector(".proList").appendChild(search);
    document.querySelector(".proList").appendChild(filter);
    document.querySelector(".proList").appendChild(goUp);
    
    // Store all products name in array and sort it___________________
    let allNames = [];
    for ( let one of allProducts ){
        allNames.push(one.children[1].children[0].textContent);
    };
    allNames.sort();

    // Append the item back to product list according to a sorted array__
    for ( let name of allNames ){
        for ( let item of allProducts ){
            let nameOfItem = item.children[1].children[0].textContent;
            if ( name === nameOfItem ){
                document.querySelector(".proList").appendChild(item);
            };
        };
    };
}
// __________________________________________________________________

// ========Sort Products by Price=====================================

function sortProductsByPrice(){
    let allProducts = document.querySelectorAll(".proList .item");
    let search = document.querySelector(".proList .search");
    let filter = document.querySelector(".proList .filter");
    let subMenu = document.querySelector(".proList .subMenu");
    let goUp = document.querySelector(".proList .goUp");


    document.querySelector(".proList").innerHTML = "";
    document.querySelector(".proList").appendChild(subMenu);
    document.querySelector(".proList").appendChild(search);
    document.querySelector(".proList").appendChild(filter);
    document.querySelector(".proList").appendChild(goUp);
    
    // Store all products price in array and sort it___________________
    let allPrices = [];
    for ( let one of allProducts ){
        allPrices.push(parseInt(one.children[0].textContent.slice(0, one.children[0].textContent.length-1)));
    };
    allPrices.sort((a, b) => a - b);

    // Append the item back to product list according to a sorted array__
    for ( let price of allPrices ){
        for ( let item of allProducts ){
            let priceOfItem = parseInt(item.children[0].textContent.slice(0, item.children[0].textContent.length-1));
            if ( price === priceOfItem ){
                document.querySelector(".proList").appendChild(item);
            };
        };
    };
}
// __________________________________________________________________

// ========Sort Products by ID=======================================

function sortProductsById(){
    let allProducts = document.querySelectorAll(".proList .item");
    let search = document.querySelector(".proList .search");
    let filter = document.querySelector(".proList .filter");
    let subMenu = document.querySelector(".proList .subMenu");
    let goUp = document.querySelector(".proList .goUp");

    document.querySelector(".proList").innerHTML = "";
    document.querySelector(".proList").appendChild(subMenu);
    document.querySelector(".proList").appendChild(search);
    document.querySelector(".proList").appendChild(filter);
    document.querySelector(".proList").appendChild(goUp);
    
    // Store all products ID in array and sort it___________________
    let allID = [];
    for ( let one of allProducts ){
        allID.push(one.children[1].children[1].textContent);
    };
    allID.sort()
    // Append the item back to product list according to a sorted array__
    for ( let id of allID ){
        for ( let item of allProducts ){
            let idOfItem = item.children[1].children[1].textContent;
            if ( id === idOfItem ){
                document.querySelector(".proList").appendChild(item);
            };
        };
    };
}
// __________________________________________________________________

// ========Sort Products by Amount====================================

function sortProductsByAmount(){
    let allProducts = document.querySelectorAll(".proList .item");
    let search = document.querySelector(".proList .search");
    let filter = document.querySelector(".proList .filter");
    let subMenu = document.querySelector(".proList .subMenu");
    let goUp = document.querySelector(".proList .goUp");

    document.querySelector(".proList").innerHTML = "";
    document.querySelector(".proList").appendChild(subMenu);
    document.querySelector(".proList").appendChild(search);
    document.querySelector(".proList").appendChild(filter);
    document.querySelector(".proList").appendChild(goUp);
    
    // Store all products ID in array and sort it___________________
    let allAmounts = [];
    for ( let one of allProducts ){
        allAmounts.push(parseInt((one.children[1].children[3].textContent)));
    };
    allAmounts.sort((a, b) => a - b);
    // Append the item back to product list according to a sorted array__
    for ( let amount of allAmounts ){
        for ( let item of allProducts ){
            let amountOfItem = item.children[1].children[3].textContent;
            if ( amount == amountOfItem ){
                document.querySelector(".proList").appendChild(item);
            };
        };
    };
}
// __________________________________________________________________

// ========Sort Management===========================================

const toSort = document.querySelector(".sortBtn");
toSort.addEventListener("click", function(){
    preBtn.style.display = "none"
    showFilterBar = 1;
    showSearchBar = 1;

    let value = toSort.value;
    if ( value==="id" && executeSort===1 ){
        sortProductsById();
        executeSort = 0;
    } else if ( value === "price" && executeSort===1 ){
        sortProductsByPrice();
        executeSort = 0;
    } else if ( value === "name" && executeSort===1 ){
        sortProductsByName();
        executeSort = 0;
    } else if ( value === "amount" && executeSort===1 ){
        sortProductsByAmount();
        executeSort = 0;
    } else {
        executeSort = 1;
    }
});
// __________________________________________________________________

// ========Switch Tab In Admin User==================================
function logInUserAdmin() {
    document.querySelector(".loginPage").style.display = "none";
    document.querySelector(".adminPage").style.display = "flex";
}
const adminLogIn = document.getElementById("adminUser");
adminLogIn.addEventListener("click", logInUserAdmin);


function logOutUserAdmin() {
    document.querySelector(".loginPage").style.display = "flex";
    document.querySelector(".adminPage").style.display = "none";
}
const adminLogOut = document.getElementById("toLogOut");
adminLogOut.addEventListener("click", logOutUserAdmin);


function goAdd() {
    preMenu.style.display = "none";
    document.querySelector(".addInfo").style.display = "block";
    preMenu = document.querySelector(".addInfo");
}
const addItem = document.querySelector("#addNew");
addItem.addEventListener("click", goAdd);


function goList() {
    preMenu.style.display = "none";
    document.querySelector(".proList").style.display = "block";
    preMenu = document.querySelector(".proList");
}
const list = document.querySelector("#listProducts");
list.addEventListener("click", goList);


function goStaffs() {
    preMenu.style.display = "none";
    document.querySelector(".staffMgt").style.display = "block";
    preMenu = document.querySelector(".staffMgt");
}
const staff = document.querySelector("#staffs");
staff.addEventListener("click", goStaffs);


function goBooking() {
    preMenu.style.display = "none";
    document.querySelector(".booking").style.display = "block";
    preMenu = document.querySelector(".booking");
}
const booking = document.querySelector("#booking");
booking.addEventListener("click", goBooking);


function goPartner() {
    preMenu.style.display = "none";
    document.querySelector(".partner").style.display = "block";
    preMenu = document.querySelector(".partner");
}
const partner = document.querySelector("#partners");
partner.addEventListener("click", goPartner);
// ___________________________________________________________________


// ===========To Remove Or Edit Product From Product List=============

function showOrHideSearchBar(){
    if ( showSearchBar ){
        preBtn.style.display = "none";
        preBtn = document.querySelector(".search");
        document.querySelector(".search").style.display = "block";
        showSearchBar = 0;
        showFilterBar = 1
    } else{
        document.querySelector(".search").style.display = "none";
        showSearchBar = 1;
    }
}
const searchBtn = document.querySelector(".searchBtn");
searchBtn.addEventListener("click", showOrHideSearchBar);
// ___________________________________________________________________

// ===========To Remove Or Edit Product From Product List=============

function showOrHideFilterBar(){
    if ( showFilterBar ){
        preBtn.style.display = "none";
        preBtn = document.querySelector(".filter");
        document.querySelector(".filter").style.display = "flex";
        showFilterBar = 0;
        showSearchBar = 1;
    } else{
        document.querySelector(".filter").style.display = "none";
        showFilterBar = 1;
    }
}
const filterBtn = document.querySelector(".filterBtn");
filterBtn.addEventListener("click", showOrHideFilterBar);
// ___________________________________________________________________

// ===========To Remove Or Edit Product From Product List=============

function deleteOrEditProduct(event){
    let isDelete = event.target.classList[0] == "delete";
    let isEdit = event.target.classList[0] == "edit";
    itemToDeleteOrEdit = event.target.parentNode.parentNode;
    if ( (isDelete)&&(confirm("You want to delete it, sure?")) ) {
        document.querySelector(".proList").removeChild(itemToDeleteOrEdit);
        const numOfPro = document.querySelectorAll(".proList .item").length;
        document.querySelector(".numPro").textContent = numOfPro;
        if ( numOfPro===0 ){
            document.querySelector(".noProduct").style.display = "block";
        }
    } else if ( isEdit ){
        goAdd();

        // Hide Clear And Add Button,   Show Update Button___________________________
        document.querySelector(".reset").style.display = "none";
        document.querySelector(".add").style.display = "none";
        document.querySelector(".update").style.display = "block";

        // Go to add menu and take all value into input to update____________________
        formAdd.name.value = itemToDeleteOrEdit.children[1].children[0].textContent;
        formAdd.price.value = itemToDeleteOrEdit.children[0].textContent.slice(0, itemToDeleteOrEdit.children[0].textContent.length-1);
        formAdd.date.value = itemToDeleteOrEdit.children[1].children[2].textContent;
        formAdd.amount.value = itemToDeleteOrEdit.children[1].children[3].textContent;
        formAdd.category.value = itemToDeleteOrEdit.children[2].textContent;
        formAdd.message.value = itemToDeleteOrEdit.children[4].textContent;

        function toUpdate(e){
            let nameInput = formAdd.name.value;
            let priceInput = formAdd.price.value;
            let amountInput = formAdd.amount.value;
            let categoryInput = formAdd.category.value;
            let dateInput = formAdd.date.value;
            let messageInput = formAdd.message.value;

            const getDate = new Date(dateInput);
            const todayDate = new Date();
            const validDate = getDate>todayDate;

            let areDefined = ( (nameInput!=="") && (priceInput!=="") && (amountInput!=="") && (dateInput!=="") && (messageInput!=="") );
            if ( areDefined && validDate ){
                itemToDeleteOrEdit.children[1].children[0].textContent = nameInput;
                itemToDeleteOrEdit.children[0].textContent = priceInput + "$";
                itemToDeleteOrEdit.children[1].children[3].textContent = amountInput;
                itemToDeleteOrEdit.children[1].children[2].textContent = dateInput;
                itemToDeleteOrEdit.children[2].textContent = categoryInput;
                itemToDeleteOrEdit.children[4].textContent = messageInput;

                // To clear data from input__________________________
                formAdd.name.value = "";
                formAdd.price.value = "";
                formAdd.amount.value = "";
                formAdd.date.value = "";
                formAdd.message.value = "";
                formAdd.category.value = "Food";

                document.querySelector(".reset").style.display = "inline-block";
                document.querySelector(".add").style.display = "inline-block";
                document.querySelector(".update").style.display = "none";

                goList();
            };// else if ( ! validDate ){
            //     window.alert("Your product is expired...");
            // };
            // I try to alert when my date is expired, but error I don't know why
            // Here, I can't manage with (else if) and (else)
        };
        let updateBtn = document.querySelector(".update");
        updateBtn.addEventListener("click", toUpdate);
    };
}
const informationPart = document.querySelector(".proList");
informationPart.addEventListener("click", deleteOrEditProduct);
// ___________________________________________________________________

// ===========To Remove Product From Product List=====================

function deleteBookedProduct(event){
    const isDelete = event.target.classList[0] == "delivered";
    const proId = event.target.previousElementSibling.previousElementSibling.children[1].textContent;
    const bookedAmount = event.target.previousElementSibling.previousElementSibling.children[3].textContent;
    const itemToDelete = event.target.parentNode;
    if ( isDelete ) {
        document.querySelector(".booking").removeChild(itemToDelete);
        const numOfBooking = document.querySelectorAll(".booking .item").length;
        document.querySelector(".numInbox").textContent = numOfBooking;
        if ( numOfBooking===0 ){
            document.querySelector(".noBooking").style.display = "flex";
        };
        let allProducts = document.querySelectorAll(".proList .id");
        for ( let each of allProducts ){
            if ( each.textContent == proId ){
                each.parentNode.children[3].textContent -= bookedAmount;
            }
        }
    }
}
const bookingPart = document.querySelector(".booking");
bookingPart.addEventListener("click", deleteBookedProduct);
// ___________________________________________________________________

// ==============Add New Product Into Stock===========================

function addProduct(event){
    const nameInput = formAdd.name.value;
    const priceInput = formAdd.price.value;
    const amountInput = formAdd.amount.value;
    const categoryInput = formAdd.category.value;
    const dateInput = formAdd.date.value;
    const messageInput = formAdd.message.value;

    const getDate = new Date(dateInput);
    const todayDate = new Date();
    const validDate = getDate>todayDate;

    const areDefined = ( (nameInput!=="") && (priceInput!=="") && (amountInput!=="") && (dateInput!=="") && (messageInput!=="") );
    if ( areDefined && validDate ){
        let name = document.createElement("div");
        let id = document.createElement("div");
        let date = document.createElement("div");
        let amount = document.createElement("div");
        let editBtn = document.createElement("div");
        let deleteBtn = document.createElement("div");
        let modify = document.createElement("div");
        let category = document.createElement("div");
        let info = document.createElement("div");
        let price = document.createElement("div");
        let item = document.createElement("div");
        let message = document.createElement("span");
        
        price.className = "price";
        price.textContent = priceInput+"$";
        
        info.className = "info";
        name.className = "name";
        id.className = "id";
        date.className = "date";
        amount.className = "amount";
        name.textContent = nameInput;
        date.textContent = dateInput;
        amount.textContent = amountInput;
        id.textContent = "HS "+idToAdd;
        idToAdd += 1;
        info.appendChild(name);
        info.appendChild(id);
        info.appendChild(date);
        info.appendChild(amount);

        category.className = "category";
        category.textContent = categoryInput;
        
        editBtn.className = "edit fa fa-pencil-square-o hvr-grow";
        deleteBtn.className = "delete fa fa-trash hvr-grow";
        modify.className = "modify";
        modify.appendChild(editBtn);
        modify.appendChild(deleteBtn);

        message.className = "description";
        message.textContent = messageInput;
        
        item.className = "item";
        item.appendChild(price);
        item.appendChild(info);
        item.appendChild(category);
        item.appendChild(modify);
        item.appendChild(message);
        
        document.querySelector(".proList").appendChild(item);
        goList();
        document.querySelector(".numPro").textContent = document.querySelectorAll(".proList .item").length;
        
        // To clear data from input__________________________
        formAdd.name.value = "";
        formAdd.price.value = "";
        formAdd.amount.value = "";
        formAdd.date.value = "";
        formAdd.message.value = "";
        formAdd.category.value = "Food";

        document.querySelector(".noProduct").style.display = "none";
    } else if ( ! validDate ){
        window.alert("Your product is expired...");
    } else{
        window.alert("Please fill EVERYTHING !!!");
    }
}
const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", addProduct);
// ___________________________________________________________________

// ==============Clear Text From Search Box===========================

const clearBtn = document.querySelector(".clearIcon");
clearBtn.addEventListener("click", () => {
    document.querySelector("#searchBox").value = "";
    toSearch();
});
// ___________________________________________________________________

// ==============Searching Management=================================

function toSearch() {
    let searchValue = document.querySelector("#searchBox").value.toLowerCase();
    let allProducts = document.querySelectorAll(".proList .name");
    let numOfShow = 0;
    for ( let one of allProducts ){
        let nameOfProduct = one.textContent.toLowerCase();
        if ( nameOfProduct.indexOf(searchValue) === -1 ){
            one.parentNode.parentNode.style.display = "none";
        } else {
            one.parentNode.parentNode.style.display = "flex";
            numOfShow += 1;
        }
    };
    document.querySelector(".numPro").textContent = numOfShow;
}
const searching = document.querySelector("#searchBox");
searching.addEventListener("keyup", toSearch);
// ___________________________________________________________________

// ==============Filter Management====================================
function filterMgt() {
    let minValue = document.querySelector("#minInput").value;
    let maxValue = document.querySelector("#maxInput").value;
    let category = document.querySelector("#categoryInput").value;
    let items = document.querySelectorAll(".proList .item");
    var filterItemsForMin = items;
    
    if ( minValue!= "" ){
        filterItemsForMin = [];
        for ( let one of items ){
            let price = parseInt(one.children[0].textContent.slice(0, one.children[0].textContent.length-1));
            if ( price>=minValue ){
                one.style.display = "flex";
                filterItemsForMin.push(one);
            } else{
                one.style.display = "none";
            };
        };
        document.querySelector(".numPro").textContent = filterItemsForMin.length;
    } else{
        filterItemsForMin = items;
        for ( let one of items ){
            one.style.display = "flex";
        };
        document.querySelector(".numPro").textContent = filterItemsForMin.length;
    };
    
    var filterItemsForMax = filterItemsForMin;
    
    if ( maxValue!= "" ){
        filterItemsForMax = [];
        for ( let one of filterItemsForMin ){
            let price = parseInt(one.children[0].textContent.slice(0, one.children[0].textContent.length-1));
            if ( price<=maxValue ){
                one.style.display = "flex";
                filterItemsForMax.push(one);
            } else{
                one.style.display = "none";
            };
        };
        document.querySelector(".numPro").textContent = filterItemsForMax.length;
    } else{
        filterItemsForMax = filterItemsForMin;
        for ( let one of filterItemsForMin ){
            one.style.display = "flex";
        };
        document.querySelector(".numPro").textContent = filterItemsForMax.length;
    };
    
    var filterItemsForCate = filterItemsForMax;
    
    if ( category!= "none" ){
        filterItemsForCate = [];
        for ( let one of filterItemsForMax ){
            let cateProduct = one.children[2].textContent;
            if ( category===cateProduct ){
                one.style.display = "flex";
                filterItemsForCate.push(one);
            } else{
                one.style.display = "none";
            };
        };
        document.querySelector(".numPro").textContent = filterItemsForCate.length;
    } else{
        filterItemsForCate = filterItemsForMax;
        for ( let one of filterItemsForMax ){
            one.style.display = "flex";
        };
        document.querySelector(".numPro").textContent = filterItemsForCate.length;
    };
};
const filter = document.querySelector(".filter");
filter.addEventListener("keyup", filterMgt);
filter.addEventListener("click", filterMgt);
// ___________________________________________________________________

// ==============Filter Management====================================

const goUp = document.querySelector(".goUp");
goUp.addEventListener("click", () => {
    document.querySelector(".information").scroll(0,0);
});
// ___________________________________________________________________



// ==============Switch Tab In Cashier User===========================

function logInUserCashier() {
    document.querySelector(".loginPage").style.display = "none";
    document.querySelector(".cashierPage").style.display = "flex";
}
const cashierLogIn = document.getElementById("cashierUser");
cashierLogIn.addEventListener("click", logInUserCashier);


function logOutUserCashier() {
    document.querySelector(".loginPage").style.display = "flex";
    document.querySelector(".cashierPage").style.display = "none";
}
const cashierLogOut = document.querySelector(".logoutCashier");
cashierLogOut.addEventListener("click", logOutUserCashier);
// ___________________________________________________________________



