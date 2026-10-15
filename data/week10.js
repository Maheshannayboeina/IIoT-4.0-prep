window.QBANK = window.QBANK || [];
window.QBANK.push(...[
{id:"W10-01",week:10,q:"SD-6TiSCH slicing at which layer to isolate control overhead?",options:["Physical","Layer 2","Transport","Application"],ans:1,exp:"Layer-2 slicing gives dedicated paths, isolates SDN overhead. 6TiSCH = IPv6 over TSCH for constrained nets."},
{id:"W10-02",week:10,q:"SD edge data streams divided into?",options:["Local/global","Secure/insecure","Ordinary/emergent","Wired/wireless"],ans:2,exp:"Emergent = urgent/priority (coarse path); ordinary = normal. Fog nodes serve delay-constrained emergent."},
{id:"W10-03",week:10,q:"Fog nodes provide which service?",options:["Delay-constrained emergent","Archival","Offline batch","Manual config"],ans:0,exp:"Fog/access devices serve emergent delay-sensitive services."},
{id:"W10-04",week:10,q:"Function correctly under dynamic adversarial conditions?",options:["Privacy","Reliability","Safety","Resilience"],ans:3,exp:"Resilience = adversarial survival. Reliability = correct under stated conditions/time. Safety = no harm."},
{id:"W10-05",week:10,q:"STRIDE 'E' is?",options:["Encryption","Elevation of privilege","Exposure","Endpoint"],ans:1,exp:"STRIDE: Spoofing, Tampering, Repudiation, Info disclosure, DoS, Elevation of privilege."},
{id:"W10-06",week:10,q:"Designs cost-efficient trustworthy system + certifies?",options:["Owner","End user","System Builder","Cloud provider"],ans:2,exp:"System Builder defines trust reqs, designs, tests/certifies."},
{id:"W10-07",week:10,q:"Protect resource-constrained end devices via?",options:["Lightweight symmetric-key crypto","Bigger packets","No auth","Cloud-only"],ans:0,exp:"Constrained nodes can't do heavy PKI everywhere → lightweight symmetric + IDS."},
{id:"W10-08",week:10,q:"Three data states?",options:["Source/cloud/edge","At-Rest, In-Use, In-Transit","Structured/semi/unstructured","Sensor/control/app"],ans:1,exp:"Protect all three states: rest (stored), in-use (processing), in-transit (network)."},
{id:"W10-09",week:10,q:"OT ICS security guidance standard?",options:["ISO 27017","NIST SP 800-82","ISO 154083","NIST SP 800-144"],ans:1,exp:"NIST SP 800-82 = ICS security. 800-144/27017 are cloud-related."},
{id:"W10-10",week:10,q:"NOT a Lumada layer?",options:["Edge","Core","Analytics","Transport"],ans:3,exp:"Lumada = Edge, Core, Analytics (+ Studio, Foundry). Transport is not."},
{id:"W10-11",week:10,q:"BlueScope Steel sensors detect?",options:["Radiation + toxic gases","Congestion/loss","Shortages/delays","Voltage/cloud fails"],ans:0,exp:"BlueScope = worker safety: radiation + toxic gas via helmets/wristbands."},
{id:"W10-12",week:10,q:"SmartLabel uses what?",options:["RFID","Bluetooth","QR code","GPS"],ans:2,exp:"SmartLabel = QR scan → ingredients, allergens, nutrition."},
{id:"W10-13",week:10,q:"Intellicup base integrates?",options:["GPS","NFC chip","Temp sensor","Wi-Fi"],ans:1,exp:"Intellicup = NFC chip at cup base for vending."},
{id:"W10-14",week:10,q:"Adjust machine/material/temp optimally = ?",options:["Flexibility","Isolation","Centralization","Redundancy"],ans:0,exp:"Flexibility allows optimal adjustment of parameters."},
{id:"W10-15",week:10,q:"Fence between trusted/untrusted with rules?",options:["Hypervisor","Firewall","Load balancer","Data logger"],ans:1,exp:"Firewall filters by rules. Hypervisor = VMs, LB = distribute load."},
{id:"W10-16",week:10,q:"STRIDE 'R' is?",options:["Repudiation","Reliable","Replicable","Resonance"],ans:0,exp:"R = Repudiation (denying actions). Tamper-proof logs counter it."}
]);
