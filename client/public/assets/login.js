(()=>{
    // A $( document ).ready() block.
    $(document).ready(function () {
        console.log("ready!");

        $('#logIn').on('click',()=>{
            alert('clicked');
        })

    });
})();