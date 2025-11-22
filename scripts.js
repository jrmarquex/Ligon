var AIZ = AIZ || {};
AIZ.local = {
    nothing_selected: 'Nada selecionado',
    nothing_found: 'Nada encontrado',
    choose_file: 'Escolha o arquivo',
    file_selected: 'Arquivo selecionado',
    files_selected: 'Arquivos selecionados',
    add_more_files: 'Adicione mais arquivos',
    adding_more_files: 'Adicionando mais arquivos',
    drop_files_here_paste_or: 'Solte os arquivos aqui, cole ou',
    browse: 'Navegar',
    upload_complete: 'Carregamento concluído',
    upload_paused: 'Carregamento pausado',
    resume_upload: 'Retomar upload',
    pause_upload: 'Pausar upload',
    retry_upload: 'Tentar enviar novamente',
    cancel_upload: 'Cancelar upload',
    uploading: 'Enviando',
    processing: 'Processamento',
    complete: 'Completo',
    file: 'Arquivo',
    files: 'Arquivos'
};

// Google Tag Manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N3CDFJFV');

function confirm_modal(delete_url)
{
    jQuery('#confirm-delete').modal('show', {backdrop: 'static'});
    document.getElementById('delete_link').setAttribute('href' , delete_url);
}

function account_delete_confirm_modal(delete_url)
{
    jQuery('#account_delete_confirm').modal('show', {backdrop: 'static'});
    document.getElementById('account_delete_link').setAttribute('href' , delete_url);
}

$(document).ready(function() {
    $('.videoCaller').magnificPopup({
        type: 'iframe',
    });
    if ($('#lang-change').length > 0) {
        $('#lang-change a').each(function() {
            $(this).on('click', function(e){
                e.preventDefault();
                var $this = $(this);
                var locale = $this.data('flag');
                $.post('https://eliaspa.com.br/idioma',{_token: AIZ.data.csrf, locale:locale}, function(data){
                    location.reload();
                });

            });
        });
    }

    if ($('#currency-change').length > 0) {
        $('#currency-change .dropdown-menu a').each(function() {
            $(this).on('click', function(e){
                e.preventDefault();
                var $this = $(this);
                var currency_code = $this.data('currency');
                $.post('https://eliaspa.com.br/moeda',{_token: AIZ.data.csrf, currency_code:currency_code}, function(data){
                    location.reload();
                });

            });
        });
    }
});

$('#search').on('keyup', function(){
    search();
});

$('#search').on('focus', function(){
    search();
});

function search(){
    var searchKey = $('#search').val();
    if(searchKey.length > 0){
        $('body').addClass("typed-search-box-shown");

        $('.typed-search-box').removeClass('d-none');
        $('.search-preloader').removeClass('d-none');
        $.post('https://eliaspa.com.br/busca-ajax', { _token: AIZ.data.csrf, search:searchKey}, function(data){
            if(data == '0'){
                // $('.typed-search-box').addClass('d-none');
                $('#search-content').html(null);
                $('.typed-search-box .search-nothing').removeClass('d-none').html('Desculpe, nada encontrado para <strong>"'+searchKey+'"</strong>');
                $('.search-preloader').addClass('d-none');

            }
            else{
                $('.typed-search-box .search-nothing').addClass('d-none').html(null);
                $('#search-content').html(data);
                $('.search-preloader').addClass('d-none');
            }
        });
    }
    else {
        $('.typed-search-box').addClass('d-none');
        $('body').removeClass("typed-search-box-shown");
    }
}

function updateNavCart(view,count){
    $('.cart-count').html(count);
    $('#cart_items').html(view);
}

function removeFromCart(key){
    $.post('https://eliaspa.com.br/carrinho/remover-do-carrinho', {
        _token  : AIZ.data.csrf,
        id      :  key
    }, function(data){
        updateNavCart(data.nav_cart_view,data.cart_count);
        $('#new_view').html(data.cart_view_checkout);
        $('#cart-details').html(data.cart_view);
        AIZ.plugins.notify('success', "O item foi removido do carrinho");
        $('#cart_items_sidenav').html(parseInt($('#cart_items_sidenav').html())-1);
    });
}

