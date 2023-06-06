
$p = $('<p>');
$a = $('<a>').attr('href', 'https://www.linkedin.com/in/david-rios-info-tech/').attr('target','_blank');

$p.append($a);

$linkedin = $('<img>');
$linkedin.attr('src', "/images/linkedin.png");
$a.append($linkedin);

$p.append('Click the LinkedIn icon for a complete resume.')

$('#experience').append($p);



