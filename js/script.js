sunRadius = document.querySelector('.sun').offsetWidth / 200
planetScale = 0.8
orbitScale  = 0.3
orbitSpeed  = 1

solarSystem = [
    // MERCURY
    { 
        name: 'MERCURY',

        dom: document.querySelector('.mercury div'), 
        size: 0.05 * planetScale,
        radius: 0.05 * planetScale / 2,
        color: '#969399',
        
        orbit: document.querySelector('.mercury.planet-orbit'), 
        orbitSize: 2 * orbitScale,
        orbitRadius: 2 * orbitScale / 2,
        orbitDuration: function() {
            if (orbitSpeed == 0) { return 0 }
            else { return 2 / orbitSpeed }
        }, 
        orbitReverse: false 
    }, 

    // VENUS
    { 
        name: 'VENUS',

        dom: document.querySelector('.venus div'), 
        size: 0.1 * planetScale,
        radius: 0.1 * planetScale / 2,
        color: '#934B11',
        
        orbit: document.querySelector('.venus.planet-orbit'), 
        orbitSize: 3.5 * orbitScale,
        orbitRadius: 3.5 * orbitScale / 2,
        orbitDuration: function() {
            if (orbitSpeed == 0) { return 0 }
            else { return 7 / orbitSpeed }
        }, 
        orbitReverse: true 
    },
    
    // EARTH
    {
        name: 'EARTH',

        dom: document.querySelector('.earth div'), 
        size: 0.09 * planetScale,
        radius: 0.09 * planetScale / 2,
        color: '#536440',
        
        orbit: document.querySelector('.earth.planet-orbit'), 
        orbitSize: 5.5 * orbitScale,
        orbitRadius: 5.5 * orbitScale / 2,
        orbitDuration: function() {
            if (orbitSpeed == 0) { return 0 }
            else { return 10 / orbitSpeed }
        }, 
        orbitReverse: false 
    },
    
    // MARS
    {
        name: 'MARS',

        dom: document.querySelector('.mars div'), 
        size: 0.07 * planetScale,
        radius: 0.07 * planetScale / 2,
        color: '#EE8166',
        
        orbit: document.querySelector('.mars.planet-orbit'), 
        orbitSize: 7.5 * orbitScale,
        orbitRadius: 7.5 * orbitScale / 2,
        orbitDuration: function() {
            if (orbitSpeed == 0) { return 0 }
            else { return 19 / orbitSpeed }
        }, 
        orbitReverse: false 
    },
    
    // JUPITER
    {
        name: 'JUPITER',

        dom: document.querySelector('.jupiter div'), 
        size: 0.45 * planetScale,
        radius: 0.45 * planetScale / 2,
        color: '#CFB799',
        
        orbit: document.querySelector('.jupiter.planet-orbit'), 
        orbitSize: 14 * orbitScale,
        orbitRadius: 14 * orbitScale / 2,
        orbitDuration: function() {
            if (orbitSpeed == 0) { return 0 }
            else { return 119 / orbitSpeed }
        }, 
        orbitReverse: false 
    },
    
    // SATURN
    {
        name: 'SATURNO',

        dom: document.querySelector('.saturn div'), 
        size: 0.3 * planetScale,
        radius: 0.3 * planetScale / 2,
        color: '#AF966E',
        
        orbit: document.querySelector('.saturn.planet-orbit'), 
        orbitSize: 18 * orbitScale,
        orbitRadius: 18 * orbitScale / 2,
        orbitDuration: function() {
            if (orbitSpeed == 0) { return 0 }
            else { return 295 / orbitSpeed }
        }, 
        orbitReverse: false 
    },
    
    // URANUS
    {
        name: 'URANUS',

        dom: document.querySelector('.uranus div'), 
        size: 0.253 * planetScale,
        radius: 0.253 * planetScale / 2,
        color: '#4899AC',
        
        orbit: document.querySelector('.uranus.planet-orbit'), 
        orbitSize: 21.5 * orbitScale,
        orbitRadius: 21.5 * orbitScale / 2,
        orbitDuration: function() {
            if (orbitSpeed == 0) { return 0 }
            else { return 840 / orbitSpeed }
        }, 
        orbitReverse: true 
    },
    
    // NEPTUNE
    {
        name: 'NEPTUNE',

        dom: document.querySelector('.neptune div'), 
        size: 0.25 * planetScale,
        radius: 0.25 * planetScale / 2,
        color: '#4772FF',
        
        orbit: document.querySelector('.neptune.planet-orbit'), 
        orbitSize: 33 * orbitScale,
        orbitRadius: 33 * orbitScale / 2,
        orbitDuration: function() {
            if (orbitSpeed == 0) { return 0 }
            else { return 1650 / orbitSpeed }
        }, 
        orbitReverse: false 
    }
]

for (pData of solarSystem) {
    let [planet, size, radius, color] = [pData.dom, pData.size, pData.radius, pData.color]
    let [orbit, orbitSize, orbitRadius, orbitDuration, orbitReverse] = [pData.orbit, pData.orbitSize, pData.orbitRadius, pData.orbitDuration, pData.orbitReverse]

    planet.style.width = `${size}em`
    planet.style.backgroundColor = color
    planet.style.top = `${orbitRadius-radius}em`
    planet.style.left = `${-radius}em`

    orbit.style.width = `${orbitSize}em`
    orbit.style.animationDuration = `${orbitDuration()}s`
    if (orbitReverse) orbit.style.animationDirection = 'reverse'
    orbit.style.top = `${-orbitRadius+sunRadius}em`
    orbit.style.left = `${-orbitRadius+sunRadius}em`
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