function showLoginModal() {
    $('#login_modal').modal();
}

function showLocate() {
    document.getElementById('d-Locate').classList.toggle("d-none");
    $('#locate').modal();
}

function addToCompare(id){
    $.post('https://eliaspa.com.br/comparar/adicionar', {_token: AIZ.data.csrf, id:id}, function(data){
        $('#compare').html(data);
        AIZ.plugins.notify('success', "O item foi adicionado à lista de comparação");
        $('#compare_items_sidenav').html(parseInt($('#compare_items_sidenav').html())+1);
    });
}

function addToWishList(id){
    AIZ.plugins.notify('warning', "Por favor faça login primeiro");
}

function showAddToCartModal(id){
    if(!$('#modal-size').hasClass('modal-lg')){
        $('#modal-size').addClass('modal-lg');
    }
    $('#addToCart-modal-body').html(null);
    $('#addToCart').modal();
    $('.c-preloader').show();
    $.post('https://eliaspa.com.br/carrinho/exibir-modal-carrinho', {_token: AIZ.data.csrf, id:id}, function(data){
        $('.c-preloader').hide();
        $('#addToCart-modal-body').html(data);
        AIZ.plugins.slickCarousel();
        AIZ.plugins.zoom();
        AIZ.extra.plusMinus();
        getVariantPrice();
    });
}

$('#wizard input').on('change', function(){
    getVariantPrice();
});

function getVariantPrice(){
    if($('#wizard input[name=quantity]').val() > 0 && checkAddToCartValidity()){
        $.ajax({
            type:"POST",
            url: 'https://eliaspa.com.br/produto/preco-variante',
            data: $('#wizard').serializeArray(),
            success: function(data){
                $('.product-gallery-thumb .carousel-box').each(function (i) {
                    if($(this).data('variation') && data.variation == $(this).data('variation')){
                        $('.product-gallery-thumb').slick('slickGoTo', i);
                    }
                })

                $('#wizard #chosen_price_div').removeClass('d-none');
                $('#wizard #chosen_price_div #chosen_price').html(data.price);
                $('#available-quantity').html(data.quantity);
                $('.input-number').prop('max', data.max_limit);
                if(parseInt(data.in_stock) == 0 && data.digital  == 0){
                   $('.buy-now').addClass('d-none');
                   $('.add-to-cart').addClass('d-none');
                   $('.out-of-stock').removeClass('d-none');
                }
                else{
                   $('.buy-now').removeClass('d-none');
                   $('.add-to-cart').removeClass('d-none');
                   $('.out-of-stock').addClass('d-none');
                }

                AIZ.extra.plusMinus();
            }
        });
    }
}

function checkAddToCartValidity(){
    var names = {};
    $('#wizard input:radio').each(function() { // find unique names
        names[$(this).attr('name')] = true;
    });
    var count = 0;
    $.each(names, function() { // then count them
        count++;
    });

    if($('#wizard input:radio:checked').length == count){
        return true;
    }

    return false;
}

function addToCart(){
    
    if(checkAddToCartValidity()) {
        $.ajax({
            type:"POST",
            url: 'https://eliaspa.com.br/carrinho/adicionar-ao-carrinho',
            data: $('#wizard').serializeArray(),
            success: function(data){
                $('#new_view').html(data.new_view);
                $('#checkout_details_payment_info').html(data.checkout_type);
                AIZ.extra.plusMinus();
                AIZ.plugins.slickCarousel();
                updateNavCart(data.nav_cart_view,data.cart_count);
            }
        });

        if ("0" == 1){
            fbq('track', 'AddToCart', {content_type: 'product'});
        }
    }
    else{
        AIZ.plugins.notify('warning', "Por favor escolha todas as opções");
    }
}

function addToCartCombo(productId){
    
    if(checkAddToCartValidity()) {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
            type:"POST",
            url: 'https://eliaspa.com.br/carrinho/adicionar-ao-carrinho-combo',
            data: $('#option-choice-form-combo-'+productId).serialize(),
            success: function(data){
               AIZ.extra.plusMinus();
               AIZ.plugins.slickCarousel();
               updateNavCart(data.nav_cart_view,data.cart_count);
                AIZ.plugins.notify('success', "Experiência adicionada com sucesso");
            }
        });

        if ("0" == 1){
            // Facebook Pixel AddToCart Event
            fbq('track', 'AddToCart', {content_type: 'product'});
            // Facebook Pixel AddToCart Event
        }
    }
    else{
        AIZ.plugins.notify('warning', "Por favor escolha todas as opções");
    }
}

