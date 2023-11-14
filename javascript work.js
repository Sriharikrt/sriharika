const states = ["Andra Pradesh", "Odisha", "Goa", "Gujarat", "Telangana", "Tamilnadu"];

const districts = {
    "Andra Pradesh": ["Srikakulam", "Vizianagaram", "Guntur", "East godavari"],
    "Odisha": ["Puri", "Malkangiri", "Ganjam", "Gajapati", "Cuttack"],
    "Goa": ["North goa", "South goa"],
    "Gujarat": ["Jamnagar", "Junagadh", "Kheda"],
    "Telangana": ["Nizamabad", "Khammam", "Hyderabad", "Karimnagar"],
    "Tamilnadu": ["Ariyalur", "Chengalpattu", "Chennai"]
};

const pinCodes = {
    "Srikakulam": [
        { postOffice: "Kotturu", pincode: "532455" },
        { postOffice: "Etcherla", pincode: "532410" },
        { postOffice: "Tekkali", pincode: "532201" },
        { postOffice: "Amadalavalasa", pincode: "532185" },
        { postOffice: "Kaviti", pincode: "532322" },
        { postOffice: "Nandigam", pincode: "532429" },


    ],
    "Vizianagaram": [
        { postOffice: "Bobbili", pincode: "535558" },
        { postOffice: "Parvathipuram", pincode: "535501" },
        { postOffice: "Salur", pincode: "535591" },
        { postOffice: "Nellimarla", pincode: "535271" },
        { postOffice: "Pusapatirega", pincode: "535204" },
                                       { postOffice: "Garividi", pincode: "535101" },

    ],

    "Guntur": [
        { postOffice: "Amaravathi", pincode: "521225" },
        { postOffice: "Amruthalur", pincode: "522325" },
        { postOffice: "Atchampet", pincode: "522409" },
        { postOffice: "bapatla", pincode: "522101" },

    ],
    "East godavari": [
        { postOffice: "Rajahmundry Rural", pincode: "533101" },
        { postOffice: "Amalapuram", pincode: "533201" },
        { postOffice: "Tuni	", pincode: "533401" },
        { postOffice: "Samalkota", pincode: "533440" },
        { postOffice: "Pithapuram", pincode: "533450" },

    ],
    "Puri": [
        { postOffice: "Astaranga", pincode: "752109" },
        { postOffice: "Brahmagiri", pincode: "752101" },
        { postOffice: "Chandanpur", pincode: "752106" },

    ],
    "Malkangiri": [

        { postOffice: "Adomunda", pincode: "679303" },
        { postOffice: "Akharpali", pincode: "679309" },
        { postOffice: "Akuru", pincode: "531151" },
        { postOffice: "Alur", pincode: "518315" },
        { postOffice: "Baghajhola", pincode: "543438" },

    ],
    "Ganjam": [

        { postOffice: "    Aska   ", pincode: "761810" },
        { postOffice: "Bellaguntha", pincode: "761199" },
        { postOffice: " Berhampur", pincode: "761150" },
        { postOffice: " Bhanjanagar", pincode: "761014" },

     ],
      "Gajapati": [
        { postOffice: "Kashingar", pincode: "761206" },
        { postOffice: "  Kidigam", pincode: "761208" },
        { postOffice: "Kashingar", pincode: "761209" },
        { postOffice: " Khandava", pincode: "761202" },
        { postOffice: "Kashingar", pincode: "761201" },

    ],
    "Cuttack": [
        { postOffice: "Aman", pincode: "177501" },
        { postOffice: " Arilo", pincode: "754006" },
        { postOffice: "barda", pincode: "754009" },
        { postOffice: "bentakar", pincode: "754376" },
        { postOffice: "bodhapur", pincode: "753426" },

    ],
    "North goa": [
        { postOffice: "panjali", pincode: "171019" },
        { postOffice: "mapusa", pincode: "403507" },
        { postOffice: "bicholim", pincode: "403503" },

    ],
    "South goa": [
        { postOffice: "Ponda", pincode: "403401" },
        { postOffice: "Mormugao-Vasco", pincode: "403801" },
        { postOffice: " Margao", pincode: "403478" },
        { postOffice: "Dharbandora", pincode: "403748" },

    ],
    "Jamnagar": [
        { postOffice: "Bhanvad", pincode: "306510" },
        { postOffice: "Dhrol", pincode: "361210" },
        { postOffice: "Jamjodhpur", pincode: "360560" },
        { postOffice: "Jodiya", pincode: "360934" },
        { postOffice: "jamnagar", pincode: "361434" },
        { postOffice: "Kalavad", pincode: "342617" },

    ],
    "Junagadh":
    [
        { postOffice: "Keshod", pincode: "382110" },
        { postOffice: "	Malia Hatina", pincode: "382435" },
        { postOffice: "Mangrol", pincode: "382110" },
        { postOffice: "viramgam", pincode: "382435" },
    ],

    "Kheda": [
        { postOffice: "sanand", pincode: "382110" },
        { postOffice: "viramgam", pincode: "382435" },

    ], 
    "Nizamabad": [
        { postOffice: "Armur", pincode: "503224" },
        { postOffice: "Birkoor", pincode: "503321" },
        { postOffice: "  Banswada", pincode: "503807" },
        { postOffice: " Ranjal", pincode: "503235" },
        { postOffice: " Bheemgal", pincode: "503307" },

    ], "Khammam": [
        { postOffice: " Aswaraopeta", pincode: "507301" },
        { postOffice: "Bayyaram", pincode: "507211" },
        { postOffice: "Bonakal", pincode: "507204" },

    ],
    "Hyderabad": [
        { postOffice: "Secunderabad", pincode: "500003" },
        { postOffice: " HITEC City", pincode: "500081" },
        { postOffice: "Gachibowli", pincode: "500032" },
        { postOffice: " Kukatpally", pincode: "500072" },
        { postOffice: " Nizamabad", pincode: "503001" },
        { postOffice: " Shamshabad", pincode: "501218" },

    ],
    "Karimnagar": [
        { postOffice: "kothapally.", pincode: "505304" },
        { postOffice: "Manakondur.", pincode: "505469" },
        { postOffice: "Thimmapur", pincode: "505728" },
        { postOffice: "Ganneruvaram.", pincode: "505890" },

    ], "Ariyalu": [
        { postOffice: "hirumanur", pincode: "621715" },
        { postOffice: "Sendurai", pincode: "621714" },
        { postOffice: "Jayankondam", pincode: "621713" },
        { postOffice: "T. Palur ", pincode: "621712" },

    ],
    "Chengalpattu": [
        { postOffice: "Madurantakam", pincode: "603306" },
        { postOffice: "Tambaram", pincode: "600045" },

    ],
    "Chennai": [
        { postOffice: "   THIRUVOTRIYUR", pincode: "600019" },
        { postOffice: "MANALI", pincode: "175103" },
        { postOffice: "MADHAVARAM", pincode: "600060" },
    ]


};

function Dropdown(selectId, options) {
    const dropdown = document.getElementById(selectId);
    dropdown.innerHTML = '<option  selected="selected">Select</option>'; 
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.text = option;
        dropdown.add(optionElement);
    });
}

function populateStates() {
    Dropdown('state', states);
}

function getDistricts() {
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');

    districtSelect.innerHTML = '<option  selected="selected">Select</option>'; 


    const selectedState = stateSelect.value;
    if (selectedState) {

        Dropdown('district', districts[selectedState]);
    }
}

function getPinCodes() {
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    const tableContainer = document.getElementById('tableContainer');

    const selectedState = stateSelect.value;
    const selectedDistrict = districtSelect.value;

    const pinCodeData = pinCodes[selectedDistrict];

    let tableHTML = '<table border="1">';
    tableHTML += '<tr><th><b>Post Office Name</b></th><th><b>Pin Code</b></th><th><b> District</b></th>';

    pinCodeData.forEach(cityData => {
        tableHTML += `<tr><td>${cityData.postOffice}</td><td>${cityData.pincode}</td><td>${selectedDistrict}</td>`;
    });

    tableHTML += '</table>';

    tableContainer.innerHTML = tableHTML;
}

window.onload = populateStates;
