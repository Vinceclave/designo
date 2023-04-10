const mapContainer = document.querySelectorAll(".map-details");

const mapDetails = {
  canada: {
    title: "Canada",
    address: {
      warehouse: "Designo Central Office",
      address: `3886 Wellington Street Toronto, <br> Ontario M9C 3J5`
    },
    contact: {
      title: "Contact",
      contact: `P : +1 253-863-8967 <br>
                M : contact@designo.co`,
    }
  },
  australia: {
    title: "Australia",
    address: {
      warehouse: "Designo AU Office",
      address: `19 Balonne Street <br> New South Wales 2443`
    },
    contact: {
      title: "Contact",
      contact: `P : (02) 6720 9092 <br>  
                M : contact@designo.au`
    }
  },
  uk: {
    title: "United kingdom",
    address: {
      warehouse: "Designo UK Office",
      address: `13  Colorado Way Rhyd-y-fro <br> SA8 9GA`
    },
    contact: {
      title: "Contact",
      contact: `P : 078 3115 1400 <br>
                M : contact@designo.uk`,
    }
  }
}


mapContainer.forEach((element, index) => {
  let mapDetail = mapDetails[Object.keys(mapDetails)[index]];
  let title = mapDetail.title;
  let warehouse = mapDetail.address.warehouse;
  let add = mapDetail.address.address
  let contactTitle = mapDetail.contact.title;
  let contact = mapDetail.contact.contact;

  console.log(mapDetail)
    console.log(element)
    element.querySelector('h2').textContent = title
    element.querySelector('.address').innerHTML = `<pre>  
                                                     <b> ${warehouse}</b><br>
                                                     ${add}
                                                    </pre>`
    element.querySelector('.contact').innerHTML = `<pre>
                                                      <b>${contactTitle}</b><br>
                                                      ${contact}
                                                   </pre>`
});



function initMap() {
  var canadaMap = L.map('canada-map').setView([43.643433, -79.58017], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: false
  }).addTo(canadaMap);


  var australiaMap = L.map('australia-map').setView([-30.329525, 149.788194], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: false
  }).addTo(australiaMap);


  var ukMap = L.map('uk-map').setView([51.737415, -3.866004], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: false
    }).addTo(ukMap);
}


