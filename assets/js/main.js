$(document).ready(() => {
    const owlRenamedCarousel = $('#carousel-renamed > .owl-carousel');
    owlRenamedCarousel.owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        lazyLoad: true,
        slideBy: 3,
        responsive: {
            0: {
                items: 1,
                loop:true,
                autoplay:true,
                autoplayHoverPause:true,
                smartSpeed:800
            },
            768: {
                items: 2
            },
            1024: {
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
                items: 1,
                loop:true,
                autoplay:true,
                autoplayHoverPause:true,
                smartSpeed:800
            },
            768: {
                items: 2
            },
            1024: {
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
                    city: 'Uccle (Embassy)',
                    link: 'https://chng.it/Ck9bT84z'
                },
                {
                    city: 'Uccle (Consulate)',
                    link: 'https://chng.it/FYqdXttF'
                },
                {
                    city: 'Antwerpen',
                    link: 'https://chng.it/sWCFT62W'
                },
                {
                    city: 'Brussels',
                    link: 'https://chng.it/y2CnknNK'
                }
            ]
        },
        {
            country: 'Bulgaria',
            cities: [
                {
                    city: 'Varna (consulate)',
                    link: 'https://chng.it/8yRGnvcJ8L'
                },
                {
                    city: 'Ruse (consulate)',
                    link: 'https://chng.it/HHjFWLHcNQ'
                },
                {
                    city: 'Sofia (embassy)',
                    link: 'https://chng.it/vPsWyBnt2t'
                },
                {
                    city: 'Sofia (consulate)',
                    link: 'https://chng.it/FtSBBJkSGV'
                }
            ]
        },
        {
            country: 'Bosnia and Herzegovina',
            cities: [
                {
                    city: 'Sarajevo',
                    link: 'https://chng.it/MjXmCKH6Vd'
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
                    link: 'https://www.change.org/p/rename-a-part-of-charlotte-street-in-ottawa-to-ukraine-street'
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
            country: 'Cyprus',
            cities: [
                {
                    city: 'Nicosia',
                    link: 'https://chng.it/RGxCQ8WG2m'
                }
            ]
        },
        {
            country: 'Denmark',
            cities: [
                {
                    city: 'Copenhagen',
                    link: 'https://www.openpetition.eu/petition/online/skift-navn-af-kristianiagade-hjemsted-for-danmarks-russiske-ambassade-til-ukrainsgade'
                }
            ]
        },
        {
            country: 'Estonia',
            cities: [
                {
                    city: 'Tallinn',
                    link: 'https://kohalik.rahvaalgatus.ee/initiatives/a0bb34aa-e364-48f2-b430-edac05f259c0?language=en#initiative-vote'
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
                    link: 'https://chng.it/L6zChHkH'
                },
                {
                    city: 'Marseille',
                    link: 'https://chng.it/mjSwyGhv'
                },
                {
                    city: 'Paris',
                    link: 'https://chng.it/XqJS9cXh'
                },
                {
                    city: 'Strasbourg',
                    link: 'https://chng.it/csH5DYQR'
                }
            ]
        },
        {
            country: 'Germany',
            cities: [
                {
                    city: 'Berlin (Embassy)',
                    link: 'https://chng.it/mDkPxHWXrV'
                },
                {
                    city: 'Berlin (Consulate)',
                    link: 'https://chng.it/v9qxyMcCTM'
                },
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
                },
                {
                    city: 'Leipzig',
                    link: 'https://chng.it/wNSD4zBjwz'
                },
                {
                    city: 'Munich',
                    link: 'https://www.change.org/p/den-sitz-des-russischen-generalkonsulats-in-m%C3%BCnchen-in-die-ukraine-stra%C3%9Fe-umbenennen?recruiter=982069907&utm_source=share_petition&utm_medium=copylink&utm_campaign=share_petition'
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
            country: 'Iceland',
            cities: [
                {
                    city: 'Reykjavík',
                    link: 'https://www.change.org/p/breyti%C3%B0-heiti-g%C3%B6tunnar-%C3%BEar-sem-sendir%C3%A1%C3%B0-r%C3%BAsslands-stendur-%C3%AD-%C3%BAkra%C3%ADnustr%C3%A6ti'
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
                    city: 'Rome (Embassy)',
                    link: 'https://chng.it/jGC2XTch'
                },
                {
                    city: 'Rome (Consulate)',
                    link: 'https://chng.it/ctgHHHjH'
                }
            ]
        },
        {
            country: 'Luxembourg',
            cities: [
                {
                    city: 'Luxembourg',
                    link: 'https://chng.it/SB78GcjS'
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
            country: 'North Macedonia',
            cities: [
                {
                    city: 'Skopje',
                    link: 'https://chng.it/H6JDGFbX'
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
            country: 'Serbia',
            cities: [
                {
                    city: 'Belgrade',
                    link: 'https://chng.it/pBysxNyP'
                }
            ]
        },
        {
            country: 'Slovakia',
            cities: [
                {
                    city: 'Bratislava (embassy)',
                    link: 'https://chng.it/HYfKQFf7'
                },
                {
                    city: 'Bratislava (consulate)',
                    link: 'https://chng.it/swnDSGxk'
                }
            ]
        },
        {
            country: 'Slovenia',
            cities: [
                {
                    city: 'Ljubljana',
                    link: 'https://chng.it/GPyQY8JPbz'
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
                    city: 'Madrid (embassy)',
                    link: 'https://chng.it/4Vv6Q7Pq'
                },
                {
                    city: 'Madrid (consulate)',
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

    

    indent.style.marginTop = "50px";    //indent helps to hide text at different sizes of phones
    introSection.style.marginBottom = "25px";   //analogically :) i know, it`s dumb

    const handleClick = event => {
        event.preventDefault()  
        const headerOffset = 80
        const contentAnchors = document.querySelectorAll(".anchor")
        const href = event.target.getAttribute("href")
        const dataHref = event.target.getAttribute("data-href")
        const elementToScroll = Array.from(contentAnchors).filter(item =>`#${item.getAttribute("id")}` === href || `#${item.getAttribute("id")}` ===dataHref) 
        const elementPosition = elementToScroll[0].offsetTop
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: "smooth"
        })
      }
      
      document.querySelectorAll(".section-header__anchor").forEach(item => 
      item.addEventListener("click", handleClick)) //it helps to exactly show hashLinks under header (don`t mine)

    readCountries.addEventListener("click",function () {
        if(!flagState1){
            flagState1 = true;
            countriesBlock.style.maxHeight = "3200px";
            countriesItems.style.maxHeight = "3000px";
            readCountries.innerHTML = "show less";
        }
        else {
            flagState1 = false;
            countriesBlock.style.maxHeight = "400px";
            countriesItems.style.maxHeight = "239px";
            readCountries.innerHTML = "show more";
        }

    });

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

    });

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

    $('#carousel-intend .section-carousel__nav-next').click(() => {
        owlIntendCarousel.trigger('next.owl.carousel');
    });

    $('#carousel-intend .section-carousel__nav-prev').click(() => {
        owlIntendCarousel.trigger('prev.owl.carousel');
    });

    const countriItems = document.querySelector(".section-countries__items");
    const countryItem = document.querySelector(".section-countries__item");
    let fragmentCountries = new DocumentFragment()

    countryItem.querySelector("p").innerHTML = countries[0].country
    countryItem.setAttribute("data-country",`${countries[0].country}`)
    countryItem.querySelector("img").setAttribute('src',`images/flags/${countries[0].country.toLocaleLowerCase()}.png`)
    countryItem.querySelector("img").setAttribute('alt',`${countries[0].country.toLocaleLowerCase()}`)

    for (let i=1;i<countries.length; i++) {
        let countryClone = countryItem.cloneNode(true)
        fragmentCountries.append(countryClone)
        countryClone.querySelector("p").innerHTML = countries[i].country
        countryClone.setAttribute("data-country",`${countries[i].country}`)
        countryClone.querySelector("img").setAttribute('src',`images/flags/${countries[i].country.toLocaleLowerCase()}.png`)
        countryClone.querySelector("img").setAttribute('alt',`${countries[i].country.toLocaleLowerCase()}`)
    }

    countriItems.appendChild(fragmentCountries);

    const modal = document.getElementById("country-modal");
    const modalName = document.querySelector(".country-modal-name");
    const modalCity = document.querySelector(".country-modal__item-title");
    const nodeForCloning = document.querySelector(".country-modal__items");
    let petitionLink = document.querySelector(".country-modal__item");
     let fragment = new DocumentFragment();
     let counter = 0

    $('.section-countries__item').on('click', function (e) {
        e.preventDefault();
        let currentCountry = e.currentTarget.getAttribute("data-country")
        modal.style.display = "block"       
        let nameCountry = countries.filter(item => item.country === currentCountry)
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

    }); //rendering cities and href to petitions in modals

    $(".close").on('click', function () {
        modal.style.display = "none";

        while (counter > 1) {
            counter--
            $(nodeForCloning).find(".cloned").remove();
        } 
    }); //removing cities and href to petitions from modals

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

    const articlesCategories = [
        {
            id: 4,
            title: 'RUSSIA-UKRAINE WAR',
        },
        {
            id: 11,
            title: 'Places & Nature',
        },
        {
            id: 8,
            title: 'Tech & Science',
        },
        {
            id: 9,
            title: 'History & Culture',
        }];
    
    articlesCategories.map((category) => {
        fetch('https://www.weareukraine.info/wp-json/wp/v2/posts/?categories=' + category.id + '&per_page=1')
            .then(response => response.json())
            .then(data => {
                data.map((item) => {
                    $('.section-news__items').append(`<a href="${item.link}" target="_blank" class="section-news__item">
                <p>${category.title}</p>
                <img src="${item.yoast_head_json.og_image[0].url}" alt="">
            </a>`)
                });
            })
            .catch(err => console.log(err));
    });
});