function buyNow(){
    
    if(checkAddToCartValidity()) {
        $('#addToCart-modal-body').html(null);
        $('#addToCart').modal();
        $('.c-preloader').show();
        $.ajax({
            type:"POST",
            url: 'https://eliaspa.com.br/carrinho/adicionar-ao-carrinho',
            data: $('#wizard').serializeArray(),
            success: function(data){
                if(data.status == 1){
                    $('#addToCart-modal-body').html(data.modal_view);
                    updateNavCart(data.nav_cart_view,data.cart_count);
                    window.location.replace("https://eliaspa.com.br/carrinho");
                }
                else{
                    $('#addToCart-modal-body').html(null);
                    $('.c-preloader').hide();
                    $('#modal-size').removeClass('modal-lg');
                    $('#addToCart-modal-body').html(data.modal_view);
                }
            }
       });
    }
    else{
        AIZ.plugins.notify('warning', "Por favor escolha todas as opções");
    }
}

function bid_single_modal(bid_product_id, min_bid_amount){
    $('#login_modal').modal('show');
}

function clickToSlide(btn,id){
    $('#'+id+' .aiz-carousel').find('.'+btn).trigger('click');
    $('#'+id+' .slide-arrow').removeClass('link-disable');
    var arrow = btn=='slick-prev' ? 'arrow-prev' : 'arrow-next';
    if ($('#'+id+' .aiz-carousel').find('.'+btn).hasClass('slick-disabled')) {
        $('#'+id).find('.'+arrow).addClass('link-disable');
    }
}

function goToView(params) {
    document.getElementById(params).scrollIntoView({behavior: "smooth", block: "center"});
}

function copyCouponCode(code){
    navigator.clipboard.writeText(code);
    AIZ.plugins.notify('success', "Código de cupom copiado");
}

$(document).ready(function(){
    $('.cart-animate').animate({margin : 0}, "slow");

    $({deg: 0}).animate({deg: 360}, {
        duration: 2000,
        step: function(now) {
            $('.cart-rotate').css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });

    setTimeout(function(){
        $('.cart-ok').css({ fill: '#d43533' });
    }, 2000);

});

function nonLinkableNotificationRead(){
    $.get('https://eliaspa.com.br/notificacao-nao-linkavel/lida',function(data){
        $('.unread-notification-count').html(data);
    });
}

if ($('input[name=country_code]').length > 0){
    // Country Code
    var isPhoneShown = true,
        countryData = window.intlTelInputGlobals.getCountryData(),
        input = document.querySelector("#phone-code");

    for (var i = 0; i < countryData.length; i++) {
        var country = countryData[i];
        if (country.iso2 == 'bd') {
            country.dialCode = '88';
        }
    }

    var iti = intlTelInput(input, {
        separateDialCode: true,
        utilsScript: "https://eliaspa.com.br/public/assets/js/intlTelutils.js?1590403638580",
        onlyCountries: ["BR"],
        customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
            if (selectedCountryData.iso2 == 'bd') {
                return "01xxxxxxxxx";
            }
            return selectedCountryPlaceholder;
        }
    });

    var country = iti.getSelectedCountryData();
    $('input[name=country_code]').val(country.dialCode);

    input.addEventListener("countrychange", function(e) {
        // var currentMask = e.currentTarget.placeholder;
        var country = iti.getSelectedCountryData();
        $('input[name=country_code]').val(country.dialCode);

    });

    function toggleEmailPhone(el) {
        if (isPhoneShown) {
            $('.phone-form-group').addClass('d-none');
            $('.email-form-group').removeClass('d-none');
            $('input[name=phone]').val(null);
            isPhoneShown = false;
            $(el).html('*Use o número de telefone');
        } else {
            $('.phone-form-group').removeClass('d-none');
            $('.email-form-group').addClass('d-none');
            $('input[name=email]').val(null);
            isPhoneShown = true;
            $(el).html('<i>*Use e-mail em vez disso</i>');
        }
    }
}

