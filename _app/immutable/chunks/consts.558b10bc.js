const e={isReadonly:!1,isDrawerOpen:!0,techniqueMappingMode:"multiColor",selectedPortfolio:0,update:!1,portfolios:[{id:0,name:"Vectra",includedMeasures:["native","patent ref","integration"]},{id:1,name:"Portfolio 2",includedMeasures:["firewall","zero-trust"]},{id:2,name:"Portfolio 3",includedMeasures:["next-generation firewall","zero-trust"]}],measures:{firewall:{id:0,name:"Firewall",techniques:["d3f:DataInventory"],scores:[0,3,4],risk:10,weight:100,checked:!0,color:"#001eb0"},"zero-trust":{id:1,name:"Zero-Trust",techniques:[],color:"#ef0b0b",children:["role-based access","least priviledge","continuous verification","geo location"],checked:!0},"role-based access":{id:2,name:"Role-Based Access",techniques:["d3f:DataInventory","d3f:ServiceDependencyMapping","d3f:AccessModeling","d3f:AssetInventory"],checked:!0},"least priviledge":{id:3,name:"Least Priviledge",techniques:[]},"continuous verification":{id:4,name:"Continuous Verification",techniques:[],children:[]},"geo location":{id:5,name:"Geo Location",techniques:["d3f:TransferAgentAuthentication","d3f:ServiceDependencyMapping","d3f:AccessModeling"]},"bandwidth control and monitoring":{id:6,name:"Bandwidth Control and Monitoring",techniques:[],children:[],checked:!1},"web filtering":{id:7,name:"Web Filtering",techniques:[],children:[]},logging:{id:8,name:"Logging",techniques:[],children:[]},sandboxing:{id:9,name:"Sandboxing",techniques:[],children:[]},"threat prevention":{id:10,name:"Threat Prevention",techniques:[],children:[]},"application and identiy-based inspection":{id:11,name:"Application and Identiy-based Inspection",techniques:[],children:[]},scalability:{id:12,name:"Scalability",techniques:[],children:[]},"next-generation firewall":{id:13,name:"Next-Generation Firewall",techniques:[],color:"#ef0b0b",children:["bandwidth control and monitoring","web filtering","logging","sandboxing","threat prevention","application and identiy-based inspection","scalability"]},native:{id:14,name:"Native",checked:!0,techniques:["d3f:HomoglyphDetection","d3f:URLAnalysis","d3f:CertificateAnalysis","d3f:PassiveCertificateAnalysis","d3f:IPCTrafficAnalysis","d3f:AuthenticationEventThresholding","d3f:AuthorizationEventThresholding","d3f:DomainAccountMonitoring","d3f:JobFunctionAccessPatternAnalysis","d3f:LocalAccountMonitoring","d3f:ResourceAccessPatternAnalysis","d3f:SessionDurationAnalysis","d3f:UserDataTransferAnalysis","d3f:UserGeolocationLogonPatternAnalysis","d3f:AdministrativeNetworkActivityAnalysis","d3f:Client-serverPayloadProfiling","d3f:ConnectionAttemptAnalysis","d3f:DNSTrafficAnalysis","d3f:NetworkTrafficCommunityDeviation","d3f:PerHostDownload-UploadRatioAnalysis","d3f:ProtocolMetadataAnomalyDetection","d3f:RelayPatternAnalysis","d3f:RemoteTerminalSessionDetection","d3f:RPCTrafficAnalysis"],color:"#98d0A9"},"patent ref":{id:15,name:"Patent Ref",checked:!0,techniques:["d3f:AdministrativeNetworkActivityAnalysis","d3f:Client-serverPayloadProfiling","d3f:ConnectionAttemptAnalysis","d3f:DNSTrafficAnalysis","d3f:NetworkTrafficCommunityDeviation","d3f:PerHostDownload-UploadRatioAnalysis","d3f:ProtocolMetadataAnomalyDetection","d3f:RelayPatternAnalysis","d3f:RemoteTerminalSessionDetection","d3f:RPCTrafficAnalysis"],color:"#7eec9f"},integration:{id:16,name:"Integration",techniques:["d3f:DNSAllowlisting","d3f:DNSDenylisting","d3f:ForwardResolutionDomainDenylisting","d3f:HierarchicalDomainDenylisting","d3f:HomoglyphDenylisting","d3f:ForwardResolutionIPDenylisting","d3f:ReverseResolutionIPDenylisting","d3f:InboundTrafficFiltering","d3f:OutboundTrafficFiltering","d3f:AccountLocking","d3f:ProcessTermination"],checked:!0,color:"#ffcc80"}}};export{e as f};