
let location_timeout = setTimeout("geolocFail()", 10000);
    navigator.geolocation.getCurrentPosition(function(position){
        clearTimeout(location_timeout);
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var map = new mapgl.Map('container', {
            center: [lng, lat],
            zoom: 16,
            key: '4063dfb1-1a15-4509-a767-c396afc8ae3b',
            style: 'c080bb6a-8134-4993-93a1-5b4d8c36a59b'
        });
        const control = new mapgl.Control(map, controlContent, {
        position: 'topLeft',});
        const status = control.getContainer().querySelector('#status');
    let circle;
    status.textContent = '';
    if (circle) {
        circle.destroy();
    }
    circle = new mapgl.CircleMarker(map, {
        coordinates: [lng, lat],
        radius: 14,
        color: '#0088ff',
        strokeWidth: 4,
        strokeColor: '#ffffff',
        stroke2Width: 6,
        stroke2Color: '#0088ff55',
    });
    function error() {
        status.textContent = 'Unable to retrieve your location';
    }
    function geoFindMe() {
        if (!navigator.geolocation) {
            status.textContent = 'Geolocation is not supported by your browser';
        } else {
            status.textContent = 'Locating…';
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
    control
        .getContainer()
        .querySelector('#find-me')
        .addEventListener('click', geoFindMe);;
        ;
        
});
const controlContent = `
    <div class="buttonRoot" id="find-me">
        <button class="button">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
            >
                <path
                    fill="currentColor"
                    d="M17.89 26.27l-2.7-9.46-9.46-2.7 18.92-6.76zm-5.62-12.38l4.54 1.3 1.3 4.54 3.24-9.08z"
                />
            </svg>
        </button>
    </div>
    <p id="status"></p>
`;

function success(pos) {
    let map = new mapgl.Map('container', {
        center: [0,0],
        zoom: 16,
        key: '4063dfb1-1a15-4509-a767-c396afc8ae3b',
        style: 'c080bb6a-8134-4993-93a1-5b4d8c36a59b'
    });
    const center = [pos.coords.longitude, pos.coords.latitude];
    let circle;
    status.textContent = '';
    if (circle) {
        circle.destroy();
    }
    
    circle = new mapgl.CircleMarker(map, {
        coordinates: center,
        radius: 14,
        color: '#0088ff',
        strokeWidth: 4,
        strokeColor: '#ffffff',
        stroke2Width: 6,
        stroke2Color: '#0088ff55',
    });
    map.setCenter(center);
    map.setZoom(16);
}

function error() {
    status.textContent = 'Unable to retrieve your location';
}

function geoFindMe() {
    if (!navigator.geolocation) {
        //status.textContent = 'Geolocation is not supported by your browser';
    } else {
        //status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
}


function search(){
    let form = document.forms.search;
    form.oninput = function() {
    document.getElementById('result').innerHTML = form.value;
  };
}

function menu(){
        document.getElementById("menu").className ='change-mode';
}
function menuback(){
    document.getElementById("menu").className ='menu';
}