function removeFromCartView(e, key) {
    e.preventDefault();
    removeFromCart(key);
}

function updateQuantity(key, element) {
    $.post('https://eliaspa.com.br/carrinho/atualizar-quantidade', {
        _token: AIZ.data.csrf,
        id: key,
        quantity: element.value
    }, function(data) {
        updateNavCart(data.nav_cart_view, data.cart_count);
        $('#new_view').html(data.cart_view);
        AIZ.extra.plusMinus();
    });
}

// Cart item selection
$(document).on("change", ".check-all", function() {
    $('.check-one:checkbox').prop('checked', this.checked);
    updateCartStatus();
});
$(document).on("change", ".check-seller", function() {
    var value = this.value;
    $('.check-one-'+value+':checkbox').prop('checked', this.checked);
    updateCartStatus();
});
$(document).on("change", ".check-one[name='id[]']", function(e) {
    e.preventDefault();
    updateCartStatus();
});
function updateCartStatus() {
    $('.aiz-refresh').addClass('active');
    let product_id = [];
    $(".check-one[name='id[]']:checked").each(function() {
        product_id.push($(this).val());
    });

    $.post('https://eliaspa.com.br/carrinho/atualizar-status-do-carrinho', {
        _token: AIZ.data.csrf,
        product_id: product_id
    }, function(data) {
        $('#new_view').html(data);
        AIZ.extra.plusMinus();
        $('.aiz-refresh').removeClass('active');
    });
}

// coupon apply
$(document).on("click", "#coupon-apply", function() {
    $('#login_modal').modal('show');
});

// coupon remove
$(document).on("click", "#coupon-remove", function() {
});

var acc = document.getElementsByClassName("aiz-accordion-heading");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
}
function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var geocoder = new google.maps.Geocoder();
    var latlng = { lat: lat, lng: lng };
    geocoder.geocode({ location: latlng }, function(results, status) {
        if (status === 'OK') {
            if (results[0]) {
                var address_components = results[0].address_components;
                var city = null;
                for (var i = 0; i < address_components.length; i++) {
                    var types = address_components[i].types;
                    if (types.includes("locality") || types.includes("administrative_area_level_2")) {
                        city = address_components[i].long_name;
                        break;
                    }
                }
                if (city) {
                    document.getElementById('endereco').textContent = city;
                    document.getElementById('endereco2').textContent = city;
                    fetch('https://eliaspa.com.br/salvar-localizacao', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': 'YPTvty0xPvZxgxESxFfxa34gOQeL0mbx9uKMyHKY'
                        },
                        body: JSON.stringify({
                            latitude: lat,
                            longitude: lng,
                            city: city
                        })
                    })
                    .then(response => response.json())
                    .then(data => {
                    })
                    .catch(error => console.error('Error:', error));
                }
            }
        }
    });
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            /* AIZ.plugins.notify('danger', 'É necessário permitir a localização');*/
            break; 
        case error.POSITION_UNAVAILABLE:
            /* AIZ.plugins.notify('danger', 'As informações de localização não estão disponíveis.');*/
            break; 
        case error.TIMEOUT:
            AIZ.plugins.notify('danger', 'A solicitação para obter a localização do usuário expirou.');
            break;
        case error.UNKNOWN_ERROR:
            AIZ.plugins.notify('danger', 'Ocorreu um erro desconhecido.');
            break;
    }
}
getLocation();

function showFloatingButtons() {
    document.querySelector('.floating-buttons-section').classList.toggle('show');
}
function modaloc() {
    document.getElementById('d-Locate').classList.toggle("d-none");
}
function sim() {
    document.getElementById('d-Locate').classList.toggle("d-none");
}

