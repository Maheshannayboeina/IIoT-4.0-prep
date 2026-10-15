window.QBANK = window.QBANK || [];
window.QBANK.push(...[
{id:"W8-01",week:8,q:"Analytics for remaining useful life (hours timescale)?",options:["Baseline","Diagnostic","Prescriptive","Prognostic"],ans:3,exp:"Prognostic = RUL in hours. Baseline ms (detect), Diagnostic min (root cause). Prescriptive = what to do."},
{id:"W8-02",week:8,q:"Tool highlighted for CEP / real-time streams?",options:["Hadoop","Spark","Storm","Jupyter"],ans:2,exp:"Apache Storm = CEP/real-time. Hadoop = batch. Spark Streaming also real-time but key says Storm."},
{id:"W8-03",week:8,q:"FCM vs K-Means distinction?",options:["FCM allows point in >1 cluster","FCM slower always","FCM needs labels","FCM is hard"],ans:0,exp:"K-Means = hard (1 cluster). Fuzzy c-Means = soft (membership degrees in several)."},
{id:"W8-04",week:8,q:"Predict real number (dollars/weight) uses?",options:["Classification","Clustering","Regression","Reinforcement"],ans:2,exp:"Regression = real numbers; Classification = categories. Clustering = unlabeled grouping."},
{id:"W8-05",week:8,q:"RL vs Supervised key difference?",options:["RL guided by supervisor","RL uses reward as feedback","RL maps without agent","Supervised builds graphs"],ans:1,exp:"RL: agent + environment, no supervisor who knows answer, learns via reward function."},
{id:"W8-06",week:8,q:"Why DL differs from traditional ML?",options:["Worse with more data","End-to-end, extracts features itself","Needs explicit features","Needs low compute"],ans:1,exp:"DL = end-to-end, auto feature extraction, improves with data, needs high compute."},
{id:"W8-07",week:8,q:"Collaborative distributed DL (cloud train, edge infer)?",options:["Zebra","Intel","H2O","TOSHIBA"],ans:3,exp:"Toshiba: train cloud, infer edge. Memorize Toshiba."},
{id:"W8-08",week:8,q:"Industrial SaaS example?",options:["Siemens Industrial Machinery Catalyst","Azure","GE Predix","AWS"],ans:0,exp:"Machinery Catalyst = SaaS app. Predix/MindSphere = PaaS platforms. Azure/AWS = IaaS/PaaS generics."},
{id:"W8-09",week:8,q:"Two+ clouds combined for flexibility?",options:["Public","Community","Hybrid","Private"],ans:2,exp:"Hybrid = 2+ clouds (public/private). Community = shared by orgs with common concerns."},
{id:"W8-10",week:8,q:"Platform using Digital Twin?",options:["Sentience","GE Predix","MindSphere","Meshify"],ans:1,exp:"Predix = Digital Twin to learn/estimate/optimize/represent assets."},
{id:"W8-11",week:8,q:"C3 Data Lake format?",options:["XML","RESTful","Simple Object","SQL"],ans:1,exp:"C3 Data Lake stores unstructured in RESTful format."},
{id:"W8-12",week:8,q:"'Now' + 'Tracker' asset tracking platform?",options:["Uptake","C3 IoT","Meshify","Honeywell"],ans:2,exp:"Meshify = Now + Tracker, real-time geo-localized tracking."},
{id:"W8-13",week:8,q:"IIoT cloud device-mgmt must offer?",options:["Device decommission","HW manufacturing","Manual provisioning","More blind spots"],ans:0,exp:"Good IIoT cloud: provisioning, monitoring, updates, decommissioning."},
{id:"W8-14",week:8,q:"Meaningful SLA per Sturm et al. must be?",options:["Subjective","Uncontrollable","Quantifiable","Unachievable"],ans:2,exp:"Meaningful SLA = quantifiable, controllable, achievable — measurable, not subjective."},
{id:"W8-15",week:8,q:"Fog vs pure cloud?",options:["Identify useful data, send less raw to cloud","Replace cloud","Increase latency","Restrict mobility"],ans:0,exp:"Fog filters near devices → less raw to cloud, lower latency/bandwidth."},
{id:"W8-16",week:8,q:"Soft clustering example where point in many clusters?",options:["Hard clustering","Soft clustering","Hard classification","Soft classification"],ans:1,exp:"Soft clustering (FCM) = multi-membership. Hard = one cluster."}
]);
