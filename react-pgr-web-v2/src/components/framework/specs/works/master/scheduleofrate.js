var dat ={
   "works.search":{
      "numCols":4,
      "useTimestamp":true,
      "objectName":"",
      "url":"/works-masters/v1/scheduleofrates/_search",
      "groups":[
         {
            "name":"search",
            "label":"works.search.title",
            "fields":[
               {
                  "name":"sortBy",
                  "jsonPath":"sortBy",
                  "label":"works.create.sortBy",
                  "type":"text",
                  "isDisabled":false,
                  "defaultValue":"id",
                  "patternErrorMsg":"works.create.field.message.sortBy"
               },
               {
                  "name":"sorCodes",
                  "jsonPath":"sorCodes",
                  "label":"works.create.sorCodes",
                  "type":"autoCompelete",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":"works.create.field.message.sorCodes"
               },
               {
                  "name":"ids",
                  "jsonPath":"ids",
                  "label":"works.create.ids",
                  "type":"",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":"works.create.field.message.ids"
               },
               {
                  "name":"scheduleCategoryCodes",
                  "jsonPath":"scheduleCategoryCodes",
                  "label":"works.create.scheduleCategoryCodes",
                  "type":"autoCompelete",
                  "isRequired":false,
                  "isDisabled":false,
                  "patternErrorMsg":"works.create.field.message.scheduleCategoryCodes"
               },
               {
                  "name":"validSORRateDate",
                  "jsonPath":"validSORRateDate",
                  "label":"works.create.validSORRateDate",
                  "type":"number",
                  "isDisabled":false,
                  "patternErrorMsg":"works.create.field.message.validSORRateDate"
               },
               {
                  "name":"validMarketRateDate",
                  "jsonPath":"validMarketRateDate",
                  "label":"works.create.validMarketRateDate",
                  "type":"number",
                  "isDisabled":false,
                  "patternErrorMsg":"works.create.field.message.validMarketRateDate"
               }
            ]
         }
      ],
      "result":{
         "header":[
            {
               "label":"works.search.result.code"
            },
            {
               "label":"works.search.result.description"
            },
            {
               "label":"works.search.result.scheduleCategory"
            },
            {
               "label":"works.search.result.uom"
            }
         ],
         "values":[
            "code",
            "description",
            "scheduleCategory.name",
            "uom.description"
         ],
         "resultPath":"scheduleOfRates",
         "rowClickUrlUpdate":"/update/scheduleOfRates/{ids}",
         "rowClickUrlView":"/view/scheduleOfRates/{ids}"
      }
   },
   "works.create":{
      "numCols":4,
      "useTimestamp":true,
      "objectName":"scheduleOfRates",
      "injectData": [{
        "jsonPath": "scheduleOfRates[0].sorRates[0].tenantId",
        "value": localStorage.getItem("tenantId")
      }],
      "groups":[
         {
            "name":"createRateMaster",
            "label":"works.create.group.title.createRateMaster",
            "fields":[
               {
                  "name":"scheduleCategory",
                  "jsonPath":"scheduleOfRates[0].scheduleCategory.code",
                  "label":"works.create.scheduleCategory",
                  "pattern":"[a-zA-Z0-9-\\\\]+",
                  "type":"singleValueList",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":100,
                  "minLength":1,
                  "patternErrorMsg":"works.create.field.message.scheduleCategory",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=Works&masterName=ScheduleCategory|$..code|$..code"
               },
               {
                  "name":"code",
                  "jsonPath":"scheduleOfRates[0].code",
                  "label":"works.create.code",
                  "pattern":"[a-zA-Z0-9-\\\\]+",
                  "type":"text",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":100,
                  "minLength":1,
                  "patternErrorMsg":"works.create.field.message.code"
               },
               {
                  "name":"description",
                  "jsonPath":"scheduleOfRates[0].description",
                  "label":"works.create.description",
                  "pattern":"[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+",
                  "type":"textarea",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":4000,
                  "minLength":1,
                  "patternErrorMsg":"works.create.field.message.description"
               },
               {
                  "name":"uom",
                  "jsonPath":"scheduleOfRates[0].uom.code",
                  "label":"works.create.uom",
                  "pattern":"",
                  "type":"singleValueList",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":30,
                  "minLength":1,
                  "patternErrorMsg":"works.create.field.message.uom",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Uom|$..code|$..code"
               }
            ]
         },
         {
           "name":"rateDetails",
           "label":"works.create.group.title.rateDetails",
           "fields": [
             {
               "name": "",
               "label": "",
               "type": "multiFieldAddToTable",
               "jsonPath": "scheduleOfRates[0].sorRates",
               "header": [
                 {
                   "label": "Rate"
                 },
                 {
                   "label": "FromDate"
                 },
                 {
                   "label": "ToDate"
                 }
               ],
               "values": [
                 {
                   "name":"rate",
                   "jsonPath":"scheduleOfRates[0].sorRates[0].rate",
                   "label":"Rate",
                   "type":"text",
                   "isRequired":true,
                   "isDisabled":false,
                   "maxLength":128,
                   "minLength":1,
                   "patternErrorMsg":""
                 },
                 {
                   "name":"FromDate",
                   "jsonPath":"scheduleOfRates[0].sorRates[0].fromDate",
                   "label":"FromDate",
                   "type":"datePicker",
                   "isRequired":true,
                   "isDisabled":false,
                   "maxLength":128,
                   "minLength":1,
                   "patternErrorMsg":""
                 },
                 {
                   "name":"ToDate",
                   "jsonPath":"scheduleOfRates[0].sorRates[0].toDate",
                   "label":"ToDate",
                   "type":"datePicker",
                   "isRequired":false,
                   "isDisabled":false,
                   "maxLength":128,
                   "minLength":1,
                   "patternErrorMsg":""
                 }
               ]
             }
           ]
         },
         {
           "name":"marketRateDetails",
           "label":"works.create.group.title.marketRateDetails",
           "fields": [
             {
               "name": "",
               "label": "",
               "type": "multiFieldAddToTable",
               "jsonPath": "scheduleOfRates[0].sorRates",
               "header": [{
                   "label": "Rate"
                 }, {
                   "label": "FromDate"
                 },
                 {
                   "label": "ToDate"
                 }],
               "values": [
                 {
                   "name":"rate",
                   "jsonPath":"scheduleOfRates[0].marketRates[0].rate",
                   "label":"Rate",
                   "type":"text",
                   "isRequired":true,
                   "isDisabled":false,
                   "maxLength":128,
                   "minLength":1,
                   "patternErrorMsg":""
                 },
                 {
                   "name":"FromDate",
                   "jsonPath":"scheduleOfRates[0].marketRates[0].fromDate",
                   "label":"FromDate",
                   "type":"datePicker",
                   "isRequired":true,
                   "isDisabled":false,
                   "maxLength":128,
                   "minLength":1,
                   "patternErrorMsg":""
                 },
                 {
                   "name":"ToDate",
                   "jsonPath":"scheduleOfRates[0].marketRates[0].toDate",
                   "label":"ToDate",
                   "type":"datePicker",
                   "isRequired":false,
                   "isDisabled":false,
                   "maxLength":128,
                   "minLength":1,
                   "patternErrorMsg":""
                 }
               ]
             }
           ]
         }
      ],
      "url":"/works-masters/v1/scheduleofrates/_create",
      "tenantIdRequired":true
   },
   "works.view":{
      "numCols":4,
      "useTimestamp":true,
      "objectName":"scheduleOfRates",
      "groups":[
         {
            "name":"createRateMaster",
            "label":"works.create.group.title.createRateMaster",
            "fields":[
               {
                  "name":"code",
                  "jsonPath":"scheduleCategory.code",
                  "label":"works.create.code",
                  "pattern":"[a-zA-Z0-9-\\\\]+",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":100,
                  "minLength":1,
                  "patternErrorMsg":"works.create.field.message.code",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=Works&masterName=ScheduleCategory|$..code|$..code"
               },
               {
                  "name":"code",
                  "jsonPath":"code",
                  "label":"works.create.code",
                  "pattern":"[a-zA-Z0-9-\\\\]+",
                  "type":"text",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":100,
                  "minLength":1,
                  "patternErrorMsg":"works.create.field.message.code"
               },
               {
                  "name":"description",
                  "jsonPath":"description",
                  "label":"works.create.description",
                  "pattern":"[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+",
                  "type":"textarea",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":4000,
                  "minLength":1,
                  "patternErrorMsg":"works.create.field.message.description"
               },
               {
                  "name":"code",
                  "jsonPath":"uom.code",
                  "label":"works.create.code",
                  "pattern":"",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":30,
                  "minLength":1,
                  "patternErrorMsg":"",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Uom|$..code|$..code"
               }
            ]
         }
      ],
      "tenantIdRequired":true,
      "url":"/works-masters/v1/scheduleofrates/_search?ids={ids}"
   },
   "works.update":{
      "numCols":4,
      "useTimestamp":true,
      "objectName":"scheduleOfRates",
      "groups":[
         {
            "name":"createRateMaster",
            "label":"works.create.group.title.createRateMaster",
            "fields":[
               {
                  "name":"code",
                  "jsonPath":"scheduleCategory.code",
                  "label":"works.create.code",
                  "pattern":"[a-zA-Z0-9-\\\\]+",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":100,
                  "minLength":1,
                  "patternErrorMsg":"works.create.field.message.code",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=Works&masterName=ScheduleCategory|$..code|$..code"
               },
               {
                  "name":"code",
                  "jsonPath":"code",
                  "label":"works.create.code",
                  "pattern":"[a-zA-Z0-9-\\\\]+",
                  "type":"text",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":100,
                  "minLength":1,
                  "patternErrorMsg":"works.create.field.message.code"
               },
               {
                  "name":"description",
                  "jsonPath":"description",
                  "label":"works.create.description",
                  "pattern":"[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+",
                  "type":"textarea",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":4000,
                  "minLength":1,
                  "patternErrorMsg":"works.create.field.message.description"
               },
               {
                  "name":"code",
                  "jsonPath":"uom.code",
                  "label":"works.create.code",
                  "pattern":"",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":30,
                  "minLength":1,
                  "patternErrorMsg":"",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Uom|$..code|$..code"
               }
            ]
         }
      ],
      "url":"/works-masters/v1/scheduleofrates/_update",
      "tenantIdRequired":true,
      "searchUrl":"/works-masters/v1/scheduleofrates/_search?ids={ids}"
   }
}

export default dat;
