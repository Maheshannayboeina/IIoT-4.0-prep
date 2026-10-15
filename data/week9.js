window.QBANK = window.QBANK || [];
window.QBANK.push(...[
{id:"W9-01",week:9,q:"How does fog prevent noisy big data crowding cloud?",options:["Store all raw in cloud","Prior filtration at edge","Disable real-time","Increase TX freq"],ans:1,exp:"Fog filters at edge, sends only useful upstream → saves bandwidth, enables immediate action."},
{id:"W9-02",week:9,q:"Fog-based industrial platform capability?",options:["Merge real-time + non-real-time","Non-real-time only","No processing","No endpoint control"],ans:0,exp:"Fog merges both workloads and controls IoT endpoints."},
{id:"W9-03",week:9,q:"Edge software for any protocol/PLC/HW?",options:["FogHorn","Sonm","Crosser","Nebbiolo"],ans:2,exp:"Crosser = any protocol/PLC/HW. FogHorn, Nebbiolo, Sonm are other providers."},
{id:"W9-04",week:9,q:"%in% in R does what?",options:["Series numbers","Check membership in vector","Integer division","Global assign"],ans:1,exp:"%in% = membership test. ':' or seq() makes series. '<-' assigns."},
{id:"W9-05",week:9,q:"Validation in R demo?",options:["2-fold","LOO","10-fold","No partition"],ans:2,exp:"Ten-fold CV: split 10, train 9 test 1 ×10. Estimates accuracy."},
{id:"W9-06",week:9,q:"Julia dict function?",options:["Tuple()","Array()","Dictn()","Dict()"],ans:3,exp:"Dict() creates dict. println() prints, $ interpolates. Tuples immutable."},
{id:"W9-07",week:9,q:"Eliminates repeated data via detection/filter/compress?",options:["Integration","Cleaning","Redundancy mitigation","Visualization"],ans:2,exp:"Redundancy mitigation = dedup. Integration = combine sources. Cleaning = fix errors."},
{id:"W9-08",week:9,q:"Hadoop assigning CPU/mem/storage?",options:["Common","HDFS","MapReduce","YARN"],ans:3,exp:"YARN = resource negotiator. HDFS = storage, MapReduce = processing, Common = libs."},
{id:"W9-09",week:9,q:"MongoDB+Hadoop application?",options:["Batch aggregation","Cabling","Sensor mfg","Firewall"],ans:0,exp:"Listed use = batch aggregation (also warehousing/ETL)."},
{id:"W9-10",week:9,q:"BCube routing protocol?",options:["BGP","BCube Source Routing","OSPF","STP"],ans:1,exp:"BCube server-centric DCN uses BSR (BCube Source Routing)."},
{id:"W9-11",week:9,q:"Why IIoT DC needs more inbound bandwidth?",options:["Bulk small sensor msgs","No TX needed","One-time TX","No DC comms"],ans:0,exp:"Many devices × small msgs = high aggregate inbound."},
{id:"W9-12",week:9,q:"Advantage of SDDC?",options:["Static mgmt","HW-SW coupling","Programmable infra + workload mgmt","No virtualization"],ans:2,exp:"SDDC = virtualized, HW decoupled, programmable, agile/elastic."},
{id:"W9-13",week:9,q:"Merge two flow rules into one when TCAM full?",options:["Wildcard-based rule combination","Disconnect controller","Disable device","TCP→UDP"],ans:0,exp:"Wildcard combination compresses rules. TCAM is limited."},
{id:"W9-14",week:9,q:"SDN meets dynamic IIoT forwarding via?",options:["Same priority","Rule-based forwarding policies","Freeze controller","Ignore real-time"],ans:1,exp:"Rule-based policies with priority per real-time situation."},
{id:"W9-15",week:9,q:"Software-Defined Automation is?",options:["Manual only","No real-time","Virtualized platform for dynamic real-time control","Sensor Level-0 only"],ans:2,exp:"Decouple control SW from fixed HW → dynamic real-time control."},
{id:"W9-16",week:9,q:"R a^b via?",options:["a+b","a/b","a^b","a@b"],ans:2,exp:"^ is power in R. ':' makes sequences."}
]);
