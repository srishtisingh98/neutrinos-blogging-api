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
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../../middleware/Middleware'; //_splitter_
import * as settings from '../../../config/config'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import { GenericRDBMSOperations } from '../../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class login {
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
    this.serviceName = 'login';
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
      instance = new login(
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
      //appendnew_flow_login_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: login');

    //appendnew_flow_login_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: login');

    this.app['post'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_CTTz0YA53Te8RSPY(bh, parentSpanInst);
          //appendnew_next_sd_g5pd4g03nn2JTTIm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_g5pd4g03nn2JTTIm');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_login_HttpIn
  }
  //   service flows_login

  async validatelogin(
    parentSpanInst,
    status: any = undefined,
    message: any = undefined,
    body: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'validatelogin',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          status: status,
          message: message,
          body: body,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_80HEVPQ0ol3LMDIH(bh, parentSpanInst);
      //appendnew_next_validatelogin
      return (
        // formatting output variables
        {
          input: {
            status: bh.input.status,
            message: bh.input.message,
            body: bh.input.body,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qGKEW4rcJ1IqkEpz',
        spanInst,
        'validatelogin'
      );
    }
  }

  //appendnew_flow_login_start

  async sd_CTTz0YA53Te8RSPY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CTTz0YA53Te8RSPY',
      parentSpanInst
    );
    try {
      bh.query =
        'SELECT CASE WHEN EXISTS (SELECT 1 FROM "User" WHERE username = $1 OR useremail =$1 AND userpassword = $2) THEN true ELSE false END AS result';
      bh.params = [bh.input.body.username, bh.input.body.user_password];
      console.log(bh.params);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GTozqv4sBOMcJT90(bh, parentSpanInst);
      //appendnew_next_sd_CTTz0YA53Te8RSPY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CTTz0YA53Te8RSPY',
        spanInst,
        'sd_CTTz0YA53Te8RSPY'
      );
    }
  }

  async sd_GTozqv4sBOMcJT90(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GTozqv4sBOMcJT90',
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
      let params = undefined;
      params = params ? params : [];
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_R7UGCUg4fGypa2ru(bh, parentSpanInst);
      //appendnew_next_sd_GTozqv4sBOMcJT90
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GTozqv4sBOMcJT90',
        spanInst,
        'sd_GTozqv4sBOMcJT90'
      );
    }
  }

  async sd_R7UGCUg4fGypa2ru(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R7UGCUg4fGypa2ru',
      parentSpanInst
    );
    try {
      console.log(bh.result[0].result);
      if (bh.result[0].result === false) {
        bh.input.status = false;
        bh.input.message = 'Userdata is already Added';
      } else {
        bh.input.status = true;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pBRK3i6x9crXxPaT(bh, parentSpanInst);
      //appendnew_next_sd_R7UGCUg4fGypa2ru
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R7UGCUg4fGypa2ru',
        spanInst,
        'sd_R7UGCUg4fGypa2ru'
      );
    }
  }

  async sd_pBRK3i6x9crXxPaT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pBRK3i6x9crXxPaT',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.input.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Ez6tKXaJO5ENA73J(bh, parentSpanInst);
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
        bh = await this.sd_5nwZJHtPvN3D9Ict(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pBRK3i6x9crXxPaT',
        spanInst,
        'sd_pBRK3i6x9crXxPaT'
      );
    }
  }

  async sd_Ez6tKXaJO5ENA73J(bh, parentSpanInst) {
    try {
      bh.web.res.set({ 'content-type': 'application/json' });

      bh.web.res.status(200).send(bh.input.status);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ez6tKXaJO5ENA73J');
    }
  }

  async sd_5nwZJHtPvN3D9Ict(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.input.status);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5nwZJHtPvN3D9Ict');
    }
  }

  async sd_80HEVPQ0ol3LMDIH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_80HEVPQ0ol3LMDIH',
      parentSpanInst
    );
    try {
      console.log('body', bh.input.body);
      // if(!bh.input.name){
      //     bh.input.status = false;
      //     bh.input.message = 'Name is required';
      // }else if(!bh.input.password){
      //     bh.input.status = false;
      //     bh.input.message = 'Password is required';
      // }else{
      bh.input.status = true;
      // }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_80HEVPQ0ol3LMDIH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_80HEVPQ0ol3LMDIH',
        spanInst,
        'sd_80HEVPQ0ol3LMDIH'
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
  //appendnew_flow_login_Catch
}
