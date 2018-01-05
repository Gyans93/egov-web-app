var dat = {
    'swm.search': {
      numCols: 3,
      useTimestamp: true,
      objectName: 'WasteSubType',
      url: '/egov-mdms-service/v1/_search',
      groups: [
        {
          name:'wastesubTypeDetails',
          label: 'lcms.create.group.title.courtDetails',
          fields: [
            {
              name: 'wastesubTypeName',
              jsonPath: 'name',
              label: 'MdmsMetadata.masterData.swm.WasteSubType.name',
              pattern: '',
              type: 'text',
              isRequired: false,
              isDisabled: false,
              defaultValue: '',
              maxLength: 100,
              minLength: 1,
            },
            {
              name: 'wastesubTypeCode',
              jsonPath: 'code',
              label: 'MdmsMetadata.masterData.swm.WasteSubType.code',
              pattern: '',
              type: 'text',
              isRequired: false,
              isDisabled: false,
              defaultValue: '',
              maxLength: 128,
              minLength: 1,
              patternErrorMsg: '',
            },
          ]
        },
      ],
      result: {
        header: [
          {
            label: 'MdmsMetadata.masterData.swm.WasteSubType.name',
          },
          {
            label: 'MdmsMetadata.masterData.swm.WasteSubType.code',
          },
          {
              label: 'MdmsMetadata.masterData.swm.WasteSubType.wasteType',
          },
          {
            label: 'MdmsMetadata.masterData.swm.WasteSubType.wasteCode',
          },
        ],
        values: [
          'name',
          'code',
          'wasteType.name',
          'wasteType.code'
        ],
        resultPath: 'MdmsRes.swm.WasteSubType',
        rowClickUrlUpdate: '/update/swm/wastesubtype/{code}',
        rowClickUrlView: '/view/swm/wastesubtype/{code}',
        isMasterScreen: true
      },
    },
    'swm.create': {
      numCols: 3,
      useTimestamp: true,
      objectName: 'MasterMetaData',
      //idJsonPath : 'MasterMetaData.masterData[0].code',
      idJsonPath: 'MdmsRes.swm.WasteSubType[0].code',
      groups: [
        {
          name:'wastesubTypeDetails',
          label: 'lcms.create.group.title.courtDetails',
          fields: [
            {
              name: 'wastesubTypeName',
              jsonPath: 'MasterMetaData.masterData[0].name',
              label: 'MdmsMetadata.masterData.swm.WasteSubType.name',
              pattern: '',
              type: 'text',
              isRequired: true,
              isDisabled: false,
              defaultValue: '',
              maxLength: 100,
              minLength: 1,
            },
            {
              name: 'wastesubTypeCode',
              jsonPath: 'MasterMetaData.masterData[0].code',
              label: 'MdmsMetadata.masterData.swm.WasteSubType.code',
              pattern: '',
              type: 'text',
              isRequired: true,
              isDisabled: false,
              defaultValue: '',
              maxLength: 128,
              minLength: 1,
              patternErrorMsg: '',
            },
            {
              name: 'wasteType',
              label: 'MdmsMetadata.masterData.swm.WasteSubType.wasteType',
              jsonPath: 'MasterMetaData.masterData[0].wasteType.code',
              type: 'singleValueList',
              pattern: '^null|$',
              isRequired: false,
              isDisabled: false,
              maxLength: 128,
              url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=WasteType|$..code|$..name',
              minLength: 1,
              patternErrMsg: 'may not be null',
            },
            {
              name: 'tenantId',
              jsonPath: 'MasterMetaData.masterData[0].tenantId',
              type: 'text',             
              defaultValue: localStorage.getItem("tenantId"),
              hide: true
            },
            {
              name: 'moduleName',
              jsonPath: 'MasterMetaData.moduleName',
              type: 'text',             
              defaultValue: 'swm',
              hide: true
            },
            {
              name: 'masterName',
              jsonPath: 'MasterMetaData.masterName',              
              type: 'text',
              defaultValue: 'WasteSubType',
              hide: true
            },
          ]
        },       
      ],
      url: '/egov-mdms-create/v1/_create',
      tenantIdRequired: true
    },
    'swm.view': {
      numCols: 4,
      useTimestamp: true,
      objectName: 'WasteSubType',
      groups: [
        {
          name:'wastesubTypeDetails',
          label: 'lcms.create.group.title.courtDetails',
          fields: [
            {
              name: 'wastesubTypeName',
              jsonPath: 'MdmsRes.swm.WasteSubType[0].name',
              label: 'MdmsMetadata.masterData.swm.WasteSubType.name',
              pattern: '',
              type: 'text',
              isRequired: true,
              isDisabled: false,
              defaultValue: '',
              maxLength: 100,
              minLength: 1,
            },
            {
              name: 'wastesubTypeCode',
              jsonPath: 'MdmsRes.swm.WasteSubType[0].code',
              label: 'MdmsMetadata.masterData.swm.WasteSubType.code',
              pattern: '',
              type: 'text',
              isRequired: true,
              isDisabled: false,
              defaultValue: '',
              maxLength: 128,
              minLength: 1,
              patternErrorMsg: '',
            },
            {
              name: 'wasteType',
              label: 'MdmsMetadata.masterData.swm.WasteSubType.wasteType',
              jsonPath: 'MdmsRes.swm.WasteSubType[0].wasteType.name',
              type: 'text',
              pattern: '^null|$',
              isRequired: true,
              isDisabled: false,
              maxLength: 128,
              url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=WasteType|$..code|$..name',
              minLength: 1,
              patternErrMsg: 'may not be null',
            },  
            {
              name: 'wasteTypeCode',
              label: 'MdmsMetadata.masterData.swm.WasteSubType.wasteCode',
              jsonPath: 'MdmsRes.swm.WasteSubType[0].wasteType.code',
              type: 'text',
              pattern: '^null|$',
              isRequired: true,
              isDisabled: false,
              maxLength: 128,
              url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=WasteType|$..name|$..code',
              minLength: 1,
              patternErrMsg: 'may not be null',
            },  
          ]
        }, 
      ],
      tenantIdRequired: true,
      url: '/egov-mdms-service/v1/_search?code={code}',
    },
    'swm.update': {
      numCols: 3,
      useTimestamp: true,
      objectName: 'WasteSubType',
      idJsonPath : 'MasterMetaData.masterData[0].code',
      groups: [
        {
          name:'wastesubTypeDetails',
          label: 'lcms.create.group.title.courtDetails',
          fields: [
            {
              name: 'wastesubTypeName',
              jsonPath: 'MasterMetaData.masterData[0].name',
              label: 'MdmsMetadata.masterData.swm.WasteSubType.name',
              pattern: '',
              type: 'text',
              isRequired: true,
              isDisabled: false,
              defaultValue: '',
              maxLength: 100,
              minLength: 1,
            },
            {
              name: 'wastesubTypeCode',
              jsonPath: 'MasterMetaData.masterData[0].code',
              label: 'MdmsMetadata.masterData.swm.WasteSubType.code',
              pattern: '',
              type: 'text',
              isRequired: true,
              isDisabled: true,
              defaultValue: '',
              maxLength: 128,
              minLength: 1,
              patternErrorMsg: '',
            },
            {
              name: 'wasteType',
              label: 'MdmsMetadata.masterData.swm.WasteSubType.wasteType',
              jsonPath: 'MasterMetaData.masterData[0].wasteType.code',
              type: 'singleValueList',
              pattern: '^null|$',
              isRequired: true,
              isDisabled: false,
              maxLength: 128,
              url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=WasteType|$..WasteType.*.code|$..WasteType.*.name',
              minLength: 1,
              patternErrMsg: 'may not be null',
            },
            {
              name: 'tenantId',
              jsonPath: 'MasterMetaData.masterData[0].wasteType.tenantId',
              type: 'text',             
              defaultValue: localStorage.getItem("tenantId"),
              hide: true
            },
            {
              name: 'moduleName',
              jsonPath: 'MasterMetaData.moduleName',
              type: 'text',             
              defaultValue: 'swm',
              hide: true
            },
            {
              name: 'masterName',
              jsonPath: 'MasterMetaData.masterName',              
              type: 'text',
              defaultValue: 'WasteSubType',
              hide: true
            },
          ]
        },
        
      ],
      url: '/egov-mdms-create/v1/_update',
      tenantIdRequired: true,
      isMDMSScreen: true,
      searchUrl: '/egov-mdms-service/v1/_search?code={code}',
    },
  };
  export default dat;