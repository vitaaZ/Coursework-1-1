$(document).ready(function() {  
    ajaxGetXML(); 
})

function ajaxGetXML(){ 
$.ajax({ 
    type: "GET", 
    url: "footer.xml", 
    dataType: "xml", 
    success: function(data) { 
        var html = ""; 
        $(data).find('block').each(function(){ 
            var brand = $(this).find('brand').html(); 
            var note = $(this).find('note').html(); 
            html += "<p>"+brand+"</p>"; 
            html += "<p>"+note+"</p>";   
        });          
        $('.footer').html(html); 
    }, 
    error: function() {
        console.log("Ошибка при загрузке XML файла.");
    }
}); 
}

function changeButtonText(button) {
    if (button.textContent === 'Добавлено') {
        button.textContent = 'В корзину';
    } else {
        button.textContent = 'Добавлено';
    }
}

$(document).ready(function() {
    $('.sendEmail').click(function(e) {
        e.preventDefault();

        var email = $('input[type="email"]').val();

        if (validateEmail(email)) {
            alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
            $('input[type="email"]').val('');
        } else {
            alert("Пожалуйста, введите корректный email.");
        }
    });

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});