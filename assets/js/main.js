$(document).ready(() => {
    const owlRenamedCarousel = $('#carousel-renamed > .owl-carousel');
    owlRenamedCarousel.owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        slideBy: 3,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    $('#carousel-renamed .section-carousel__nav-next').click(() => {
        owlRenamedCarousel.trigger('next.owl.carousel');
    });

    $('#carousel-renamed .section-carousel__nav-prev').click(() => {
        owlRenamedCarousel.trigger('prev.owl.carousel');
    });

    const owlIntendCarousel = $('#carousel-intend > .owl-carousel');
    owlIntendCarousel.owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        slideBy: 3,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    const mobileButton = document.getElementById("mobileNav");
    const mobileInput = document.getElementById("checkbox4");
    const mobileNav = document.getElementsByClassName("section-header__nav")[0];
    const links = document.getElementsByClassName("section-header__nav-item");
    const renameButton = document.getElementsByClassName("section-hero__cta")[0];
    const readMore = document.getElementsByClassName("section-intro__buton")[0];
    const introSection = document.getElementsByClassName("section-intro__text")[0];
    const readCountries = document.getElementsByClassName("section-countries__button")[0];
    const countriesBlock = document.getElementsByClassName("section-countries")[0];
    const countriesItems = document.getElementsByClassName("section-countries__items")[0];
    //const countryNames = document.getElementsByClassName("section-countries__item")
    const arrayData = []
    const indent = document.getElementById("indent")
    let flagState1 = false;
    let flagState2 = false;

    const countries = [
        {
            country: 'Australia',
            cities: [
                {
                    city: 'Griffith',
                    link: 'https://chng.it/f8MpSGJb'
                },
                {
                    city: 'Sydney',
                    link: 'https://chng.it/Bfw2snqk'
                }
            ]
        },
        {
            country: 'Belgium',
            cities: [
                {
                    city: 'Antwerpen',
                    link: 'https://www.change.org/p/rename-jan-van-rijswijcklaan-in-antwerp-to-ukrainian-heroes-street'
                },
                {
                    city: 'Antwerpen',
                    link: 'https://www.change.org/p/antwerp-mayor-s-court-rename-della-faillelaan-street-home-of-belgium-s-russian-consulate-to-ukraine-street'
                },
                {
                    city: 'Brussels',
                    link: 'https://www.change.org/p/rename-emile-de-motlaan-home-of-russian-visa-center-in-brussels-to-ukraine-street'
                },
                {
                    city: 'Uccle',
                    link: 'https://www.change.org/p/rename-part-of-avenue-de-fr%C3%A9-home-of-the-russian-embassy-in-uccle-to-ukraine-street'
                }
            ]
        },
        {
            country: 'Bulgaria',
            cities: [
                {
                    city: 'Varna',
                    link: 'https://chng.it/8yRGnvcJ8L'
                },
                {
                    city: 'Ruse',
                    link: 'https://chng.it/HHjFWLHcNQ'
                },
                {
                    city: 'Sofia',
                    link: 'https://chng.it/vPsWyBnt2t'
                },
                {
                    city: 'Sofia',
                    link: 'https://chng.it/FtSBBJkSGV'
                }
            ]
        },
        {
            country: 'Canada',
            cities: [
                {
                    city: 'Montreal',
                    link: 'https://www.change.org/p/demonstrate-solidarity-with-the-people-of-ukraine-by-renaming-avenue-du-mus%C3%A9e-home-of-canada-s-russian-consulate-in-montr%C3%A9al-to-ukraine-street'
                },
                {
                    city: 'Ottawa',
                    link: 'https://www.change.org/p/rename-charlotte-street-home-of-canada-s-russian-embassy-in-ottawa-to-ukraine-street'
                }
            ]
        },
        {
            country: 'Croatia',
            cities: [
                {
                    city: 'Zagreb',
                    link: 'https://chng.it/WYzNFXKp'
                }
            ]
        },
        {
            country: 'Estonia',
            cities: [
                {
                    city: 'Tallinn',
                    link: 'https://chng.it/b6rvHtJ29g'
                }
            ]
        },
        {
            country: 'Finland',
            cities: [
                {
                    city: 'Helsinki',
                    link: 'https://chng.it/4qpsbPn8'
                }
            ]
        },
        {
            country: 'France',
            cities: [
                {
                    city: 'Lyon',
                    link: 'https://www.change.org/p/renommer-la-rue-sergent-michel-berthet-%C3%A0-lyon-en-rue-d-ukraine'
                },
                {
                    city: 'Marseille',
                    link: 'https://www.change.org/p/renommer-la-rue-ambroise-par%C3%A9-si%C3%A8ge-du-consulat-russe-%C3%A0-marseille-en-rue-d-ukraine'
                },
                {
                    city: 'Paris',
                    link: 'https://www.change.org/p/renommer-le-boulevard-lannes-si%C3%A8ge-de-l-ambassade-de-russie-de-france-en-rue-d-ukraine'
                },
                {
                    city: 'Strasbourg',
                    link: 'https://www.change.org/p/renommer-la-rue-s%C3%A9bastien-brant-si%C3%A8ge-du-consulat-russe-de-france-en-rue-d-ukraine'
                }
            ]
        },
        {
            country: 'Germany',
            cities: [
                {
                    city: 'Bonn',
                    link: 'https://chng.it/gLPK6hZsv4'
                },
                {
                    city: 'Frankfurt',
                    link: 'https://chng.it/xJszDkLMzZ'
                },
                {
                    city: 'Hamburg',
                    link: 'https://chng.it/5gj5R5vL'
                }
            ]
        },
        {
            country: 'Greece',
            cities: [
                {
                    city: 'Athens',
                    link: 'https://chng.it/G29m2m85'
                }
            ]
        },
        {
            country: 'Hungary',
            cities: [
                {
                    city: 'Budapest',
                    link: 'https://chng.it/FMC4gZJvhc'
                }
            ]
        },
        {
            country: 'Ireland',
            cities: [
                {
                    city: 'Dublin',
                    link: 'https://my.uplift.ie/petitions/rename-part-of-the-orwell-road-home-of-ireland-s-russian-embassy-to-ukraine-street'
                }
            ]
        },
        {
            country: 'Italy',
            cities: [
                {
                    city: 'Genova',
                    link: 'https://chng.it/RzRbdMDg'
                },
                {
                    city: 'Rome',
                    link: 'https://chng.it/jGC2XTch'
                },
                {
                    city: 'Rome',
                    link: 'https://chng.it/ctgHHHjH'
                }
            ]
        },
        {
            country: 'Malta',
            cities: [
                {
                    city: 'San Gwann',
                    link: 'https://www.change.org/p/rename-the-street-of-the-russian-embassy-in-malta-to-ukraine-street'
                }
            ]
        },
        {
            country: 'Moldova',
            cities: [
                {
                    city: 'Chișinău',
                    link: 'https://chng.it/ZgS6ZqLK'
                }
            ]
        },
        {
            country: 'Montenegro',
            cities: [
                {
                    city: 'Podgorica',
                    link: 'https://chng.it/mzCnwKY2'
                }
            ]
        },
        {
            country: 'New Zealand',
            cities: [
                {
                    city: 'Wellington',
                    link: 'https://www.petitions.nz/demonstrate_solidarity_with_the_people_of_ukraine_by_renaming_messines_road__home_of_new_zealands_russian_embassy__to_ukraine_road'
                }
            ]
        },
        {
            country: 'Poland',
            cities: [
                {
                    city: 'Warsaw',
                    link: 'https://www.petycjeonline.com/zmie_nazw_ulicy_belwederskiej_przy_ktorej_mieci_si_ambasada_i_wydzia_konsularny_federacji_rosyjskiej_w_warszawie_na_ulic_ukrain'
                }
            ]
        },
        {
            country: 'Portugal',
            cities: [
                {
                    city: 'Lisboa',
                    link: 'https://chng.it/QNsPkd5m'
                }
            ]
        },
        {
            country: 'Romania',
            cities: [
                {
                    city: 'Bucharest',
                    link: 'https://chng.it/CRZGkC46kF'
                }
            ]
        },
        {
            country: 'Slovakia',
            cities: [
                {
                    city: 'Bratislava',
                    link: 'https://chng.it/HYfKQFf7'
                },
                {
                    city: 'Bratislava',
                    link: 'https://chng.it/swnDSGxk'
                }
            ]
        },
        {
            country: 'Spain',
            cities: [
                {
                    city: 'Barcelona',
                    link: 'https://chng.it/FfzxNxXN'
                },
                {
                    city: 'Madrid',
                    link: 'https://chng.it/4Vv6Q7Pq'
                },
                {
                    city: 'Madrid',
                    link: 'https://chng.it/FCxhh7wb'
                }
            ]
        },
        {
            country: 'Sweden',
            cities: [
                {
                    city: 'Stockholm',
                    link: 'https://chng.it/M9PCykXRkg'
                }
            ]
        },
        {
            country: 'Switzerland',
            cities: [
                {
                    city: 'Bern',
                    link: 'https://chng.it/w5svBVZjGt'
                }
            ]
        },
        {
            country: 'Turkey',
            cities: [
                {
                    city: 'Ankara',
                    link: 'https://chng.it/BfP47yJHz7'
                }
            ]
        },
        {
            country: 'UK',
            cities: [
                {
                    city: 'London',
                    link: 'https://www.change.org/p/rename-part-of-the-kensington-palace-gardens-to-ukraine-street'
                }
            ]
        },
        {
            country: 'USA',
            cities: [
                {
                    city: 'Huntington Beach',
                    link: 'https://www.ipetitions.com/petition/ukraine-street-in-huntington-beach-3'
                },
                {
                    city: 'New York',
                    link: 'https://www.ipetitions.com/petition/rename-91st-street-in-new-york-to-ukraine-street'
                },
                {
                    city: 'San Francisco',
                    link: 'https://www.ipetitions.com/petition/rename-green-street-in-san-francisco-to-ukraine-2'
                },
                {
                    city: 'Washington DC (Embassy)',
                    link: 'https://www.ipetitions.com/petition/ukraine-streets-all-over-the-world'
                },
                {
                    city: 'Washington DC (Consulate)',
                    link: 'https://www.ipetitions.com/petition/rename-tunlaw-road-in-washington-dc-to-ukraine'
                },
                {
                    city: 'Houston',
                    link: 'https://www.ipetitions.com/petition/rename-west-loop-south-in-houston-to-ukraine'
                }
            ]
        }
        // {
        //     country: '',
        //     cities: [
        //         {
        //             city: '',
        //             link: ''
        //         }
        //     ]
        // }
    ]

    

    indent.style.marginTop = "50px";
    introSection.style.marginBottom = "25px";

    const handleClick = event => {
        event.preventDefault()  
        const headerOffset = 80
        const contentAnchors = document.querySelectorAll(".anchor")
        const href = event.target.getAttribute("href")
        const elementToScroll = Array.from(contentAnchors).filter(item =>`#${item.getAttribute("id")}` === href) 
        const elementPosition = elementToScroll[0].offsetTop
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: "smooth"
        })
      }
      
      document.querySelectorAll(".section-header__anchor").forEach(item => 
      item.addEventListener("click", handleClick))

    readCountries.addEventListener("click",function () {
        if(!flagState1){
            flagState1 = true;
            countriesBlock.style.maxHeight = "2400px";
            countriesItems.style.maxHeight = "2200px";
            readCountries.innerHTML = "show less";
        }
        else {
            flagState1 = false;
            countriesBlock.style.maxHeight = "400px";
            countriesItems.style.maxHeight = "239px";
            readCountries.innerHTML = "show more";
        }

    })

    readMore.addEventListener('click', function () {
       
        if (!flagState2){
            flagState2 = true;
            introSection.style.marginBottom = "0px"
            introSection.style.maxHeight = "2200px";
            readMore.innerHTML = "read less";
            introSection.style.overflow = "visible"
             indent.style.marginTop = "0px"
        }
        else {
            flagState2 = false;
            introSection.style.marginBottom = "0px"
            introSection.style.maxHeight = null;
            readMore.innerHTML = "read more";
            introSection.style.overflow = "hidden"
             indent.style.marginTop = "50px"
        }

    })

    mobileButton.onclick = function() {
       if (mobileInput.checked) { 
           mobileInput.checked = false;
           mobileNav.classList.remove('section-header__mobilenav');
         }
       else {
            mobileInput.checked = true 
           mobileNav.classList.add('section-header__mobilenav');
        }
    };

   document.querySelectorAll(".section-countries__item").forEach(item=>
        arrayData.push(item.getAttribute("data-country"))
    )




    $('#carousel-intend .section-carousel__nav-next').click(() => {
        owlIntendCarousel.trigger('next.owl.carousel');
    });

    $('#carousel-intend .section-carousel__nav-prev').click(() => {
        owlIntendCarousel.trigger('prev.owl.carousel');
    });

    const modal = document.getElementById("country-modal");
    const span = document.getElementsByClassName("close")[0];
    const modalName = document.querySelector(".country-modal-name")
    const modalCity = document.querySelector(".country-modal__item-title")
    const nodeForCloning = document.querySelector(".country-modal__items")
    let petitionLink = document.querySelector(".country-modal__item")
     let fragment = new DocumentFragment();
     let counter = 0

    $('.section-countries__item').on('click', function (e) {
        e.preventDefault();
        let currentCountry = e.currentTarget.getAttribute("data-country")
        modal.style.display = "block"
        
        let nameCountry = countries.filter(item => item.country === currentCountry)
        console.log(countries.map(item => item.country));
        modalName.innerHTML = nameCountry[0].country
        for (item of countries) {
            if (item.country === modalName.innerHTML) {
                if (item.cities.length === 1) {
                    modalCity.innerHTML = item.cities[0].city
                    petitionLink.setAttribute("href", `${item.cities[0].link}`)
                }
                else {
                    modalCity.innerHTML = item.cities[0].city
                    petitionLink.setAttribute("href", `${item.cities[0].link}`)
                    counter++
                    for (let i = 1; i < item.cities.length; i++) {
                        let cloneCity = petitionLink.cloneNode(true)
                        fragment.append(cloneCity)
                        cloneCity.querySelector(".country-modal__item-title").innerHTML = item.cities[i].city
                        cloneCity.setAttribute("class", "cloned country-modal__item")
                        cloneCity.setAttribute("href", `${item.cities[i].link}`)
                        counter++
                    }
                    nodeForCloning.appendChild(fragment)
                }
            }
        }

    })

    $(".close").on('click', function () {
        modal.style.display = "none";

        do {
            counter--
            $(nodeForCloning).find(".cloned").remove();
        } while (counter > 2)
    })
    window.onclick = (event) => {
        const arrLinks = []
        for (item of links) {
            arrLinks.push(item.childNodes[1].innerText)
        }
        arrLinks.push(renameButton.innerText)
        if (event.target == modal) {
            modal.style.display = "none";
        }
        for (item of arrLinks) {
            if (event.target.innerText == item) {
                mobileInput.checked = false;
                mobileNav.classList.remove('section-header__mobilenav');
            }
        }

    }

    $('.section-countries__search-input').on('keyup', function (e) {
        const input = this
        const filter = input.value.toUpperCase();
        const countryItems = $('.section-countries__item');

        // Loop through all list items, and hide those who don't match the search query
        for (let i = 0; i < countryItems.length; i++) {
            let countryName = $(countryItems[i]).find('p').text();
            if (countryName.toUpperCase().indexOf(filter) > -1) {
                $(countryItems[i]).show();
            } else {
                $(countryItems[i]).hide();
            }
        }
    });
});