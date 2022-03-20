import { useState, useEffect } from "react";
const wallpapers = [
    'https://images.hdqwalls.com/download/doctor-strange-in-the-multiverse-of-madness-wanda-vision-5k-0o-2880x1800.jpg',
    'https://images.hdqwalls.com/download/2022-the-batman-movie-4k-g4-2880x1800.jpg',
    'https://images.hdqwalls.com/download/jack-sparrow-5k-2v-2880x1800.jpg',
    'https://images.hdqwalls.com/download/the-matrix-resurrections-10k-2r-2880x1800.jpg',
    'https://images.hdqwalls.com/download/batman-and-catwoman-in-the-batman-movie-2022-84-2880x1800.jpg',
    'https://images.hdqwalls.com/download/eternals-marvel-poster-l6-2880x1800.jpg',
    'https://images.hdqwalls.com/download/doctor-strange-in-the-multiverse-of-madness-10k-sx-2880x1800.jpg',
    'https://images.hdqwalls.com/download/cable-deadpool-al-2880x1800.jpg',
    'https://images.hdqwalls.com/download/2022-morbius-b0-2880x1800.jpg',
    'https://images.hdqwalls.com/download/2022-the-matrix-resurrections-10k-xe-2880x1800.jpg',
    'https://images.hdqwalls.com/download/light-year-2022-m8-2880x1800.jpg',
    'https://images.hdqwalls.com/download/spider-man-no-way-home-tom-holland-suit-3a-2880x1800.jpg',
    'https://images.hdqwalls.com/download/uncharted-2022-fa-2880x1800.jpg',
    'https://images.hdqwalls.com/download/andrewgarfield-spiderman-no-way-home-1b-2880x1800.jpg',
    'https://images.hdqwalls.com/download/morbius-nd-2880x1800.jpg',
    'https://images.hdqwalls.com/download/ant-man-and-the-wasp-quantumania-83-2880x1800.jpg',
    'https://images.hdqwalls.com/download/uncharted-2022-4k-ea-2880x1800.jpg',
    'https://images.hdqwalls.com/download/tom-holland-spider-man-no-way-home-4k-fk-2880x1800.jpg',
    'https://images.hdqwalls.com/download/eternals-2021-ce-2880x1800.jpg',
    'https://images.hdqwalls.com/download/arcane-a-jinx-5k-wu-2880x1800.jpg',
    'https://images.hdqwalls.com/download/black-panther-2022-4k-hk-2880x1800.jpg',
    'https://images.hdqwalls.com/download/2021-dune-movie-5k-50-2880x1800.jpg',
    'https://images.hdqwalls.com/download/the-lost-city-2022-s4-2880x1800.jpg'
]
function Sidebar() {
    const [banner, setBanner] = useState('/assets/wall-1.jpg');

    useEffect(() => {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * wallpapers.length);
            setBanner(wallpapers[randomNumber])
        }, 10000)
    }, [banner])

    return (
        <header className="header">
            <div id="bg-banner" style={{
                background: `linear-gradient(rgba(23,8,42,.4),rgba(23,8,42,1)), center top / cover no-repeat url("${banner}")`,
            }} type="default"></div>
            <h1><a href="/">Movie App</a></h1>
        </header>
    );
}

export default Sidebar;