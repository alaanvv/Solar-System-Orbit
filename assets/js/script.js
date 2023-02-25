let planetScale = 0.8
let orbitScale = 0.3
let orbitSpeed = 1

solarSystem = [
    { 
        name: 'MERCURY',

        dom: document.querySelector('.mercury div'), 
        size: 0.05 * planetScale,
        radius: 0.05 * planetScale / 2,
        color: '#969399',
        
        orbit: document.querySelector('.mercury.planet-orbit'), 
        orbitSize: 2 * orbitScale,
        orbitRadius: 2 * orbitScale / 2,
        orbitDuration: () => !orbitSpeed ? 0 : 2 / orbitSpeed, 
        orbitReverse: false 
    }, 
    { 
        name: 'VENUS',

        dom: document.querySelector('.venus div'), 
        size: 0.1 * planetScale,
        radius: 0.1 * planetScale / 2,
        color: '#934B11',
        
        orbit: document.querySelector('.venus.planet-orbit'), 
        orbitSize: 3.5 * orbitScale,
        orbitRadius: 3.5 * orbitScale / 2,
        orbitDuration: () => !orbitSpeed ? 0 : 7 / orbitSpeed, 
        orbitReverse: true 
    },
    {
        name: 'EARTH',

        dom: document.querySelector('.earth div'), 
        size: 0.09 * planetScale,
        radius: 0.09 * planetScale / 2,
        color: '#536440',
        
        orbit: document.querySelector('.earth.planet-orbit'), 
        orbitSize: 5.5 * orbitScale,
        orbitRadius: 5.5 * orbitScale / 2,
        orbitDuration: () => !orbitSpeed ? 0 : 10 / orbitSpeed, 
        orbitReverse: false 
    },
    {
        name: 'MARS',

        dom: document.querySelector('.mars div'), 
        size: 0.07 * planetScale,
        radius: 0.07 * planetScale / 2,
        color: '#EE8166',
        
        orbit: document.querySelector('.mars.planet-orbit'), 
        orbitSize: 7.5 * orbitScale,
        orbitRadius: 7.5 * orbitScale / 2,
        orbitDuration: () => !orbitSpeed ? 0 : 19 / orbitSpeed, 
        orbitReverse: false 
    },
    {
        name: 'JUPITER',

        dom: document.querySelector('.jupiter div'), 
        size: 0.45 * planetScale,
        radius: 0.45 * planetScale / 2,
        color: '#CFB799',
        
        orbit: document.querySelector('.jupiter.planet-orbit'), 
        orbitSize: 14 * orbitScale,
        orbitRadius: 14 * orbitScale / 2,
        orbitDuration: () => !orbitSpeed ? 0 : 119 / orbitSpeed, 
        orbitReverse: false 
    },
    {
        name: 'SATURN',

        dom: document.querySelector('.saturn div'), 
        size: 0.3 * planetScale,
        radius: 0.3 * planetScale / 2,
        color: '#AF966E',
        
        orbit: document.querySelector('.saturn.planet-orbit'), 
        orbitSize: 18 * orbitScale,
        orbitRadius: 18 * orbitScale / 2,
        orbitDuration: () => !orbitSpeed ? 0 : 295 / orbitSpeed, 
        orbitReverse: false 
    },
    {
        name: 'URANUS',

        dom: document.querySelector('.uranus div'), 
        size: 0.253 * planetScale,
        radius: 0.253 * planetScale / 2,
        color: '#4899AC',
        
        orbit: document.querySelector('.uranus.planet-orbit'), 
        orbitSize: 21.5 * orbitScale,
        orbitRadius: 21.5 * orbitScale / 2,
        orbitDuration: () => !orbitSpeed ? 0 : 840 / orbitSpeed, 
        orbitReverse: true 
    },
    {
        name: 'NEPTUNE',

        dom: document.querySelector('.neptune div'), 
        size: 0.25 * planetScale,
        radius: 0.25 * planetScale / 2,
        color: '#4772FF',
        
        orbit: document.querySelector('.neptune.planet-orbit'), 
        orbitSize: 33 * orbitScale,
        orbitRadius: 33 * orbitScale / 2,
        orbitDuration: () => !orbitSpeed ? 0 : 1650 / orbitSpeed, 
        orbitReverse: false 
    }
]

for (pData of solarSystem) {
    const { dom, size, radius, color, orbit, orbitSize, orbitRadius, orbitDuration, orbitReverse } = pData

    dom.style.width = `${size}em`
    dom.style.backgroundColor = color
    dom.style.top = `${orbitRadius-radius}em`
    dom.style.left = `${-radius}em`

    orbit.style.width = `${orbitSize}em`
    orbit.style.animationDuration = `${orbitDuration()}s`
    if (orbitReverse) orbit.style.animationDirection = 'reverse'
    orbit.style.top = `${-orbitRadius}em`
    orbit.style.left = `${-orbitRadius}em`
}

function attSpeed(value) {
    orbitSpeed = Number(value)
    
    for (pData of solarSystem) {
        orbit = pData.orbit
        orbitDuration = pData.orbitDuration()

        if (orbitDuration == 0) { 
            orbit.style.animationPlayState = 'paused' 
        }
        else {
            if (orbit.style.animationPlayState == 'paused') { orbit.style.animationPlayState = 'running' }
            orbit.style.animationDuration = `${orbitDuration}s`
        }
    }
}