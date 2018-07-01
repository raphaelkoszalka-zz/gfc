function scrollToElement(name)
{
    scrollToResolver(document.getElementById(name));
}

function scrollToResolver(elem)
{
    var jump = parseInt(elem.getBoundingClientRect().top *.2);
    document.body.scrollTop += jump + 2.5;
    document.documentElement.scrollTop += jump + 2.5;
    if (!elem.lastjump || elem.lastjump > Math.abs(jump))
    {
        elem.lastjump = Math.abs(jump);
        setTimeout(function() { scrollToResolver(elem);}, 75);
    }
    else
    {
        elem.lastjump = null;
    }
}

function showFranchiseForm()
{
    $("#call-to-action").click(function ()
    {
        $(this).find('#formulario-franquia').removeClass('collapse');
        if ($(this).next().is(":hidden") === true )
        {
            $('#formulario-franquia').removeClass('collapse');
            $(this).next().slideDown("normal");
            $(this).find('#formulario-franquia').addClass('collapse');
        }
        setTimeout(function()
        {
            scrollToElement('formulario-franquia');
        }, 500);
    });
}
showFranchiseForm();

function getQueryParams()
{
    try
    {
        var url = window.location.href;
        var query_str = url.substr(url.indexOf('?')+1, url.length-1);
        var r_params = query_str.split('&');
        var params = {};
        for (i in r_params)
        {
            var param = r_params[i].split('=');
            params[param[0]] = param[1];
        }

        if (params.email === 'sent')
        {
            $('#mailSent').modal('show');
        }

        if (params.email === 'error')
        {
            $('#mailError').modal('show');
        }

        return params;
    }
    catch(e)
    {
        console.log(e);
        return {};
    }
}
getQueryParams();

$(document).ready(function()
{
    $('#data-de-nascimento').mask('00/00/0000');
    $('#telefone-fixo').mask('(00) 0000-0000');
    $('#celular').mask('(00) 0 0000-0000');
});

$('.nav a').on('click', function()
{
    $('.btn-navbar').click();
    $('.navbar-toggle').click();
});

$(function ()
{
    if(window.innerWidth > 997)
    {
        $(window).scroll(function ()
        {
            if ($(this).scrollTop() > 300)
            {
                $('.navbar').fadeIn();
            }
            else
            {
                $('.navbar').fadeOut();
            }
        });
    }
});