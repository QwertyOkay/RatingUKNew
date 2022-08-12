    const forms = document.querySelectorAll('form');
    const message = {
    success: 'Thank you!',
    failure: 'Something went wrong. Please try again'
};

    forms.forEach(item => {
        postData(item);
    });


    function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        
        fetch('phpmailer/sendmail.php', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        }).then(data => {
            console.log(data);
            alert(message.success);
        }).catch(() => {
            alert(message.failure);
        }).finally(() => {
            form.reset();
        });
    });   
    }
