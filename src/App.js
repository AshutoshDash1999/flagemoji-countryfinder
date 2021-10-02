import './App.css';
import { useState } from 'react';


var flagDict = {
"🇦🇩": "Andorra",
"🇦🇪" : "United Arab Emirates",
"🇦🇫" : "Afghanistan",
"🇦🇬" : "Antigua & Barbuda",
"🇦🇮" : "Anguilla",
"🇦🇱" : "Albania",
"🇦🇲" : "Armenia",
"🇦🇴" : "Angola",
"🇦🇶" : "Antarctica",
"🇦🇷" : "Argentina",
"🇦🇸" : "American Samoa",
"🇦🇹" : "Austria",
"🇦🇺" : "Australia",
"🇦🇼" : "Aruba",
"🇦🇽" : "Åland Islands",
"🇦🇿" : "Azerbaijan",
"🇧🇦" : "Bosnia & Herzegovina",
"🇧🇧" : "Barbados",
"🇧🇩" : "Bangladesh",
"🇧🇪" : "Belgium",
"🇧🇫" : "Burkina Faso",
"🇧🇬" : "Bulgaria",
"🇧🇭" : "Bahrain",
"🇧🇮" : "Burundi",
"🇧🇯" : "Benin",
"🇧🇱" : "St. Barthélemy",
"🇧🇲" : "Bermuda",
"🇧🇳" : "Brunei",
"🇧🇴" : "Bolivia",
"🇧🇶" : "Caribbean Netherlands",
"🇧🇷" : "Brazil",
"🇧🇸" : "Bahamas",
"🇧🇹" : "Bhutan",
"🇧🇻" : "Bouvet Island",
"🇧🇼" : "Botswana",
"🇧🇾" : "Belarus",
"🇧🇿" : "Belize",
"🇩🇪" : "Germany",
"🇩🇬" : "Diego Garcia",
"🇩🇯" : "Djibouti",
"🇩🇰" : "Denmark",
"🇩🇲" : "Dominica",
"🇩🇴" : "Dominican Republic",
"🇩🇿" : "Algeria",
"🇪🇦" : "Ceuta & Melilla",
"🇪🇨" : "Ecuador",
"🇪🇪" : "Estonia",
"🇪🇬" : "Egypt",
"🇪🇭" : "Western Sahara",
"🇪🇷" : "Eritrea",
"🇪🇸" : "Spain",
"🇪🇹" : "Ethiopia",
"🇪🇺" : "European Union",
"🇫🇮": "Finland",
"🇫🇯": "Fiji",
"🇫🇰": "Falkland Islands",
"🇫🇲": "Micronesia",
"🇫🇴": "Faroe Islands",
"🇫🇷": "France",
"🇬🇦": "Gabon",
"🇬🇧": "United Kingdom",
"🇬🇩": "Grenada",
"🇬🇪": "Georgia",
"🇬🇫": "French Guiana",
"🇬🇬": "Guernsey",
"🇬🇭": "Ghana",
"🇬🇮": "Gibraltar",
"🇬🇱": "Greenland",
"🇬🇲": "Gambia",
"🇬🇳": "Guinea",
"🇬🇵": "Guadeloupe",
"🇬🇶": "Equatorial Guinea",
"🇬🇷" : "Greece",
"🇬🇸" : "South Georgia & South Sandwich Islands",
"🇬🇹" : "Guatemala",
"🇬🇺" : "Guam",
"🇬🇼" : "Guinea-Bissau",
"🇬🇾" : "Guyana",
"🇭🇰" : "Hong Kong SAR China",
"🇭🇲" : "Heard & McDonald Islands",
"🇭🇳" : "Honduras",
"🇭🇷" : "Croatia",
"🇭🇹" : "Haiti",
"🇭🇺" : "Hungary",
"🇮🇨" : "Canary Islands",
"🇮🇩" : "Indonesia",
"🇮🇪" : "Ireland",
"🇮🇱" : "Israel",
"🇮🇲" : "Isle of Man",
"🇮🇳" : "India",
"🇮🇴" : "British Indian Ocean Territory",
"🇮🇶" : "Iraq",
"🇮🇷" : "Iran",
"🇮🇸" : "Iceland",
"🇮🇹" : "Italy",
"🇯🇪" : "Jersey",
"🇯🇲" : "Jamaica",
"🇯🇴" : "Jordan",
"🇯🇵" : "Japan",
"🇰🇪" : "Kenya",
"🇰🇬" : "Kyrgyzstan",
"🇰🇭" : "Cambodia",
"🇰🇮" : "Kiribati",
"🇰🇲" : "Comoros",
"🇰🇳" : "St. Kitts & Nevis",
"🇰🇵" : "North Korea",
"🇰🇷" : "South Korea",
"🇰🇼" : "Kuwait",
"🇰🇾" : "Cayman Islands",
"🇰🇿" : "Kazakhstan",
"🇱🇦" : "Laos",
"🇱🇧" : "Lebanon",
"🇱🇨" : "St. Lucia",
"🇱🇮" : "Liechtenstein",
"🇱🇰" : "Sri Lanka",
"🇱🇷" : "Liberia",
"🇱🇸" : "Lesotho",
"🇱🇹" : "Lithuania",
"🇱🇺" : "Luxembourg",
"🇱🇻" : "Latvia",
"🇱🇾" : "Libya",
"🇲🇦" : "Morocco",
"🇲🇨" : "Monaco",
"🇲🇩" : "Moldova",
"🇲🇪" : "Montenegro",
"🇲🇫" : "St. Martin",
"🇲🇬" : "Madagascar",
"🇲🇭" : "Marshall Islands",
"🇲🇰" : "North Macedonia",
"🇲🇱" : "Mali",
"🇲🇲" : "Myanmar (Burma)",
"🇲🇳" : "Mongolia",
"🇲🇴" : "Macao Sar China",
"🇲🇵" : "Northern Mariana Islands",
"🇲🇶" : "Martinique",
"🇲🇷" : "Mauritania",
"🇲🇸" : "Montserrat",
"🇲🇹" : "Malta",
"🇲🇺" : "Mauritius",
"🇲🇻" : "Maldives",
"🇲🇼" : "Malawi",
"🇲🇽" : "Mexico",
"🇲🇾" : "Malaysia",
"🇲🇿" : "Mozambique",
"🇳🇦" : "Namibia",
"🇳🇨" : "New Caledonia",
"🇳🇪" : "Niger",
"🇳🇫" : "Norfolk Island",
"🇳🇬" : "Nigeria",
"🇳🇮" : "Nicaragua",
"🇳🇱" : "Netherlands",
"🇳🇴" : "Norway",
"🇳🇵" : "Nepal",
"🇳🇷" : "Nauru",
"🇳🇺" : "Niue",
"🇳🇿" : "New Zealand",
"🇴🇲" : "Oman",
"🇵🇦" : "Panama",
"🇵🇪" : "Peru",
"🇵🇫" : "French Polynesia",
"🇵🇬" : "Papua New Guinea",
"🇵🇭" : "Philippines",
"🇵🇰" : "Pakistan",
"🇵🇱" : "Poland",
"🇵🇲" : "St. Pierre & Miquelon",
"🇵🇳" : "Pitcairn Islands",
"🇵🇷" : "Puerto Rico",
"🇵🇸" : "Palestinian Territories",
"🇵🇹" : "Portugal",
"🇵🇼" : "Palau",
"🇵🇾" : "Paraguay",
"🇶🇦" : "Qatar",
"🇷🇪" : "Réunion",
"🇷🇴" : "Romania",
"🇷🇸" : "Serbia",
"🇷🇺" : "Russia",
"🇷🇼" : "Rwanda",
"🇸🇦" : "Saudi Arabia",
"🇸🇧" : "Solomon Islands",
"🇸🇨" : "Seychelles",
"🇸🇩" : "Sudan",
"🇸🇪" : "Sweden",
"🇸🇬" : "Singapore",
"🇸🇭" : "St. Helena",
"🇸🇮" : "Slovenia",
"🇸🇯" : "Svalbard & Jan Mayen",
"🇸🇰" : "Slovakia",
"🇸🇱" : "Sierra Leone",
"🇸🇲" : "San Marino",
"🇸🇳" : "Senegal",
"🇸🇴" : "Somalia",
"🇸🇷" : "Suriname",
"🇸🇸" : "South Sudan",
"🇸🇹" : "São Tomé & Príncipe",
"🇸🇻" : "El Salvador",
"🇸🇽" : "Sint Maarten",
"🇸🇾" : "Syria",
"🇸🇿" : "Eswatini",
"🇹🇦" : "Tristan Da Cunha",
"🇹🇨" : "Turks & Caicos Islands",
"🇹🇩" : "Chad",
"🇹🇫" : "French Southern Territories",
"🇹🇬" : "Togo",
"🇹🇭" : "Thailand",
"🇹🇯" : "Tajikistan",
"🇹🇰" : "Tokelau",
"🇹🇱" : "Timor-Leste",
"🇹🇲" : "Turkmenistan",
"🇹🇳" : "Tunisia",
"🇹🇴" : "Tonga",
"🇹🇷" : "Turkey",
"🇹🇹" : "Trinidad & Tobago",
"🇹🇻" : "Tuvalu",
"🇹🇼" : "Taiwan",
"🇹🇿" : "Tanzania",
"🇺🇦" : "Ukraine",
"🇺🇬" : "Uganda",
"🇺🇲" : "U.S. Outlying Islands",
"🇺🇳" : "United Nations",
"🇺🇸" : "United States",
"🇺🇾" : "Uruguay",
"🇺🇿" : "Uzbekistan",
"🇻🇦" : "Vatican City",
"🇻🇨" : "St. Vincent & Grenadines",
"🇻🇪" : "Venezuela",
"🇻🇬" : "British Virgin Islands",
"🇻🇮" : "U.S. Virgin Islands",
"🇻🇳" : "Vietnam",
"🇻🇺" : "Vanuatu",
"🇼🇫" : "Wallis & Futuna",
"🇼🇸" : "Samoa",
"🇽🇰" : "Kosovo",
"🇾🇪" : "Yemen",
"🇾🇹" : "Mayotte",
"🇿🇦" : "South Africa",
"🇿🇲" : "Zambia",
"🇿🇼" : "Zimbabwe",
"🏴󠁧󠁢󠁥󠁮󠁧󠁿" : "England",
"🏴󠁧󠁢󠁳󠁣󠁴󠁿" : "Scotland",
"🏴󠁧󠁢󠁷󠁬󠁳󠁿" : "Wales"
}

