let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class post_api {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'post_api';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new post_api(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_post_api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: post_api');

    //appendnew_flow_post_api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: post_api');

    this.app['get'](
      `${this.serviceBasePath}/get-post`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_PBHvaQe1SlGmOMEy(bh, parentSpanInst);
          //appendnew_next_sd_pToMTL1oGadXOwe1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pToMTL1oGadXOwe1');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/add-post`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_cwVBQXOyZd35vgOx(bh, parentSpanInst);
          //appendnew_next_sd_a2c4XaMiKYgzYYqi
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_a2c4XaMiKYgzYYqi');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/update-post`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_xrIPGBpXdQKFKAHG(bh, parentSpanInst);
          //appendnew_next_sd_hT7HPaMyOFSTevHn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hT7HPaMyOFSTevHn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['delete'](
      `${this.serviceBasePath}/delete-post`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_suayZFmt3dfUxnOW(bh, parentSpanInst);
          //appendnew_next_sd_ymdR5y74wJ0oRdB3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ymdR5y74wJ0oRdB3');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_post_api_HttpIn
  }
  //   service flows_post_api

  async add_body(
    parentSpanInst,
    post_title: any = undefined,
    post_content: any = undefined,
    post_category_id: any = undefined,
    result: any = undefined,
    status = true,
    user_id: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('add_body', parentSpanInst);
    try {
      var bh: any = {
        input: {
          post_title: post_title,
          post_content: post_content,
          post_category_id: post_category_id,
          result: result,
          status: status,
          user_id: user_id,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wJFgdyoqRHeb9aSX(bh, parentSpanInst);
      //appendnew_next_add_body
      return (
        // formatting output variables
        {
          input: {
            result: bh.input.result,
            status: bh.input.status,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NDjCfGcunho9ur6U',
        spanInst,
        'add_body'
      );
    }
  }

  async update_body(
    parentSpanInst,
    post_id: any = undefined,
    post_tittle: any = undefined,
    post_content: any = undefined,
    result: any = undefined,
    status = true,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'update_body',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          post_id: post_id,
          post_tittle: post_tittle,
          post_content: post_content,
          result: result,
          status: status,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1yaaInAc7RM8osXq(bh, parentSpanInst);
      //appendnew_next_update_body
      return (
        // formatting output variables
        {
          input: {
            result: bh.input.result,
            status: bh.input.status,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TAJZyoQ9ni0EM4pT',
        spanInst,
        'update_body'
      );
    }
  }

  async delete_body(
    parentSpanInst,
    post_id: any = undefined,
    result: any = undefined,
    status = true,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'delete_body',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          post_id: post_id,
          result: result,
          status: status,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aRZ5YB3sQqKVzWRZ(bh, parentSpanInst);
      //appendnew_next_delete_body
      return (
        // formatting output variables
        {
          input: {
            result: bh.input.result,
            status: bh.input.status,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bzxOMmIHDrQ2Anvl',
        spanInst,
        'delete_body'
      );
    }
  }

  //appendnew_flow_post_api_start

  async sd_PBHvaQe1SlGmOMEy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PBHvaQe1SlGmOMEy',
      parentSpanInst
    );
    try {
      bh.query = 'SELECT * FROM "Post"';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JMiUAfDL43uOiNz0(bh, parentSpanInst);
      //appendnew_next_sd_PBHvaQe1SlGmOMEy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PBHvaQe1SlGmOMEy',
        spanInst,
        'sd_PBHvaQe1SlGmOMEy'
      );
    }
  }

  async sd_JMiUAfDL43uOiNz0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JMiUAfDL43uOiNz0',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_C9OeZH1l3ceoDI6p'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.params;
      params = params ? params : [];
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_yna2ZilCZeqidZC4(bh, parentSpanInst);
      //appendnew_next_sd_JMiUAfDL43uOiNz0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JMiUAfDL43uOiNz0',
        spanInst,
        'sd_JMiUAfDL43uOiNz0'
      );
    }
  }

  async sd_yna2ZilCZeqidZC4(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yna2ZilCZeqidZC4');
    }
  }

  async sd_cwVBQXOyZd35vgOx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cwVBQXOyZd35vgOx',
      parentSpanInst
    );
    try {
      let outputVariables = await this.add_body(
        spanInst,
        bh.input.body.post_tittle,
        bh.input.body.post_content,
        bh.input.body.post_category_id,
        undefined,
        undefined,
        bh.input.body.user_id
      );
      bh.result = outputVariables.input.result;
      bh.status = outputVariables.input.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UohsgEd53p4HbApj(bh, parentSpanInst);
      //appendnew_next_sd_cwVBQXOyZd35vgOx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cwVBQXOyZd35vgOx',
        spanInst,
        'sd_cwVBQXOyZd35vgOx'
      );
    }
  }

  async sd_UohsgEd53p4HbApj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UohsgEd53p4HbApj',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_oLbUCtei1TU1dspl(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_4NBfmdhMefn0ytp4(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UohsgEd53p4HbApj',
        spanInst,
        'sd_UohsgEd53p4HbApj'
      );
    }
  }

  async sd_oLbUCtei1TU1dspl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oLbUCtei1TU1dspl',
      parentSpanInst
    );
    try {
      bh.query =
        'INSERT INTO "Post" (user_id, post_title, post_content, post_date, post_category_id) VALUES($1, $2, $3, current_timestamp, (SELECT category_id FROM "Categories" WHERE category_name = $4))';
      bh.params = [
        bh.input.body.user_id,
        bh.input.body.post_title,
        bh.input.body.post_content,
        bh.input.body.post_category_id,
      ];

      console.log(bh.params);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Fei1XhBVKz4voTWe(bh, parentSpanInst);
      //appendnew_next_sd_oLbUCtei1TU1dspl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oLbUCtei1TU1dspl',
        spanInst,
        'sd_oLbUCtei1TU1dspl'
      );
    }
  }

  async sd_Fei1XhBVKz4voTWe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Fei1XhBVKz4voTWe',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_C9OeZH1l3ceoDI6p'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.params;
      params = params ? params : [];
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_liHWIGPUuJMgk6QI(bh, parentSpanInst);
      //appendnew_next_sd_Fei1XhBVKz4voTWe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Fei1XhBVKz4voTWe',
        spanInst,
        'sd_Fei1XhBVKz4voTWe'
      );
    }
  }

  async sd_liHWIGPUuJMgk6QI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_liHWIGPUuJMgk6QI',
      parentSpanInst
    );
    try {
      bh.result = { message: 'Blog added successfuly' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_W12yjFe1PmOXdGuO(bh, parentSpanInst);
      //appendnew_next_sd_liHWIGPUuJMgk6QI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_liHWIGPUuJMgk6QI',
        spanInst,
        'sd_liHWIGPUuJMgk6QI'
      );
    }
  }

  async sd_W12yjFe1PmOXdGuO(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_W12yjFe1PmOXdGuO');
    }
  }

  async sd_4NBfmdhMefn0ytp4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4NBfmdhMefn0ytp4',
      parentSpanInst
    );
    try {
      bh.result = { message: 'error occured while adding Blog' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HG3RtthjsBxXDGRu(bh, parentSpanInst);
      //appendnew_next_sd_4NBfmdhMefn0ytp4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4NBfmdhMefn0ytp4',
        spanInst,
        'sd_4NBfmdhMefn0ytp4'
      );
    }
  }

  async sd_HG3RtthjsBxXDGRu(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HG3RtthjsBxXDGRu');
    }
  }

  async sd_wJFgdyoqRHeb9aSX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wJFgdyoqRHeb9aSX',
      parentSpanInst
    );
    try {
      if (!bh.input.post_content || bh.input.post_content == '') {
        bh.status = 'false';
        bh.result = { message: 'Please provide content for the blog' };
      } else if (!bh.input.post_title || bh.input.post_title) {
        bh.status = 'false';
        bh.result = { message: 'Please provide title for blog' };
      }

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_wJFgdyoqRHeb9aSX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wJFgdyoqRHeb9aSX',
        spanInst,
        'sd_wJFgdyoqRHeb9aSX'
      );
    }
  }

  async sd_xrIPGBpXdQKFKAHG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xrIPGBpXdQKFKAHG',
      parentSpanInst
    );
    try {
      let outputVariables = await this.update_body(
        spanInst,
        bh.input.body.post_id,
        bh.input.body.post_tittle,
        bh.input.body.post_content,
        undefined,
        undefined
      );
      bh.result = outputVariables.input.result;
      bh.status = outputVariables.input.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_l7mlBMuBimJ0bBNx(bh, parentSpanInst);
      //appendnew_next_sd_xrIPGBpXdQKFKAHG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xrIPGBpXdQKFKAHG',
        spanInst,
        'sd_xrIPGBpXdQKFKAHG'
      );
    }
  }

  async sd_l7mlBMuBimJ0bBNx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l7mlBMuBimJ0bBNx',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_2pemBV0W0NOzM9oC(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Dl9NZSwMJFsrzPNl(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l7mlBMuBimJ0bBNx',
        spanInst,
        'sd_l7mlBMuBimJ0bBNx'
      );
    }
  }

  async sd_2pemBV0W0NOzM9oC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2pemBV0W0NOzM9oC',
      parentSpanInst
    );
    try {
      bh.query =
        'UPDATE "Post" SET post_title=$1, post_content=$2 WHERE post_id=$3;';
      bh.params = [
        bh.input.body.post_title,
        bh.input.body.post_content,
        bh.input.body.post_id,
      ];
      console.log(bh.params);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QS5YOum07wElLYeb(bh, parentSpanInst);
      //appendnew_next_sd_2pemBV0W0NOzM9oC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2pemBV0W0NOzM9oC',
        spanInst,
        'sd_2pemBV0W0NOzM9oC'
      );
    }
  }

  async sd_QS5YOum07wElLYeb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QS5YOum07wElLYeb',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_C9OeZH1l3ceoDI6p'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.params;
      params = params ? params : [];
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5TTFyKXjWNbR10aw(bh, parentSpanInst);
      //appendnew_next_sd_QS5YOum07wElLYeb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QS5YOum07wElLYeb',
        spanInst,
        'sd_QS5YOum07wElLYeb'
      );
    }
  }

  async sd_5TTFyKXjWNbR10aw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5TTFyKXjWNbR10aw',
      parentSpanInst
    );
    try {
      console.log(bh.result);
      bh.result = { message: 'Blog updated successfuly' };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_hnFMdAxBj7QA7kX0(bh, parentSpanInst);
      //appendnew_next_sd_5TTFyKXjWNbR10aw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5TTFyKXjWNbR10aw',
        spanInst,
        'sd_5TTFyKXjWNbR10aw'
      );
    }
  }

  async sd_hnFMdAxBj7QA7kX0(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hnFMdAxBj7QA7kX0');
    }
  }

  async sd_Dl9NZSwMJFsrzPNl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Dl9NZSwMJFsrzPNl',
      parentSpanInst
    );
    try {
      bh.result = { message: 'Error occured while updating Blog' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_qelppZiVz4u02oHZ(bh, parentSpanInst);
      //appendnew_next_sd_Dl9NZSwMJFsrzPNl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Dl9NZSwMJFsrzPNl',
        spanInst,
        'sd_Dl9NZSwMJFsrzPNl'
      );
    }
  }

  async sd_qelppZiVz4u02oHZ(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qelppZiVz4u02oHZ');
    }
  }

  async sd_1yaaInAc7RM8osXq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1yaaInAc7RM8osXq',
      parentSpanInst
    );
    try {
      if (!bh.input.post_id || bh.input.post_id == '') {
        bh.input.status = 'false';
        bh.input.result = { message: 'Please provide an ID for the blog' };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_1yaaInAc7RM8osXq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1yaaInAc7RM8osXq',
        spanInst,
        'sd_1yaaInAc7RM8osXq'
      );
    }
  }

  async sd_suayZFmt3dfUxnOW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_suayZFmt3dfUxnOW',
      parentSpanInst
    );
    try {
      let outputVariables = await this.delete_body(
        spanInst,
        bh.input.body.post_id,
        undefined,
        undefined
      );
      bh.result = outputVariables.input.result;
      bh.status = outputVariables.input.status;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_t0P0KuGgPcaM4WZ2(bh, parentSpanInst);
      //appendnew_next_sd_suayZFmt3dfUxnOW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_suayZFmt3dfUxnOW',
        spanInst,
        'sd_suayZFmt3dfUxnOW'
      );
    }
  }

  async sd_t0P0KuGgPcaM4WZ2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t0P0KuGgPcaM4WZ2',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ExdcnxupW4Au8oDG(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_5MkSI4Kp0gh4KPwB(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t0P0KuGgPcaM4WZ2',
        spanInst,
        'sd_t0P0KuGgPcaM4WZ2'
      );
    }
  }

  async sd_ExdcnxupW4Au8oDG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ExdcnxupW4Au8oDG',
      parentSpanInst
    );
    try {
      bh.query = 'DELETE FROM "Post" WHERE post_id=$1';
      bh.params = [bh.input.body.post_id];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nR4NwvqHTsY2aUgR(bh, parentSpanInst);
      //appendnew_next_sd_ExdcnxupW4Au8oDG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ExdcnxupW4Au8oDG',
        spanInst,
        'sd_ExdcnxupW4Au8oDG'
      );
    }
  }

  async sd_nR4NwvqHTsY2aUgR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nR4NwvqHTsY2aUgR',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_C9OeZH1l3ceoDI6p'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.params;
      params = params ? params : [];
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QE4zefRb8rachTpI(bh, parentSpanInst);
      //appendnew_next_sd_nR4NwvqHTsY2aUgR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nR4NwvqHTsY2aUgR',
        spanInst,
        'sd_nR4NwvqHTsY2aUgR'
      );
    }
  }

  async sd_QE4zefRb8rachTpI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QE4zefRb8rachTpI',
      parentSpanInst
    );
    try {
      bh.result = { message: 'Blog deleted successfuly' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_MlPeN85gmrTdQPDn(bh, parentSpanInst);
      //appendnew_next_sd_QE4zefRb8rachTpI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QE4zefRb8rachTpI',
        spanInst,
        'sd_QE4zefRb8rachTpI'
      );
    }
  }

  async sd_MlPeN85gmrTdQPDn(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MlPeN85gmrTdQPDn');
    }
  }

  async sd_5MkSI4Kp0gh4KPwB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5MkSI4Kp0gh4KPwB',
      parentSpanInst
    );
    try {
      bh.result = { message: 'error occured while deleting Blog' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TczxwisCQL8GCJe2(bh, parentSpanInst);
      //appendnew_next_sd_5MkSI4Kp0gh4KPwB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5MkSI4Kp0gh4KPwB',
        spanInst,
        'sd_5MkSI4Kp0gh4KPwB'
      );
    }
  }

  async sd_TczxwisCQL8GCJe2(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TczxwisCQL8GCJe2');
    }
  }

  async sd_aRZ5YB3sQqKVzWRZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aRZ5YB3sQqKVzWRZ',
      parentSpanInst
    );
    try {
      if (!bh.input.post_id || bh.input.post_id == '') {
        bh.input.status = 'false';
        bh.input.result = { message: 'Please provide an ID for the blog' };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_aRZ5YB3sQqKVzWRZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aRZ5YB3sQqKVzWRZ',
        spanInst,
        'sd_aRZ5YB3sQqKVzWRZ'
      );
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_post_api_Catch
}
