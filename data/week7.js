window.QBANK = window.QBANK || [];
window.QBANK.push(...[
{id:"W7-01",week:7,q:"LoRa modulation?",options:["FSK","PSK","Chirp Spread Spectrum (CSS)","ASK"],ans:2,exp:"LoRa = Long Range, CSS. LoRaWAN = network layer. Sigfox = ultra-narrowband, 100 bps."},
{id:"W7-02",week:7,q:"SIGFOX max wireless throughput?",options:["100 bps","100 bytes/s","140 bits/s","1000 bps"],ans:0,exp:"Sigfox: up to 100 bps, 12-byte payload, ~140 msgs/day. Memorize 100 bps."},
{id:"W7-03",week:7,q:"Typical Zigbee range?",options:["1–5 m","10–100 m","500–1000 m","1–10 km"],ans:1,exp:"Zigbee WPAN mesh: 10–100 m depending on variant. LPWAN (LoRa/Sigfox) = km."},
{id:"W7-04",week:7,q:"Zigbee device relaying + running small apps?",options:["Coordinator","End device","Gateway","Router"],ans:3,exp:"Coordinator (1/net) forms/manages; Router relays + runs apps; End device sleeps, no relay."},
{id:"W7-05",week:7,q:"Software to discover/configure XBee?",options:["XCTU","Arduino IDE","NodeMCU Flasher","PuTTY"],ans:0,exp:"XCTU for XBee (Digi). Arduino IDE for sketches, not XBee config."},
{id:"W7-06",week:7,q:"'What happened / is happening' via dashboards?",options:["Predictive","Prescriptive","Descriptive","Diagnostic"],ans:2,exp:"Descriptive = what happened. Diagnostic = why. Predictive = what will. Prescriptive = what to do. Prognostic = remaining life."},
{id:"W7-07",week:7,q:"Many IIoT middleware are based on?",options:["SOA","Microservices","Monolithic","Layered databus"],ans:0,exp:"Many middleware = Service-Oriented Architecture (SOA) between infra and app layers."},
{id:"W7-08",week:7,q:"FarmBeats weather-aware + UAV planning component?",options:["Base station","Cloud","Soil sensors","IoT Gateway"],ans:3,exp:"FarmBeats Gateway does weather-aware decisions + flight planning. Sensors collect, cloud stores."},
{id:"W7-09",week:7,q:"AR-drone agri video module role?",options:["Control flight","Detect weeds + generate coordinates","Actuate sprayer via BT","Capture GPS video"],ans:1,exp:"Laptop video module detects weeds → coordinates → sprayer acts."},
{id:"W7-10",week:7,q:"iRobot-Factory long-term AI analytics component?",options:["Intelligent Terminal","Edge node","Cognitive Engine","Production line"],ans:2,exp:"Cognitive Engine = high-perf long-term AI analytics. Edge node = short-term local."},
{id:"W7-11",week:7,q:"Big-data smart manufacturing Phase 2 focus?",options:["Data integration","Innovation","Sensor deploy","Synthesis/analysis for decision knowledge"],ans:3,exp:"Phase 2 = synthesize + analyze to build knowledge for decisions. Phase 1 = integrate."},
{id:"W7-12",week:7,q:"Smart warehouse organizing + real-time events module?",options:["Administrative","Data collection","RFID tag","REST framework"],ans:0,exp:"Admin module organizes, generates real-time events, history decisions. RFID/data collect feed it."},
{id:"W7-13",week:7,q:"'Set Point' in ICS?",options:["Sensor location","Standard desired value for control","Measured value","Actuator"],ans:1,exp:"SP = desired; PV = measured; Error = SP−PV. Controller drives actuator to close gap."},
{id:"W7-14",week:7,q:"Control independent of measured variable?",options:["Closed loop","Feedback","Open loop","Proportional"],ans:2,exp:"Open loop = no feedback (toaster timer). Closed loop = feedback (thermostat)."},
{id:"W7-15",week:7,q:"Primary SCADA component?",options:["CEP","Cloud","UAV","RTUs"],ans:3,exp:"SCADA = RTUs + PLCs + comms + master/HMI. RTU = Remote Telemetry Unit."},
{id:"W7-16",week:7,q:"SIGFOX messages/payload?",options:["50/day 8B","75/day 10B","140/day 12B","200/day 15B"],ans:2,exp:"Sigfox: ~140 msgs/day, 12 bytes each — ultra-low rate for M2M."}
]);