var flagList = Object.keys(flagDict)

function App() {
  var [flagOfCountry, findFlag] = useState("");
  
  function flagFinder(event){
    flagOfCountry = flagDict[event.target.value];
    if (flagOfCountry === undefined){
      flagOfCountry = "We don't have this flag in our database"
    }
    findFlag(flagOfCountry);
  }

  function flagClick(flag){
    var flagOfCountry = flagDict[flag];
    findFlag(flagOfCountry)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="content"></div>
        <h1>Find the name of country with their Flag</h1>
        <input id="inputBox" placeholder="--type flag icon here--" onChange={flagFinder}/>
        <p>{flagOfCountry}</p>
        <h3>Flags that we have</h3>
        <ol>
          {
            flagList.map(flag =>{
              return <li onClick = { () => {flagClick(flag)}} style={{
                listStyle : "none",
                display : "inline",
                fontSize : "2rem",
                margin : "1rem",
                cursor : "pointer" 
              }}>{flag}</li>
            })
          }
        </ol>

            <footer>
              <p>
                  <a target="_blank" href="https://www.linkedin.com/in/ashutoshdash1999/">linkedin</a>
                  &nbsp;
                  <a target="_blank" href="https://twitter.com/ashutoshdash99">twitter</a>
                  &nbsp;
                  <a target="_blank" href="https://github.com/AshutoshDash1999/">github</a>
                  &nbsp;
                  <a target="_blank" href="mailto:dashashutosh1999@gmail.com">gmail</a>
              </p>
          </footer>
      </header>
    </div>
  );
}

export default App;
