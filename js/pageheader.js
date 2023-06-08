
//create header and append
//to the top of the body element

$(()=>{

//-----------------------------------------
//-----creates header on all pages---------
//-----------------------------------------
$header = $('<header>');
$header.attr('id', "nav-header")
$('#page-content').prepend($header);

//create div element to
//contain all content
$div = $('<div>');
$div.attr('id','top-header');

//create paragraph element to
//contain link
$divp = $('<p>');
$divp.attr('id', 'title-paragraph');
$div.append($divp);

//create home link
$divlink = $('<a>');
$divlink.text("David Rios");
$divlink.attr('href', "/index.html")
$divlink.attr('id', "title-link")
$divp.append($divlink);

//append the title to the header
$div.attr('href', 'index.html');
$header.append($div);

//create unordered list
//and list items
$ul = $('<ul>');
$ul.attr('id','top-navigation');
$div.append($ul);

// //home list item
// $home = $('<li>');
// $home.attr('class','nav-link');
// $ul.append($home);

//resume list item
$resume = $('<li>');
$resume.attr('class','nav-link');
$ul.append($resume);

//portfolio list item
$portfolio = $('<li>');
$portfolio.attr('class','nav-link');
$ul.append($portfolio);

//about me list item
$about = $('<li>');
$about.attr('class','nav-link');
$ul.append($about);

//gallery list item
$gallery = $('<li>');
$gallery.attr('class','nav-link');
$ul.append($gallery);

//history list item
$rs = $('<li>');
$rs.attr('class','nav-link');
$ul.append($rs);

//resume link
$aresume = $('<a>');
$aresume.text("Resume");
$aresume.attr('href', '/pages/resume.html');
$resume.append($aresume);

//portfolio
$aportfolio = $('<a>');
$aportfolio.text("Portfolio");
$aportfolio.attr('href', '/pages/portfolio.html');
$portfolio.append($aportfolio);

//about me link
$aabout = $('<a>');
$aabout.text("About Me");
$aabout.attr('href', '/pages/about.html');
$about.append($aabout);

//gallery link
$agallery = $('<a>');
$agallery.text("Gallery");
$agallery.attr('href', '/pages/gallery.html');
$gallery.append($agallery);

//history link
$ars = $('<a>');
$ars.text("Rikishi Search");
$ars.attr('href','/pages/sumosearch.html');
$rs.append($ars);

//-----------------------------------------
//-----creates hamburger menu -------------
//-----------------------------------------
$try = $('<div>');

$divhamnav = $('<div>');
$divhamnav.attr('class','hamburger-nav');
$('body').prepend($divhamnav);

$('body').prepend($try);

$divhamlinks = $('<div>');
$divhamlinks.attr('id','hamburger-links');
$divhamnav.append($divhamlinks);

$ahamresume = $('<a>');
$ahamresume.attr('href','/pages/resume.html').text('Resume');
$divhamlinks.append($ahamresume);

$ahamportfolio = $('<a>');
$ahamportfolio.attr('href','/pages/portfolio.html').text('Portfolio');
$divhamlinks.append($ahamportfolio);

$ahamabout = $('<a>');
$ahamabout.attr('href','/pages/about.html').text('About Me');
$divhamlinks.append($ahamabout);

$ahamgallery = $('<a>');
$ahamgallery.attr('href','/pages/gallery.html').text('Gallery');
$divhamlinks.append($ahamgallery);

$ahamgallery = $('<a>');
$ahamgallery.attr('href','/pages/sumosearch.html').text('Rikishi Search');
$divhamlinks.append($ahamgallery);

$hamburgerIcon = $('<a>');
$hamburgerIcon.attr('id','hamburgerIcon');
$hamburgerIcon.attr('href','javascript:void(0);');
$hamburgerIcon.attr('class','icon');
$hamburgerIcon.attr('onclick','toggleHamburger()');
$try.append($hamburgerIcon);



$ifabars = $('<i>');
$ifabars.attr('class','fa fa-bars');
$hamburgerIcon.append($ifabars);

})