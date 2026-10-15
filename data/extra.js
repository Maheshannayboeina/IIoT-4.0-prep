window.QBANK = window.QBANK || [];
window.QBANK.push(...[
{id:"W0-01",week:1,q:"Analog sensor voltage must pass through ___ before CPU?",options:["DAC","ADC","ALU","USB"],ans:1,exp:"ADC: analog→digital for CPU. DAC is reverse (digital→analog for speaker/actuator)."},
{id:"W0-02",week:1,q:"Hard-coded in NIC by manufacturer?",options:["IP","MAC","URL","Domain"],ans:1,exp:"MAC = 48-bit physical, in NIC, doesn't change. IP = logical, changes with network."},
{id:"W0-03",week:1,q:"Forwards packets between networks via best path?",options:["Hub","Switch","Router","Repeater"],ans:2,exp:"Router = between networks via IP. Switch = inside LAN via MAC. Hub = blind repeat."},
{id:"W0-04",week:1,q:"www.example.com → numeric IP via?",options:["DHCP","DNS","FTP","SMTP"],ans:1,exp:"DNS = phonebook. DHCP = auto-assign IPs. FTP = files, SMTP = mail send."},
{id:"W0-05",week:1,q:"Loses content on power off?",options:["HDD","SSD","RAM","BIOS"],ans:2,exp:"RAM volatile. HDD/SSD non-volatile. BIOS firmware persists."},
{id:"X-01",week:6,q:"Camera sensing temp + video is what sensor type?",options:["Scalar","Multimedia","Hybrid","All"],ans:2,exp:"Hybrid = multiple modalities (temp + video). Scalar = single magnitude."},
{id:"X-02",week:7,q:"XBee vs Zigbee statement: 'XBee is mesh protocol, Zigbee is product using XBee' — True?",options:["True","False"],ans:1,exp:"False — reversed. Zigbee = protocol (over 802.15.4); XBee = Digi product using Zigbee."},
{id:"X-03",week:8,q:"'ML is subset of DL that finds features itself' — True?",options:["True","False"],ans:1,exp:"False — reversed. DL is subset of ML. DL finds features itself."},
{id:"X-04",week:8,q:"K-medoid maximizes distance between random points — True?",options:["True","False"],ans:1,exp:"False. K-medoid minimizes dissimilarity to medoid (like K-means but robust)."},
{id:"X-05",week:4,q:"Future smart plant autonomous decisions/ML layer?",options:["Connection","Conversion","Cyber","Cognition"],ans:3,exp:"Cognition = ML, decision support, visualization. Cyber = twin/data mining."},
{id:"X-06",week:10,q:"Which is NOT part of SDIIoT architecture?",options:["WSN","Private network (as named)","Industrial cloud","Industrial bus"],ans:1,exp:"SDIIoT = WSN + Public nets + Industrial cloud + Industrial bus. 'Private network' is not the named part."},
{id:"X-07",week:5,q:"Which is NOT an IoT business model?",options:["Subscription","Outcome-Based","Asset-Sharing","Loss-Sharing"],ans:3,exp:"Valid: Subscription, Outcome, Asset-Sharing, IoT-as-a-Service, Service/Process/Product-oriented. Loss-Sharing is fake."},
{id:"X-08",week:10,q:"Kuka incorrect statement?",options:["German robotics","IoT factory","Private cloud robots","Deployed on A330/A350 in Toulouse"],ans:3,exp:"A330/A350 Toulouse = Airbus Factory of Future (smart glasses), not Kuka. Kuka = 800 cars/day German robots."},
{id:"X-09",week:11,q:"Transponders + Beacons are what RFID?",options:["Active","Passive","Semi-passive","All"],ans:0,exp:"Active tags = transponders (reply) + beacons (broadcast)."},
{id:"X-10",week:9,q:"SDN protocol used?",options:["OpenByte","OpenFlow","WideFlow","ClosedByte"],ans:1,exp:"OpenFlow is the SDN southbound protocol (controller→switch)."},
{id:"X-11",week:3,q:"Who coined 'Augmented Reality'?",options:["Thomas Caudell","Steve Jobs","Elon Musk","Zuckerberg"],ans:0,exp:"Caudell (Boeing, 1990). McCarthy coined AI; Caudell coined AR — don't mix."},
{id:"X-12",week:3,q:"Marker-based AR uses?",options:["Marker-based (visual markers)","Markerless","Projection","Superimposition"],ans:0,exp:"Marker-based = visual markers trigger overlay. Markerless = GPS/compass."}
]);
