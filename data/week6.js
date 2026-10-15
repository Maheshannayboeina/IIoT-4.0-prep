window.QBANK = window.QBANK || [];
window.QBANK.push(...[
{id:"W6-01",week:6,q:"Benefit of sensors highlighted for operations?",options:["Improving visibility","More manual inspection","Enhancing latency","Reducing production rate"],ans:0,exp:"Sensors → visibility → monitoring, predictive maintenance, control. Others are negatives."},
{id:"W6-02",week:6,q:"Sensor for steel-pipe inspection / ferromagnetic stress?",options:["Torque","Vacuum","Magnetostrictive","Image"],ans:2,exp:"Magnetostrictive senses time-varying stress/strain in ferromagnetic materials → pipe inspection."},
{id:"W6-03",week:6,q:"DS1621 generates how many bits?",options:["8 bits","32 bits","16 bits","9 bits"],ans:3,exp:"DS1621 = digital temp, I2C, 9-bit. LM35 is analog proportional to °C."},
{id:"W6-04",week:6,q:"'Selectivity' of gas sensor means?",options:["Detect one gas in mixture","Time to stabilize","Output change per input","Return to baseline"],ans:0,exp:"Selectivity = target gas in mixture. Sensitivity = Δout/Δin. Response time = stabilize. Reversibility = return to baseline."},
{id:"W6-05",week:6,q:"n-type MOS + reducing gas → resistance?",options:["Unchanged","Increases","Decreases","Random"],ans:2,exp:"n-type + reducing = decreases. p-type + reducing = increases. Don't reverse — classic trap."},
{id:"W6-06",week:6,q:"ModBus-TCP supports how many active connections?",options:["5","10","64","254"],ans:1,exp:"ModBus-TCP client-server over TCP/IP, MBAP header, up to 10 sockets. Memorize 10."},
{id:"W6-07",week:6,q:"EtherNet/IP real-time I/O uses?",options:["Implicit","Explicit","Acyclic","Asynchronous"],ans:0,exp:"Implicit = continuous real-time I/O. Explicit = request/response config (non-time-critical)."},
{id:"W6-08",week:6,q:"TSN is based on which IEEE standard?",options:["802.15.4","802.1Q","802.1F","802.1P"],ans:1,exp:"TSN deterministic Ethernet = 802.1Q (+802.3). Enables IT/OT convergence."},
{id:"W6-09",week:6,q:"Profibus DP devices without repeaters?",options:["10","128","64","32"],ans:3,exp:"Profibus DP = 32 devices per segment without repeaters. Bus topology."},
{id:"W6-10",week:6,q:"CC-Link global operating frequency (per key)?",options:["2.4 GHz","5.0 GHz","13.56 MHz","433 MHz"],ans:2,exp:"Per key: 13.56 MHz (same as NFC). Memorize as keyed."},
{id:"W6-11",week:6,q:"DeviceNet is based on?",options:["CAN","IEC 61158","IEEE 802.3","WIA-PA"],ans:0,exp:"DeviceNet links sensors/actuators to PLCs over CAN (Controller Area Network)."},
{id:"W6-12",week:6,q:"Advantage of WIA-PA?",options:["Wired fiber only","Supports Adaptive Frequency Hopping","No aggregation","Replaces satellite"],ans:1,exp:"WIA-PA supports AFH + data aggregation to survive industrial interference."},
{id:"W6-13",week:6,q:"URLLC availability target?",options:["99.9%","99.99%","99.999%","99.9999% (6-nines)"],ans:3,exp:"URLLC = 6-nines (99.9999%), ~1 ms latency, <1e-5 outage. eMBB = speed, mMTC = massive IoT."},
{id:"W6-14",week:6,q:"Objective of D2D communication?",options:["Increase core load","Eliminate core network load","Max delay","Wired only"],ans:1,exp:"D2D devices talk directly → less core load, lower delay."},
{id:"W6-15",week:6,q:"Primary disadvantage of mmWave?",options:["Huge antennas","Congested <1 GHz","High penetration loss + shadowing","Very low throughput"],ans:2,exp:"mmWave (30–300 GHz) = huge bandwidth but blocked easily, needs narrow MIMO beams."},
{id:"W6-16",week:6,q:"Which temp sensor gives analog voltage ∝ temperature?",options:["DS1621","DHT11","DS18B20","LM35"],ans:3,exp:"LM35 = analog linear °C. DS1621/DS18B20 are digital."},
{id:"W6-17",week:6,q:"ADXL335 is what sensor?",options:["Accelerometer","Gyroscope","Magnetometer","Proximity"],ans:0,exp:"ADXL335 = 3-axis (X,Y,Z) accelerometer, analog voltage."}
]);