default_longitude = -47.89310574531555;
default_latitude = -15.798231005191505;
var lat = -33.8688;
var lng = 151.2195;
const unidades = [{"delivery_pickup_longitude":-47.874725341796875,"delivery_pickup_latitude":-15.818742752075195,"slug":"pier-21","user":null},{"delivery_pickup_longitude":-47.93356704711914,"delivery_pickup_latitude":-15.807405471801758,"slug":"sudoeste","user":null},{"delivery_pickup_longitude":-47.88740539550781,"delivery_pickup_latitude":-15.71940803527832,"slug":"lago-norte","user":null},{"delivery_pickup_longitude":-47.95354461669922,"delivery_pickup_latitude":-15.826972961425781,"slug":"casa-park","user":null},{"delivery_pickup_longitude":-46.85371017456055,"delivery_pickup_latitude":-23.49921989440918,"slug":"alphaville","user":null},{"delivery_pickup_longitude":-34.83766555786133,"delivery_pickup_latitude":-7.096978187561035,"slug":"liv-mall","user":null},{"delivery_pickup_longitude":-48.03938293457031,"delivery_pickup_latitude":-15.83322811126709,"slug":"df-plaza","user":null},{"delivery_pickup_longitude":-48.318992614746094,"delivery_pickup_latitude":-10.181368827819824,"slug":"palmas-casa-bella-mall","user":null},{"delivery_pickup_longitude":-46.675926208496094,"delivery_pickup_latitude":-23.589982986450195,"slug":"itaim","user":null},{"delivery_pickup_longitude":-46.89199447631836,"delivery_pickup_latitude":-23.185455322265625,"slug":"jundiaí","user":null},{"delivery_pickup_longitude":-34.82530975341797,"delivery_pickup_latitude":-7.1304612159729,"slug":"altiplano","user":null},{"delivery_pickup_longitude":-48.337303161621094,"delivery_pickup_latitude":-10.196754455566406,"slug":"palmas-orla-14","user":null},{"delivery_pickup_longitude":-81.47405242919922,"delivery_pickup_latitude":28.49384117126465,"slug":"orlando","user":null},{"delivery_pickup_longitude":-48.17571258544922,"delivery_pickup_latitude":-21.7620792388916,"slug":"araraquara-sp","user":null},{"delivery_pickup_longitude":null,"delivery_pickup_latitude":null,"slug":"2024susanacow","user":null}];
// Functio click: Modal de localização automática
const submit_cnt = document.getElementById('submit_cnt');
if (submit_cnt) {
    submit_cnt.addEventListener('click', function() {

        const userLocation = null;
        if (userLocation && userLocation.latitude && userLocation.longitude) {
            lat = userLocation.latitude;
            lng = userLocation.longitude;
        }

        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': csrfToken
            }
        });
        $.ajax({
            type:"POST",
            url: 'https://eliaspa.com.br/getlocation',
            data: {latitude: lat, longitude: lng},
            success: function(data){
                if (data.status === 'success') {
                    window.location.href = '/unidade/' + data.shop_slug;
                } else {
                    console.log('Erro:', data.message);
                }
            },
            error: function(xhr, status, error) {
                // Manipule o erro aqui
                console.error('Erro na solicitação AJAX:', error);
            }
        });
    });
}
// Fim


// Mexendo
function initializeAutocomplete() {
    var input = document.getElementById('searchInput');
    if (!input) return;
    
    var autocomplete = new google.maps.places.Autocomplete(input);

    var infowindow = new google.maps.InfoWindow();

    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        var place = autocomplete.getPlace();
        var address = place.formatted_address;
        lat = place.geometry.location.lat();
        lng = place.geometry.location.lng();
        document.getElementById('latitude').value = lat;
        document.getElementById('longitude').value = lng;
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.setPosition(place.geometry.location);
    });

    const btnBuscar = document.getElementById('btnBuscar');
    if (btnBuscar) {
        btnBuscar.addEventListener('click', function() {
            if(document.getElementById('searchInput').value === '') {
                console.log("É nescessario informar a Cidade, para localizar a elia mais proxima");
            } else {
                const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': csrfToken
                    }
                });
                $.ajax({
                    type:"POST",
                    url: 'https://eliaspa.com.br/getlocation',
                    data: {latitude: lat, longitude: lng},
                    success: function(data){
                        if (data.status === 'success') {
                            window.location.href = '/unidade/' + data.shop_slug;
                        } else {
                            console.log('Erro:', data.message);
                        }
                    },
                    error: function(xhr, status, error) {
                        // Manipule o erro aqui
                        console.error('Erro na solicitação AJAX:', error);
                    }
                });
            }
        });
    }


    let shop = null;
    let shopTelefone =null
    if(shop) {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': csrfToken
            }
        });
        $.ajax({
            type:"POST",
            url: 'https://eliaspa.com.br/getlocation',
            success: function(data){
                if (data.status === 'success') {
                    let endereco3 = document.getElementById('endereco3');
                    if(endereco3){
                        endereco3.innerHTML = "";
                        endereco3.innerHTML = shop;
                    }
                    let telefone3 = document.getElementById('telefone3');
                    if(telefone3){
                        telefone3.innerHTML = "";
                        telefone3.innerHTML = shopTelefone;
                    }
                } else {
                    console.log('Erro:', data.message);
                }
            },
            error: function(xhr, status, error) {
                // Manipule o erro aqui
                console.error('Erro na solicitação AJAX:', error);
            }
        });
    }
}
// Mexendo

