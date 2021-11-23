                                                                    // BOUTON BERRIES

$('#berries').click( () => {

    $('#div_1').css('display', 'flex')

    $.get('https://pokeapi.co/api/v2/berry/', function(data) {
        
        $('#pokemon_id').html('')
        $('#pokemon_name').html('')

        for ( i = 0; i < data.results.length; i++) {

            $('#pokemon_id').html( $('#pokemon_id').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_berry(\" " + data.results[i].url + " \")'>" + '#' + (i + 1) +  '</div>')

            $('#pokemon_name').html( $('#pokemon_name').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_berry(\" " + data.results[i].url + " \")'>" + data.results[i].name + '</div>')

        }
        
        if ( data.next !== null) {

                $('.next').css('display', 'block')
                $('.next').attr('onclick', 'clicknext("' +data.next+ '")')

            }

        else {

                $('.next').css('display', 'none') 

            }

        if ( data.previous !== null) {

                $('.previous').css('display', 'block')
                $('.previous').attr('onclick', 'clickprevious("' +data.previous+ '")')

            }

        else {

                $('.previous').css('display', 'none') 

            }

    })

})

function more_info_berry(url) {

    $('#div_2').css('display', 'flex')

    $('#div_2').html('')

    $.get(url, function(data) {

        $('#div_2').html( $('#div_2').html() + "Baie : " + data.name + '<br />')

        $('#div_2').html( $('#div_2').html() + "Temps de Pousse : " + data.growth_time + " heures." + '<br />')

        $('#div_2').html( $('#div_2').html() + "Taille de la Baie : " + data.size + " mm" + '<br />')

    })

}

                                                                    // BOUTON CONTEST

$('#contest').click( () => {

    $('#div_1').css('display', 'flex')

    $.get('https://pokeapi.co/api/v2/contest-type/', function(data) {
        
        $('#pokemon_id').html('')
        $('#pokemon_name').html('')

        for ( i = 0; i < data.results.length; i++) {

            $('#pokemon_id').html( $('#pokemon_id').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_contest(\" " + data.results[i].url + " \")'>" + '#' + (i + 1) +  '</div>')

            $('#pokemon_name').html( $('#pokemon_name').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_contest(\" " + data.results[i].url + " \")'>" + data.results[i].name + '</div>')

        }
        
        if ( data.next !== null) {

                $('.next').css('display', 'block')
                $('.next').attr('onclick', 'clicknext("' +data.next+ '")')

            }

        else {

                $('.next').css('display', 'none') 

            }

        if ( data.previous !== null) {

                $('.previous').css('display', 'block')
                $('.previous').attr('onclick', 'clickprevious("' +data.previous+ '")')

            }

        else {

                $('.previous').css('display', 'none') 

            }

    })

})

function more_info_contest(url) {

    $('#div_2').css('display', 'flex')

    $('#div_2').html('')

    $.get(url, function(data) {

        $('#div_2').html( $('#div_2').html() + "Nom du Concour : " + data.name + '<br />')

        $('#div_2').html( $('#div_2').html() + "Type de Baie : " + data.berry_flavor.name + '<br />')

    })

}

                                                                    // BOUTON ENCOUNTERS

$('#encounters').click( () => {

    $('#div_1').css('display', 'flex')

    $.get('https://pokeapi.co/api/v2/encounter-method/', function(data) {
        
        $('#pokemon_id').html('')
        $('#pokemon_name').html('')

        for ( i = 0; i < data.results.length; i++) {

            $('#pokemon_id').html( $('#pokemon_id').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_encounters(\" " + data.results[i].url + " \")'>" + '#' + (i + 1) +  '</div>')

            $('#pokemon_name').html( $('#pokemon_name').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_encounters(\" " + data.results[i].url + " \")'>" + data.results[i].name + '</div>')

        }
        
        if ( data.next !== null) {

                $('.next').css('display', 'block')
                $('.next').attr('onclick', 'clicknext("' +data.next+ '")')

            }

        else {

                $('.next').css('display', 'none') 

            }

        if ( data.previous !== null) {

                $('.previous').css('display', 'block')
                $('.previous').attr('onclick', 'clickprevious("' +data.previous+ '")')

            }

        else {

                $('.previous').css('display', 'none') 

            }

    })

})

function more_info_encounters(url) {

    $('#div_2').css('display', 'flex')

    $('#div_2').html('')

    $.get(url, function(data) {

        $('#div_2').html( $('#div_2').html() + "Methode pour lancer un Combat : " + data.name + '<br />')

        //$('#div_2').html( $('#div_2').html() + "Methode pour lancer un Combat : " + data.names. + '<br />')

    })

}

                                                                    // BOUTON EVOLUTION

$('#evolution').click( () => {

    $('#div_1').css('display', 'flex')

    $.get('https://pokeapi.co/api/v2/evolution-chain/', function(data) {
        
        $('#pokemon_id').html('')
        $('#pokemon_name').html('')

        for ( i = 0; i < data.results.length; i++) {

            $('#pokemon_id').html( $('#pokemon_id').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_evolutions(\" " + data.results[i].url + " \")'>" + '#' + (i + 1) +  '</div>')

            $('#pokemon_name').html( $('#pokemon_name').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_evolutions(\" " + data.results[i].url + " \")'>" + 'Pokemon n°: ' + (i + 1) + '</div>')

        }
        
        if ( data.next !== null) {

                $('.next').css('display', 'block')
                $('.next').attr('onclick', 'clicknext("' +data.next+ '")')

            }

        else {

                $('.next').css('display', 'none') 

            }

        if ( data.previous !== null) {

                $('.previous').css('display', 'block')
                $('.previous').attr('onclick', 'clickprevious("' +data.previous+ '")')

            }

        else {

                $('.previous').css('display', 'none') 

            }

    })

})

function more_info_evolutions(url) {

    $('#div_2').css('display', 'flex')

    $('#div_2').html('')

    $.get(url, function(data) {

        $('#div_2').html( $('#div_2').html() + "Pokemon de base : " + data.chain.species.name + '<br />')

        $('#div_2').html( $('#div_2').html() + "Evolution n°1 : " + data.chain.evolves_to[0].species.name + '<br />')

        $('#div_2').html( $('#div_2').html() + "Evolution n°2 : " + data.chain.evolves_to[0].evolves_to[0].species.name + '<br />')

    })

}

                                                                    // BOUTON GAMES

$('#games').click( () => {

    $('#div_1').css('display', 'flex')

    $.get('https://pokeapi.co/api/v2/generation/', function(data) {
        
        $('#pokemon_id').html('')
        $('#pokemon_name').html('')

        for ( i = 0; i < data.results.length; i++) {

            $('#pokemon_id').html( $('#pokemon_id').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_generation(\" " + data.results[i].url + " \")'>" + '#' + (i + 1) +  '</div>')

            $('#pokemon_name').html( $('#pokemon_name').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_generation(\" " + data.results[i].url + " \")'>" + data.results[i].name + '</div>')

        }
        
        if ( data.next !== null) {

                $('.next').css('display', 'block')
                $('.next').attr('onclick', 'clicknext("' +data.next+ '")')

            }

        else {

                $('.next').css('display', 'none') 

            }

        if ( data.previous !== null) {

                $('.previous').css('display', 'block')
                $('.previous').attr('onclick', 'clickprevious("' +data.previous+ '")')

            }

        else {

                $('.previous').css('display', 'none') 

            }

    })

})

function more_info_generation(url) {

    $('#div_2').css('display', 'flex')

    $('#div_2').html('')

    $.get(url, function(data) {

        $('#div_2').html( $('#div_2').html() + "Region : " + data.main_region.name + '<br />')

    })

}


// FUNCTION DE BOUTON NEXT ET BOUTON PREVIOUS

function clicknext(url) {

    console.log(url)

    let get_url = new URL(url)

    let search_url = get_url.searchParams

    let url_limit = search_url.get('limit')

        if ( url_limit < 20 ) {

            search_url.set('limit', 20)

            get_url.toString()        

        }

    $.get(get_url.toString(), function(data) {
        
        $('#pokemon_id').html('')
        $('#pokemon_name').html('')

        for ( i = 0; i < data.results.length; i++) {

            // console.log(data.results[i])

            $('#pokemon_id').html( $('#pokemon_id').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_berry(\" " + data.results[i].url + " \")'>" + '#' + (i + 1) +  '</div>')

            $('#pokemon_name').html( $('#pokemon_name').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_berry(\" " + data.results[i].url + " \")'>" + data.results[i].name + '</div>')
            
        }

        if ( data.next !== null) {

            $('.next').css('display', 'block')
            $('.next').attr('onclick', 'clicknext("' +data.next+ '")')

        }

        else {

            $('.next').css('display', 'none')

        }

        if ( data.previous !== null) {

            $('.previous').css('display', 'block')
            $('.previous').attr('onclick', 'clickprevious("' +data.previous+ '")')

        }

        else {

            $('.previous').css('display', 'none') 

        }

    })

}

function clickprevious(url) {

    console.log(url)

    let change_url = new URL(url).searchParams

    let url_limit = change_url.get('limit')

    console.log(url_limit)

    $.get(url, function(data) {
        
        $('#pokemon_id').html('')
        $('#pokemon_name').html('')

        for ( i = 0; i < data.results.length; i++) {

            // console.log(data.results[i])

            $('#pokemon_id').html( $('#pokemon_id').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_berry(\" " + data.results[i].url + " \")'>" + '#' + (i + 1) +  '</div>')

            $('#pokemon_name').html( $('#pokemon_name').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_berry(\" " + data.results[i].url + " \")'>" + data.results[i].name + '</div>')

        }

        if ( data.next !== null) {

            $('.next').css('display', 'block')
            $('.next').attr('onclick', 'clicknext("' +data.next+ '")')

        }

        else {

            $('.next').css('display', 'none') 

        }

        if ( data.previous !== null) {

            $('.previous').css('display', 'block')
            $('.previous').attr('onclick', 'clickprevious("' +data.previous+ '")')

        }

        else {

            $('.previous').css('display', 'none') 

        }

    })

}