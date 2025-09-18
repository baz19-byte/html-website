
        // Back to top button
        window.addEventListener('scroll', function() {
            const btn = document.getElementById('backToTop');
            btn.style.display = (window.scrollY > 300) ? 'block' : 'none';
        });
        document.getElementById('backToTop').onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        
        // Contact form success message
        document.addEventListener('DOMContentLoaded', function() {
            var form = document.getElementById('contactForm');
            if(form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    var data = new FormData(form);
                    fetch(form.action, {
                        method: 'POST',
                        body: data,
                        headers: { 'Accept': 'application/json' }
                    }).then(function(response) {
                        if (response.ok) {
                            form.style.display = 'none';
                            document.getElementById('formSuccess').style.display = 'block';
                        } else {
                            response.json().then(function(data) {
                                alert(data.error || 'There was a problem sending your message.');
                            });
                        }
                    }).catch(function() {
                        alert('There was a problem sending your message.');
                    });
                });
            }
        });
  