// Loading Screen Fade Out
function hideLoader() {
    const loaderWrap = document.getElementById('loader-wrap');
    if (loaderWrap && !loaderWrap.classList.contains('fade-out')) {
        loaderWrap.classList.add('fade-out');
        setTimeout(function() {
            if (loaderWrap) {
                loaderWrap.style.display = 'none';
            }
            // Mostrar conteúdo após loader desaparecer
            const hiddenElements = document.querySelectorAll('.hidden-content');
            hiddenElements.forEach(function(el) {
                el.classList.remove('hidden-content');
            });
        }, 800); // Tempo da transição CSS
    }
}

// Mostrar conteúdo imediatamente (sem esperar loader)
function showContent() {
    const hiddenElements = document.querySelectorAll('.hidden-content');
    hiddenElements.forEach(function(el) {
        el.classList.remove('hidden-content');
    });
}

// Mostrar conteúdo assim que o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showContent);
} else {
    showContent();
}

// Aguardar carregamento completo da página para esconder loader
if (document.readyState === 'complete') {
    setTimeout(hideLoader, 800);
} else {
    window.addEventListener('load', function() {
        setTimeout(hideLoader, 800);
    });
}

// Fallback: esconder após um tempo máximo (caso algo não carregue)
setTimeout(hideLoader, 2000);

