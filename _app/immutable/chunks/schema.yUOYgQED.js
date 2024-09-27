const e={$schema:"http://json-schema.org/draft-07/schema#",title:"D3FEND CAD Graph Schema",type:"object",properties:{meta:{type:"object",properties:{title:{type:"string"},authors:{type:"array",items:{type:"string"}},orgs:{type:"array",items:{type:"string"}},description:{type:"string"},article:{type:"string"},d3fend_version:{type:"string"},cad_data_version:{type:"number"},published_date:{type:"string",format:"date-time"},references:{type:"array",items:{type:"string"}},settings:{type:"object",properties:{},required:[]}},required:["title","authors","description","article","d3fend_version","cad_data_version","published_date","settings"]},nodes:{type:"array",items:{type:"object",properties:{id:{type:"string"},type:{type:"string"},position:{type:"object",properties:{x:{type:"number"},y:{type:"number"}},required:["x","y"]},data:{type:"object",properties:{label:{type:"string"},sequence:{type:"string"},d3f_class:{type:"string"},user_properties:{type:"array",items:{type:"array",items:{type:"string",default:""}}}},required:["label","sequence","user_properties"]},origin:{type:"array",items:{type:"number"}},measured:{type:"object",properties:{width:{type:"number"},height:{type:"number"}},required:["width","height"]},selected:{type:"boolean"},dragging:{type:"boolean"},width:{type:"number"},height:{type:"number"}},required:["id","type","position","data","origin","measured","selected","dragging"]}},edges:{type:"array",items:{type:"object",properties:{type:{type:"string"},data:{type:"object",properties:{label:{type:"string"},d3f_property:{type:"string"}},required:["label"]},markerEnd:{type:"object",properties:{type:{type:"string"}},required:["type"]},source:{type:"string"},sourceHandle:{type:"string"},target:{type:"string"},targetHandle:{type:"string"},id:{type:"string"},selected:{type:"boolean"}},required:["source","sourceHandle","target","targetHandle","id","selected"]}}},required:["meta","nodes","edges"]};export{e as s};
