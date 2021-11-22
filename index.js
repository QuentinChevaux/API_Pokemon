$('#berries').click( () => {

    $('#div_1').css('display', 'flex')

    $.get('https://pokeapi.co/api/v2/berry/', function(data) {
        
        $('#pokemon_id').html('')
        $('#pokemon_name').html('')

        for ( i = 0; i < data.results.length; i++) {

            console.log(data.results[i])

            $('#pokemon_id').html( $('#pokemon_id').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_berry(\" " + data.results[i].url + " \")'>" + '#' + (i + 1) +  '</div>')

            $('#pokemon_name').html( $('#pokemon_name').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_berry(\" " + data.results[i].url + " \")'>" + data.results[i].name + '</div>')

        }
        
        if ( data.next !== null) {

                $('.next').css('display', 'block')
                $('.next').attr('onclick', 'clicknext("' +data.next+ '")')

            }

        if ( data.previous !== null) {

                $('.previous').css('display', 'block')
                $('.previous').attr('onclick', 'clickprevious("' +data.previous+ '")')

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

function next(url) {

    $.get(url, function(data) {
        
        $('#pokemon_id').html('')
        $('#pokemon_name').html('')

        for ( i = 0; i < data.results.length; i++) {

            console.log(data.results[i])

            $('#pokemon_id').html( $('#pokemon_id').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_berry(\" " + data.results[i].url + " \")'>" + '#' + (i + 1) +  '</div>')

            $('#pokemon_name').html( $('#pokemon_name').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_berry(\" " + data.results[i].url + " \")'>" + data.results[i].name + '</div>')
            
        }

        if ( data.next !== null) {

            $('.next').css('display', 'block')
            $('.next').attr('onclick', 'clicknext("' +data.next+ '")')

        }

        if ( data.previous !== null) {

            $('.previous').css('display', 'block')
            $('.previous').attr('onclick', 'clickprevious("' +data.previous+ '")')

        }

    })

}

function previous(url) {

    $.get(url, function(data) {
        
        $('#pokemon_id').html('')
        $('#pokemon_name').html('')

        for ( i = 0; i < data.results.length; i++) {

            console.log(data.results[i])

            $('#pokemon_id').html( $('#pokemon_id').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_berry(\" " + data.results[i].url + " \")'>" + '#' + (i + 1) +  '</div>')

            $('#pokemon_name').html( $('#pokemon_name').html() + '<br />' + "<div class='div_hard_berry' onclick='more_info_berry(\" " + data.results[i].url + " \")'>" + data.results[i].name + '</div>')

        }

        if ( data.next !== null) {

            $('.next').css('display', 'block')
            $('.next').attr('onclick', 'clicknext("' +data.next+ '")')

        }

        if ( data.previous !== null) {

            $('.previous').css('display', 'block')
            $('.previous').attr('onclick', 'clickprevious("' +data.previous+ '")')

        }

    })

}