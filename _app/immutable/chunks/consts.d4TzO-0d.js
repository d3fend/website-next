const e={measures:"measures",templates:"templates"},i={multiColor:"multiColor",heatMap:"heatMap",childrenMultiColor:"childrenMultiColor"},n={isReadonly:!1,isDrawerOpen:!0,showLegend:!0,techniqueMappingMode:i.childrenMultiColor,selectedPortfolio:0,selectedStore:e.measures,containerSize:.8,matrixSize:1,update:!1,localStorageWarning:!1,portfolios:[{id:0,description:"Testing the description",name:"Profile 1",includedMeasures:["claimed-dkjndlkdj","tested-dnkljlkldjs","integration-jksieufnvdkd"]},{id:1,description:"Testing the description",name:"Profile 2",includedMeasures:["zero-trust-kdjj2mvnvjkkd"]},{id:2,description:"Testing the description",name:"Profile 3",includedMeasures:["next-generation-firewall-kjlknlkn","zero-trust-kdjj2mvnvjkkd"]}],measures:{"zero-trust-kdjj2mvnvjkkd":{id:"zero-trust-kdjj2mvnvjkkd",description:"Testing the description",name:"Zero-Trust",techniques:[],color:"#ef0b0b",children:["role-based-access-hdjkfkkbvgn","least-priviledge-27kdjkdfkj","continuous-verification-jkqwwer","geo-location-ie83909"],checked:!0},"role-based-access-hdjkfkkbvgn":{id:"role-based-access-hdjkfkkbvgn",description:"Testing the description",name:"Role-Based Access",techniques:["d3f:DataInventory","d3f:ServiceDependencyMapping","d3f:AccessModeling","d3f:AssetInventory"],children:[],color:"#ef0b0b",checked:!0},"least-priviledge-27kdjkdfkj":{id:"least-priviledge-27kdjkdfkj",description:"Testing the description",name:"Least Priviledge",techniques:[],color:"#ef0b0b",children:[]},"continuous-verification-jkqwwer":{id:"continuous-verification-jkqwwer",description:"Testing the description",name:"Continuous Verification",techniques:[],color:"#ef0b0b",children:[]},"geo-location-ie83909":{id:"geo-location-ie83909",description:"Testing the description",name:"Geo Location",techniques:["d3f:TransferAgentAuthentication","d3f:ServiceDependencyMapping","d3f:AccessModeling"],color:"#ef0b0b",children:[]},"bandwidth-control-and-monitoring-837fdrkdm":{id:"bandwidth-control-and-monitoring-837fdrkdm",description:"Testing the description",name:"Bandwidth Control and Monitoring",techniques:[],children:[],color:"#ef0b0b",checked:!1},"web-filtering-3iejkdfmv":{id:"web-filtering-3iejkdfmv",description:"Testing the description",name:"Web Filtering",techniques:[],color:"#ef0b0b",children:[]},"logging-ckopop":{id:"logging-ckopop",description:"Testing the description",name:"Logging",techniques:[],color:"#ef0b0b",children:[]},"sandboxing-kdnvmvmmv":{id:"sandboxing-kdnvmvmmv",description:"Testing the description",name:"Sandboxing",techniques:[],color:"#ef0b0b",children:[]},"threat-prevention-kdkvsaka":{id:"threat-prevention-kdkvsaka",description:"Testing the description",name:"Threat Prevention",techniques:[],color:"#ef0b0b",children:[]},"application-and-identiy-based-inspection-dkvn":{id:"application-and-identiy-based-inspection-dkvn",description:"Testing the description",name:"Application and Identiy-based Inspection",techniques:[],color:"#ef0b0b",children:[]},"scalability-kdnvmv":{id:"scalability-kdnvmv",description:"Testing the description",name:"Scalability",techniques:[],color:"#ef0b0b",children:[]},"next-generation-firewall-kjlknlkn":{id:"next-generation-firewall-kjlknlkn",description:"Testing the description",name:"Next-Generation Firewall",techniques:[],color:"#ef0b0b",children:["web-filtering-3iejkdfmv","logging-ckopop","sandboxing-kdnvmvmmv","threat-prevention-kdkvsaka","application-and-identiy-based-inspection-dkvn","scalability-kdnvmv"]},"claimed-dkjndlkdj":{id:"claimed-dkjndlkdj",description:"Testing the description",name:"Claimed",checked:!0,techniques:["d3f:HomoglyphDetection","d3f:URLAnalysis","d3f:CertificateAnalysis","d3f:PassiveCertificateAnalysis","d3f:IPCTrafficAnalysis","d3f:AuthenticationEventThresholding","d3f:AuthorizationEventThresholding","d3f:DomainAccountMonitoring","d3f:JobFunctionAccessPatternAnalysis","d3f:LocalAccountMonitoring","d3f:ResourceAccessPatternAnalysis","d3f:SessionDurationAnalysis","d3f:UserDataTransferAnalysis","d3f:UserGeolocationLogonPatternAnalysis","d3f:AdministrativeNetworkActivityAnalysis","d3f:Client-serverPayloadProfiling","d3f:ConnectionAttemptAnalysis","d3f:DNSTrafficAnalysis","d3f:NetworkTrafficCommunityDeviation","d3f:PerHostDownload-UploadRatioAnalysis","d3f:ProtocolMetadataAnomalyDetection","d3f:RelayPatternAnalysis","d3f:RemoteTerminalSessionDetection","d3f:RPCTrafficAnalysis"],color:"#98d0A9",children:[]},"tested-dnkljlkldjs":{id:"tested-dnkljlkldjs",description:"Testing the description",name:"Tested",checked:!0,techniques:["d3f:AdministrativeNetworkActivityAnalysis","d3f:Client-serverPayloadProfiling","d3f:ConnectionAttemptAnalysis","d3f:DNSTrafficAnalysis","d3f:NetworkTrafficCommunityDeviation","d3f:PerHostDownload-UploadRatioAnalysis","d3f:ProtocolMetadataAnomalyDetection","d3f:RelayPatternAnalysis","d3f:RemoteTerminalSessionDetection","d3f:RPCTrafficAnalysis"],children:[],color:"#7eec9f"},"integration-jksieufnvdkd":{id:"integration-jksieufnvdkd",description:"Testing the description",name:"Integration",techniques:["d3f:DNSAllowlisting","d3f:DNSDenylisting","d3f:ForwardResolutionDomainDenylisting","d3f:HierarchicalDomainDenylisting","d3f:HomoglyphDenylisting","d3f:ForwardResolutionIPDenylisting","d3f:ReverseResolutionIPDenylisting","d3f:InboundTrafficFiltering","d3f:OutboundTrafficFiltering","d3f:AccountLocking","d3f:ProcessTermination"],children:[],checked:!0,color:"#ffcc80"}},rootTemplates:["firewall-kdjenyeurhg","threat-prevention-kdkvsaka"],templates:{"firewall-kdjenyeurhg":{id:"firewall-kdjenyeurhg",description:"Testing the description",name:"Firewall",techniques:[],scores:[0,3,4],risk:10,weight:100,checked:!0,color:"#7078A4",children:["bandwidth-control-and-monitoring-837fdrkdm"]},"bandwidth-control-and-monitoring-837fdrkdm":{id:"bandwidth-control-and-monitoring-837fdrkdm",description:"Testing the description",name:"Bandwidth Control and Monitoring",techniques:["d3f:SoftwareUpdate","d3f:ByteSequenceEmulation","d3f:JobFunctionAccessPatternAnalysis","d3f:NetworkTrafficFiltering"],children:["logging-ckopop"],color:"#7078A4",checked:!0},"web-filtering-3iejkdfmv":{id:"web-filtering-3iejkdfmv",name:"Web Filtering",description:"Testing the description",techniques:[],children:[],color:"#7078A4",checked:!0},"logging-ckopop":{id:"logging-ckopop",name:"Logging",description:"Testing the description",techniques:["d3f:DataInventory","d3f:NetworkNodeInventory","d3f:PointerAuthentication","d3f:SoftwareUpdate","d3f:ByteSequenceEmulation","d3f:JobFunctionAccessPatternAnalysis","d3f:NetworkTrafficFiltering"],children:["sandboxing-kdnvmvmmv"],color:"#7078A4",checked:!0},"sandboxing-kdnvmvmmv":{id:"sandboxing-kdnvmvmmv",description:"Testing the description",name:"Sandboxing",techniques:[],children:[],checked:!0,color:"#BB5883"},"threat-prevention-kdkvsaka":{id:"threat-prevention-kdkvsaka",name:"Threat Prevention",description:"Testing the description",techniques:[],children:[],color:"#BB5883",checked:!0}},shownTactics:{"d3f:Model":!1,"d3f:Harden":!1,"d3f:Detect":!1,"d3f:Isolate":!1,"d3f:Deceive":!1,"d3f:Evict":!1}},t={selected:"selected",editing:"editing",parent:"parent",noop:"noop",void:null};export{i as M,e as P,t as S,n as f};