//your code here!

document.addEventListener("DOMContentLoaded", function() {
    var list = document.getElementById("infi-list");

    // Function to add items to the list
    function addItemToList() {
        for (var i = 1; i <= 10; i++) {
            var li = document.createElement("li");
            li.textContent = "List item " + i;
            list.appendChild(li);
        }
    }

    // Function to add 2 more list items when the user reaches the end of the list
    function addMoreItems() {
        for (var i = 1; i <= 2; i++) {
            var li = document.createElement("li");
            var totalItems = list.getElementsByTagName("li").length + i;
            li.textContent = "List item " + totalItems;
            list.appendChild(li);
        }
    }

    // Add initial items to the list
    addItemToList();

    // Add event listener to detect when user scrolls to the bottom of the list
    list.addEventListener("scroll", function() {
        if (list.scrollHeight - list.scrollTop === list.clientHeight) {
            // User has scrolled to the bottom of the list
            addMoreItems();
        }
    });
});