// Menu Hambúrguer Mobile - Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navHolder = document.querySelector('.nav-holder');
    const menuOverlay = document.getElementById('menu-overlay');
    
    if (menuToggle && navHolder) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navHolder.classList.toggle('menu-open');
            if (menuOverlay) {
                menuOverlay.classList.toggle('active');
            }
        });
        
        if (menuOverlay) {
            menuOverlay.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navHolder.classList.remove('menu-open');
                menuOverlay.classList.remove('active');
            });
        }
        
        // Fechar menu ao clicar em link
        const navLinks = navHolder.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 991) {
                    menuToggle.classList.remove('active');
                    navHolder.classList.remove('menu-open');
                    if (menuOverlay) {
                        menuOverlay.classList.remove('active');
                    }
                }
            });
        });
    }
    
    // Menu fixo no scroll
    const mainHeader = document.querySelector('.main-header');
    const navHolderWrap = document.querySelector('.nav-holder-wrap.init-fix-header');
    
    if (mainHeader && navHolderWrap) {
        let lastScroll = 0;
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // Carousel de Procedimentos
    function initProcedimentosCarousel() {
        const procedimentosCarousel = document.querySelector('.procedimentos-carousel');
        const procedimentosPrev = document.querySelector('.procedimentos-carousel-prev');
        const procedimentosNext = document.querySelector('.procedimentos-carousel-next');

        if (!procedimentosCarousel || !procedimentosPrev || !procedimentosNext) {
            console.log('Elementos do carrossel não encontrados:', {
                carousel: !!procedimentosCarousel,
                prev: !!procedimentosPrev,
                next: !!procedimentosNext
            });
            return;
        }

        console.log('Carrossel inicializado com sucesso');
        
        let currentIndex = 0;
        const cards = procedimentosCarousel.querySelectorAll('.procedimento-card');
        const totalCards = cards.length;
        
        function getCardsPerView() {
            const container = document.querySelector('.procedimentos-carousel-container');
            if (!container) return 3;

            const containerWidth = container.offsetWidth;
            const cardWidth = 350; // Largura fixa do card
            const gap = 30; // Gap entre cards

            // Calcular quantos cards cabem (entre 3 e 5)
            const possibleCards = Math.floor((containerWidth + gap) / (cardWidth + gap));

            // Limitar entre 3 e 5 cards em telas grandes, 2 em médias, 1 em pequenas
            if (window.innerWidth <= 768) return 1;
            if (window.innerWidth <= 1200) return Math.min(2, possibleCards);
            return Math.min(5, Math.max(3, possibleCards));
        }
        
        const container = document.querySelector('.procedimentos-carousel-container');
        
        function updateCarousel() {
            const cardsPerView = getCardsPerView();
            const maxIndex = Math.max(0, totalCards - cardsPerView);

            if (cards.length === 0) return;

            const firstCard = cards[0];
            const cardWidth = firstCard.offsetWidth || firstCard.getBoundingClientRect().width;
            const gap = 30;
            const translateX = -(currentIndex * (cardWidth + gap));

            // Aplicar transform no carousel
            procedimentosCarousel.style.transform = `translateX(${translateX}px)`;
            
            // Sincronizar scroll do container (sem triggerar evento scroll)
            if (container) {
                isScrolling = true;
                container.scrollLeft = Math.abs(translateX);
                setTimeout(() => {
                    isScrolling = false;
                }, 100);
            }
            
            // Atualizar estado das setas
            if (currentIndex === 0) {
                procedimentosPrev.style.opacity = '0.5';
                procedimentosPrev.style.pointerEvents = 'none';
            } else {
                procedimentosPrev.style.opacity = '1';
                procedimentosPrev.style.pointerEvents = 'auto';
            }
            
            if (currentIndex >= maxIndex) {
                procedimentosNext.style.opacity = '0.5';
                procedimentosNext.style.pointerEvents = 'none';
            } else {
                procedimentosNext.style.opacity = '1';
                procedimentosNext.style.pointerEvents = 'auto';
            }
        }
        
        // Adicionar funcionalidade de scroll horizontal
        let isScrolling = false;
        if (container) {
            container.addEventListener('scroll', function() {
                if (isScrolling) return; // Evitar loop durante atualização programática
                
                const scrollLeft = container.scrollLeft;
                const firstCard = cards[0];
                const cardWidth = firstCard.offsetWidth || firstCard.getBoundingClientRect().width;
                const gap = 30;
                const newIndex = Math.round(scrollLeft / (cardWidth + gap));
                
                if (newIndex !== currentIndex && newIndex >= 0 && newIndex <= totalCards - 1) {
                    currentIndex = newIndex;
                    updateCarousel();
                }
            });
        }

        procedimentosPrev.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        procedimentosNext.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const cardsPerView = getCardsPerView();
            const maxIndex = Math.max(0, totalCards - cardsPerView);
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        });
        
        // Atualizar no resize
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                const cardsPerView = getCardsPerView();
                const maxIndex = Math.max(0, totalCards - cardsPerView);
                if (currentIndex > maxIndex) {
                    currentIndex = maxIndex;
                }
                updateCarousel();
            }, 250);
        });
        
        // Inicializar após um pequeno delay para garantir que os elementos estão renderizados
        setTimeout(function() {
            updateCarousel();
        }, 100);
    }
    
    // Inicializar carousel quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProcedimentosCarousel);
    } else {
        initProcedimentosCarousel();
    }
    
    // Também tentar inicializar após um delay adicional para garantir
    setTimeout(initProcedimentosCarousel, 500);
    
    // Criar estrelas nos depoimentos
    const starRatings = document.querySelectorAll('.star-rating[data-starrating]');
    starRatings.forEach(function(rating) {
        const ratingValue = parseInt(rating.getAttribute('data-starrating')) || 5;
        rating.innerHTML = ''; // Limpar conteúdo existente
        
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('i');
            star.className = 'fas fa-star';
            star.style.color = '#BDAB83';
            star.style.fontSize = '18px';
            star.style.margin = '0 2px';
            rating.appendChild(star);
        }
    });
});

