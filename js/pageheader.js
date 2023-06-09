
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

//rikishi list item
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

//riskishi link
$ars = $('<a>');
$ars.text("Rikishi Search");
$ars.attr('href','/pages/sumosearch.html');
$rs.append($ars);

//-----------------------------------------
//-----creates hamburger menu -------------
//-----------------------------------------

//creates hamburger icon div
$hicon = $('<div>');

//creates and prepends  
//hamburger nav to the body
$divhamnav = $('<div>');
$divhamnav.attr('class','hamburger-nav');
$('body').prepend($divhamnav);

//prepends hamburger icon div to body
//prior to the hamburger nav so
//it is outside and won't disappear
$('body').prepend($hicon);

//creates and appends links div to
//the nav div
$divhamlinks = $('<div>');
$divhamlinks.attr('id','hamburger-links');
$divhamnav.append($divhamlinks);

//creates resume link
$ahamresume = $('<a>');
$ahamresume.attr('href','/pages/resume.html').text('Resume');
$divhamlinks.append($ahamresume);

//creates portfolio link
$ahamportfolio = $('<a>');
$ahamportfolio.attr('href','/pages/portfolio.html').text('Portfolio');
$divhamlinks.append($ahamportfolio);

//creates about link
$ahamabout = $('<a>');
$ahamabout.attr('href','/pages/about.html').text('About Me');
$divhamlinks.append($ahamabout);

//creates gallery link
$ahamgallery = $('<a>');
$ahamgallery.attr('href','/pages/gallery.html').text('Gallery');
$divhamlinks.append($ahamgallery);

//creates sumo search link
$ahamgallery = $('<a>');
$ahamgallery.attr('href','/pages/sumosearch.html').text('Rikishi Search');
$divhamlinks.append($ahamgallery);

//creates link and appends to the
//hamber icon
$hamburgerIcon = $('<a>');
$hamburgerIcon.attr('id','hamburgerIcon');
$hamburgerIcon.attr('href','javascript:void(0);');
$hamburgerIcon.attr('class','icon');
$hamburgerIcon.attr('onclick','toggleHamburger()');
$hicon.append($hamburgerIcon);

//creates the actual icon that works with cdn below from font awesome
$ifabars = $('<i>');
$ifabars.attr('class','fa fa-bars');
$hamburgerIcon.append($ifabars);

//    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
// integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" 
// referrerpolicy="no-referrer" />


})