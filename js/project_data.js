var projects = [{
    'name': 'Simple About Me',
    'description':'A simple "about me" page done in basic HTML and CSS.',
    'languages':'HTML, CSS'
},
{
    'name': 'Mock Company',
    'description':'Using Bootstrap to make a fake company website.',
    'languages':'HTML, CSS'
},
{
    'name': 'Data App with Filters',
    'description':'Using a third-party API to retrieve data based on user filters.',
    'languages':'AJAX, JS, HTML'
},
{
    'name': 'Simple Scrolling Game',
    'description':'A basic game made using JS canvas. Made as a parody of Super Mario Bros.',
    'languages':'JS'
},
{
    'name': 'First Progressive Web App',
    'description':'A progressive web app made along with Google Codelab.',
    'languages':'JS'
}];

for (var i=0; i < projects.length; i++) {
    projects[i].image='img/portfolio/'+i+'.png';
    projects[i].link='http://rtanaka96.github.io/IT202/project'+(i+1);
    var modal = $('#modalTemplate').clone().removeAttr('id');
    modal.attr('id','modal'+i);
    modal.find('.title').text(projects[i].name);
    modal.find('.img-fluid').attr('src','img/portfolio/'+i+'.png');
    modal.find('.description').text(projects[i].description);
    modal.find('.lang').html('languages: <strong>'+projects[i].languages+'</strong>');
    modal.find('.link').html('link: <a href='+projects[i].link+'><strong>'+projects[i].link+'</strong></a>');
    projects[i].modal='#modal'+i;
    modal.appendTo('body');
}

$.each(projects,function(key,value) {
    var card = $('#portTemplate').clone().removeAttr('id');
    card.find('.img-fluid').attr('src',value.image);
    card.find('.portfolio-link').attr('href',value.modal);
    card.appendTo('#portfolioContainer');
});